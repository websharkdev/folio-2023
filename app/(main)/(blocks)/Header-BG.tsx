import { Center, Float, PresentationControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { lazy } from "react";

const TextBlock = lazy(() => import("@/app/(main)/(blocks)/Text"));

const HeaderBG = () => (
  <Canvas flat shadows dpr={[1, 2]} camera={{ position: [0, 0, 10], fov: 20 }}>
    <directionalLight position={[1, 2, 3]} intensity={1.5} />
    <ambientLight intensity={0.5} />

    <PresentationControls
      global
      rotation={[0, 0, 0]}
      polar={[-0.4, 0.2]}
      azimuth={[-1, 0.75]}
      config={{
        mass: 2,
        tension: 400,
      }}
      snap={{
        mass: 4,
        tension: 400,
      }}
    >
      <Center>
        <Float rotationIntensity={0.4} speed={0.8}>
          <TextBlock />
        </Float>
      </Center>
    </PresentationControls>
  </Canvas>
);

export default HeaderBG;
