"use client";
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    CarouselIndicator,
} from "@/components/ui/carousel";
import Image from 'next/image';

const images = [
    { src: './dish1.png', alt: 'Dish 1' },
    { src: './dish2.png', alt: 'Dish 2' },
    { src: './dish3.png', alt: 'Dish 3' },
    { src: './dish4.png', alt: 'Dish 4' },
    { src: './dish5.png', alt: 'Dish 5' },
];

const SliderComponent: React.FC = () => {
    return (
        <section className="flex items-center justify-center relative w-full h-screen overflow-hidden">
            <Carousel className="w-full h-full object-cover" totalItems={images.length}>
                <CarouselContent>
                    {images.map((image, index) => (
                        <CarouselItem key={index} index={index} className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-105 relative">
                            <img 
                                src="/bg.avif"
                                alt='Carousel Background'
                                className='absolute inset-0 w-full h-full object-cover -z-10'
                            />
                            <div className="p-0 m-0 w-full h-full flex items-center justify-center relative z-10"> 
                                <h1 className="font-roboto text-white text-9xl absolute top-20 z-10">Welcome to Lunar</h1>
                                <img src={image.src} alt={image.alt} className="w-3/4 h-4/4 object-fit absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20" />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className="absolute top-1/2 left-20 transform -translate-y-1/2 z-10"> 
                    <CarouselPrevious className="bg-white rounded-full p-2 shadow" />
                </div>
                <div className="absolute top-1/2 right-20 transform -translate-y-1/2 z-10"> 
                    <CarouselNext className="bg-white rounded-full p-2 shadow" />
                </div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {images.map((_, index) => (
                        <CarouselIndicator key={index} index={index} />
                    ))}
                </div>
            </Carousel>
        </section>
    );
};

export default SliderComponent;