import { Button } from "@/components/ui/button";
import { Suspense, lazy } from "react";

type Props = {};

const HeaderBG = lazy(() => import("@/app/(main)/(blocks)/Header-BG"));

const Header = (props: Props) => {
  return (
    <div
      className="h-[80dvh] w-full flex items-end justify-end relative"
      id="home"
    >
      <div className="bg-[#F8F9FA] dark:bg-[#1d1d1d] p-5 md:p-9 rounded-3xl md:rounded-[60px] gap-10 z-10 flex items-center justify-between w-max xl:max-w-3xl">
        <h2 className="leading-relaxed text-2xl sm:text-4xl md:text-5xl 2xl:text-6xl font-semibold inline text-[#141414] dark:text-[#eee]">
          Bortnytskyi <br />
          Oleksii
          <Button
            size="sm"
            className="inline ml-5 font-semibold dark:text-white md:px-5"
          >
            contact me.
          </Button>
        </h2>
        {/* <Image
          src={HeaderPhoto}
          alt="Oleksii Bortnytksyi photo / medium"
          className={`aspect-square object-contain hidden xs:flex sm:flex ${
            window.innerWidth > 425 ? "w-24" : "w-16"
          } md:w-32 xl:w-36 2xl:w-44`}
        /> */}
      </div>
      <div className="min-h-screen h-full w-full absolute top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4">
        <Suspense fallback={false}>
          <HeaderBG />
        </Suspense>
      </div>
    </div>
  );
};

export default Header;
