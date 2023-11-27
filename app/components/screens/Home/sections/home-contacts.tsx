"use client";
import { ArrowNEXTIcon } from "@/assets/icons/ui";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

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

export const HomeContacts: FC = () => {
  return (
    <div
      className="container h-max max-h-max overflow-hidden flex flex-col relative pt-16 gap-y-9"
      id="contacts"
    >
      <h5 className="section-title text-3xl	font-semibold lowercase">
        contacts.
      </h5>
      <div className="container flex gap-5 flex-col">
        <div className="row w-1/5">
          <h2 className="text-6xl font-semibold leading-[120%]">
            Bortnytskyi Oleksii
          </h2>
        </div>
        <div className="row flex flex-nowrap items-start gap-5">
          <div className="flex w-2/5 bg-primary h-full p-8 rounded-[60px] flex-col flex-nowrap gap-8">
            <h4 className="text-2xl font-semibold text-white">Social media</h4>
            <div className="flex flex-nowrap items-center">
              <div className="flex flex-wrap w-full xl:w-4/5 gap-2">
                {social.map((item: any, index: number) => (
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={index}
                    className="text-sm md:text-md lg:text-lg font-semibold text-primary py-2 px-5 bg-[#EDEDFC] hover:text-white hover:bg-[#5B5BFF] transition rounded-md lowercase"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
              <Button
                size="icon"
                variant="ghost"
                href="https://webshark.design/"
                className="hidden xl:flex bg-white p-7 w-full h-full aspect-square rounded-[2rem]"
              >
                <Image
                  src={ArrowNEXTIcon}
                  alt={"arrow-next-icon"}
                  className="w-full aspect-square object-contain"
                />
              </Button>
            </div>
          </div>
          <div className="flex w-3/5 flex-col gap-5  h-full">
            <div className="flex gap-x-5">
              <div className="w-full xl:w-1/2 rounded-[60px] leading-[160%] text-gray-500	 text-lg font-semibold tracking-tight p-8 bg-[#F8F9FA] flex flex-col gap-y-5">
                <h5 className="text-2xl font-semibold text-black">
                  Personal info
                </h5>
                <p>
                  I was born in Irpin,{" "}
                  <span className="text-black">Ukraine</span>, and started
                  learning front-end development at the{" "}
                  <span className="text-black">age of 14</span>. Over the years,
                  I have successfully completed multiple projects, which you can
                  explore below.{" "}
                  <span className="text-black">
                    Currently based in Pamplona, Spain
                  </span>
                  , I am focused on
                  <span className="text-black">remote</span> work opportunities.
                </p>
              </div>
              <div className="hidden xl:w-1/2 rounded-[60px] leading-[160%] text-gray-100	 text-lg font-semibold tracking-tight p-8 bg-primary xl:flex flex-col gap-y-5">
                <h5 className="text-2xl font-semibold">Volunteer</h5>
                <p className="text-white">
                  I&apos;d like to emphasize that I am a volunteer. While I may
                  lack official documentation, I&apos;m transparent and candid.
                  I regularly share facets of my life on social media,
                  encompassing my work routines and volunteer activities. I
                  recognize that this may not fully instill trust in me, which
                  is why I&apos;ve provided links to other established and
                  reputable foundations.
                </p>
              </div>
            </div>
            <div className="flex w-full flex-nowrap flex-col rounded-[60px] p-8 bg-[#F8F9FA] gap-y-5">
              <h5 className="text-2xl font-semibold">GitHub Stats</h5>
              <div className="flex w-full flex-nowrap gap-y-5">
                <img
                  alt=""
                  className="w-full xl:w-1/2 h-44 aspect-video"
                  src="https://github-readme-stats.vercel.app/api?username=websharkdev&show_icons=true&theme=blood&include_all_commits=true&count_private=true&line_height=21"
                />
                <img
                  alt=""
                  className="w-1/2 h-44 aspect-video hidden xl:flex"
                  src="https://github-readme-stats.vercel.app/api/top-langs/?username=websharkdev&theme=blood&layout=compact&langs_count=4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
