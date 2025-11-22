"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function SimpleShape() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * 0.2;
    ref.current.rotation.y += delta * 0.25;
  });
  return (
    <mesh ref={ref} castShadow receiveShadow>
      <icosahedronGeometry args={[1.3, 0]} />
      <meshStandardMaterial color="#9aa5ff" roughness={0.25} metalness={0.15} />
    </mesh>
  );
}

function SimpleWireframe() {
  return (
    <lineSegments>
      <icosahedronGeometry args={[1.31, 0]} />
      <lineBasicMaterial color="#f59e0b" linewidth={1} />
    </lineSegments>
  );
}

export default function Hero3D() {
  return (
    <div className="relative mx-auto w-full max-w-[560px] overflow-hidden rounded-3xl border border-[var(--border-soft)] bg-[var(--surface-1)] p-3 shadow-[0_10px_40px_-16px_rgba(2,6,23,0.25)]">
      <div className="absolute -left-32 -top-24 h-72 w-72 rounded-full bg-brand-200 blur-[80px]" />
      <div className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-amber-200 blur-[90px]" />
      <div className="relative aspect-square w-full rounded-2xl bg-gradient-to-b from-[var(--surface-1)] to-transparent">
        <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 4.2], fov: 45 }}>
          <color attach="background" args={["#0b1220"]} />
          <fog attach="fog" args={["#0b1220", 6, 14]} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[2.5, 3.5, 4]} intensity={0.8} />
          <directionalLight position={[-3, -2, -1]} intensity={0.25} />
          <SimpleShape />
          <SimpleWireframe />
          <Environment preset="city" />
          <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>
    </div>
  );
}

