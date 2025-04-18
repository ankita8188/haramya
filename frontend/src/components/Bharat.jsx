
"use client"
import React, { useState } from 'react';

const slides = [
  {
    title: 'Traditions of Bharat',
    heading: 'Language',
    content:
      'India, or Bharat, is a linguistically diverse country with over 120 languages spoken. The official languages are Hindi and English, with 22 other languages. Each state has its own regional language, adding to the cultural richness. English is widely understood in major cities and tourist destinations, making travel easy for visitors.',
    image:
      '/card1.jpg.jpg',
  },
  {
    title: 'Culture of Bharat',
    heading: 'Festivals',
    content:
      'India celebrates a wide range of festivals from different religions and regions, including Diwali, Eid, Christmas, Holi, and Pongal. These festivals reflect the unity in diversity of the country and are celebrated with great enthusiasm.',
    image:
      '/rumi-darwaza-from-bara.jpg',
  },
  
];

const BharatCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const { title, heading, content, image } = slides[currentIndex];

  return (
    <div className="bg-black text-white w-[95rem] h-[30rem]  shadow-lg">
      
      <div className="flex flex-col md:flex-row items-center gap-4">
        {/* Left Side */}
        

        {/* Right Side */}
        <div className="w-3/4">
          <h2 className="text-xl font-semibold mt-8 text-[25px] ml-6">{heading}</h2>
          <p className="text-sm leading-relaxed text-[20px] ml-6">{content}</p>
       

        <div className=" justify-end mt-6">
        <button
          onClick={nextSlide}
          className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-full ml-[50rem]"
        >
          →
        </button>
      </div>
      </div>
        <div className="md:w-1/2 text-center">
          <h2 className="text-xl font-semibold mr-[4rem] mb-[3rem] text-[22px]">{title}</h2>
          <img src={image} alt={title} width={400} height={350} className="rounded-xl shadow-md ml-[4rem]" />
        </div>
      </div>

      {/* Right Arrow Only */}
      
    </div>
  );
};

export default BharatCarousel;