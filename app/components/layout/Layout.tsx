import {
  FC,
  ReactElement,
  createContext,
  useEffect,
  useRef,
  useState,
} from "react";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

import styles from "./layout.module.sass";

import { motion, useScroll, useSpring } from "framer-motion";
import { useMediaQuery } from "usehooks-ts";

export const UContext = createContext({});

const Layout: FC<{ children: ReactElement }> = ({ children }) => {
  const cursorREF = useRef(null);
  const [isClient, setIsClient] = useState(false);
  const isMobile = useMediaQuery("(max-width: 612px)");

  useEffect(() => {
    setIsClient(true);
  }, []);

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
      {isClient && !isMobile ? (
        <div className="cursor" ref={cursorREF} />
      ) : null}
      <div className={`${styles.layout} bg-white dark:bg-[#212121]`}>
        {isClient ? (
          <div
            className={`container py-5 z-10 flex flex-col gap-y-5 ${styles.customContainer}`}
          >
            <Header />
            <div className={styles.page}>{children}</div>
            <Footer />
          </div>
        ) : (
          "Loading.."
        )}
      </div>
    </UContext.Provider>
  );
};

export default Layout;
