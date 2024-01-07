import React from 'react';

interface tooltipProps {
  text: string;
  text1?: string;
  text2?: string;
  text3?: string;
  text4?: string;
  text5?: string;
  text6?: string;
  text7?: string;
  children: any;
}

function Tooltip({ text, text1, text2, text3, text4, children }: tooltipProps) {
  return (
    <div className="tooltip">
      {children}
      <div className="tooltiptext">
        <h5 className=" text-black text-xl md:text-2xl text-center rounded-xl">
          INGREDIENTI
        </h5>
        <ul className="list-disc list-inside">
          <li>{text}</li>
          {text1 ? <li>{text1}</li> : null}
          {text2 ? <li>{text2}</li> : null}
          {text3 ? <li>{text3}</li> : null}
          {text4 ? <li>{text4}</li> : null}
        </ul>
      </div>
    </div>
  );
}

export default Tooltip;
