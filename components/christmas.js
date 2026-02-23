'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';


const HolidaySaleBanner = () => {
  const scrollContainerRef = useRef(null);

  const destinations = [
    { name: 'KASHMIR', image: '/img/kashmir.jpg', url: '/destinations/kashmir' },
    { name: 'LADAKH', image: '/img/ladakh.jpg', url: '/destinations/ladakh' },
    { name: 'UTTARAKHAND', image: '/img/uttarakhand2.jpeg', url: '/destinations/uttarakhand' },
    { name: 'SPITI VALLEY', image: '/img/spiti.jpg', url: '/destinations/spiti-valley' },
    { name: 'KERALA', image: '/img/kerla.jpg', url: '/destinations/kerala' },
    { name: 'RAJASTHAN', image: '/img/rajasthan.jpeg', url: '/destinations/rajasthan' },
    { name: 'SIKKIM', image: '/img/sikkim.avif', url: '/destinations/sikkim' },
    { name: 'HIMACHAL', image: '/img/himachal.jpg', url: '/destinations/himachal' },
  ];

  const doubledDestinations = [...destinations, ...destinations, ...destinations];

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    let scrollPos = 0;
    let intervalId = null;

    const autoScroll = () => {
      scrollPos += 1;
      if (scrollPos >= container.scrollWidth / 3) scrollPos = 0;
      container.scrollLeft = scrollPos;
    };

    const startScroll = () => {
      intervalId = setInterval(autoScroll, 30);
    };

    const stopScroll = () => {
      if (intervalId) clearInterval(intervalId);
    };

    startScroll();
    container.addEventListener('mouseenter', stopScroll);
    container.addEventListener('mouseleave', startScroll);

    return () => {
      stopScroll();
      container.removeEventListener('mouseenter', stopScroll);
      container.removeEventListener('mouseleave', startScroll);
    };
  }, []);

  const RotatingSnowflake = ({ delay, position, size, imageUrl }) => (
    <div className={`absolute ${position}`} style={{ animationDelay: delay }}>
      {imageUrl ? (
        <img src={imageUrl} alt="snowflake" width={24} height={24} className={`${size} opacity-90 animate-spin drop-shadow-lg`} style={{ animationDuration: '8s' }} loading="lazy" decoding="async" />
      ) : (
        <svg className={`${size} text-white opacity-90 animate-spin`} viewBox="0 0 24 24" fill="currentColor" style={{ animationDuration: '8s' }}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          <path d="M12 8l1.5 3L17 12l-3.5.5L12 16l-1.5-3L7 12l3.5-.5L12 8z" />
        </svg>
      )}
    </div>
  );

  return (
    <>
      <style>{`
        @keyframes shimmer { 0%, 100% { opacity: 0.6; } 50% { opacity: 0.8; } }
        .animate-shimmer { animation: shimmer 3s ease-in-out infinite; }
        #destinations-scroll::-webkit-scrollbar { display: none; }
      `}</style>
      <div className="w-full mt-6">
      <div className="relative bg-[#00453a] overflow-hidden shadow-2xl">
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: `url('/img/snowbg.png')`, backgroundSize: '200px 200px' }}></div>
        <div className="absolute inset-0 bg-black opacity-5"></div>
        <RotatingSnowflake delay="0s" position="top-3 left-8 md:block hidden" size="w-6 h-6" imageUrl="/img/flake.png" />
        <RotatingSnowflake delay="1s" position="top-6 left-1/4 md:block hidden" size="w-4 h-4" imageUrl="/img/flake.png" />
        <RotatingSnowflake delay="0.5s" position="top-2 right-12 md:block hidden" size="w-6 h-6" imageUrl="/img/flake.png" />
        <RotatingSnowflake delay="1.5s" position="top-8 right-1/3 md:block hidden" size="w-5 h-5" imageUrl="/img/flake.png" />
        <RotatingSnowflake delay="0.7s" position="bottom-2 left-1/3 md:block hidden" size="w-5 h-5" imageUrl="/img/flake.png" />
        <div className="relative z-10 py-2 md:py-5 px-2 md:px-6">
          <div className="flex justify-center mb-0 md:mb-1"><p className="text-white text-xs md:text-lg font-extrabold tracking-widest drop-shadow-md">Early Bird</p></div>
          <div className="flex flex-col items-center gap-0 md:gap-0.5 mb-1 md:mb-3">
            <div className="flex items-center gap-1 md:gap-2">
              <h1 className="text-white text-3xl md:text-6xl font-extrabold tracking-widest drop-shadow-2xl">SALE</h1>
              <img src="/img/santa.png" alt="sale" width={48} height={48} className="w-6 h-6 md:w-12 md:h-12 hover:scale-110 transition-transform duration-300 hover:rotate-25 drop-shadow-lg" loading="lazy" decoding="async" />
            </div>
            <h2 className="text-white text-base md:text-3xl font-extrabold tracking-wide drop-shadow-lg text-center">Christmas & New Year</h2>
          </div>
          <div className="flex justify-center mb-1.5 md:mb-4">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-xl blur opacity-60 group-hover:opacity-80 transition duration-1000 shadow-xl"></div>
              <div className="relative bg-gradient-to-r from-yellow-200 to-yellow-300 px-2.5 py-1 md:px-5 md:py-2 rounded-lg md:rounded-xl border-2 border-white shadow-2xl">
                <p className="text-red-700 font-black text-xs md:text-lg tracking-wider drop-shadow-md text-center">GET DISCOUNTS UP TO ₹ 10,000</p>
              </div>
            </div>
          </div>
          <div className="h-0.5 bg-gradient-to-r from-transparent via-yellow-200 to-transparent opacity-60"></div>
          <div className="px-1 md:px-4 py-1.5 md:py-3">
            <div className="max-w-6xl mx-auto">
              <div ref={scrollContainerRef} id="destinations-scroll" className="flex gap-1 md:gap-2 overflow-x-hidden px-1 md:px-6 py-1 md:py-2" style={{ scrollBehavior: 'smooth' }}>
                {doubledDestinations.map((dest, idx) => (
                  <div key={idx} className="flex-shrink-0 group cursor-pointer transform transition-all duration-300 hover:-translate-y-2">
                    <Link href={dest.url}>
                      <div className="relative rounded-md md:rounded-xl overflow-hidden shadow-lg hover:shadow-2xl border-2 md:border-3 border-yellow-300 bg-white">
                        <div className="relative h-12 w-26 md:h-20 md:w-28 overflow-hidden bg-gray-200">
                          <img src={dest.image} alt={dest.name} className="absolute inset-0 object-cover object-center group-hover:scale-110 transition-transform duration-500" style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0 }} loading="lazy" decoding="async" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-50 transition-all duration-300"></div>
                        </div>
                      </div>
                      <p className="text-center font-bold text-white mt-0.5 md:mt-2 text-[9px] md:text-xs tracking-wider drop-shadow-md group-hover:text-yellow-300 transition-colors">{dest.name}</p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-200 to-transparent opacity-60"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-40"></div>
      </div>
      </div>
    </>
  );
};

export default HolidaySaleBanner;