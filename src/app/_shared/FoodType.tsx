import React from 'react';

interface foodTypeProps {
  foodName: string;
  style?: any;
}

const FoodType = ({ foodName, style }: foodTypeProps) => {
  return (
    <div
      style={style}
      className="p-4 w-10/12 text-sky-950 md:text-xl xl:text-2xl"
    >
      {foodName}
    </div>
  );
};

export default FoodType;
