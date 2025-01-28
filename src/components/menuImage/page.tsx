// MenuImage.tsx
import React from 'react';
import {menuItems} from '../../context/menuData/MenuData';
import {
    Card,
    CardContent,
} from "@/components/ui/card";

interface MenuImageProps {
    selectedIndex: number | null;
}

const MenuImage: React.FC<MenuImageProps> = ({ selectedIndex }) => {
    return (
        <div className='mx-10 overflow-hidden bg-secondary-50'>
            {selectedIndex !== null && (
                <Card className='w-full h-130 border-none shadow-none'>
                    <CardContent className='p-0 w-full h-full object-cover'>
                        <img className='w-full h-full' src={menuItems[selectedIndex].image.src} alt={menuItems[selectedIndex].image.alt} />                        
                    </CardContent>
                </Card>
            )}
        </div>
    );
}

export default MenuImage;