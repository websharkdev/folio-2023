"use client";

import { Button } from "@/components/ui/button";
import { ArrowDownRight } from "lucide-react";
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
      link: "https://crocus-novel-a29.notion.site/Frontend-Engineer-ff1dea63e5144c568d11b94a7e497c75?pvs=74",
      title: "CV",
    },
  ];
  return (
    <div className="flex bg-primary h-full p-5 md:p-9 rounded-3xl md:rounded-[60px] flex-col flex-nowrap gap-6">
      {title ? (
        <h4 className="text-2xl md:text-3xl font-semibold text-white">
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
              className="text-xs sm:text-sm lg:text-md font-semibold text-primary py-2 px-5 bg-[#EDEDFC] hover:text-white hover:bg-[#5B5BFF] transition rounded-md lowercase"
            >
              {item.title}
            </Link>
          ))}
        </div>

        <Button
          size="icon"
          variant="secondary"
          href="https://webshark.design/"
          className="hidden sm:flex bg-white w-full h-full lg:min-w-[80px] aspect-square rounded-3xl flex-1"
        >
          <ArrowDownRight className="aspect-square object-contain text-3xl text-primary w-14 h-14 stroke-1" />
        </Button>
      </div>
    </div>
  );
};

export default Contacts;
