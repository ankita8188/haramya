
"use client";
import React, { useState, useEffect } from "react"; 
import { ArrowRight, ArrowLeft } from "lucide-react";
import Image from "next/image"; // Import Image component

const images = [
  "/bara1.jpg",
  "/rumi-darwaza-from-bara.jpg"
  
];

const ImageSlider = () => { 
  const [current, setCurrent] = useState(0);

  const nextSlide = () => { 
    setCurrent((prev) => (prev + 1) % images.length); 
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
     // Auto slide every 3 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-lg overflow-hidden bg-black ">
      <Image
        src={images[current]}
        alt="Slider"
        width={500}
        height={250}
        className="w-[85rem] h-[25rem] object-cover transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-opacity-50 flex items-center justify-between px-6">
        <h1 className="text-white text-4xl font-bold">Rules of Behaviour</h1>
        <div className="flex gap-4">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:bg-opacity-10 transition"
          >
            <ArrowLeft color="white" />
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:bg-opacity-10 transition"
          >
            <ArrowRight color="white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
