'use client';
import { GiBull } from 'react-icons/gi';
import Title from '../_shared/Title';
import { TbMeat } from 'react-icons/tb';
import { IoLogoWhatsapp } from 'react-icons/io';
import 'animate.css/animate.min.css';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-20 z-10 relative">
      <div className="flex flex-col items-center gap-4 animate__animated animate__lightSpeedInLeft animate__delay-1s">
        <Title
          text1="CARNI"
          text2="SCELTE"
          Icon={<GiBull className="iconTitle" fill="#f6727b" />}
        />
        <h2 className="text-xl">La migliore qualità, al miglior prezzo.</h2>
      </div>
      <div className="flex gap-4">
        <Link
          target="_blank"
          href={`https://api.whatsapp.com/send?phone=${process.env.phoneNumber}`}
        >
          <div className="p-1 px-2 flex items-center gap-1 cursor-pointer bg-gray-800 border-solid border-2 border-white rounded-xl w-fit animate__animated animate__fadeInBottomLeft animate__delay-2s hover:border-orange-300">
            <IoLogoWhatsapp className="icon block" fill="#25D366" />
            Vuoi ordinare?
          </div>
        </Link>
        <Link href="/menu">
          <div className="p-1 px-3 flex items-center gap-1 cursor-pointer bg-gray-800 border-solid border-2 border-white rounded-xl w-fit animate__animated animate__fadeInBottomRight animate__delay-2s hover:border-orange-300">
            <TbMeat className="icon block" fill="red" />
            Menù
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
