"use client";

import Image from "next/image";
import React from "react";
import CustomButton from "./CustomButton";

const Hero = () => {

  const handleScroll = () => {

  }

  return (
    <div className="flex flex-col xl:flex-row gap-5 relative z-0 max-w-[1440px] mx-auto xl:mt-16">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="2xl:text-[72px] sm:text-[64px] text-[40px] font-extrabold">
          Find, book, rent a car—quick and super easy!
        </h1>

        <p className="text-[27px] text-black-100 font-light mt-5">
          Streamline your car rental experience with our effortless booking
          process.
        </p>
        <div className="mt-5">
          <CustomButton title="Explore Cars" buttonStyle="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" buttonType="button" handleClick={handleScroll} />
        </div>
      </div>
      <div className="xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen">
        <div className="relative xl:w-full w-[90%] xl:h-full h-[590px] z-0">
          <Image src="/car5.png" alt="hero" fill className="object-contain" />
        </div>

        <div className=" absolute xl:-top-24 xl:-right-1/2 -right-1/4 bg-hero-bg bg-repeat-round -z-10 w-full xl:h-screen h-[590px] overflow-hidden" />
      </div>
    </div>
  );
};

export default Hero;
