"use client";

import { HeaderPhoto } from "@/assets/icons/photos";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FC } from "react";

export const HomeHeader: FC = () => {
  return (
    <div
      className="container h-[85dvh] flex items-end justify-end relative"
      id="home"
    >
      <h1 className="z-10 text-6xl md:text-6xl xl:text-9xl text-center font-semibold lowercase text-[#FAFAFA] dark:text-[#202020] absolute top-1/2 left-1/2 -translate-y-2/4	-translate-x-2/4 w-full max-w-7xl">
        creative front-end developer
      </h1>

      <div className="card bg-[#F8F9FA] dark:bg-[#1d1d1d] p-9 gap-x-5 z-10 flex items-center justify-between rounded-[60px] w-full md:w-3/5 xl:w-2/4 xl:max-w-3xl">
        <h2 className="leading-relaxed lg:leading-relaxed max-w-sm lg:max-w-none text-5xl md:text-5xl xl:text-5xl 2xl:text-7xl font-semibold inline text-[#141414] dark:text-[#eee]">
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
          className="aspect-square object-contain w-32 lg:w-32 xl:w-36 2xl:w-44"
        />
      </div>
    </div>
  );
};
