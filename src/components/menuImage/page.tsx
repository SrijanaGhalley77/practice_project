import React from 'react';
import { useMenuContext } from '../../context/menuContext/page'; 
import {
    Card,
    CardContent,
} from "@/components/ui/card";

const MenuImage: React.FC = React.memo(() => {
    const { selectedRowIndex, dataToPass } = useMenuContext(); 

    return (
        <div className='mx-10 overflow-hidden bg-secondary-50'>
            {selectedRowIndex !== null && dataToPass[selectedRowIndex] && (
                <Card className='w-full h-130 border-none shadow-none'>
                    <CardContent className='p-0 w-full h-full object-cover'>
                        <img 
                            className='w-full h-full transition duration-200' 
                            src={dataToPass[selectedRowIndex].image.src} 
                            alt={dataToPass[selectedRowIndex].image.alt} 
                        />                        
                    </CardContent>
                </Card>
            )}
        </div>
    );
});

export default MenuImage;
