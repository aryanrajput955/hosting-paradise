import React from 'react';
import Image from 'next/image'; // Import the Image component from next/image
import Link from 'next/link';

const ImageGallery = () => {
  const places = [
    {
      name: 'Ladakh',
      image: 'img/banner/Ladakh.png',
      description: 'The Land of Monasteries and Majestic Peaks',
      price: 'Starting ₹27,990*',
      tagline: 'Explore the rugged beauty of the Himalayas.',
      link: '/destinations/ladakh' // Correct link for Ladakh
    },
    {
      name: 'Uttarakhand',
      image: 'img/banner/Uttrakhand.png',
      description: 'The Land of Gods and Eternal Beauty',
      price: 'Starting ₹19,990* per person',
      tagline: 'Discover serene valleys and spirituality',
      link: '/destinations/uttarakhand' // Correct link for Uttrakhand
    },
    {
      name: 'Kerala',
      image: 'img/banner/Kerala.png',
      description: 'God’s Own Country',
      price: 'Starting ₹26,990*',
      tagline: 'Experience backwaters and lush greenery.',
      link: '/destinations/kerala' // Correct link for Kerala
    },
    {
      name: 'Spiti',
      image: 'img/banner/Spiti.png',
      description: 'Spiti Valley',
      price: 'Starting ₹28,990*',
      tagline: 'Journey through cold deserts and ancient monasteries.',
      link: '/destinations/spiti' // Correct link for Spiti
    },
    {
      name: 'Rajasthan',
      image: 'img/banner/Rajasthan.png',
      description: 'A Royal Journey Through Rajasthan',
      price: 'Starting ₹24,990*',
      tagline: 'Explore majestic forts and vibrant culture.',
      link: '/destinations/rajasthan' // Correct link for Rajasthan
    },
    {
      name: 'Sikkim',
      image: 'img/banner/Sikkim.png',
      description: 'The Land of Mystical Splendor',
      price: 'Starting ₹27,990*',
      tagline: 'Discover serene monasteries and breathtaking landscapes.',
      link: '/destinations/sikkim' // Correct link for Sikkim
    }
  ];

  return (
    <div className="">
      <div className="container mx-auto px-4 ">
        <h1 style={{ fontFamily: 'salazur' }} className="text-4xl md:text-7xl text-[#00453a] font-bold text-center my-10">
          Top Domestic Tour Packages in India
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Large Nature Image - Kashmir */}
          <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-2xl shadow-lg group aspect-square">
              <Image src="/img/banner/Kashmir.png" alt="Kashmir" layout="fill" objectFit="cover" className="transition-transform duration-300 group-hover:scale-105" />
            <Link href="/destinations/kashmir">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute inset-0">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg md:text-2xl font-bold text-white">Kashmir</h3>
                  <p className="text-sm md:text-base text-white">Kashmir Received first snowfall of the season</p>
                  <h2 className='text-sm md:text-lg font-bold text-white'>Starting ₹32,990*</h2>
                </div>
              </div>
            </Link>
          </div>

          {/* Small Images */}
          {places.map((place, index) => (
            <div key={index} className="relative overflow-hidden rounded-2xl shadow-lg group aspect-square">
                <Image
                  src={`/${place.image}`}
                  alt={place.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
                />
              <Link href={place.link}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute inset-0">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h4 className="text-lg sm:text-xl md:text-lg font-bold text-white">{place.name}</h4>
                    <p className="text-sm sm:text-base md:text-md text-white">{place.description}</p>
                    <h2 className="text-sm sm:text-base md:text-lg font-bold text-white">{place.price}</h2>
                  </div>
                </div>
              </Link>
            </div>
          ))}

          {/* Adjusted Himachal to be rectangular */}
          <div className="aryan md:col-span-2 relative overflow-hidden rounded-2xl shadow-lg group sm:w-64 h-64 sm:h-[45rem] md:h-[11rem] lg:h-[14.5rem] xl:h-[18.8rem] 2xl:h-[22.5rem]">
              <Image
                src="/img/banner/Himachal.png"
                alt="Himachal"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 group-hover:scale-105"
              />
            <Link href="/destinations/himachal">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute inset-0">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-white">Himachal</h4>
                  <p className="text-sm sm:text-base md:text-lg text-white">A Cultural Haven in the Himalayas</p>
                  <h2 className="text-sm sm:text-base md:text-lg font-bold text-white">Starting ₹28,990*</h2>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;