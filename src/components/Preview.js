import React, { useState } from 'react';
import MyCarousel from './MyCarousel'; // Ensure this path is correct
import '../styles/MyCarousel.css'; // Ensure this path is correct
// import HomePage from './HomePage';

const Preview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: "images/top_carousel_01.jpg",
      alt: "Top carousel image 1",
      link: "model1.html",
      name: "Jessica Stacy",
      height: "185",
      bust: "79",
      waist: "59",
      hips: "87",
      shoe: "39",
      eyes: "blue"
    },
    {
      src: "images/top_carousel_02.jpg",
      alt: "Top carousel image 2",
      link: "model2.html",
      name: "Emily Johnson",
      height: "170",
      bust: "82",
      waist: "60",
      hips: "88",
      shoe: "38",
      eyes: "green"
    },
    {
      src: "images/top_carousel_03.jpg",
      alt: "Top carousel image 3",
      link: "model3.html",
      name: "Sophia Brown",
      height: "175",
      bust: "84",
      waist: "62",
      hips: "90",
      shoe: "40",
      eyes: "hazel"
    },
    {
      src: "images/top_carousel_04.jpg",
      alt: "Top carousel image 4",
      link: "model4.html",
      name: "Olivia Davis",
      height: "165",
      bust: "80",
      waist: "58",
      hips: "85",
      shoe: "37",
      eyes: "brown"
    },
    {
      src: "images/top_carousel_05.jpg",
      alt: "Top carousel image 5",
      link: "model5.html",
      name: "Ava Wilson",
      height: "180",
      bust: "86",
      waist: "64",
      hips: "92",
      shoe: "41",
      eyes: "blue"
    },
    {
      src: "images/top_carousel_06.jpg",
      alt: "Top carousel image 6",
      link: "model6.html",
      name: "Mia Taylor",
      height: "172",
      bust: "83",
      waist: "61",
      hips: "89",
      shoe: "39",
      eyes: "green"
    },
    {
      src: "images/top_carousel_07.jpg",
      alt: "Top carousel image 7",
      link: "model7.html",
      name: "Isabella Anderson",
      height: "168",
      bust: "81",
      waist: "59",
      hips: "86",
      shoe: "38",
      eyes: "brown"
    },
    {
      src: "images/top_carousel_08.jpg",
      alt: "Top carousel image 8",
      link: "model8.html",
      name: "Charlotte Martinez",
      height: "177",
      bust: "85",
      waist: "63",
      hips: "91",
      shoe: "40",
      eyes: "hazel"
    },
    {
      src: "images/top_carousel_09.jpg",
      alt: "Top carousel image 9",
      link: "model9.html",
      name: "Amelia Lee",
      height: "169",
      bust: "78",
      waist: "57",
      hips: "84",
      shoe: "37",
      eyes: "blue"
    },
    {
      src: "images/top_carousel_10.jpg",
      alt: "Top carousel image 10",
      link: "model10.html",
      name: "Harper Walker",
      height: "182",
      bust: "88",
      waist: "65",
      hips: "94",
      shoe: "42",
      eyes: "green"
    }
  ];

  const visibleImages = 4; // Now set to display 4 images

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - visibleImages : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= images.length - visibleImages ? 0 : prevIndex + 1
    );
  };

  return (
    <section style = {{margin : "10px 20px 10px 20px"}} className="ds ms intro_section page_mainslider">
      {/* <HomePage/> */}
      <div style = {{margin : "100px 20px 20px 20px"}} className="page_maincarousel">
        <button className="carousel-control-prev prev-button" data-text="Prev" onClick={handlePrev}>
          &#10094;
        </button>
        <MyCarousel images={images.slice(currentIndex, currentIndex + visibleImages)} />
        <button className="carousel-control-next next-button" data-text="Next" onClick={handleNext}>
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default Preview;
