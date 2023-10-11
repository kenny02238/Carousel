"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

const Carousel = () => {
  const slides = [
    "https://picsum.photos/seed/picsum/3000/2000",
    "https://picsum.photos/id/237/3000/2000",
    "https://picsum.photos/3000/2000",
    // 添加更多图片链接
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const nextSlide = () => {
    const nextIndex = (currentIndex + 1) % slides.length;
    setCurrentIndex(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    setCurrentIndex(prevIndex);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-[300px] border relative overflow-hidden ">
        <button onClick={prevSlide}>Previous</button>
        <div
          className="h-[200px] relative transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * 300}px)`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="w-[300px] h-[200px] absolute"
              style={{
                transform: `translateX(${index * 300}px)`,
              }}
            >
              <Image
                src={slide}
                layout="fill"
                objectFit="cover"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>
        <button onClick={nextSlide}>Next</button>
      </div>
    </div>
  );
};

export default Carousel;
