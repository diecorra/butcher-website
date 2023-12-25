import React from 'react';
import Navbar from '../_components/Navbar';
import BackgroundOpacity from '../_shared/BackgroundOpacity';
import AboutPage from '../_components/AboutPage';
import { twMerge } from 'tailwind-merge';

const About = () => {
  return (
    <div>
      <Navbar />
      <section className="page">
        <AboutPage />
        <BackgroundOpacity />
      </section>
    </div>
  );
};

export default About;
