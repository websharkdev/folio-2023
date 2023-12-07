"use client";

import { QRCodeImage } from "@/assets/icons/photos";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FC } from "react";
import Contacts from "../contacts";

type Props = {};

export const Footer: FC<Props> = () => {
  return (
    <div
      className={`container w-full flex justify-between items-start xl:items-end gap-5 flex-col xl:flex-row`}
    >
      <div className="flex flex-col order-10 lg:-order-5 justify-between flex-1 bg-primary dark:bg-primary p-8 rounded-[60px] gap-y-7 h-full w-full">
        <div className="flex bg-white p-8 rounded-3xl">
          <div className="w-full lg:max-w-xl xl:max-w-xl">
            <h1 className="leading-slug md:leading-relaxed xl:leading-normal 2xl:leading-relaxed lg:text-7xl  xl:text-6xl 2xl:text-7xl font-semibold inline-block text-[#141414] dark:text-[#141414] relative">
              Bortnytskyi Oleksii
              <span className="inline-block text-sm lg:w-1/3 w-1/2 xl:w-1/3 ml-6">
                designer, developer, creator and just a cool pepper.
              </span>
            </h1>
          </div>
        </div>
        <div className="flex gap-x-6 items-end">
          <div className="flex justify-center items-center p-4 h-max bg-white rounded-3xl w-max">
            <Image
              src={QRCodeImage}
              alt="CV-Notion / QRCode - medium"
              className="w-[120px] aspect-square"
            />
          </div>
          <div className="w-full lg:max-w-2xl xl:max-w-2xl">
            <h1 className="leading-normal md:leading-slug xl:leading-slug 2xl:leading-relaxed lg:text-7xl  xl:text-6xl 2xl:text-7xl  font-semibold inline-block text-white relative">
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
      </div>
      <Contacts title="Contacts" />
    </div>
  );
};
