"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { prefersReducedMotion } from "@/lib/animations";

function Rig() {
  const a = useRef();
  const b = useRef();
  useFrame((state, delta) => {
    if (prefersReducedMotion()) return;
    const t = state.clock.elapsedTime;
    if (a.current) {
      a.current.rotation.x = t * 0.25;
      a.current.rotation.y = t * 0.35;
    }
    if (b.current) {
      b.current.rotation.z = t * 0.2;
      b.current.position.y = Math.sin(t * 0.8) * 0.15;
    }
  });
  return (
    <group>
      <mesh ref={a}>
        <icosahedronGeometry args={[1.15, 1]} />
        <meshStandardMaterial color="#155eef" wireframe transparent opacity={0.55} />
      </mesh>
      <mesh ref={b} scale={0.55}>
        <octahedronGeometry args={[1.1, 0]} />
        <meshStandardMaterial color="#38bdf8" emissive="#155eef" emissiveIntensity={0.7} wireframe transparent opacity={0.8} />
      </mesh>
    </group>
  );
}

export default function TechOrbit() {
  if (typeof window !== "undefined" && prefersReducedMotion()) {
    return <div className="flex h-[320px] items-center justify-center text-sm text-[var(--ink-soft)]">MAXL technology core</div>;
  }
  return (
    <div className="h-[320px] w-full">
      <Canvas camera={{ position: [0, 0, 4.2], fov: 50 }} dpr={[1, 1.75]} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[4, 4, 4]} intensity={1.4} color="#60a5fa" />
        <pointLight position={[-4, -2, 2]} intensity={8} color="#38bdf8" />
        <Rig />
      </Canvas>
    </div>
  );
}
