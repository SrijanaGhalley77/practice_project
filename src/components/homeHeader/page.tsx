"use client";
import React from 'react';
import ButtonGroup from '../buttonGroup/page';

const Header: React.FC = () => {
  return (    
    <header className='flex flex-col justify-center items-center font-roboto'>
      <p className='font-semiold text-5xl w-[900px] text-center text-primary-950'>Our menu is a carefully curated selection of Italian masterpieces.</p>
      <ButtonGroup/>
    </header>
  );
};

export default Header;