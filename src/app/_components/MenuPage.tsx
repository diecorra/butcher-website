import Image from 'next/image';
import React from 'react';
import menu1 from '../../../public/images/menu/bombetta.jpg';

const MenuPage = () => {
  return (
    <section className="w-full z-10 relative flex flex-col pb-2">
      <div className="h-16 top-0 w-full flex justify-center items-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-orange-300 pb-7 pt-5 ">
          MENU'
        </h1>
      </div>
      <div className="w-full flex flex-col items-center pt-10">
        <h2 className="flex justify-center w-fit bg-orange-300 rounded-lg p-1 text-black lg:text-2xl">
          POLPETTA
        </h2>
        <div className="flex flex-row items-center justify-center pt-5">
          <div className="w-1/2">
            <ul className="list-disc list-inside">
              <li className="text-gray-200">carne bovina e suina</li>
              <li className="text-gray-200">sale</li>
              <li className="text-gray-200">pepe</li>
              <li className="text-gray-200">uova</li>
              <li className="text-gray-200">panna da cucina</li>
              <li className="text-gray-200">noce moscata</li>
              <li className="text-gray-200">prezzemolo</li>
              <li className="text-gray-200">grana</li>
              <li className="text-gray-200">fecola di patate</li>
            </ul>
          </div>
          <div className="w-1/2">
            <Image
              className="rounded-xl"
              src={menu1}
              objectFit="contain"
              alt="Chi Siamo"
              placeholder="blur"
              quality={100}
            />
          </div>
        </div>
      </div>
      <div className="pt-4 flex flex-col gap-4 w-full justify-center items-center">
        <div className="w-full flex flex-col items-center">
          <h2 className="flex justify-center w-fit bg-orange-300 rounded-lg p-1 text-black lg:text-2xl">
            BOMBETTA SPECK-SCAMORZA
          </h2>
          <div className="flex flex-row items-center justify-center pt-5">
            <div className="w-1/2">
              <ul className="list-disc list-inside">
                <li className="text-gray-200">speck</li>
                <li className="text-gray-200">scamorza</li>
              </ul>
            </div>
            <div className="w-1/2">
              <Image
                className="rounded-xl"
                src={menu1}
                objectFit="contain"
                alt="Chi Siamo"
                placeholder="blur"
                quality={100}
              />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center">
          <h2 className="flex justify-center w-fit bg-orange-300 rounded-lg p-1 text-black lg:text-2xl">
            BOMBETTA PANCETTA-PHILADELPHIA
          </h2>
          <div className="flex flex-row items-center justify-center pt-5">
            <div className="w-1/2">
              <ul className="list-disc list-inside">
                <li className="text-gray-200">pancetta</li>
                <li className="text-gray-200">philadelphia</li>
              </ul>
            </div>
            <div className="w-1/2">
              <Image
                className="rounded-xl"
                src={menu1}
                objectFit="contain"
                alt="Chi Siamo"
                placeholder="blur"
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuPage;
