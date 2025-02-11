'use client';
import React from 'react';
import MenuTable from '../menuTable';
import MenuImage from '../menuImage';
import { useMenuContext } from '../../context/menuContext';

const Menu: React.FC = () => {
    const { dataToPass, handleRowClick, handleRowHover } = useMenuContext();

    return (
        <div className='flex justify-between w-full h-svh'>
          <div className="w-1/2 px-5">
            <MenuTable data={dataToPass} onRowHover={handleRowHover} onRowClick={handleRowClick} />
          </div>
          <div className="w-1/2">
            <MenuImage  />
          </div>
        </div>
    );
};

export default Menu;
