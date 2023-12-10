"use client";

import { FC, Suspense } from "react";
import {
  HomeAbout,
  HomeContacts,
  HomeHeader,
  HomeUkraine,
  HomeWorks,
} from "./sections";

export const Home: FC = () => {
  return (
    <Suspense>
      <div className="relative flex flex-col flex-nowrap gap-y-5">
        <HomeHeader />
        <HomeAbout />
        <HomeWorks />
        {/* <HomeUkraine /> */}
        {/* <HomeContacts /> */}
      </div>
    </Suspense>
  );
};
