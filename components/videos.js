'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useRef, useEffect } from 'react';

export default function VideoSlider() {
  const videos = [
    { src: '/videos/vid1.mp4' },
    { src: '/videos/vid.2.mp4' },
    { src: '/videos/vid3.mp4' },
    { src: '/videos/vid4.mp4' },
    { src: '/videos/rajasthan.mp4' },
    { src: '/videos/kerela.mp4' },
  ];

  const videoRefs = useRef([]);

  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, videos.length);
  }, [videos.length]);

  const handleMouseEnter = (index) => {
    videoRefs.current.forEach((ref, i) => {
      if (ref && i !== index) ref.pause();
    });
    if (videoRefs.current[index]) {
      const playPromise = videoRefs.current[index].play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay was prevented, ignore
        });
      }
    }
  };

  const handleMouseLeave = (index) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].pause();
    }
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-4">
        <h1
          style={{ color: 'var(--color-dark)', fontFamily: 'salazur' }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold pt-8 sm:pt-10 text-center"
        >
          See What It Feels Like
        </h1>
      </div>
      <div style={{ backgroundColor: 'var(--light-green)' }} className="flex items-center justify-center relative overflow-hidden">
        <div className="max-w-7xl w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-8 sm:py-10 md:py-12 relative">
          {/* Nav arrows - Hidden on mobile, visible on larger screens */}
          <button 
            style={{ backgroundColor: 'var(--color-dark)' }} 
            className="video-swiper-button-prev hidden md:flex hover:scale-110 ease-in-out transition-all cursor-pointer absolute left-2 lg:left-4 xl:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 lg:w-11 lg:h-11 xl:w-12 xl:h-12 rounded-full shadow-lg items-center justify-center border border-[#00453a]/30"
            aria-label="Previous"
          >
            <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            style={{ backgroundColor: 'var(--color-dark)' }} 
            className="video-swiper-button-next hidden md:flex hover:scale-110 ease-in-out transition-all cursor-pointer absolute right-2 lg:right-4 xl:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 lg:w-11 lg:h-11 xl:w-12 xl:h-12 rounded-full shadow-lg items-center justify-center border border-[#00453a]/30"
            aria-label="Next"
          >
            <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={10}
            slidesPerView={1}
            pagination={{ clickable: true, dynamicBullets: false, el: '.video-pagination' }}
            navigation={{ 
              nextEl: '.video-swiper-button-next', 
              prevEl: '.video-swiper-button-prev',
              enabled: true 
            }}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = '.video-swiper-button-prev';
              swiper.params.navigation.nextEl = '.video-swiper-button-next';
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            breakpoints={{
              // Mobile: 1 video
              0: { 
                slidesPerView: 1, 
                spaceBetween: 10 
              },
              // Small tablets: 1.5 videos
              480: { 
                slidesPerView: 1.5, 
                spaceBetween: 12 
              },
              // Tablets: 2 videos
              640: { 
                slidesPerView: 2, 
                spaceBetween: 15 
              },
              // Small laptops: 3 videos
              768: { 
                slidesPerView: 2.5, 
                spaceBetween: 18 
              },
              // Laptops: 4 videos (bigger size)
              1024: { 
                slidesPerView: 3.5, 
                spaceBetween: 20 
              },
              // Large screens: 4 videos (even bigger)
              1280: { 
                slidesPerView: 4, 
                spaceBetween: 24 
              },
            }}
            className="py-4"
          >
            {videos.map((video, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  whileHover={{ scale: 1.05, boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)' }}
                  className="bg-transparent rounded-xl shadow-xl overflow-hidden transition-all duration-300 relative"
                >
                  <div className="w-full h-0 pb-[177.78%]">
                    <video
                      ref={(el) => (videoRefs.current[index] = el)}
                      src={video.src}
                      loop
                  
                      playsInline
                      className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={() => handleMouseLeave(index)}
                    />
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          <style jsx global>{`
            .video-pagination {
              width: 100% !important;
              display: flex !important;
              justify-content: center !important;
              align-items: center !important;
              gap: 8px;
              min-height: 20px;
              margin: 0 auto;
              padding: 0 20px;
            }
            .video-pagination .swiper-pagination-bullet {
              background: #d1d5db;
              width: 8px;
              height: 8px;
              opacity: 1;
              transition: all 0.3s ease;
              margin: 0 !important;
              display: inline-block;
              flex-shrink: 0;
            }
            @media (min-width: 640px) {
              .video-pagination .swiper-pagination-bullet {
                width: 10px;
                height: 10px;
              }
            }
            .video-pagination .swiper-pagination-bullet-active {
              background: #00453A;
              width: 24px;
              border-radius: 5px;
            }
            @media (min-width: 640px) {
              .video-pagination .swiper-pagination-bullet-active {
                width: 28px;
              }
            }
          `}</style>
          <div className="video-pagination mt-4 sm:mt-6 w-full flex justify-center"></div>
        </div>
      </div>
    </>
  );
}