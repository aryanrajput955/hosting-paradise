  'use client';
  import React from 'react';
  import Image from 'next/image';

  import { Swiper, SwiperSlide } from 'swiper/react';
  import { Autoplay, Pagination } from 'swiper/modules';
  import 'swiper/css';
  import 'swiper/css/pagination';

  const Banner1 = () => {
    const banners = [
      { src: '/img/banner1.jpg', alt: 'Group Tours' },
      { src: '/img/banner2.jpg', alt: 'Adventure Tours' },
      // Add more banners here if needed
    ];

    return (
      <div className="flex justify-center items-center pt-12 sm:pt-14 md:pt-16 px-3 sm:px-4 md:px-6">
        <div className="w-full max-w-[100rem] relative">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              el: '.banner-pagination',
              dynamicBullets: false,
            }}
            loop={true}
            speed={800}
            className="rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-lg"
          >
            {banners.map((banner, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full">
                  {/* Mobile Banner */}
                  <div className="block md:hidden">
                    <Image
                      className="object-cover"
                      src={banner.src}
                      alt={banner.alt}
                      width={1200}
                      height={400}
                      style={{ width: '100%', height: 'auto' }}
                      loading="lazy"
                    />
                  </div>
                  {/* Desktop Banner */}
                  <div className="hidden md:block">
                    <Image
                      className="object-cover"
                      src={banner.src}
                      alt={banner.alt}
                      width={1920}
                      height={600}
                      style={{ width: '100%', height: 'auto' }}
                      loading="lazy"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination Dots */}
          <div className="banner-pagination mt-4 sm:mt-5 md:mt-6 flex justify-center"></div>
        </div>

        <style jsx global>{`
          .banner-pagination {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 8px;
            min-height: 20px;
          }
          .banner-pagination .swiper-pagination-bullet {
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
            .banner-pagination .swiper-pagination-bullet {
              width: 10px;
              height: 10px;
            }
          }
          .banner-pagination .swiper-pagination-bullet-active {
            background: #00453a;
            width: 24px;
            border-radius: 5px;
          }
          @media (min-width: 640px) {
            .banner-pagination .swiper-pagination-bullet-active {
              width: 28px;
            }
          }
        `}</style>
      </div>
    );
  };

  export default Banner1;