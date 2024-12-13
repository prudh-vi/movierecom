"use client";

import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col ">
      <ContainerScroll>
        <img
          src="/linear.jpg"
          alt="hero"
          className="mx-auto rounded-2xl object-cover object-left-top"
          draggable={false}
          style={{ height: '800px', width: '1600px' }}
        />
      </ContainerScroll>
    </div>
  );
}