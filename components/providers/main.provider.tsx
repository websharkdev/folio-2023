"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import * as React from "react";

function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

import { ReactNode, useLayoutEffect, useRef, useState } from "react";

const Header = React.lazy(() => import("@/components/general/Header"));
const Footer = React.lazy(() => import("@/components/general/Footer"));

const MainProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const cursorREF = useRef<HTMLDivElement | any>();
  const [isClient, setIsClient] = useState<boolean>(false);

  // console.log(
  //   "01111001 01101111 01110101 00100111 01110010 01100101  01100011 01110101 01110010 01101001 01101111 01110101 01110011 00101100  01001001  01101100 01101001 01101011 01100101  01101001 01110100 00101110  01010011 01110000 01100101 01100011 01101001 01100001 01101100  01100111 01110010 01100101 01100101 01110100 01101001 01101110 01100111 01110011 00100001"
  // );

  useLayoutEffect(() => {
    setIsClient(true);
  }, []);

  useLayoutEffect(() => {
    document.onmousemove = (ev) => {
      if (cursorREF.current) {
        cursorREF.current.style = `
        left: ${ev.clientX}px;
        top: ${ev.clientY}px;
      `;
      }
    };
  }, [cursorREF]);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      {isClient && (
        <div className="flex justify-between items-center flex-col gap-20 min-h-screen">
          <motion.div className="progress-bar" style={{ scaleX }} />
          <Header />
          <div className="cursor" ref={cursorREF} />
          <div className="flex flex-col gap-20 container w-full h-full">
            {children}
          </div>
          <Footer />
        </div>
      )}
    </ThemeProvider>
  );
};

export default MainProvider;
