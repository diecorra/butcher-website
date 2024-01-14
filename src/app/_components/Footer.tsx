import React from 'react';

const Footer = () => {
  return (
    <div className="w-full h-10 flex flex-row justify-center bg-sky-950 z-20">
      <p className="p-2 z-10">
        Created by Diego Corradi -{'  '}
        <a
          href={'https://www.diegocorradi.com'}
          className="nav-link"
          target="_blank"
          rel="noopener"
        >
          diegocorradi.com
        </a>
      </p>
    </div>
  );
};

export default Footer;
