"use client";

import { QRCodeImage } from "@/assets/icons/photos";
import { ArrowNEXTIcon } from "@/assets/icons/ui";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

type Props = {};

const data = [
  {
    link: "mainto:alexey.bortnytskyi@gmail.com",
    title: "alexey.bortnytskyi@gmail.com",
  },
  {
    link: "tel:34680522262",
    title: "34 680 522 262",
  },
  {
    link: "https://github.com/websharkdev",
    title: "github",
  },
  {
    link: "https://webshark.notion.site/CV-bc75484ca7b1458eb7f0cab21e7e74ef?pvs=4",
    title: "CV",
  },
];

export const Footer: FC<Props> = () => {
  return (
    <div className={`container flex justify-between items-center gap-x-5`}>
      <div className="flex flex-col justify-between w-2/3 bg-primary dark:bg-primary p-8 rounded-[60px] gap-y-7 h-full">
        <div className="flex bg-white p-8 rounded-3xl">
          <div className="w-full xl:max-w-[600px]">
            <h1 className="text-7xl font-semibold leading-[5.4rem] inline-block text-[#141414] dark:text-[#141414] relative">
              Bortnytskyi Oleksii
              <span className="inline-block text-sm w-1/3 ml-6">
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
          <div className="w-full xl:max-w-[600px]">
            <h1 className="text-7xl font-semibold leading-[5.4rem] inline-block text-white relative">
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
      <div className="flex w-1/3 items-end min-h-[470px]">
        <div className="flex flex-col flex-nowrap gap-7 mt-5 bg-primary rounded-[3.75rem] p-8 h-max">
          <h3 className="text-3xl font-semibold text-white">Contacts</h3>
          <div className="flex flex-nowrap items-center">
            <div className="flex flex-wrap w-4/5 gap-2">
              {data.map((item: any, index: number) => (
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                  className="text-lg font-semibold text-primary py-2 px-5 bg-[#EDEDFC] hover:text-white hover:bg-[#5B5BFF] transition rounded-md lowercase"
                >
                  {item.title}
                </Link>
              ))}
            </div>
            <div className="flex w-1/5 aspect-square">
              <Button
                size="icon"
                variant="ghost"
                href="https://webshark.design/"
                className="bg-white p-7 w-full h-full rounded-[2rem]"
              >
                <Image
                  src={ArrowNEXTIcon}
                  alt={"arrow-next-icon"}
                  className="w-full aspect-square object-contain"
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
