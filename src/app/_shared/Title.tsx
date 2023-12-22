'use client';
import React from 'react';

interface TitleProps {
  text1: string;
  text2: string;
  Icon: React.ReactNode;
}

const Title = ({ text1, text2, Icon }: TitleProps) => {
  return (
    <div className="flex items-center gap-1">
      <h1
        style={{ color: '#f84848' }}
        className="flex pt-10 gap-1 items-center"
      >
        {text1}
        <span>{Icon}</span>
        {text2}
      </h1>
    </div>
  );
};

export default Title;
