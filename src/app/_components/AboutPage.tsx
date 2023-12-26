import Image from 'next/image';
import React from 'react';
import logo from '../../../public/images/aboutPic.jpg';

const AboutPage = () => {
  return (
    <section className="w-full lg:h-screen z-10 relative">
      <div className="h-16 top-0 w-full flex justify-center items-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-orange-300 pb-7 pt-14 ">
          CHI SIAMO
        </h1>
      </div>
      <div className="md:w-full md:flex md:justify-center xl:h-[calc(100%-4rem)] lg:items-center">
        <div className="flex flex-col xl:flex-row justify-center items-center gap-2 lg:gap-4 md:w-4/5 xl:w-11/12 xl:h-5/6">
          <p className="text-justify text-sm md:text-xl lg:text-2xl xl:text-xl animate__animated animate__fadeInBottomRight animate__delay-0.5s">
            {`Siamo emozionati di inaugurare la nostra macelleria, un nuovo capitolo
          di un'eredità di eccellenza nel settore. Con giorni di apertura appena
          alle spalle, portiamo con noi decenni di esperienza e dedizione alla
          carne di qualità. Ogni taglio che offriamo è il risultato di una
          selezione attenta e di una conoscenza approfondita delle tradizioni
          artigianali. Pur essendo una nuova destinazione culinaria, incarniamo
          il savoir-faire consolidato nel tempo, garantendo freschezza e gusto
          in ogni pezzo. Il nostro team, formato da esperti appassionati, è qui
          per condividere la nostra storia e consigliarvi nella scelta dei
          migliori tagli per le vostre preparazioni. Venite a scoprire la
          differenza che fa la nostra esperienza, dove la tradizione incontra
          l'innovazione in ogni fetta di carne.`}
          </p>
          <Image
            className="animate__animated animate__fadeInBottomLeft animate__delay-0.5s rounded-sm border-solid border-2 border-orange-300 xl:h-full"
            src={logo}
            objectFit="contain"
            alt="Chi Siamo"
            placeholder="blur"
            quality={100}
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
