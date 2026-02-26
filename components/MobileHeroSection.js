'use client'
import Image from 'next/image'

export default function MobileHeroSection() {
  return (
    <section className="md:hidden block relative min-h-[65vh] h-[65vh] flex items-center justify-center px-3 xs:px-4">
      <Image
        src="/img/shoot/pexels-quang-nguyen-vinh-2132174.jpeg"
        alt="Background"
        fill
        className="object-cover object-center -z-10"
        priority
        sizes="100vw"
      />
      {/* Translucent black overlay */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      {/* Content above the overlay */}
      <div className="relative flex flex-col items-center justify-center text-center w-full z-10 pt-10 xs:pt-12 px-2 xs:px-3">
        {/* Heading */}
        <h1
          style={{ fontFamily: 'salazur' }}
          className="text-2xl xs:text-3xl font-extrabold mb-3 xs:mb-4 bg-gradient-to-r from-green-200 via-green-100 to-green-100 bg-clip-text text-transparent drop-shadow-2xl leading-tight px-1"
        >
          Paradise Bliss Tours — Where Every Journey
          <br className="hidden xs:block" />
          <span className="xs:hidden"> </span>
          <span className="hidden xs:block h-0.5 xs:h-1"></span>
          Begins with a Dream & Ends with a Memory
        </h1>

        {/* Search Bar */}
        <div className="search-container mx-auto w-full max-w-[280px] xs:max-w-xs mb-4 xs:mb-5 px-1">
          <div className="search-box bg-white/10 backdrop-blur-lg rounded-lg sm:rounded-xl p-1.5 xs:p-2 flex items-center gap-1.5 xs:gap-2 shadow-xl border border-white/10">
            <svg
              className="map-pin-icon w-3.5 h-3.5 xs:w-4 xs:h-4 text-white flex-shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <input
              type="text"
              id="searchInputLarge"
              placeholder="Search destinations..."
              className="search-input bg-transparent text-white placeholder:text-white/70 outline-none flex-grow text-xs xs:text-sm min-w-0"
            />
            <svg
              className="search-icon w-3.5 h-3.5 xs:w-4 xs:h-4 text-white cursor-pointer flex-shrink-0 hover:scale-110 transition-transform"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
        </div>

        {/* Section Beneath the Search Bar */}
        <div className="grid grid-cols-2 xs:grid-cols-2 gap-2.5 xs:gap-3 text-center text-white w-full max-w-2xl px-1 xs:px-2">
          <div className="flex flex-col items-center">
            <Image 
              src="/img/location.png" 
              alt="Destination Icon"
              width={56}
              height={56}
              className="mb-1.5 xs:mb-2 w-5 h-5 xs:w-6 xs:h-6 mx-auto object-contain"
              loading="lazy"
            />
            <h2 className="text-base xs:text-lg font-bold mb-0.5 xs:mb-1">100+</h2>
            <p className="text-[10px] xs:text-xs leading-tight">Destinations</p>
          </div>
          <div className="flex flex-col items-center">
            <Image 
              src="/img/smile.png" 
              alt="Happy Travelers Icon"
              width={56}
              height={56}
              className="mb-1.5 xs:mb-2 w-5 h-5 xs:w-6 xs:h-6 mx-auto object-contain"
              loading="lazy"
            />
            <h2 className="text-base xs:text-lg font-bold mb-0.5 xs:mb-1">50K+</h2>
            <p className="text-[10px] xs:text-xs leading-tight">Happy Travelers</p>
          </div>
          <div className="flex flex-col items-center">
            <Image 
              src="/img/star.png" 
              alt="Ratings Icon"
              width={56}
              height={56}
              className="mb-1.5 xs:mb-2 w-5 h-5 xs:w-6 xs:h-6 mx-auto object-contain"
              loading="lazy"
            />
            <h2 className="text-base xs:text-lg font-bold mb-0.5 xs:mb-1">4.8/5</h2>
            <p className="text-[10px] xs:text-xs leading-tight">Ratings</p>
          </div>
          <div className="flex flex-col items-center">
            <Image 
              src="/img/real-estate.png" 
              alt="EMI Options Icon"
              width={56}
              height={56}
              className="mb-1.5 xs:mb-2 w-5 h-5 xs:w-6 xs:h-6 mx-auto object-contain"
              loading="lazy"
            />
            <h2 className="text-base xs:text-lg font-bold mb-0.5 xs:mb-1">No Cost</h2>
            <p className="text-[10px] xs:text-xs leading-tight">EMI Options</p>
          </div>
        </div>
      </div>
    </section>
  );
}
