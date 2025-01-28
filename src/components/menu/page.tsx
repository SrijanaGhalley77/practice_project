'use client';
import React, { useState} from 'react';
import MenuTable from '../menuTable/page';
import MenuImage from '../menuImage/page';


const Menu: React.FC = () => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(0);

    const handleRowClick = (index: number) => {
        setSelectedIndex(index);
    };

    return (
        <div className='flex justify-between w-full h-svh'>
          <div className="w-1/2 p-x-5">
            <MenuTable onRowClick={handleRowClick} />
          </div>
          <div className="w-1/2">
            <MenuImage selectedIndex={selectedIndex} />
          </div>
        </div>
    );
};

export default Menu;