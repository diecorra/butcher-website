'use client';
import Image from 'next/image';
import React from 'react';
import logo from '../../../public/images/aboutPic.jpg';

const AboutSection = () => {
  return (
    <section
      id="about"
      className="section w-full min-h-screen xl:h-screen z-20 flex flex-col p-5 bg-sky-950 rounded-t-2xl shadow-2xl relative"
    >
      <div className="h-20 w-full flex justify-center items-center pt-10 md:py-16 z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-white pb-7">
          {`CHI SIAMO`}
        </h1>
      </div>
      <div className="md:flex md:justify-center xl:h-[calc(100%-4rem)] lg:items-center z-10">
        <div className="flex flex-col xl:flex-row justify-center items-center gap-2 lg:gap-4 md:w-4/5 xl:w-10/12 xl:h-5/6">
          <p className="text-justify text-[whitesmoke] text-sm md:text-xl lg:text-2xl xl:text-xl">
            <br />
            Siamo emozionati di inaugurare la nostra macelleria, un nuovo
            capitolo di un'eredità di <b>eccellenza</b> nel settore.
            <br />
            Con giorni di apertura appena alle spalle, portiamo con noi decenni
            di <b>esperienza e dedizione</b> alla carne di qualità.
            <br />
            <br />
            Ogni taglio che offriamo è il risultato di una selezione attenta e
            di una conoscenza approfondita delle tradizioni artigianali. Pur
            essendo una nuova destinazione culinaria, incarniamo il savoir-faire
            consolidato nel tempo, garantendo <b>freschezza e gusto</b> in ogni
            pezzo.
            <br />
            <br />
            Il nostro team, formato da <b>esperti appassionati</b>, è qui per
            condividere la nostra storia e consigliarvi nella scelta dei
            migliori tagli per le vostre preparazioni.
            <br />
            Venite a scoprire la differenza che fa la nostra esperienza, dove la
            tradizione incontra l'innovazione in ogni fetta di carne.
          </p>
          <Image
            className="border-solid border-2 border-sky-950 rounded-2xl w-auto lg:h-[30rem] shadow-2xl"
            src={logo}
            alt="Chi Siamo"
            placeholder="blur"
            quality={100}
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
