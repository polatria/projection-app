'use client'

import { Canvas } from "@react-three/fiber";

export default function Page() {
  return (
    <div className="w-full h-full m-0">
      <Canvas>
        <ambientLight intensity={0.001} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <mesh>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial />
        </mesh>
      </Canvas>
    </div>
  );
}
