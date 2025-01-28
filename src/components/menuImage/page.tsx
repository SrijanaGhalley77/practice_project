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
        <div className=''>
            {selectedIndex !== null && (
                <Card>
                    <CardContent>
                        <img src={menuItems[selectedIndex].image.src} alt={menuItems[selectedIndex].image.alt} />
                        <p>{menuItems[selectedIndex].image.alt}</p>
                    </CardContent>
                </Card>
            )}
        </div>
    );
}

export default MenuImage;