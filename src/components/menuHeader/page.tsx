"use client";
import React from 'react';
import { Button } from "@/components/ui/button"


const Header: React.FC = () => {
  return (
    <div >
        <header className='flex flex-col justify-center items-center font-roboto'>
        <p className='font-semiold text-5xl w-[900px] text-center text-primary-950'>Our menu is a carefully curated selection of Italian masterpieces.</p>
        <div className='flex justify-between gap-4'>
            <Button>Apetizers</Button>
            <Button>Main Course</Button>
            <Button>Desserts</Button>
            <Button>Wine</Button>
            <Button>Specials</Button>
        </div>
    </header>
    </div>
  );
};

export default Header;