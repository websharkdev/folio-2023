"use client";
import { ArrowNEXTIcon } from "@/assets/icons/ui";
import Contacts from "@/components/layout/contacts";
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
        <div className="row flex flex-nowrap flex-col xl:flex-row items-start justify-between gap-5">
          <Contacts title="Social Media" />
          <div className="flex flex-1 flex-col gap-5  h-full">
            <div className="flex gap-x-5">
              <div className="w-full rounded-[60px] leading-[160%] text-gray-500	 text-lg font-semibold tracking-tight p-8 bg-[#F8F9FA] flex flex-col gap-y-5">
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
                <h5 className="text-2xl font-semibold">Based</h5>
                {/* <p className="text-white">
                  Based in Pamplona, Spain. Employment options: Remote. Origin:
                  Ukraine
                </p> */}
              </div>
            </div>
            {/* <div className="flex w-full flex-nowrap flex-col rounded-[60px] p-8 bg-[#F8F9FA] gap-y-5">
              <h5 className="text-2xl font-semibold text-black">
                GitHub Stats
              </h5>
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
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
