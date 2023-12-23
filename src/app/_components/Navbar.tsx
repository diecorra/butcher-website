'use client';
import React, { useEffect, useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoMdClose } from 'react-icons/io';
import { openInNewTab } from '../_utils/openURLNewTab';
import { FaSquareFacebook } from 'react-icons/fa6';
import { RiInstagramFill } from 'react-icons/ri';
import { IoLogoWhatsapp } from 'react-icons/io';
import { MdPlace } from 'react-icons/md';
import { fbLink, igLink, placeLink, waApi } from '../_utils/links';
import Link from 'next/link';

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
    <nav className="h-16 w-full flex items-center absolute z-20">
      <div className="container px-8 flex justify-between items-center">
        <div className="flex gap-5 items-center">
          <RiInstagramFill
            className="hidden md:block icon hover:fill-orange-300"
            onClick={() => openInNewTab(igLink)}
          />
          <FaSquareFacebook
            className="icon hidden md:block hover:fill-orange-300"
            onClick={() => openInNewTab(fbLink)}
          />
          <IoLogoWhatsapp
            className="icon hidden md:block hover:fill-orange-300"
            onClick={() => openInNewTab(`${waApi}${process.env.phoneNumber}`)}
          />
          <MdPlace
            className="icon hidden md:block hover:fill-orange-300"
            onClick={() => openInNewTab(placeLink)}
          />
        </div>

        <div className="hidden md:flex space-x-4 [&>a]:text-lg">
          <Link href="/" className="nav-link">
            Home
          </Link>
          <Link href="/menu" className="nav-link">
            Menù
          </Link>
          <Link href="/contacts" className="nav-link">
            Contatti
          </Link>
          <Link href="/about" className="nav-link">
            Chi Siamo
          </Link>
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
        <div className="flex flex-row gap-10">
          <RiInstagramFill
            className="icon"
            onClick={() => openInNewTab(igLink)}
          />
          <FaSquareFacebook
            className="icon"
            onClick={() => openInNewTab(fbLink)}
          />
          <IoLogoWhatsapp
            className="icon"
            onClick={() => openInNewTab(`${waApi}${process.env.phoneNumber}`)}
          />
          <MdPlace className="icon" onClick={() => openInNewTab(placeLink)} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
