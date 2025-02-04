"use client";
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    CarouselIndicator,
} from "@/components/ui/carousel";

const images = [
    { src: './dish1.png', alt: 'Dish 1' },
    { src: './dish2.png', alt: 'Dish 2' },
    { src: './dish3.png', alt: 'Dish 3' },
    { src: './dish4.png', alt: 'Dish 4' },
    { src: './dish5.png', alt: 'Dish 5' },
];

const SliderComponent: React.FC = () => {
    return (
        <section className="flex items-center justify-center relative w-svw h-1/4 overflow-hidden">
            <Carousel className="bg-black w-full h-full object-cover" totalItems={images.length}>
                <CarouselContent>
                    {images.map((image, index) => (
                        <CarouselItem key={index} index={index} className="transition-transform duration-500 ease-in-out transform hover:scale-105">
                            <div className="p-0 m-0 items-center justify-center"> 
                                <h1 className="text-#fff">Welcome to Lunar</h1>
                                <img src={image.src} alt={image.alt} className="w-1/2 h-1/2 object-fit" />

                                {/* <Card className=" border-none w-full h-full"> 
                                    <CardContent className="flex aspect-video items-center justify-center p-0"> 
                                        <img src={image.src} alt={image.alt} className="w-1/2 h-1/2 object-fit" />
                                    </CardContent>
                                </Card>  */}
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
                    <CarouselIndicator  key={index} index={index} />
                    ))}
                </div>
            </Carousel>
        </section>
    );
};

export default SliderComponent;