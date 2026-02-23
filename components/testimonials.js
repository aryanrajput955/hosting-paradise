"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Link from 'next/link';

const testimonials = [
  { 
    image: "/testimonials/t5.jpeg", 
    title: "Flawless Travel, Every Time!", 
    text: "Switched to Paradise Bliss after bad experiences elsewhere. Kashmir & Spiti both flawless—safe vehicles, local insights, 24/7 help. The drivers knew every shortcut and shared awesome stories at Key Monastery and Dal Lake. Pricing was fair, no surprises. They're building the real satisfaction for happy travelers!", 
    name: "Reshma T.",
    location: "Ahmedabad"
  },
  { 
    image: "/testimonials/t23.jpeg", 
    title: "Char Dham Like a Pro!", 
    text: "Just finished Char Dham with Paradise Bliss Tours – driver uncle was like a pro on those crazy roads, got us VIP darshan without stress. Felt super safe, will definitely go back! Highly recommend.", 
    name: "Shweta",
    location: "Pune"
  },
  { 
    image: "/testimonials/t1.jpeg", 
    title: "Kashmir Perfection!", 
    text: "Booked Kashmir with Paradise Bliss, and it was perfection. From Srinagar houseboat vibes to snowy Gulmarg gondola rides and frozen Dal Lake shikara, the driver knew every shortcut past traffic. Felt like a local, not a tourist. Memorable af, already planning Spiti next! ❤️", 
    name: "Sachin",
    location: "Noida"
  },
  { 
    image: "/testimonials/t3.jpeg", 
    title: "Honeymoon Goals Achieved!", 
    text: "Our Kashmir honeymoon was straight fire thanks to Paradise Bliss. Betaab Valley snow photoshoot, Sonamarg's Thajiwas Glacier sledding, Dal Lake frozen shikara at dusk. Personalized touches made it special. Highly recommend for couples!", 
    name: "Nilesh & Megha",
    location: "Bandra"
  },
  { 
    image: "/testimonials/t20.jpeg", 
    title: "Dreamy Honeymoon Vibes!", 
    text: "Kashmir honeymoon sorted by Paradise Bliss was dreamy! Betaab Valley snow pics, Sonmarg zero-point thrills, cozy Srinagar nights. They even arranged a private shikara—felt like a movie. Highly recommend!", 
    name: "Shweta & Mukul",
    location: "Delhi"
  },
  { 
    image: "/img/person3.jpg", 
    title: "Best Family Memories!", 
    text: "Our family Kashmir adventure rocked thanks to Paradise Bliss! Kids went wild on the Gulmarg cable car and snow fights. Apple orchard picnics in Pahalgam, houseboat nights in Srinagar with Kashmiri stories. Aru Valley hikes were gentle and scenic. Permits, transport, everything seamless. Best family memories!", 
    name: "Ramesh P.",
    location: "Surat"
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
    appendDots: dots => (
      <div
        style={{
          position: "absolute",
          width: "100%",
          bottom: "-40px",
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
              <div className="bg-[#EAF6F6] rounded-lg shadow-md p-6 text-center h-[400px] flex flex-col justify-between">
                {/* Review Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {testimonial.title}
                </h3>

                {/* Review Text */}
                <p className="text-gray-700 italic text-sm leading-relaxed flex-1">"{testimonial.text}"</p>

                {/* Reviewer Image, Name & Location */}
                <div className="flex items-center gap-3 mt-4 text-left">
                  <div className="relative w-12 h-12 flex-shrink-0">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="shadow-lg rounded-full object-cover"
                      style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0 }}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">{testimonial.name}</h4>
                    <span className="text-xs text-gray-500">{testimonial.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* See More Button */}
      <div className="flex justify-center mt-16">
        <Link href="/testimonials">
          <button
            className="bg-green-900 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-800 transition cursor-pointer"
            style={{ fontFamily: "jost" }}
          >
            See More Reviews →
          </button>
        </Link>
      </div>
    </div>
  );
}
