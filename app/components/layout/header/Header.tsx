"use client";

import { LightThemeIcon, NightThemeIcon } from "@/assets/icons/ui";
import { Button } from "@/components/ui/button";
import { useSwitchTheme } from "@/hooks/useSwitchTheme";
import Image from "next/image";
import Link from "next/link";
// import { UserButton } from "@clerk/nextjs";
import { FC, useCallback, useState } from "react";
type Props = {};

const menu = ["home", "about", "works", "blog", "contacts"];
const languages = ["en", "es", "ua"];

export const Header: FC<Props> = () => {
  const [current, setCurrent] = useState({
    link: "home",
    theme: "light",
    language: "en",
  });

  const theme = useSwitchTheme();
  const handleLanguage = useCallback(() => {}, []);
  const handleLink = useCallback(() => {}, []);
  return (
    <div
      className={`container flex justify-between items-center sticky top-5 z-20`}
    >
      <div
        className={`py-6 px-[34px] rounded-full  ${
          theme.isLight ? "bg-[#F8F9FA]" : "bg-[#2E2E2E]"
        } flex justify-between items-center`}
      >
        {menu.map((item: string, index: number) => (
          <Link
            key={`${item}_${index}`}
            href={`#${item}`}
            className={`menu-item py-2.5 px-3 rounded-full hover:bg-primary hover:text-white flex justify-between items-center duration-300 transition ${
              !theme.isLight && "text-white"
            } ${
              current.link === item ? "bg-primary text-white" : "bg-silver"
            } ease-in-out font-semibold text-lg`}
          >
            {item}.
          </Link>
        ))}
      </div>

      <div
        className={`py-6 px-[34px] rounded-full ${
          theme.isLight ? "bg-[#F8F9FA]" : "bg-[#2E2E2E]"
        } flex justify-between items-center gap-x-6`}
      >
        <Button
          variant="outline"
          size="icon"
          className="rounded-full p-4 w-14 h-14"
          onClick={handleLanguage}
        >
          <p className="transition  ease-in-out font-semibold text-lg lowercase">
            {current.language}
          </p>
        </Button>
        <Button
          variant="outline"
          size="icon"
          className={`rounded-full p-4 w-14 h-14`}
          onClick={theme.isLight ? theme.onClose : theme.onOpen}
        >
          <Image
            src={theme.isLight ? LightThemeIcon : NightThemeIcon}
            alt={
              theme.isLight
                ? "light-theme-icon / sun"
                : "night-theme-icon / lune"
            }
            className="w-6 h-6"
          />
        </Button>
      </div>
    </div>
  );
};
