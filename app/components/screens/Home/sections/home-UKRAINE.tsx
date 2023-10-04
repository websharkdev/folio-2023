"use client";

import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

const Model = () => {
  const fbx = useGLTF("/hamburger.glb");
  return <primitive object={fbx.scene} scale={0.5} />;
};
useGLTF.preload("/hamburger.glb");

export const HomeUkraine = () => {
  return (
    <div className="h-screen w-1/2">
      <Suspense fallback={<div>loading</div>}>
        <Canvas
          camera={{
            fov: 45,
            near: 0.1,
            far: 200,
            position: [-4, 3, 6],
          }}
        >
          <OrbitControls />

          <directionalLight position={[1, 2, 3]} intensity={1.5} />
          <ambientLight intensity={0.5} />

          <Model />
        </Canvas>
      </Suspense>
    </div>
  );
};
