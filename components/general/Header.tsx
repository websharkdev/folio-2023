"use client";

import { Button } from "@/components/ui/button";
import { MailIcon, MoonIcon, MoreHorizontal, SunIcon, X } from "lucide-react";
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
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useLanguage } from "@/lib/hooks/useLanguage";

type Props = {};

const menu = ["home", "about", "works", "blog", "fake"];

const Header: FC<Props> = () => {
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
          className={`px-6 min-h-20 rounded-full bg-[#F8F9FA] dark:bg-[#191919] flex justify-between items-center`}
        >
          {menu.map((item: string, index: number) => (
            <Link
              key={`${item}_${index}`}
              href={item !== "fake" ? `#${item}` : `/${item}`}
              className={`menu-item py-1 px-3 rounded-full hover:bg-primary dark:hover:bg-primary hover:text-white flex justify-between items-center duration-300 transition dark:text-white bg-silver ease-in-out font-semibold text-lg dark:bg-[#1e1e1e]`}
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
            <div className="absolute right-5 top-3">
              <SheetClose>
                <Button
                  variant="secondary"
                  size="icon"
                  className={`rounded-full p-1 relative dark:bg-[#212121] border-none`}
                  onClick={() => setMobileMenu(false)}
                >
                  <X className="aspect-square w-4" />
                </Button>
              </SheetClose>
            </div>
            {menu.map((item: string, index: number) => (
              <Link
                key={`${item}_${index}`}
                href={item !== "fake" ? `#${item}` : `/${item}`}
                onClick={() => setMobileMenu(false)}
                className={`menu-item py-2.5 px-3 w-max rounded-full hover:bg-primary dark:hover:bg-primary hover:text-white flex justify-between items-center duration-300 transition dark:text-white bg-silver ease-in-out font-semibold text-lg dark:bg-[#1e1e1e]`}
              >
                {item}.
              </Link>
            ))}
          </SheetContent>
        </Sheet>
      )}

      {isClient && !isMobile ? (
        <div
          className={`px-6 min-h-20 rounded-full bg-[#F8F9FA] dark:bg-[#191919] flex justify-between items-center gap-x-2`}
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

export default Header;
