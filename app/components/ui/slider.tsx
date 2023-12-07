// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { ArrowNEXTIcon, ArrowPREVIcon } from "@/assets/icons/ui";
import Image from "next/image";
import { useState } from "react";
import { EffectCards, Navigation } from "swiper/modules";

type Props = {
  slides: {
    title: string;
    text: string;
  }[];
};

const sliderArrows = [
  {
    icon: ArrowPREVIcon,
    id: "prev-btn",
  },
  {
    icon: ArrowNEXTIcon,
    id: "next-btn",
  },
];

export default function Slider({ slides }: Props) {
  const [active, setActive] = useState<number>(0);

  return (
    <div
      className={`slider w-full flex justify-between items-center flex-nowrap bg-primary h-72 rounded-[3.75rem] px-4 gap-8 `}
    >
      <div className="w-3/5 h-full ">
        {slides.length > 0 && (
          <Swiper
            effect={"cards"}
            grabCursor
            modules={[EffectCards, Navigation]}
            className={`bg-primary h-72 rounded-[3.75rem]`}
            onSlideChange={(swiper) => setActive(swiper.activeIndex)}
            navigation={{
              nextEl: "#next-btn",
              prevEl: "#prev-btn",
            }}
          >
            {slides.map((slide, index: number) => (
              <SwiperSlide key={index}>
                <div
                  className={`${
                    active === index ? "bg-[#5B5BFF]" : "bg-[#5B5BFF75]"
                  } gap-x-5 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-60 aspect-square rounded-[60px] flex justify-center items-center flex-col`}
                >
                  <h3
                    className={`text-7xl text-center ${
                      active === index ? "text-white" : "text-[#5B5BFF55]"
                    } font-semibold transition`}
                  >
                    {slide.title}
                  </h3>
                  <span
                    className={`text-base text-center ${
                      active === index ? "text-white" : "text-[#5B5BFF55]"
                    } font-semibold transition`}
                  >
                    {slide.text}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
      <div className="w-2/5 h-full flex flex-nowrap items-center gap-2 py-4">
        {sliderArrows.map(({ id, icon }, index) => (
          <button
            id={id}
            key={index}
            className={`${
              id === "next-btn" ? "bg-[#2525DE]" : "bg-[#9191FF]"
            } h-full pointer rounded-full w-1/2 flex justify-center items-center px-5`}
          >
            <Image
              src={icon}
              alt={`Arrow-${id}-icon`}
              width={42}
              height={42}
              className="aspect-square object-contain w-full max-w-[42px]"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
