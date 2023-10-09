"use client";
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
    link: "CV",
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
          <div className="flex w-2/5 bg-primary h-full p-8 rounded-xl flex-col flex-nowrap gap-8">
            <h4 className="text-2xl font-semibold text-white">Social media</h4>
            <div className="flex flex-wrap w-full gap-2">
              {social.map((item: any, index: number) => (
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
            <div className="w-full flex flex-nowrap text-[0px] bg-white h-full rounded-xl">
              Oppps! U should not to see it!
            </div>
          </div>
          <div className="flex w-3/5 flex-col gap-5  h-full">
            <div className="flex gap-x-5">
              <div className="w-1/2 rounded-xl leading-[160%] text-gray-500	 text-lg font-semibold tracking-tight p-8 bg-[#F8F9FA] flex flex-col gap-y-5">
                <h5 className="text-2xl font-semibold text-black">
                  Personal info
                </h5>
                <p>
                  I was born in Irpin,{" "}
                  <span className="text-black">Ukraine</span>, and started
                  learning front-end development at the{" "}
                  <span className="text-black">age of 14</span>. Over the years,
                  I have successfully completed multiple projects, which you can
                  explore below.
                  <span className="text-black">
                    Currently based in Pamplona, Spain
                  </span>
                  , I am focused on
                  <span className="text-black">remote</span> work opportunities.
                </p>
              </div>
              <div className="w-1/2 rounded-xl leading-[160%] text-gray-100	 text-lg font-semibold tracking-tight p-8 bg-primary flex flex-col gap-y-5">
                <h5 className="text-2xl font-semibold">Personal info</h5>
                <p>
                  I was born in Irpin,{" "}
                  <span className="text-white">Ukraine</span>, and started
                  learning front-end development at the{" "}
                  <span className="text-white">age of 14</span>. Over the years,
                  I have successfully completed multiple projects, which you can
                  explore below.
                  <span className="text-white">
                    Currently based in Pamplona, Spain
                  </span>
                  , I am focused on
                  <span className="text-white">remote</span> work opportunities.
                </p>
              </div>
            </div>
            <div className="flex w-full flex-nowrap flex-col rounded-xl p-8 bg-[#F8F9FA] gap-y-5">
              <h5 className="text-2xl font-semibold">GitHub Stats</h5>
              <div className="flex w-full flex-nowrap gap-y-5">
                <img
                  alt=""
                  className="w-1/2 h-44 aspect-video"
                  src="https://github-readme-stats.vercel.app/api?username=websharkdev&show_icons=true&theme=blood&include_all_commits=true&count_private=true&line_height=21"
                />
                <img
                  alt=""
                  className="w-1/2 h-44 aspect-video"
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
