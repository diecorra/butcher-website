'use client';
import Image from 'next/image';
import React, { useEffect } from 'react';
import bombette from '../../../public/images/menu/bombetta.jpg';
import polpette from '../../../public/images/menu/polpette.png';
import FoodType from '../_shared/FoodType';
import { FaInfoCircle } from 'react-icons/fa';
import Tooltip from './Tooltip';
// import { changeNav } from '../_utils/handleIntersectionMenu';

const MenuSection = () => {
  // useEffect(() => {
  //   const navSection = document.getElementById('navbar');

  //   if (navSection) {
  //     const options = {
  //       threshold: 0.55,
  //       rootMargin: `${navSection.offsetHeight * -1}px`,
  //     };
  //     const observer = new IntersectionObserver(changeNav, options);
  //     const sections = document.querySelectorAll('section');
  //     sections.forEach((section) => {
  //       observer.observe(section);
  //     });
  //   }
  // }, []);

  return (
    <section
      id="menu"
      className="section h-screen flex flex-col -mb-2 p-5 bg-orange-300 rounded-t-2xl relative shadow-2xl"
    >
      <div className="w-full flex flex-col justify-center items-center z-10 gap-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-sky-950">
          {`MENÙ`}
        </h1>
        <h3 className="text-sky-950 md:text-xl lg:text-3xl">
          Tutti i prodotti sono disponibili senza glutine.
        </h3>
      </div>
      <div className="xl:h-full xl:flex xl:flex-row xl:justify-center xl:gap-3 xl:items-center">
        <div className="flex flex-row xl:h-72 w-full xl:w-2/5 p-2 border-solid border-2 border-sky-950 rounded-xl">
          <div className="w-1/2 px-2 flex flex-col">
            <FoodType
              style={{
                borderTopRightRadius: '5px',
                borderTopLeftRadius: '5px',
                backgroundColor: 'rgba(31,41,55,1)',
                borderColor: 'rgba(31,41,55,1)',
                borderWidth: '2px',
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                color: 'white',
              }}
              foodName="POLPETTE"
            />
            <div className="bg-orange-300 w-full flex flex-row items-center border-x-2 border-b-2 rounded-b-lg border-solid border-sky-950">
              <FoodType foodName="Polpetta classica" />
              <Tooltip
                text="carne bovina"
                text1="carne suina"
                text2="sale"
                text3="pepe"
                text4="uova"
                text5="panna da cucina"
                text6="noce moscata"
                text7="prezzemolo"
                text8="grana"
                text9="fecola di patate"
              >
                <div className="w-2/12">
                  <FaInfoCircle size={20} fill="rgba(31,41,55,1)" />
                </div>
              </Tooltip>
            </div>
          </div>
          <div className="w-1/2 px-2 flex flex-col">
            <Image
              className="rounded-xl"
              src={polpette}
              objectFit="contain"
              alt="Polpetta"
              placeholder="blur"
              quality={100}
            />
          </div>
        </div>
        <div className="mt-2 xl:mt-0 flex flex-row xl:h-72 w-full xl:w-2/5 p-2 border-solid border-2 border-sky-950 rounded-xl">
          <div className="w-1/2 px-2 flex flex-col">
            <FoodType
              style={{
                borderTopRightRadius: '5px',
                borderTopLeftRadius: '5px',
                backgroundColor: 'rgba(31,41,55,1)',
                borderColor: 'rgba(31,41,55,1)',
                borderWidth: '2px',
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                color: 'white',
              }}
              foodName="BOMBETTE"
            />
            <div className="bg-orange-300 w-full flex flex-row items-center border-x-2 border-solid border-sky-950">
              <FoodType foodName="Bombetta speck/scamorza" />
              <Tooltip text="speck" text1="scamorza">
                <div className="w-2/12">
                  <FaInfoCircle size={20} fill="rgba(31,41,55,1)" />
                </div>
              </Tooltip>
            </div>
            <div className="bg-orange-300 w-full flex flex-row items-center rounded-b-lg border-2 border-solid border-sky-950">
              <FoodType foodName="Bombetta pancetta/phil." />
              <Tooltip text="pancetta" text1="philadelphia">
                <div className="w-2/12">
                  <FaInfoCircle size={20} fill="rgba(31,41,55,1)" />
                </div>
              </Tooltip>
            </div>
          </div>
          <div className="w-1/2 px-2 flex flex-col">
            <Image
              className="rounded-xl"
              src={bombette}
              objectFit="contain"
              alt="Bombetta"
              placeholder="blur"
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
