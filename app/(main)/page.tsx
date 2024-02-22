"use client";

import { Suspense, lazy } from "react";

const Header = lazy(() => import("./(blocks)/Header"));
const About = lazy(() => import("./(blocks)/About"));
const Projects = lazy(() => import("./(blocks)/Projects"));

const Preloader = () => (
  <div className="h-screen w-full fixed left-0 top-0 bg-slate-200 items-center justify-center flex z-[5000]">
    <h3 className="text-blue-950 text-center font-semibold">Loading...</h3>
  </div>
);

export default function Home() {
  return (
    <Suspense fallback={<Preloader />}>
      <div className="relative flex flex-col flex-nowrap gap-y-5">
        <Header />
        <About />
        <Projects />
      </div>
    </Suspense>
  );
}
