"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  { 
    image: "/img/person2.jpg", 
    title: "Unforgettable Manali Adventure!", 
    text: "The snow-capped peaks, adventure activities, and excellent tour management made our Manali trip spectacular. Our guide went above and beyond to ensure comfort...", 
    name: "Patel Family" 
  },
  { 
    image: "/img/person.avif", 
    title: "Magical Ladakh Experience", 
    text: "Our Ladakh tour was breathtaking. From Pangong Lake to local monasteries, everything was perfectly organized. The team handled altitude acclimatization very professionally...", 
    name: "Kumar Family" 
  },
  { 
    image: "/img/person3.jpg", 
    title: "Perfect Goa Beach Holiday", 
    text: "Paradise Bliss made our Goa trip memorable with perfect hotel selections, amazing beach activities, and well-planned sightseeing. The nightlife experiences were fantastic and soo amazing...", 
    name: "Singh Family" 
  },
  { 
    image: "/img/person2.jpg", 
    title: "Amazing Kashmir Trip Experience!", 
    text: "Our Kashmir tour with Paradise Bliss was truly wonderful. The winter season, the fun in the snow, and the care taken by our tour leader made this trip unforgettable...", 
    name: "Reddy Family" 
  },
  { 
    image: "/img/person.avif", 
    title: "Beautiful Kerala Backwaters", 
    text: "Our Kerala trip was a dream come true. The backwaters, houseboat stay, and local cuisine were amazing. The team ensured a comfortable and enjoyable experience...", 
    name: "Menon Family" 
  },
  { 
    image: "/img/person3.jpg", 
    title: "Wonderful Northeast Adventure", 
    text: "Our Northeast tour was a mix of adventure and cultural experiences. The team ensured we explored the best of the region. The local guides were very knowledgeable...", 
    name: "Sharma Family" 
  },
];

export default function TestimonialSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => setActiveIndex(newIndex),
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
    // Append dots with absolute positioning to be centered on screen
    appendDots: dots => (
      <div
        style={{
          position: "absolute",
          width: "100%",
          bottom: "-40px", // Lower dots by 40px from the slider container
          left: 0,
          display: "flex",
          justifyContent: "center",
          
        }}
      >
        <ul style={{ display: "flex", gap: "8px", margin: 0, padding: 0, listStyle: "none" }}>
          {dots}
        </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: i === activeIndex ? "#00453a" : "#C4DAD2",
          transition: "background-color 0.3s",
        }}
      ></div>
    ),
  };

  return (
    <div className="max-w-5xl mx-auto py-12 px-6 relative">
      {/* Heading */}
      <h2 style={{ fontFamily: "Higher jump", color: "var(--coral-pink)" }} className=" sm:text-2xl lg:text-3xl font-bold text-center mb-6">
       Customer Reviews & Testimonials
      </h2>
      <p className="text-center">
        Customer satisfaction is our major goal. See what our customers say about us.
      </p>

      {/* Slider */}
      <div className="relative">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-4">
              {/* Added a fixed height (h-[400px]) and flex layout for equal card height */}
              <div className="bg-[#EAF6F6] rounded-lg shadow-md p-6 text-center h-[400px] flex flex-col justify-between">
                {/* User Image */}
                <div className="w-16 h-16 mx-auto mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full shadow-lg rounded-full object-cover"
                  />
                </div>

                {/* Review Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {testimonial.title}
                </h3>

                {/* Review Text */}
                <p className="text-gray-700 italic">"{testimonial.text}"</p>

                {/* Reviewer Name */}
                <h4 className="mt-2 font-semibold text-gray-900">{testimonial.name}</h4>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
