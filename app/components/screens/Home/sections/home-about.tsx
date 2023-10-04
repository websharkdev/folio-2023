"use client";
import { ArrowNEXTIcon } from "@/assets/icons/ui";
import { Button } from "@/components/ui/button";
import Slider from "@/components/ui/slider";
import TextSlider from "@/components/ui/textSlider";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

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
    link: "CV",
    title: "CV",
  },
];

export const HomeAbout: FC = () => {
  return (
    <div
      className="container h-[100vmin] max-h-screen flex flex-col justify-between relative pt-16"
      id="about"
    >
      <h5 className="text-3xl	font-semibold lowercase">about.</h5>
      <div className="container flex gap-5">
        <div className="w-1/3 flex items-end h-[80vmin]">
          <div className="w-full max-h-80 rounded-[3.75rem] leading-[120%] text-6xl font-semibold tracking-tight px-9 pb-9 pt-32 bg-[#F8F9FA]">
            <h2>Bortnytskyi Oleksii</h2>
          </div>
        </div>
        <div className="w-2/3 rounded-[3.75rem] flex items-start gap-x-5">
          <div className="flex flex-col gap-y-5 w-1/2">
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
            <div className="stack rounded-[3.75rem] bg-[#F8F9FA]">
              <h3 className="text-3xl font-semibold px-9 pt-9 pb-5">Stack</h3>
              <TextSlider baseVelocity={5}>
                <div
                  className={`bg-primary transition hover:bg-[#EDEDFC] flex justify-center items-center py-2 px-5 rounded-md text-xl lowercase text-white hover:text-primary font-semibold`}
                >
                  NextJS
                </div>
                <div
                  className={`bg-primary transition hover:bg-[#EDEDFC] flex justify-center items-center py-2 px-5 rounded-md text-xl lowercase text-white hover:text-primary font-semibold`}
                >
                  React
                </div>
                <div
                  className={`bg-primary transition hover:bg-[#EDEDFC] flex justify-center items-center py-2 px-5 rounded-md text-xl lowercase text-white hover:text-primary font-semibold`}
                >
                  typescript
                </div>
                <div
                  className={`bg-primary transition hover:bg-[#EDEDFC] flex justify-center items-center py-2 px-5 rounded-md text-xl lowercase text-white hover:text-primary font-semibold`}
                >
                  framer
                </div>
              </TextSlider>
              <div className="flex flex-col flex-nowrap gap-7 mt-5 bg-primary rounded-[3.75rem] p-8">
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
          <div className="flex flex-col gap-y-5 w-1/2">
            <div className="w-full text rounded-[3.75rem] leading-[160%] text-gray-500	 text-lg font-semibold tracking-tight p-8 bg-[#F8F9FA] flex flex-col gap-y-5">
              <p>
                I specialize in{" "}
                <span className="text-black">front-end development</span>, with
                a particular focus on creating engaging animations and
                micro-interactions. Using technologies like{" "}
                <span className="text-black">
                  React, TypeScript, CSS, and WebGL
                </span>
                , I bring websites to life with captivating visual experiences.
              </p>
              <p>
                My goal is to craft <span className="text-black">unique</span>{" "}
                and interactive interfaces that leave a lasting impression on
                users, ensuring a memorable and enjoyable browsing journey.
              </p>
            </div>
            <div className="w-full text rounded-[3.75rem] leading-[160%] text-gray-500	 text-lg font-semibold tracking-tight p-8 bg-[#F8F9FA] flex flex-col">
              <p>
                I was born in Irpin, <span className="text-black">Ukraine</span>
                , and started learning front-end development at the{" "}
                <span className="text-black">age of 14</span>. Over the years, I
                have successfully completed multiple projects, which you can
                explore below. Currently{" "}
                <span className="text-black">based in Pamplona, Spain</span>, I
                am focused on
                <span className="text-black">remote</span> work opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
