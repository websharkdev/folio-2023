"use client";

import { ArrowNEXTIcon } from "@/assets/icons/ui";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

type Props = {
  title?: string;
};

const Contacts = ({ title }: Props) => {
  const social = [
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
  return (
    <div className="flex bg-primary h-full p-8 rounded-[60px] flex-col flex-nowrap gap-6">
      {title ? (
        <h4 className="text-md xl:text-3xl font-semibold text-white">
          {title}
        </h4>
      ) : null}
      <div className="flex flex-nowrap items-center gap-x-4 justify-between">
        <div className="flex flex-wrap gap-2 w-full max-w-sm">
          {social.map((item, index) => (
            <Link
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="text-sm lg:text-md font-semibold text-primary py-2 px-5 bg-[#EDEDFC] hover:text-white hover:bg-[#5B5BFF] transition rounded-md lowercase"
            >
              {item.title}
            </Link>
          ))}
        </div>
        <Button
          size="icon"
          variant="secondary"
          href="https://webshark.design/"
          className="flex bg-white p-7 w-full h-full lg:min-w-[90px] aspect-square rounded-[2rem] flex-1"
        >
          <Image
            src={ArrowNEXTIcon}
            alt={"arrow-next-icon"}
            className="w-full aspect-square object-contain"
          />
        </Button>
      </div>
    </div>
  );
};

export default Contacts;
