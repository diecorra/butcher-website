'use client';
import React, { useEffect, useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import logo from '../../../public/images/butcher-logo.jpg';
import Image from 'next/image';
import { IoMdClose } from 'react-icons/io';
import { openInNewTab } from '../_utils/openURLNewTab';
import { FaSquareFacebook } from 'react-icons/fa6';
import { RiInstagramFill } from 'react-icons/ri';
import { IoLogoWhatsapp } from 'react-icons/io';
import { MdPlace } from 'react-icons/md';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const [changeIcon, setChangeIcon] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    if (isNavOpen) {
      setTimeout(() => {
        setChangeIcon(true);
      }, 300);
    } else {
      setChangeIcon(false);
    }
  }, [isNavOpen]);

  return (
    <nav className="h-16 w-full flex items-center">
      <div className="container px-8 flex justify-between items-center">
        <div className="flex gap-5 items-center">
          <Image src={logo} width={200} alt="Butcher Logo" priority />
          <RiInstagramFill
            className="icon hidden md:block"
            onClick={() => openInNewTab('https://www.instagram.com/')}
          />
          <FaSquareFacebook
            className="icon hidden md:block"
            onClick={() => openInNewTab('https://www.facebook.com/')}
          />
          <IoLogoWhatsapp
            className="icon hidden md:block"
            onClick={() =>
              openInNewTab(
                `https://api.whatsapp.com/send?phone=${process.env.phoneNumber}`
              )
            }
          />
          <MdPlace
            className="icon hidden md:block"
            onClick={() => openInNewTab(`${process.env.localization}`)}
          />
        </div>

        <div className="hidden md:flex space-x-4 [&>a]:text-lg">
          <a href="#home" className="nav-link">
            Home
          </a>
          <a href="#chisiamo" className="nav-link">
            Chi Siamo
          </a>
          <a href="#menu" className="nav-link">
            Menù
          </a>
          <a href="#contatti" className="nav-link">
            Contatti
          </a>
        </div>

        <div className="md:hidden z-30">
          <button className="focus:outline-none">
            {changeIcon && (
              <IoMdClose
                onClick={toggleMenu}
                className={changeIcon ? 'icon' : 'hidden'}
              />
            )}
            <RxHamburgerMenu
              className={
                isNavOpen
                  ? `${changeIcon && 'hidden'} animate-halfSpin icon`
                  : 'icon'
              }
              onClick={toggleMenu}
            />
          </button>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none z-10"></div>
      <div
        className={`md:hidden mobile-navbar [&>a]:text-2xl ${
          isNavOpen ? 'left-0' : '-left-full'
        }`}
      >
        <a href="#home">Home</a>
        <a href="#chisiamo">Chi Siamo</a>
        <a href="#menu">Menù</a>
        <a href="#contatti">Contatti</a>
        <div className="flex flex-row gap-4">
          <RiInstagramFill
            className="icon"
            onClick={() => openInNewTab('https://www.instagram.com/')}
          />
          <FaSquareFacebook
            className="icon"
            onClick={() => openInNewTab('https://www.facebook.com/')}
          />
          <IoLogoWhatsapp
            className="icon"
            onClick={() =>
              openInNewTab(
                `https://api.whatsapp.com/send?phone=${process.env.phoneNumber}`
              )
            }
          />
          <MdPlace
            className="icon"
            onClick={() => openInNewTab(`${process.env.localization}`)}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
