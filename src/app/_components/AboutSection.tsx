'use client';
import Image from 'next/image';
import React, { useEffect } from 'react';
import logo from '../../../public/images/aboutPic.jpg';
import { aboutDescription } from '../_utils/aboutDescription';

const AboutSection = () => {
  return (
    <section
      id="about"
      className="section w-full min-h-screen xl:h-screen z-20 flex flex-col p-5 bg-sky-600 rounded-t-2xl shadow-2xl relative"
    >
      <div className="h-16 w-full flex justify-center items-center pt-10 md:py-16 z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-black pb-7">
          {`CHI SIAMO`}
        </h1>
      </div>
      <div className="md:flex md:justify-center xl:h-[calc(100%-4rem)] lg:items-center z-10">
        <div className="flex flex-col xl:flex-row justify-center items-center gap-2 lg:gap-4 md:w-4/5 xl:w-11/12 xl:h-5/6">
          <p className="text-justify text-[whitesmoke] text-sm md:text-xl lg:text-2xl xl:text-xl">
            {aboutDescription}
          </p>
          <Image
            className="border-solid border-2 border-black rounded-2xl w-auto shadow-2xl"
            src={logo}
            alt="Chi Siamo"
            placeholder="blur"
            height={400}
            quality={100}
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
