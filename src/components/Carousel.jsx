import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

export default function Carousel() {
  const slides = [
    {
      url: "/hero/hero1.jpg",
      title: "What is Coating And Adhesive?",
      content:
        "We’re so glad you’re here! We always improvise our products in order to better suit market needs & developments.",
    },
    {
      url: "/hero/hero2.jpg",
      title: "Global July Free Plastic Movements",
      content:
        "Global movement to reduce plastic waste that is increasing worldwide July Free Plastic concrete actions that are carried out every year during the month of July.",
    },
    {
      url: "/hero/hero4.jpg",
      title: "We Supports Environmental Care",
      content:
        "Did you know that an average tree can release approx 130 kg of oxygen per year. The more trees that are sustainable, the more oxygen is produced",
    },
    {
      url: "/hero/hero5.jpg",
      title: "Ecoth!nk: Think Eco Be Eco",
      content:
        "Environmentally friendly food packaging paper solutions that have emerged with the problem of plastic packaging waste that is increasingly abundant & difficult to decompose again.",
    },
    {
      url: "/hero/hero6.jpg",
      title: "Start Small to Save Our Planet",
      content:
        "Go Green for a better live. one tree for a more meaningful life \n#saveourearth",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-[1600px] h-[570px] w-full m-auto relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full bg-center bg-cover duration-500 brightness-100"
      >
        <div className="backdrop-blur-sm w-[35%] bg-black/30 absolute inset-x-[10%] bottom-5 hidden py-5 px-5 rounded-md text-center text-gray-200 md:block ">
          <h3 className="text-[32px]">{slides[currentIndex].title}</h3>
          <p className="mb-5 mt-5">{slides[currentIndex].content}</p>
          <button
            type="button"
            className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-5 py-2.5 rounded-md"
          >
            Learn More
          </button>
        </div>
      </div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex -top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}
