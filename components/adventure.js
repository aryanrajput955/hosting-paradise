'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function AdventureTours() {
  const [isMobile, setIsMobile] = useState(false);
  const paginationRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const cards = [
    {
      title: 'Group Tours',
      desc: 'Travel together and create lifelong friendships, that you can never forget.',
      img: '/img/shoot/Group_tour.jpeg',
      color: 'text-blue-600',
      hover: 'group-hover:bg-blue-600',
    },
    {
      title: 'Specialty Tours',
      desc: 'Experience our special tours, uniquely created to suit all your preferences.',
      img: '/img/shoot/Group_tour.jpeg',
      color: 'text-green-600',
      hover: 'group-hover:bg-green-600',
    },
    {
      title: 'Experiences',
      desc: 'Be part of an adventurous journey that brings you closer to nature.',
      img: '/img/experience.jpg',
      color: 'text-orange-600',
      hover: 'group-hover:bg-orange-600',
    },
  ];

  const Card = ({ item }) => (
    <div className="group bg-white rounded-lg shadow-lg p-3 md:p-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 text-center">

      {/* ✅ Smaller Image on Mobile */}
      <div className="w-full h-[140px] md:h-[210px] relative overflow-hidden rounded-lg mb-3 md:mb-4">
        <img
          src={item.img}
          alt={item.title}
          className="object-cover"
          style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0 }}
          loading="lazy"
          decoding="async"
        />
      </div>

      <h2 className="text-lg md:text-xl font-semibold text-gray-800">{item.title}</h2>
      <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4">{item.desc}</p>

      <Link
        href="#"
        className={`inline-flex items-center text-sm md:text-base ${item.color} font-medium transition-all duration-300 ${item.hover} group-hover:text-white group-hover:px-4 group-hover:py-2 group-hover:rounded-full`}
      >
        Explore
        <svg
          className="ml-2 w-4 h-4 transition-all duration-300 group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </Link>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:items-start justify-between">

      {/* LEFT CONTENT */}
      <div className="lg:w-[40%] text-center lg:text-left mb-10 lg:mb-0">
        <h1 style={{ fontFamily: 'salazur' }} className="text-4xl md:text-6xl font-bold text-[#FF7F50]">
          Customized Holiday Packages for Every Traveler
        </h1>
        <p style={{ fontFamily: 'jost' }} className="mt-4 text-[#00453a] text-xl">
          We have a wide range of tour options to meet all yourtravel needs, ensuring a memorable experience for everyone.
        </p>
      </div>

      {/* RIGHT CONTENT */}
      <div className="lg:w-[60%] lg:pl-10 w-full">

        {/* ✅ MOBILE SLIDER - Shows 1 card with peek of next */}
        {isMobile && (
          <>
            <Swiper
              modules={[Pagination, Autoplay]}
              slidesPerView={1.2}
              spaceBetween={12}
              centeredSlides={true}
              autoplay={{ delay: 2800, disableOnInteraction: false }}
              loop
              onBeforeInit={(swiper) => {
                swiper.params.pagination.el = paginationRef.current;
              }}
              pagination={{ clickable: true }}
              className="py-4"
            >
              {cards.map((item, i) => (
                <SwiperSlide key={i}>
                  <Card item={item} />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* ✅ DOTS COMPLETELY OUTSIDE CARDS */}
            <div
              ref={paginationRef}
              className="adventure-pagination flex justify-center mt-8"
            />
          </>
        )}

        {/* ✅ DESKTOP GRID */}
        {!isMobile && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.map((item, i) => (
              <Card key={i} item={item} />
            ))}
          </div>
        )}
      </div>

      {/* ✅ TRUE PILL DOTS – OUTSIDE ONLY */}
      <style jsx global>{`
        .adventure-pagination {
          position: absolute;
          left: 50%;
          bottom: -45px;
          transform: translateX(-50%);
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          min-height: 20px;
          width: 100%;
          pointer-events: auto;
        }

        .adventure-pagination .swiper-pagination-bullet {
          background: #d1d5db;
          width: 8px;
          height: 8px;
          opacity: 1;
          transition: all 0.3s ease;
          border-radius: 999px;
        }

        .adventure-pagination .swiper-pagination-bullet-active {
          background: #ff7f50;
          width: 26px;
          height: 8px;
          border-radius: 999px;
        }
      `}</style>
    </div>
  );
}