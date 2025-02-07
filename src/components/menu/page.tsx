'use client';
import React from 'react';
import MenuTable from '../menuTable/page';
import MenuImage from '../menuImage/page';
import { useMenuContext } from '../../context/menuContext/page';

const Menu: React.FC = () => {
    const { dataToPass, handleRowClick } = useMenuContext();

    return (
        <div className='flex justify-between w-full h-svh'>
          <div className="w-1/2 px-5">
            <MenuTable data={dataToPass} onRowClick={handleRowClick} />
          </div>
          <div className="w-1/2">
            <MenuImage  />
          </div>
        </div>
    );
};

export default Menu;
