"use client";

import { QRCodeImage } from "@/assets/icons/photos";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FC } from "react";
import Contacts from "../contacts";
import { useMediaQuery } from "usehooks-ts";
import { Canvas, useThree } from "@react-three/fiber";
import { Center, Float, PresentationControls, Text3D } from "@react-three/drei";
import { useTheme } from "next-themes";
import { Vector3 } from "three";

type Props = {};

const Model = () => {
  const { theme } = useTheme();
  const TextMaterial = () => (
    <meshBasicMaterial color={theme === "light" ? "#fafafa" : "#141414"} />
  );
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

  const textSize = w > 400 ? 20 : 15;

  return (
    <>
      {texts.map((item, id: number) => (
        <Text3D
          font="/Montserrat_Bold.json"
          size={w / textSize}
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
export const Footer: FC<Props> = () => {
  const isMobile = useMediaQuery("(max-width: 612px)");
  return (
    <div
      className={`container w-full flex justify-between items-start xl:items-end gap-5 flex-col xl:flex-row relative`}
    >
      <div className="flex flex-col order-10 lg:-order-5 justify-between flex-1 bg-primary dark:bg-primary p-5 md:p-9 rounded-3xl md:rounded-[60px] gap-y-7 h-full w-full">
        <>
          <div className="flex bg-white p-5 md:p-9 rounded-3xl">
            <div className="w-full lg:max-w-xl xl:max-w-xl">
              <h1 className="leading-slug md:leading-relaxed xl:leading-snug 2xl:leading-snug  text-3xl lg:text-7xl  xl:text-6xl 2xl:text-7xl font-semibold inline-block text-[#141414] dark:text-[#141414] relative">
                Bortnytskyi Oleksii
                <span className="hidden sm:inline-block text-sm  lg:w-1/3 w-1/2 xl:w-1/3 ml-6">
                  designer, developer, creator and just a cool pepper.
                </span>
              </h1>
            </div>
          </div>
          <div className="flex gap-x-6 items-center">
            {isMobile ? null : (
              <div className="flex justify-center items-start p-4 h-max bg-white rounded-3xl w-max">
                <Image
                  src={QRCodeImage}
                  alt="CV-Notion / QRCode - medium"
                  className="w-[120px] aspect-square"
                />
              </div>
            )}
            <div className="w-full lg:max-w-2xl xl:max-w-2xl">
              <h1 className="leading-normal md:leading-slug text-3xl lg:text-7xl xl:text-6xl 2xl:text-7xl font-semibold inline-block text-white relative max-w-[300px] md:max-w-none">
                Have a Cool Project?
                <Button
                  size="default"
                  variant="outline"
                  href="mailto:alexey.bortnytskyi@gmail.com"
                  className="inline-block ml-5 font-semibold text-black hover:text-primary dark:text-white"
                >
                  contact me.
                </Button>
              </h1>
            </div>
          </div>
        </>
        {/* Canvas */}

        {/* <div className="h-full w-full absolute top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4">
          <Canvas
            flat
            camera={{
              fov: 45,
              near: 0.1,
              far: 200,
            }}
          >
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
                <Model />
              </Center>
            </PresentationControls>
          </Canvas>
        </div> */}
      </div>
      <Contacts title="Contacts" />
    </div>
  );
};
