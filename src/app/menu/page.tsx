import React from 'react';
import Navbar from '../_components/Navbar';
import MenuPage from '../_components/MenuPage';
import BackgroundOpacity from '../_shared/BackgroundOpacity';

const page = () => {
  return (
    <div>
      <Navbar />
      <section className="page md:px-20">
        <MenuPage />
        <BackgroundOpacity />
      </section>
    </div>
  );
};

export default page;
