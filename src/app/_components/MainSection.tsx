'use client';
import { GiBull } from 'react-icons/gi';
import Title from '../_shared/Title';
import { TbMeat } from 'react-icons/tb';
import { IoLogoWhatsapp } from 'react-icons/io';
import 'animate.css/animate.min.css';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../public/images/gluten_free_logo.png';

const MainSection = () => {
  return (
    <section
      id="home"
      className="section w-full h-screen flex flex-col items-center justify-center gap-20 z-10 relative"
    >
      <div className="flex flex-col items-center gap-4 animate__animated animate__lightSpeedInLeft animate__delay-0.7s">
        <Title
          text1="CARNI"
          text2="SCELTE"
          Icon={<GiBull className="iconTitle" fill="#f6727b" />}
        />
        <h2 className="text-lg md:text-xl">
          La migliore qualità, al miglior prezzo.
        </h2>
        <Image
          className="h-20 w-auto"
          src={logo}
          alt="GlutenFree Logo"
          placeholder="blur"
          quality={100}
        ></Image>
      </div>
      <div className="flex gap-4">
        <Link
          target="_blank"
          href={`https://api.whatsapp.com/send?phone=${process.env.phoneNumber}`}
        >
          <button className="homeButton animate__fadeInBottomLeft animate__animated animate__delay-1s">
            <IoLogoWhatsapp className="icon block" fill="#25D366" />
            Vuoi ordinare?
          </button>
        </Link>
        <Link href="/#menu">
          <button className="homeButton animate__fadeInBottomRight animate__animated animate__delay-1s">
            <TbMeat className="icon block" fill="red" />
            Menù
          </button>
        </Link>
      </div>
    </section>
  );
};

export default MainSection;
