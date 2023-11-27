"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FC } from "react";

const data = [
  {
    category: "company",
    name: "Investables",
    hashtags: [
      {
        name: "b2b",
        description:
          "Business-to-business (B2B or, in some countries, BtoB) is a situation where one business makes a commercial transaction with another.",
      },
      {
        name: "Fintech",
        description:
          "Fintech refers to any technology that delivers financial services through software, such as online banking, mobile payment apps, or cryptocurrency. It is a broad category that encompasses many different technologies, but the primary objectives are to change the way consumers and businesses access their finances and compete with traditional financial services.",
      },
    ],
    link: "#",
    period: "6 mes",
  },
  {
    category: "company",
    name: "Investables",
    hashtags: [
      {
        name: "b2b",
        description:
          "Business-to-business (B2B or, in some countries, BtoB) is a situation where one business makes a commercial transaction with another.",
      },
      {
        name: "Fintech",
        description:
          "Fintech refers to any technology that delivers financial services through software, such as online banking, mobile payment apps, or cryptocurrency. It is a broad category that encompasses many different technologies, but the primary objectives are to change the way consumers and businesses access their finances and compete with traditional financial services.",
      },
    ],
    link: "#",
    period: "6 mes",
  },
  {
    category: "company",
    name: "Investables",
    hashtags: [
      {
        name: "b2b",
        description:
          "Business-to-business (B2B or, in some countries, BtoB) is a situation where one business makes a commercial transaction with another.",
      },
      {
        name: "Fintech",
        description:
          "Fintech refers to any technology that delivers financial services through software, such as online banking, mobile payment apps, or cryptocurrency. It is a broad category that encompasses many different technologies, but the primary objectives are to change the way consumers and businesses access their finances and compete with traditional financial services.",
      },
    ],
    link: "#",
    period: "6 mes",
  },
  {
    category: "company",
    name: "Investables",
    hashtags: [
      {
        name: "b2b",
        description:
          "Business-to-business (B2B or, in some countries, BtoB) is a situation where one business makes a commercial transaction with another.",
      },
      {
        name: "Fintech",
        description:
          "Fintech refers to any technology that delivers financial services through software, such as online banking, mobile payment apps, or cryptocurrency. It is a broad category that encompasses many different technologies, but the primary objectives are to change the way consumers and businesses access their finances and compete with traditional financial services.",
      },
    ],
    link: "#",
    period: "6 mes",
  },
  {
    category: "company",
    name: "Investables",
    hashtags: [
      {
        name: "b2b",
        description:
          "Business-to-business (B2B or, in some countries, BtoB) is a situation where one business makes a commercial transaction with another.",
      },
      {
        name: "Fintech",
        description:
          "Fintech refers to any technology that delivers financial services through software, such as online banking, mobile payment apps, or cryptocurrency. It is a broad category that encompasses many different technologies, but the primary objectives are to change the way consumers and businesses access their finances and compete with traditional financial services.",
      },
    ],
    link: "#",
    period: "6 mes",
  },
  {
    category: "company",
    name: "Investables",
    hashtags: [
      {
        name: "b2b",
        description:
          "Business-to-business (B2B or, in some countries, BtoB) is a situation where one business makes a commercial transaction with another.",
      },
      {
        name: "Fintech",
        description:
          "Fintech refers to any technology that delivers financial services through software, such as online banking, mobile payment apps, or cryptocurrency. It is a broad category that encompasses many different technologies, but the primary objectives are to change the way consumers and businesses access their finances and compete with traditional financial services.",
      },
    ],
    link: "#",
    period: "6 mes",
  },
  {
    category: "pet-projects",
    name: "Twitter Clone",
    hashtags: [
      {
        name: "b2b",
        description:
          "Business-to-business (B2B or, in some countries, BtoB) is a situation where one business makes a commercial transaction with another.",
      },
      {
        name: "Fintech",
        description:
          "Fintech refers to any technology that delivers financial services through software, such as online banking, mobile payment apps, or cryptocurrency. It is a broad category that encompasses many different technologies, but the primary objectives are to change the way consumers and businesses access their finances and compete with traditional financial services.",
      },
    ],
    link: "#",
    period: "6 mes",
  },
];

const category = ["Company", "Pet-Projects"];

export const HomeWorks: FC = () => {
  return (
    <div
      className="container h-[100vmin] max-h-screen flex flex-col relative pt-16 gap-y-9"
      id="works"
    >
      <h5 className="section-title text-3xl	font-semibold lowercase">works.</h5>
      <div className="container flex gap-5">
        <Tabs
          defaultValue={category[0].toLocaleLowerCase()}
          className="flex flex-nowrap w-full gap-x-5"
          orientation="vertical"
        >
          <TabsList className="w-2/5 flex gap-y-5">
            {category.map((category: string, index: number) => (
              <TabsTrigger key={index} value={category.toLocaleLowerCase()}>
                {category} (
                {
                  data.filter(
                    (item: any) =>
                      item.category === category.toLocaleLowerCase()
                  ).length
                }
                )
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsList className="w-3/5 flex gap-y-5 flex-nowrap flex-col">
            {data.map((company: any, index: number) => (
              <TabsContent
                key={`${company.name}_${index}`}
                value={company.category.toLocaleLowerCase()}
              >
                <div className="flex items-center gap-x-9">
                  <h2 className="text-2xl font-semibold">{company.name}</h2>
                  <div className="hidden xl:flex flex-nowrap items-center gap-x-3">
                    {company.hashtags.map((hashtag: any, hashtagID: number) => (
                      <TooltipProvider
                        key={`${hashtag.name}_${hashtagID}`}
                        delayDuration={2000}
                      >
                        <Tooltip>
                          <TooltipTrigger>
                            <span className="rounded-sm px-4 py-1 text-primary bg-white font-semibold hover:bg-primary hover:text-white">
                              #{hashtag.name}
                            </span>
                          </TooltipTrigger>
                          <TooltipContent className="mb-3">
                            <p className="rounded-sm px-4 py-1 text-primary bg-white font-semibold hover:bg-primary hover:text-white w-[35rem]">
                              {hashtag.description}
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    ))}
                  </div>
                </div>
                <div className="period flex flex-nowrap items-center gap-x-9">
                  <h6 className="text-base font-semibold">
                    ({company.period})
                  </h6>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="bg-primary w-14 h-14 p-6 aspect-square rounded-full text-white hover:text-primary"
                  >
                    <svg
                      className="w-3 aspect-square object-contain"
                      viewBox="0 0 15 15"
                      fill="none"
                    >
                      <path
                        d="M1 1L14 14M14 14V1.52M14 14H1.52"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Button>
                </div>
              </TabsContent>
            ))}
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
};
