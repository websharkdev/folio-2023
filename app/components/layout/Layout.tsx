import { FC, ReactElement, createContext, useEffect, useRef } from "react";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

import styles from "./layout.module.sass";

import { motion, useScroll, useSpring } from "framer-motion";

export const UContext = createContext({});

const Layout: FC<{ children: ReactElement }> = ({ children }) => {
  const cursorREF = useRef(null);

  useEffect(() => {
    document.onmousemove = (ev) => {
      if (cursorREF.current) {
        // @ts-ignore
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
    <UContext.Provider value={{}}>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <div className="cursor" ref={cursorREF} />
      <div className={`${styles.layout} bg-white dark:bg-[#212121]`}>
        <div
          className={`container py-5 z-10 flex flex-col gap-y-5 ${styles.customContainer}`}
        >
          <Header />
          <div className={styles.page}>{children}</div>
          <Footer />
        </div>
      </div>
    </UContext.Provider>
  );
};

export default Layout;
