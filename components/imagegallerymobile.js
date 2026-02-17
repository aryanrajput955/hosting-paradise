'use client';

import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link';
import Image from 'next/image';

const ImageGalleryMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const places = [
    {
      name: 'Ladakh',
      image: 'img/banner/Ladakh.png',
      description: 'The Land of Monasteries and Majestic Peaks',
      price: 'Starting ₹27,990*',
      link: '/destinations/ladakh',
    },
    {
      name: 'Uttarakhand',
      image: 'img/banner/Uttrakhand.png',
      description: 'The Land of Gods and Eternal Beauty',
      price: 'Starting ₹19,990*',
      link: '/destinations/uttarakhand',
    },
    {
      name: 'Kerala',
      image: 'img/banner/Kerala.png',
      description: 'God’s Own Country',
      price: 'Starting ₹26,990*',
      link: '/destinations/kerala',
    },
    {
      name: 'Spiti',
      image: 'img/banner/Spiti.png',
      description: 'Spiti Valley',
      price: 'Starting ₹28,990*',
      link: '/destinations/spiti',
    },
    {
      name: 'Rajasthan',
      image: 'img/banner/Rajasthan.png',
      description: 'A Royal Journey Through Rajasthan',
      price: 'Starting ₹24,990*',
      link: '/destinations/rajasthan',
    },
    {
      name: 'Sikkim',
      image: 'img/banner/Sikkim.png',
      description: 'The Land of Mystical Splendor',
      price: 'Starting ₹27,990*',
      link: '/destinations/sikkim',
    },
    {
      name: 'Kashmir',
      image: 'img/banner/Kashmir.png',
      description: 'Kashmir Received first snowfall of the season',
      price: 'Starting ₹32,990*',
      link: '/destinations/kashmir',
    },
    {
      name: 'Himachal',
      image: 'img/banner/Himachal.png',
      description: 'A Cultural Haven in the Himalayas',
      price: 'Starting ₹28,990*',
      link: '/destinations/himachal',
    },
  ];

  const renderCard = (place) => (
    <div className="relative overflow-hidden rounded-2xl my-10 shadow-lg group aspect-square">
      <Image
        src={`/${place.image}`}
        alt={place.name}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <Link href={place.link}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          {/* <h2 className="text-lg font-bold text-white">{place.name}</h2> */}
          {/* <p className="text-sm text-white">{place.description}</p> */}
          <h3 className="text-sm font-bold text-white">{place.price}</h3>
        </div>
      </Link>
    </div>
  );

  /* =============== MOBILE VIEW =============== */
  if (isMobile) {
    return (
      <div className="container mx-auto px-4">
        <h1
          style={{ fontFamily: 'salazur' }}
          className="text-4xl text-[#00453a] font-bold text-center mt-10"
        >
          Top Domestic Tour Packages in India
        </h1>

        <div className="relative mobile-gallery-swiper">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView={2}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop
            speed={800}
            className="py-4"
          >
            {places.map((place, index) => (
              <SwiperSlide key={index}>{renderCard(place)}</SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* 🔥 Pill-style dots (fixed width/height) */}
        <style jsx global>{`
          .mobile-gallery-swiper .swiper-pagination {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 8px;
            margin-top: 18px;
          }

          .mobile-gallery-swiper .swiper-pagination-bullet {
            background: #d1d5db;
            width: 8px;
            height: 8px;
            opacity: 1;
            transition: all 0.3s ease;
            border-radius: 999px;
          }

          .mobile-gallery-swiper .swiper-pagination-bullet-active {
            background: #00453a;
            width: 24px; /* wider */
            height: 8px; /* same height -> pill */
            border-radius: 999px;
          }
        `}</style>
      </div>
    );
  }

  /* =============== DESKTOP VIEW =============== */
  return (
    <div className="container mx-auto px-4">
      <h1
        style={{ fontFamily: 'salazur' }}
        className="text-4xl md:text-7xl text-[#00453a] font-bold text-center my-10"
      >
        Top Domestic Tour Packages in India
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-2xl shadow-lg group aspect-square">
          <Image
            src="/img/banner/Kashmir.png"
            alt="Kashmir"
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <Link href="/destinations/kashmir">
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h2 className="text-xl font-bold text-white">Kashmir</h2>
              <p className="text-sm text-white">
                Kashmir Received first snowfall of the season
              </p>
              <h3 className="text-sm font-bold text-white">Starting ₹32,990*</h3>
            </div>
          </Link>
        </div>

        {places.slice(0, 6).map((place, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-2xl shadow-lg group aspect-square"
          >
            <Image
              src={`/${place.image}`}
              alt={place.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <Link href={place.link}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h2 className="text-lg font-bold text-white">{place.name}</h2>
                <p className="text-sm text-white">{place.description}</p>
                <h3 className="text-sm font-bold text-white">{place.price}</h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGalleryMobile;
