
import React, { useState } from 'react';
import { useMenuContext } from '../../context/menuContext';
import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const Details: React.FC = () => {
    const { isDialogOpen, closeDialog, dialogData } = useMenuContext();
    const [count, setCount] = useState(0); 

    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    };

    const handleDecrement = () => {
        setCount(prevCount => Math.max(prevCount - 1, 0)); 
    };

    const reset = () => {
        setCount(0); 
    };

    // Check if dialogData is available before calculating totalPrice
    const totalPrice = dialogData && dialogData.price ? parseFloat(dialogData.price) * count : 0;

    if (!isDialogOpen || !dialogData) return null; 

    return (
        <section className='font-roboto overflow-scroll gap-y-2'>
            <Dialog open={isDialogOpen} onOpenChange={closeDialog}>  
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className='decoration-primary-800'>{dialogData.name}</DialogTitle>
                        <DialogDescription>
                            {dialogData.description}
                        </DialogDescription>
                    </DialogHeader>
                    <form className='flex flex-col justify-center items-center gap-4'>
                        <img src={dialogData.image.src} alt={dialogData.image.alt} />
                        <div className='flex flex-col gap-2 font-roboto text-secondary-950 '>
                            <p>Price: $<span>{dialogData.price}</span></p>
                            <p>Total Price: $<span>{totalPrice}</span></p>
                        </div>
                        <div className='flex gap-4'>
                            <Button type='button' variant="outline" size="icon" onClick={handleDecrement}>-</Button>
                            <span className='w-10 bg-primary-50 border border-secondary-800 text-secondary-600 items-bottom text-center'>
                                {count}
                            </span>
                            <Button type='button' variant="outline" size="icon" onClick={handleIncrement}>+</Button>
                        </div>
                        <div className='flex gap-x-4 justify-center w-full'>
                            <Button type='button' className='w-24 font-semibold rounded-xl' variant="outline" onClick={reset}>Cancel</Button>
                            <Button type='button' className='w-24 font-semibold rounded-xl' variant="outline">Order</Button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </section>
    );
}

export default Details;
