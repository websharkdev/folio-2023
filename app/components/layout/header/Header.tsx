"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { MailIcon, MoonIcon, MoreHorizontal, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useMediaQuery } from "usehooks-ts";

import { FC, useCallback, useEffect, useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

type Props = {};

const menu = ["home", "about", "works", "blog"];

export const Header: FC<Props> = () => {
  const { currentLanguage, toggleLanguage, languages } = useLanguage();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [isClient, setIsClient] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const { setTheme, theme } = useTheme();

  const handleLanguage = useCallback((language: string) => {
    toggleLanguage(language);
  }, []);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (theme === undefined) {
      setTheme("light");
    }
  }, [theme]);
  return (
    <div
      className={`container flex justify-between items-center sticky top-5 z-20`}
    >
      {!isMobile ? (
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
      ) : (
        <Sheet open={mobileMenu}>
          <SheetTrigger>
            <Button
              variant="secondary"
              size="icon"
              className={`rounded-full p-4 w-14 h-14 relative dark:bg-[#212121] border-none`}
              onClick={() => setMobileMenu(true)}
            >
              <MoreHorizontal className="aspect-square w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-full" side="left">
            {menu.map((item: string, index: number) => (
              <Link
                key={`${item}_${index}`}
                href={`#${item}`}
                onClick={() => setMobileMenu(false)}
                className={`menu-item py-2.5 px-3 rounded-full hover:bg-primary dark:hover:bg-primary hover:text-white flex justify-between items-center duration-300 transition dark:text-white bg-silver ease-in-out font-semibold text-lg dark:bg-[#1e1e1e]`}
              >
                {item}.
              </Link>
            ))}
          </SheetContent>
        </Sheet>
      )}

      {isClient && !isMobile ? (
        <div
          className={`py-6 px-[34px] rounded-full bg-[#F8F9FA] dark:bg-[#191919] flex justify-between items-center gap-x-6`}
        >
          <Select
            onValueChange={(language: string) => handleLanguage(language)}
          >
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
            {theme === "light" ? (
              <MoonIcon
                className={`w-4 h-4 aspect-square object-contain text-[#212121] absolute z-10`}
              />
            ) : (
              <SunIcon
                className={`w-4 h-4 aspect-square object-contain text-white absolute z-10`}
              />
            )}
          </Button>
          <Button
            variant="outline"
            size="icon"
            href="mailto:alexey.bortnytksyi@gmail.com"
            className={`rounded-full p-4 w-14 h-14 relative dark:bg-[#212121] border-none`}
          >
            <MailIcon
              className={`w-4 h-4 aspect-square object-contain text-[#212121] dark:text-white absolute z-10`}
            />
          </Button>
        </div>
      ) : null}
    </div>
  );
};
