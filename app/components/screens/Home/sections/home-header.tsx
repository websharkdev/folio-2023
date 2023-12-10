"use client";

import { HeaderPhoto } from "@/assets/icons/photos";
import { Button } from "@/components/ui/button";
import { Center, Float, PresentationControls, Text3D } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import Image from "next/image";
import { FC } from "react";
import { Vector3 } from "three";

const Text = () => {
  const TextMaterial = () => <meshBasicMaterial color="#fafafa" />;
  const { width: w, height: h } = useThree((state) => state.viewport);
  const texts = [
    {
      text: "creative front-end",
      position: new Vector3(0, 0, 0),
    },
    {
      text: "developer",
      position: new Vector3(w > 1440 ? 1 : w / 5, w > 1024 ? -0.6 : -w / 12, 0),
    },
  ];

  return (
    <>
      {texts.map((item, id: number) => (
        <Text3D
          font="/Montserrat_Bold.json"
          size={w / 20}
          height={0.05}
          key={id}
          position={item.position}
        >
          {item.text}
          <TextMaterial />
        </Text3D>
      ))}
    </>
  );
};

export const HomeHeader: FC = () => {
  return (
    <>
      <div
        className="container h-[85dvh] flex items-end justify-end relative"
        id="home"
      >
        {/* <h1 className="z-10 text-4xl md:text-6xl xl:text-9xl text-center font-semibold lowercase text-[#FAFAFA] dark:text-[#202020] absolute top-1/2 left-1/2 -translate-y-2/4	-translate-x-2/4 w-full max-w-2xl xl:max-w-7xl">
          creative front-end developer
        </h1> */}

        <div className="card bg-[#F8F9FA] dark:bg-[#1d1d1d] p-5 md:p-9 rounded-3xl md:rounded-[60px] gap-10 z-10 flex items-center justify-between w-full md:w-max xl:max-w-3xl">
          <h2 className="leading-relaxed text-2xl sm:text-4xl md:text-5xl 2xl:text-7xl font-semibold inline text-[#141414] dark:text-[#eee]">
            Bortnytskyi <br />
            Oleksii
            <Button
              size="sm"
              className="inline ml-5 font-semibold dark:text-white md:px-5"
            >
              contact me.
            </Button>
          </h2>
          <Image
            src={HeaderPhoto}
            alt="Oleksii Bortnytksyi photo / medium"
            className={`aspect-square object-contain hidden xs:flex sm:flex w-24 md:w-32 xl:w-36 2xl:w-44`}
          />
        </div>

        {/* Canvas */}

        <div className="h-full w-full absolute top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4">
          <Canvas
            linear
            flat
            camera={{
              fov: 45,
              near: 0.1,
              far: 200,
            }}
          >
            <directionalLight position={[1, 2, 3]} intensity={1.5} />
            <ambientLight intensity={0.5} />
            <PresentationControls
              global
              rotation={[0.13, 0.1, 0]}
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
                <Float rotationIntensity={0.4} speed={0.5}>
                  <Text />
                </Float>
              </Center>
            </PresentationControls>
          </Canvas>
        </div>
      </div>
    </>
  );
};
