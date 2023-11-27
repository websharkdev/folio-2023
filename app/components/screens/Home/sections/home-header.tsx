"use client";

import { HeaderPhoto } from "@/assets/icons/photos";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FC } from "react";

export const HomeHeader: FC = () => {
  return (
    <div
      className="container h-[85dvh] flex items-end justify-end  relative"
      id="home"
    >
      <h1 className="z-10 md:text-7xl xl:text-9xl text-center font-semibold lowercase text-[#FAFAFA] dark:text-[#202020] absolute top-1/2 left-1/2 -translate-y-2/4	-translate-x-2/4 max-w-2xl lg:max-w-none	w-full">
        creative front-end developer
      </h1>

      <div className="card bg-[#F8F9FA] dark:bg-[#1d1d1d] p-9 gap-x-5 z-10 flex items-center justify-between rounded-[60px] md:w-3/5 xl:w-2/4">
        <h2 className="max-w-sm lg:max-w-none md:text-2xl lg:text-6xl 2xl:text-7xl font-semibold leading-[5.4rem] inline text-[#141414] dark:text-[#eee]">
          Bortnytskyi Oleksii
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
          className="aspect-square object-contain"
        />
      </div>
    </div>
  );
};
