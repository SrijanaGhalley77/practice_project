import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa'; // Importing a down arrow icon from react-icons

const LanguageDropdown: React.FC = () => {
  const [language, setLanguage] = useState('English');
  const [flag, setFlag] = useState('/usa.png'); // Store flag path

  const handleLanguageChange = (value: string, flagSrc: string) => {
    setLanguage(value);
    setFlag(flagSrc); // Update flag when language is changed
  };

  return (
    <div className={`relative inline-block text-left group font-roboto`}>
      <div>
        <button
          type="button"
          className="inline-flex justify-between items-center w-full  bg-white text-sm font-semibold text-stone-700 hover:bg-gray-50 focus:outline-none font-medium"
          aria-haspopup="true"
          aria-expanded="true"
        >
          <img src={flag} alt="Selected Language Flag" className="mr-2 h-6 w-6" />
          {language}
          <FaChevronDown className="ml-2 size-2 text-gray-500" /> {/* Add down arrow icon */}
        </button>
      </div>

      {/* Dropdown menu */}
      <div className="absolute right-0 top-4 z-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition duration-150 ease-in-out pointer-events-none group-hover:pointer-events-auto">
        <ul className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          <li>
            <button
              onClick={() => handleLanguageChange('English', '/usa.png')}
              className="flex items-center w-full px-4 py-2 text-sm text-stone-700 hover:bg-gray-100"
            >
              <img src="/usa.png" alt="USA Flag" className="mr-2 h-6 w-6 font-semibold" />
              English
            </button>
          </li>
          <li>
            <button
              onClick={() => handleLanguageChange('German', '/germany.png')}
              className="flex items-center w-full px-4 py-2 text-sm text-stone-700 hover:bg-gray-100"
            >
              <img src="/germany.png" alt="German Flag" className="mr-2 h-6 w-6 font-semibold" />
              German
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LanguageDropdown;
