"use client";

import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Model = () => {
  const fbx = useGLTF("/hamburger.glb");
  return <primitive object={fbx.scene} scale={0.3} />;
};

export const HomeUkraine = () => {
  return (
    <div className="h-screen w-1/2">
      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-4, 3, 6],
        }}
      >
        <OrbitControls enableZoom={false} />

        <directionalLight position={[1, 2, 3]} intensity={1.5} />
        <ambientLight intensity={0.5} />

        <Model />
      </Canvas>
    </div>
  );
};

useGLTF.preload("/hamburger.glb");
