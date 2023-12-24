import React from 'react';
import { twMerge } from 'tailwind-merge';
import Navbar from './_components/Navbar';
import BackgroundOpacity from './_shared/BackgroundOpacity';
import Link from 'next/link';
import { FaArrowLeftLong } from 'react-icons/fa6';

const Custom404 = () => {
  return (
    <div className={twMerge('h-screen', 'h-[calc(100dvh)]')}>
      <Navbar />
      <section className="page">
        <BackgroundOpacity />
        <div className="h-full z-10 relative flex flex-col justify-center items-center gap-5">
          <span className="text-6xl text-orange-400">Oops!</span>
          <div className="flex flex-col gap-4 items-center">
            <span className="text-xl md:text-3xl">
              Non riusciamo a trovare la pagina richiesta.
            </span>
            <Link href="/">
              <div className="flex justify-center items-center gap-2 p-1 px-3 cursor-pointer bg-gray-800 border-solid border-2 border-white rounded-xl w-fit hover:border-orange-300">
                <FaArrowLeftLong />
                <span className="text-xl">Torna alla Home</span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Custom404;
