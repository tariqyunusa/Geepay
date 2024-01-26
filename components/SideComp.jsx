import React from 'react';
import "../styles/SideComp.css";
import Image from 'next/image';

const SideComp = ({ pack, line, info, amount, bottom }) => {
  return (
    <div className='card'>
      <div className="header_card">
        <Image width={40} height={40} src={pack} alt='icon' />
        <Image width={104} height={32} src={line} alt='line'/>
      </div>
      <div className="main_info">
        <h6 className='main_text_card'>{info}</h6>
        <h2 className='min_amount'>{amount}</h2>
      </div>
      <div className="bottom_card">
        <Image width={70} height={24} src={bottom} />
        <p className='card_prev'>vs previous month</p>
      </div>
    </div>
  );
};

export default SideComp;
