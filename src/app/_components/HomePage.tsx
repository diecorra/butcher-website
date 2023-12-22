'use client';
import { GiBull } from 'react-icons/gi';
import Title from '../_shared/Title';
import { TbMeat } from 'react-icons/tb';
import { openInNewTab } from '../_utils/openURLNewTab';
import { IoLogoWhatsapp } from 'react-icons/io';

const HomePage = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-20 z-10 relative">
      <div className="flex flex-col items-center gap-4">
        <Title
          text1="CARNI"
          text2="SCELTE"
          Icon={<GiBull className="iconTitle" fill="#f6727b" />}
        />
        <h2 className="text-xl">La migliore qualità, al miglior prezzo.</h2>
      </div>
      <div className="flex gap-4">
        <div
          className="p-1 flex items-center gap-1 cursor-pointer bg-gray-800 border-solid border-2 border-white rounded-xl w-fit"
          onClick={() =>
            openInNewTab(
              `https://api.whatsapp.com/send?phone=${process.env.phoneNumber}`
            )
          }
        >
          <IoLogoWhatsapp className="icon block" fill="#25D366" />
          Vuoi ordinare?
        </div>
        <div className="p-1 flex items-center gap-1 cursor-pointer bg-gray-800 border-solid border-2 border-white rounded-xl w-fit">
          <TbMeat className="icon block" fill="red" />
          Menù
        </div>
      </div>
    </div>
  );
};

export default HomePage;
