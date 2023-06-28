"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Mesh } from "three";

interface BoxProps {
  position: [x: number, y: number, z: number];
}

function Box({ position }: BoxProps) {
  const mesh = useRef<Mesh>(null!);
  const [isHovered, setHover] = useState(false);
  const [isActive, setActive] = useState(false);
  useFrame(() => setRotation());

  function setRotation() {
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
    mesh.current.rotation.z += 0;
  }

  return (
    <mesh
      position={position}
      ref={mesh}
      scale={isActive ? 1.5 : 1}
      onClick={() => setActive(!isActive)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <octahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color={isHovered ? "hotpink" : "orange"} />
    </mesh>
  );
}

export default function Scene() {
  return (
    <Canvas>
      <ambientLight color="white" />
      <directionalLight color="white" position={[0, 0, 15]} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[+1.2, 0, 0]} />
    </Canvas>
  );
}
