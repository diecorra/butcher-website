'use client';
import Image from 'next/image';
import React from 'react';
import logo from '../../../public/images/aboutPic.jpg';
import AboutDescription from './AboutDescription';

const AboutSection = () => {
  return (
    <section
      id="about"
      className="section w-full min-h-screen xl:h-screen z-20 flex flex-col p-5 bg-sky-950 rounded-t-2xl shadow-2xl relative"
    >
      <div className="xl:h-20 w-full flex justify-center items-center pb-5 z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-white ">
          {`CHI SIAMO`}
        </h1>
      </div>
      <div className="md:flex md:justify-center xl:h-[calc(100%-4rem)] lg:items-center z-10">
        <div className="flex flex-col xl:flex-row justify-center items-start gap-2 lg:gap-4 md:w-4/5 xl:w-10/12 xl:h-5/6">
          <AboutDescription />
          <Image
            className="border-solid border-2 border-sky-950 rounded-2xl w-auto lg:h-[30rem] shadow-2xl"
            src={logo}
            alt="Chi Siamo"
            placeholder="blur"
            quality={100}
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
