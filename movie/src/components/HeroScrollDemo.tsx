"use client";


import { ContainerScroll } from "./ui/container-scroll-animation";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white dark:text-white">
              Discover from <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
              250,000+ Movies
              </span>
            </h1>
          </>
        }
      >
        <img
          src="/linear.jpg"
          alt="hero"
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
          style={{ height: '720px', width: '1400px' }}
        />
      </ContainerScroll>
    </div>
  );
}