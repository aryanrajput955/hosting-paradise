'use client'

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen h-screen flex items-center justify-center bg-cover bg-center px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12"
      style={{ backgroundImage: "url('/img/shoot/pexels-quang-nguyen-vinh-2132174.jpeg')" }}
    >
      {/* Translucent black overlay */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      {/* Content above the overlay */}
      <div className="relative flex flex-col items-center justify-center text-center w-full max-w-7xl z-10 pt-10 xs:pt-12 sm:pt-16 md:pt-20 lg:pt-24 xl:pt-28 px-2 xs:px-3 sm:px-4">
        {/* Heading */}
        <h1
          style={{ fontFamily: 'salazur' }}
          className="text-3xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold mb-3 xs:mb-4 sm:mb-5 md:mb-6 lg:mb-7 xl:mb-8 bg-gradient-to-r from-green-200 via-green-100 to-green-100 bg-clip-text text-transparent drop-shadow-2xl leading-tight px-1"
        >
          Paradise Bliss Tours — Where Every Journey
          <br className="hidden xs:block" />
          <span className="xs:hidden"> </span>
          <span className="hidden xs:block h-0.5 xs:h-1 sm:h-1.5 md:h-2 lg:h-3 xl:h-4"></span>
          Begins with a Dream & Ends with a Memory
        </h1>

        {/* Search Bar */}
        <div className="search-container mx-auto w-full max-w-[280px] xs:max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mb-4 xs:mb-5 sm:mb-6 md:mb-7 lg:mb-8 xl:mb-10 px-1">
          <div className="search-box bg-white/10 backdrop-blur-lg rounded-lg sm:rounded-xl md:rounded-2xl p-1.5 xs:p-2 sm:p-2.5 md:p-3 lg:p-3.5 xl:p-4 flex items-center gap-1.5 xs:gap-2 sm:gap-2.5 md:gap-3 lg:gap-3.5 xl:gap-4 shadow-xl border border-white/10">
            <svg
              className="map-pin-icon w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 text-white flex-shrink-0"
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
              className="search-input bg-transparent text-white placeholder:text-white/70 outline-none flex-grow text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl min-w-0"
            />
            <svg
              className="search-icon w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 text-white cursor-pointer flex-shrink-0 hover:scale-110 transition-transform"
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
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2.5 xs:gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12 text-center text-white w-full max-w-6xl px-1 xs:px-2">
          <div className="flex flex-col items-center">
            <img 
              src="/img/location.png" 
              alt="Destination Icon"
              loading="eager"
              decoding="sync"
              className="mb-1.5 xs:mb-2 sm:mb-2.5 md:mb-3 lg:mb-3.5 xl:mb-4 w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14 mx-auto object-contain" 
            />
            <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold mb-0.5 xs:mb-1">100+</h2>
            <p className="text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl leading-tight">Destinations</p>
          </div>
          <div className="flex flex-col items-center">
            <img 
              src="/img/smile.png" 
              alt="Happy Travelers Icon"
              loading="eager"
              decoding="sync"
              className="mb-1.5 xs:mb-2 sm:mb-2.5 md:mb-3 lg:mb-3.5 xl:mb-4 w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14 mx-auto object-contain" 
            />
            <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold mb-0.5 xs:mb-1">50K+</h2>
            <p className="text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl leading-tight">Happy Travelers</p>
          </div>
          <div className="flex flex-col items-center">
            <img 
              src="/img/star.png" 
              alt="Ratings Icon"
              loading="eager"
              decoding="sync"
              className="mb-1.5 xs:mb-2 sm:mb-2.5 md:mb-3 lg:mb-3.5 xl:mb-4 w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14 mx-auto object-contain" 
            />
            <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold mb-0.5 xs:mb-1">4.8/5</h2>
            <p className="text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl leading-tight">Ratings</p>
          </div>
          <div className="flex flex-col items-center">
            <img 
              src="/img/real-estate.png" 
              alt="EMI Options Icon"
              loading="eager"
              decoding="sync"
              className="mb-1.5 xs:mb-2 sm:mb-2.5 md:mb-3 lg:mb-3.5 xl:mb-4 w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14 mx-auto object-contain" 
            />
            <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold mb-0.5 xs:mb-1">No Cost</h2>
            <p className="text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl leading-tight">EMI Options</p>
          </div>
        </div>
      </div>
    </section>
  );
}