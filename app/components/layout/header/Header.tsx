"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { FC, useCallback } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {};

const menu = ["home", "about", "works", "blog", "contacts"];

export const Header: FC<Props> = () => {
  const { currentLanguage, toggleLanguage, languages } = useLanguage();
  const { setTheme, theme } = useTheme();

  const handleLanguage = useCallback((language: string) => {
    toggleLanguage(language);
  }, []);

  return (
    <div
      className={`container flex justify-between items-center sticky top-5 z-20`}
    >
      <div
        className={`py-6 px-[34px] rounded-full bg-[#F8F9FA] dark:bg-[#191919] flex justify-between items-center`}
      >
        {menu.map((item: string, index: number) => (
          <Link
            key={`${item}_${index}`}
            href={`#${item}`}
            className={`menu-item py-2.5 px-3 rounded-full hover:bg-primary dark:hover:bg-primary hover:text-white flex justify-between items-center duration-300 transition dark:text-white bg-silver ease-in-out font-semibold text-lg dark:bg-[#1e1e1e]`}
          >
            {item}.
          </Link>
        ))}
      </div>

      <div
        className={`py-6 px-[34px] rounded-full bg-[#F8F9FA] dark:bg-[#191919] flex justify-between items-center gap-x-6`}
      >
        <Select onValueChange={(language: string) => handleLanguage(language)}>
          <SelectTrigger className="rounded-full p-4 w-14 h-14 dark:bg-[#212121] font-semibold border-none">
            <SelectValue placeholder={currentLanguage} />
          </SelectTrigger>
          <SelectContent>
            {languages.map((language: string, index: number) => (
              <SelectItem value={language} key={index}>
                {language}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button
          variant="outline"
          size="icon"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className={`rounded-full p-4 w-14 h-14 relative dark:bg-[#212121] border-none`}
        >
          <MoonIcon
            className={`w-4 h-4 aspect-square object-contain text-muted-foreground ${
              theme === "light" ? "opacity-100" : "opacity-0"
            }`}
          />
          <SunIcon
            className={`w-4 h-4 aspect-square object-contain text-white absolute ${
              theme === "dark" ? "opacity-100" : "opacity-0"
            }`}
          />
        </Button>
      </div>
    </div>
  );
};
