import Image from 'next/image';
import React from 'react';
import logo from '../../../public/images/aboutPic.jpg';

const AboutPage = () => {
  return (
    <section className="h-full w-full z-10 relative">
      <div className="h-16 p-10 w-full flex justify-center items-center">
        <h1 className="text-5xl text-orange-300">CHI SIAMO</h1>
      </div>
      <div className="flex flex-col justify-center items-center ">
        <p className="p-5 text-justify text-sm animate__animated animate__fadeInBottomRight animate__delay-1s">
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
          className="pb-4 animate__animated animate__fadeInBottomLeft animate__delay-1s h-auto"
          src={logo}
          width={300}
          alt="Chi Siamo"
          placeholder="blur"
          quality={100}
        ></Image>
      </div>
    </section>
  );
};

export default AboutPage;
