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
    <nav className="h-16 w-full flex items-center absolute z-20">
      <div className="container px-8 flex justify-between items-center">
        <div className="flex gap-5 items-center">
          <Link href={igLink} target="_blank">
            <RiInstagramFill className="hidden md:block icon hover:fill-orange-300" />
          </Link>
          <Link href={fbLink} target="_blank">
            <FaSquareFacebook className="icon hidden md:block hover:fill-orange-300" />
          </Link>
          <Link href={`${waApi}${process.env.phoneNumber}`} target="_blank">
            <IoLogoWhatsapp className="icon hidden md:block hover:fill-orange-300" />
          </Link>
          <Link href={placeLink} target="_blank">
            <MdPlace className="icon hidden md:block hover:fill-orange-300" />
          </Link>
        </div>

        <div className="hidden md:flex space-x-4 [&>a]:text-lg">
          <Link href="/" className="nav-link">
            Home
          </Link>
          <Link href="/menu" className="nav-link">
            Menù
          </Link>

          <Link href="/about" className="nav-link">
            Chi Siamo
          </Link>
          <Link href="/contacts" className="nav-link">
            Contatti
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
        <Link href="/" className="nav-link">
          Home
        </Link>
        <Link href="/menu" className="nav-link">
          Menù
        </Link>
        <Link href="/about" className="nav-link">
          Chi Siamo
        </Link>
        <Link href="/contacts" className="nav-link">
          Contatti
        </Link>
        <div className="flex flex-row gap-10">
          <Link href={igLink}>
            <RiInstagramFill className="icon" />
          </Link>
          <Link href={fbLink}>
            <FaSquareFacebook className="icon" />
          </Link>
          <Link href={`${waApi}${process.env.phoneNumber}`}>
            <IoLogoWhatsapp className="icon" />
          </Link>
          <Link href={placeLink}>
            <MdPlace className="icon" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
