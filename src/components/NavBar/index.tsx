'use client';
import React from 'react';
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { PiForkKnife } from "react-icons/pi";
import { MdGolfCourse } from "react-icons/md";
import LanguageDropdown from "../langDropDwn";

const Nav: React.FC = () => {

  return (
    <nav className="flex items-center justify-between w-svw px-10 py-5 shadow-md font-roboto">
      {/* Left side with navigation buttons */}
      <div className="flex space-x-3">
        <button className="text-secondary-950 flex items-center">
          <HiOutlineBuildingOffice2 size={24} />
        </button>
        <button className="text-secondary-950 flex items-center">
          <PiForkKnife size={24} />
        </button>
        <button className="text-secondary-950 flex items-center">
          <MdGolfCourse size={24} />
        </button>
      </div>

      {/* Center logo */}
      <div className='flex items-center justify-between'>
        <img src="/logo_lunar.png" alt="Lunar logo" className="h-10 w-11" />
        <div className="flex-grow text-center text-primary-950 text-xl font-semibold">
          Lunar
        </div>
      </div>

      {/* Right side with language dropdown */}
      <div>
        <LanguageDropdown/>
      </div>
    </nav>
  );
};

export default Nav;