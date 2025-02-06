'use client';
import React, {useState} from 'react';
import { useMenuContext } from '../../context/menuContext/page';
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
    const [totalPrice, setTotalPrice] = useState(0); 


    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);

    };

    const handleDecrement = () => {
        setCount(prevCount => Math.max(prevCount - 1, 0)); 
    };
    const reset = () => {
        setCount(0); 
    };

    if (!isDialogOpen || !dialogData) return null; 

    return (
        <section className='font-roboto overflow-scroll'>
            <Dialog open={isDialogOpen} >  
            {/* onOpenChange={closeDialog}              */}
            <DialogContent>
                    <DialogHeader>
                        <DialogTitle className='decoration-primary-800'>{dialogData.name}</DialogTitle>
                        <DialogDescription>
                            {dialogData.description}
                        </DialogDescription>
                    </DialogHeader>
                    <form className='flex flex-col justify-center items-center gap-2'>
                        <img src={dialogData.image.src} alt={dialogData.image.alt} />
                        <div className='flex flex-col gap-2 '>
                            <p>Price: <span>{dialogData.price}</span></p>
                            <p>Total Price: <span></span></p>
                        </div>
                        <div className='flex gap-2'>
                            <Button variant="outline" size="icon" onClick={handleDecrement}>-</Button>
                            <span className='w-10 bg-primary-50 border border-secondary-800 text-secondary-600 items-center text-center'>
                                {count}
                            </span>
                            <Button variant="outline" size="icon" onClick={handleIncrement}>+</Button>
                        </div>
                        <div className='flex gap-x-4 justify-center w-full'>
                            <Button className='w-24 font-semibold rounded-xl' variant="outline" onClick={reset}>Cancel</Button>
                            <Button className='w-24 font-semibold rounded-xl' variant="outline">Order</Button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </section>
    );
}

export default Details;
