'use client';
import React, { useEffect, useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoMdClose } from 'react-icons/io';
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
    <nav id="navbar" className="h-16 w-full flex items-center fixed z-30">
      <div className="container px-8 flex justify-between items-center">
        <div className="flex gap-5 items-center">
          <Link href={igLink} aria-label="Instagram" target="_blank">
            <RiInstagramFill className="naviconElements hidden lg:block icon hover:fill-orange-300" />
          </Link>
          <Link href={fbLink} aria-label="Facebook" target="_blank">
            <FaSquareFacebook className="naviconElements icon hidden lg:block hover:fill-orange-300" />
          </Link>
          <Link
            href={`${waApi}${process.env.phoneNumber}`}
            aria-label="WhatsApp"
            target="_blank"
          >
            <IoLogoWhatsapp className="naviconElements icon hidden lg:block hover:fill-orange-300" />
          </Link>
          <Link href={placeLink} aria-label="Google Maps" target="_blank">
            <MdPlace className="naviconElements icon hidden lg:block hover:fill-orange-300" />
          </Link>
        </div>
        <div className="hidden lg:flex space-x-4 [&>a]:text-lg">
          <Link href="#home" className="navlinkElements nav-link">
            Home
          </Link>
          <Link href="#menu" className="navlinkElements nav-link">
            Menù
          </Link>
          <Link href="#about" className="navlinkElements nav-link">
            Chi Siamo
          </Link>
        </div>

        <div className="lg:hidden z-30 fixed right-5">
          <button className="focus:outline-none">
            {changeIcon && (
              <IoMdClose
                onClick={toggleMenu}
                className={changeIcon ? 'icon md:text-6xl' : 'hidden'}
              />
            )}
            <RxHamburgerMenu
              className={
                isNavOpen
                  ? `${changeIcon && 'hidden'} animate-halfSpin icon`
                  : 'icon md:text-6xl'
              }
              onClick={toggleMenu}
            />
          </button>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none z-10"></div>
      <div
        className={`lg:hidden mobile-navbar [&>a]:text-2xl ${
          isNavOpen ? 'left-0' : '-left-full'
        }`}
      >
        <Link
          href="#home"
          onClick={() => setIsNavOpen(false)}
          className="nav-link"
        >
          Home
        </Link>
        <Link
          href="#menu"
          onClick={() => setIsNavOpen(false)}
          className="nav-link"
        >
          Menù
        </Link>
        <Link
          href="#about"
          onClick={() => setIsNavOpen(false)}
          className="nav-link"
        >
          Chi Siamo
        </Link>
        <div className="flex flex-row gap-10">
          <Link href={igLink} aria-label="Instagram">
            <RiInstagramFill className="icon" />
          </Link>
          <Link href={fbLink} aria-label="Facebook">
            <FaSquareFacebook className="icon" />
          </Link>
          <Link
            href={`${waApi}${process.env.phoneNumber}`}
            aria-label="WhatsApp"
          >
            <IoLogoWhatsapp className="icon" />
          </Link>
          <Link href={placeLink} aria-label="Google Maps">
            <MdPlace className="icon" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
