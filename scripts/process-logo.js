const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

async function processLogo() {
  const input = path.join(__dirname, "..", "Maxl logo.png");
  const outDir = path.join(__dirname, "..", "public", "logo");
  fs.mkdirSync(outDir, { recursive: true });

  const img = sharp(input);
  const { data, info } = await img.ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  const out = Buffer.from(data);

  for (let i = 0; i < width * height; i++) {
    const o = i * channels;
    const r = data[o], g = data[o + 1], b = data[o + 2];
    const mn = Math.min(r, g, b);
    const mx = Math.max(r, g, b);
    const range = mx - mn;
    // background: near-white / light checker gray, low saturation
    if (mn > 170 && range < 38) {
      out[o + 3] = 0;
    } else if (mn > 200 && range < 60) {
      // soft edge halo -> fade
      out[o + 3] = 0;
    }
  }

  const transparent = sharp(out, { raw: { width, height, channels } }).png();

  // Main logo: trim transparent surroundings, keep padding
  const trimmed = await transparent.trim({ threshold: 10 }).toBuffer();
  const mainPath = path.join(outDir, "maxl-logo.png");
  await sharp(trimmed).extend({ top: 40, bottom: 40, left: 60, right: 60, background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toFile(mainPath);
  console.log("wrote", mainPath);

  // Square icon base for favicons: trim then extend to square
  const sq = await sharp(trimmed).trim({ threshold: 10 }).toBuffer();
  const meta = await sharp(sq).metadata();
  const side = Math.max(meta.width, meta.height);
  const pad = Math.round(side * 0.12);
  const square = await sharp(sq)
    .extend({ top: pad, bottom: pad, left: pad, right: pad, background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();
  const sqMeta = await sharp(square).metadata();
  const s = Math.max(sqMeta.width, sqMeta.height);
  const squared = await sharp(square)
    .resize(s, s, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  const sizes = [
    ["icon-16.png", 16],
    ["icon-32.png", 32],
    ["icon-48.png", 48],
    ["apple-icon.png", 180],
    ["icon-192.png", 192],
    ["icon-512.png", 512],
    ["icon.png", 512],
  ];
  for (const [name, size] of sizes) {
    const p = size === 512 && name === "icon.png"
      ? path.join(__dirname, "..", "public", "icon.png")
      : name === "apple-icon.png"
        ? path.join(__dirname, "..", "public", "apple-icon.png")
        : path.join(__dirname, "..", "public", "logo", name);
    await sharp(squared).resize(size, size).png().toFile(p);
    console.log("wrote", p);
  }

  // og image: dark navy bg with centered logo
  const ogBg = await sharp({ create: { width: 1200, height: 630, channels: 4, background: { r: 5, g: 8, b: 22, alpha: 1 } } }).png().toBuffer();
  const logoSmall = await sharp(trimmed).resize({ width: 700 }).png().toBuffer();
  await sharp(ogBg).composite([{ input: logoSmall, gravity: "centre" }]).png().toFile(path.join(__dirname, "..", "public", "og-image.png"));
  console.log("wrote og-image");

  // favicon.ico via sharp? write 48 png as ico fallback (copy)
  const favSrc = path.join(outDir, "icon-48.png");
  const favDest = path.join(__dirname, "..", "public", "favicon.ico");
  fs.copyFileSync(favSrc, favDest);
  // also root icon.png already written
  const rootIcon32 = path.join(__dirname, "..", "public", "logo", "icon-32.png");
  fs.copyFileSync(rootIcon32, path.join(__dirname, "..", "public", "favicon-32.png"));
  console.log("done");
}

processLogo().catch((e) => { console.error(e); process.exit(1); });
