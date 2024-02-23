"use client";
import { lazy } from "react";

const Contacts = lazy(() => import("@/components/general/Contacts"));
const Slider = lazy(() => import("@/components/general/Slider"));
const TextSlider = lazy(() => import("@/components/general/TextSlider"));

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

const sliders = [
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
];

const About = () => {
  return (
    <div
      className="h-max w-full flex flex-col justify-between lg:justify-start gap-5 relative pt-16"
      id="about"
    >
      <h5 className="text-2xl md:text-3xl	font-semibold lowercase">about.</h5>

      <div className="flex w-full justify-between items-end flex-wrap">
        <div className="w-max hidden xl:flex items-end">
          <div className="w-full max-h-80 rounded-[3.75rem] leading-[120%] text-6xl font-semibold tracking-tight px-9 pb-9 pt-32 bg-[#F8F9FA] dark:bg-[#191919]">
            <h2>
              Bortnytskyi
              <br /> Oleksii
            </h2>
          </div>
        </div>
        <div className="flex-1 flex gap-5 pl-5 flex-wrap lg:flex-nowrap">
          <div className="flex flex-col gap-y-5  max-w-md">
            <div className="hidden md:flex">
              <Slider slides={sliders} />
            </div>
            <div className="stack rounded-3xl md:rounded-[60px] bg-[#F8F9FA] dark:bg-[#191919] flex flex-col">
              <h3 className="text-2xl md:text-3xl font-semibold p-5 md:p-9">
                Stack
              </h3>

              <div className="h-max mb-9 w-full">
                <TextSlider baseVelocity={5}>
                  {stack.map((item: string, index: number) => (
                    <div
                      key={index}
                      className={`bg-primary transition hover:bg-[#EDEDFC] flex justify-center items-center py-1 px-3 rounded-md text-sm md:text-[16px] lowercase text-white hover:text-primary font-semibold`}
                    >
                      {item}
                    </div>
                  ))}
                </TextSlider>
              </div>
              <Contacts title="Contacts" />
            </div>
          </div>
          <div className="flex flex-col gap-y-5 w-full">
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

export default About;
