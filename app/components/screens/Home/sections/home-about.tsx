"use client";
import Contacts from "@/components/layout/contacts";
import Slider from "@/components/ui/slider";
import TextSlider from "@/components/ui/textSlider";
import { FC } from "react";

const stack = [
  "framer",
  "react",
  "react-native",
  "nextjs",
  "typescript",
  "solidity",
  "threejs",
  "zustand",
  "shadcn-ui",
];

export const HomeAbout: FC = () => {
  return (
    <div
      className="container h-max md:h-screen xl:h-[100vmin] max-h-none md:max-h-screen flex flex-col justify-between lg:justify-start gap-5 relative pt-16"
      id="about"
    >
      <h5 className="text-2xl md:text-3xl	font-semibold lowercase">about.</h5>
      <div className="container flex gap-5 justify-between">
        <div className="w-1/3 xl:max-w-xl hidden xl:flex items-end h-[80vmin]">
          <div className="w-full max-h-80 rounded-[3.75rem] leading-[120%] text-6xl font-semibold tracking-tight px-9 pb-9 pt-32 bg-[#F8F9FA] dark:bg-[#191919]">
            <h2>Bortnytskyi Oleksii</h2>
          </div>
        </div>
        <div className="w-full xl:w-2/3 xl:max-w-7xl rounded-3xl md:rounded-[60px] flex items-start gap-5 flex-col md:flex-row">
          <div className="flex flex-col gap-y-5 w-full md:w-1/2">
            <div className="hidden md:flex">
              <Slider
                slides={[
                  {
                    title: "5+",
                    text: "years of experience",
                  },
                  {
                    title: "5+",
                    text: "years of experience",
                  },
                  {
                    title: "5+",
                    text: "years of experience",
                  },
                ]}
              />
            </div>
            <div className="stack rounded-3xl md:rounded-[60px] bg-[#F8F9FA] dark:bg-[#191919] flex flex-col gap-6">
              <h3 className="text-2xl md:text-3xl font-semibold p-5 md:p-9">
                Stack
              </h3>
              <TextSlider baseVelocity={5}>
                {stack.map((item: string, index: number) => (
                  <div
                    key={index}
                    className={`bg-primary transition hover:bg-[#EDEDFC] flex justify-center items-center py-1 px-3 rounded-md text-sm md:text-xl lowercase text-white hover:text-primary font-semibold`}
                  >
                    {item}
                  </div>
                ))}
              </TextSlider>
              <Contacts title="Contacts" />
            </div>
          </div>
          <div className="flex flex-col gap-y-5 w-full md:w-1/2">
            <div className="w-full p-5 md:p-9 rounded-3xl hyphens-auto md:rounded-[60px] leading-[160%] text-gray-500 text-sm md:text-lg font-semibold tracking-tight bg-[#F8F9FA] dark:bg-[#191919] flex flex-col gap-y-5">
              <p>
                I specialize in{" "}
                <span className="text-black dark:text-white">
                  front-end development
                </span>
                , with a particular focus on creating engaging animations and
                micro-interactions. Using technologies like{" "}
                <span className="text-black dark:text-white">
                  React, TypeScript, CSS, and WebGL
                </span>
                , I bring websites to life with captivating visual experiences.
              </p>
              <p>
                My goal is to craft{" "}
                <span className="text-black dark:text-white">unique</span> and
                interactive interfaces that leave a lasting impression on users,
                ensuring a memorable and enjoyable browsing journey.
              </p>
            </div>
            <p className="w-full p-5 md:p-9 rounded-3xl hyphens-auto md:rounded-[60px] leading-[160%] text-gray-500 text-sm md:text-lg font-semibold tracking-tight bg-[#F8F9FA] dark:bg-[#191919]">
              I was born in Irpin,{" "}
              <span className="text-black dark:text-white">Ukraine</span>, and
              started learning front-end development at the{" "}
              <span className="text-black dark:text-white">age of 14</span>.
              Over the years, I have successfully completed multiple projects,
              which you can explore below. Currently{" "}
              <span className="text-black dark:text-white">
                based in Pamplona, Spain
              </span>
              , I am focused on
              <span className="text-black dark:text-white"> remote</span> work
              opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
