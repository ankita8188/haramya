"use client"
import React, { useState } from 'react';

const slides = [
  {
    title: 'Traditions of Bharat',
    heading: 'Language',
    content:
      'India, or Bharat, is a linguistically diverse country with over 120 languages spoken. The official languages are Hindi and English, with 22 other languages. Each state has its own regional language, adding to the cultural richness. English is widely understood in major cities and tourist destinations, making travel easy for visitors.',
    image:
      '/card2.jpg.jpg',
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

const InfoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const { title, heading, content, image } = slides[currentIndex];

  return (
    <div className='w-full bg-black' data-aos="fade-up">
      <div className="text-white w-full max-w-7xl mx-auto p-4 sm:p-6 md:p-8 lg:p-12 shadow-lg" data-aos="fade-up" data-aos-delay="100">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-12">
          <div className="w-full md:w-1/2 text-center md:text-left order-2 md:order-1" data-aos="slide-right" data-aos-delay="200">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6">
              {title}
            </h2>
            <img 
              src={image} 
              alt={title} 
              className="w-full max-w-md sm:max-w-lg md:max-w-full h-auto rounded-lg sm:rounded-xl md:rounded-2xl shadow-md mx-auto md:mx-0" 
              data-aos="zoom-in" data-aos-delay="300"
            />
          </div>

          <div className="w-full md:w-1/2 order-1 md:order-2 flex flex-col" data-aos="slide-left" data-aos-delay="200">
            <div className="mb-6 md:mb-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-2 sm:mb-3">
                {heading}
              </h2>
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                {content}
              </p>
            </div>

            <div className="flex justify-center md:justify-end mt-auto pt-4">
              <button
                onClick={nextSlide}
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black 
                           w-12 h-12 sm:w-14 sm:h-14 rounded-full 
                           flex items-center justify-center 
                           text-2xl sm:text-3xl font-bold 
                           transition duration-300"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCarousel;