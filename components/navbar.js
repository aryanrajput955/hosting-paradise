'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const destinations = [
      'Uttarakhand ',
      'Kerala',
      'Chardham',
      'Kashmir',
      'Goa',
      'Manali',
      'Ladakh'
    ];

    const headerInput = document.getElementById('searchInput');
    const heroInput = document.getElementById('searchInputLarge');
    const inputs = [headerInput, heroInput];

    inputs.forEach(input => {
      if (!input) return;

      let currentDestIndex = 0;
      let currentCharIndex = 0;
      let isDeleting = false;

      function typeWriter() {
        const currentDest = destinations[currentDestIndex];

        if (isDeleting) {
          input.placeholder = currentDest.substring(0, currentCharIndex - 1);
          currentCharIndex--;
        } else {
          input.placeholder = currentDest.substring(0, currentCharIndex + 1);
          currentCharIndex++;
        }

        let typeSpeed = isDeleting ? 100 : 200;

        if (!isDeleting && currentCharIndex === currentDest.length) {
          isDeleting = true;
          typeSpeed = 1000;
        } else if (isDeleting && currentCharIndex === 0) {
          isDeleting = false;
          currentDestIndex = (currentDestIndex + 1) % destinations.length;
        }

        setTimeout(typeWriter, typeSpeed);
      }

      typeWriter();
    });
  }, []);

  const handleMouseEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
    }
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 300);
    setDropdownTimeout(timeout);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      {/* Banner */}
      <div style={{ backgroundColor: "var(--color-dark)" }} className="fixed top-0 left-0 w-screen text-white text-center py-1.5 sm:py-2 z-50">
        <button className="text-xs sm:text-sm md:text-base mb-0 hover:scale-105 ease-in-out transition-all">
          Uttarakhand & Char Dham Early Offer!
        </button>
      </div>

      {/* Navbar */}
      <header
        className={`fixed top-6 sm:top-8 left-0 w-screen flex items-center justify-between p-2 sm:p-3 md:p-4 z-40 transition-all duration-300 ${isScrolled ? 'bg-[#E4DECF] shadow-lg' : 'bg-[#E4DECF]'
          }`}
      >
        <div className="container mx-auto flex items-center justify-between px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16">
          {/* Desktop Layout */}
          <div style={{ color: 'var(--color-dark)' }} className="hidden lg:flex items-center w-full">
            <div className="flex items-center gap-3 lg:gap-4 xl:gap-6 2xl:gap-8">
              <div className="logo">
                <Link href="/">
                  <Image src="/img/logo.png" alt="Paradise Bliss" width={200} height={50} className="h-10 w-auto lg:h-11 xl:h-12" />
                </Link>
              </div>
              <div className="contact">
                <p className="mb-0 text-xs lg:text-sm xl:text-base whitespace-nowrap">📞+91 8449000181</p>
              </div>
              <div className="search-container flex-grow max-w-[160px] lg:max-w-[200px] xl:max-w-[280px] 2xl:max-w-[350px]">
                <div className="search-box bg-gray-100 rounded-lg xl:rounded-xl p-1.5 lg:p-2 flex items-center gap-2 shadow-md border border-gray-200">
                  <svg
                    className="map-pin-icon w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 flex-shrink-0"
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
                    id="searchInput"
                    placeholder="Search destinations..."
                    className="search-input bg-transparent text-black placeholder:text-gray-500 text-xs lg:text-sm xl:text-base outline-none flex-grow min-w-0"
                  />
                </div>
              </div>
            </div>

            <nav className="ms-auto">
              <ul className="flex gap-3 lg:gap-4 xl:gap-6 2xl:gap-8">
                <li>
                  <Link legacyBehavior href="/">
                    <a
                      className="relative hover:text-green-600 text-xs lg:text-sm xl:text-base 2xl:text-lg transition-colors duration-300 group whitespace-nowrap"
                    >
                      Home
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </Link>
                </li>
                <li
                  className="relative group"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <a
                    href="#new-year-sale"
                    className="relative hover:text-green-600 text-xs lg:text-sm xl:text-base 2xl:text-lg transition-colors duration-300 group whitespace-nowrap"
                  >
                    New Year Sale
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                  {isDropdownOpen && (
                    <div
                      className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg p-4 w-80 xl:w-96 z-50"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <h3 className="text-base xl:text-lg font-semibold mb-3 text-black">Indian Tours</h3>
                      <div className="grid grid-cols-2 gap-3 xl:gap-4">
                        <div>
                          <Link href="/indian-tours/char-dham-tour-package" className="block text-black hover:text-green-600 text-xs xl:text-sm mb-2 transition-colors duration-200">Char Dham Tour Packages</Link>
                          <Link href="/indian-tours/spiti-valley-tour-package" className="block text-black hover:text-green-600 text-xs xl:text-sm mb-2 transition-colors duration-200">Spiti Valley Tour Packages</Link>
                          <Link href="/indian-tours/uttarakhand-tour-package" className="block text-black hover:text-green-600 text-xs xl:text-sm mb-2 transition-colors duration-200">Uttarakhand Tour Packages</Link>
                          <Link href="/indian-tours/kashmir-tour-package" className="block text-black hover:text-green-600 text-xs xl:text-sm transition-colors duration-200">Kashmir Tour Packages</Link>
                        </div>
                        <div>
                          <Link href="/indian-tours/kerala-tour-package" className="block text-black hover:text-green-600 text-xs xl:text-sm mb-2 transition-colors duration-200">Kerala Tour Packages</Link>
                          <Link href="/indian-tours/ladakh-tour-package" className="block text-black hover:text-green-600 text-xs xl:text-sm mb-2 transition-colors duration-200">Ladakh Tour Package</Link>
                          <Link href="/indian-tours/rajasthan-tour-package" className="block text-black hover:text-green-600 text-xs xl:text-sm mb-2 transition-colors duration-200">Rajasthan Tour Package</Link>
                          <Link href="/indian-tours/seven-sisters-tour-package" className="block text-black hover:text-green-600 text-xs xl:text-sm transition-colors duration-200">Seven Sisters Tour Package</Link>
                        </div>
                      </div>
                    </div>
                  )}
                </li>
                <li>
                  <a
                    href="#domestic-trips"
                    className="relative hover:text-green-600 text-xs lg:text-sm xl:text-base 2xl:text-lg transition-colors duration-300 group whitespace-nowrap"
                  >
                    Domestic Trips
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="#upcoming-trips"
                    className="relative hover:text-green-600 text-xs lg:text-sm xl:text-base 2xl:text-lg transition-colors duration-300 group whitespace-nowrap"
                  >
                    Upcoming Trips
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
                <li>
                  <Link legacyBehavior href="/blogs">
                    <a
                      className="relative hover:text-green-600 text-xs lg:text-sm xl:text-base 2xl:text-lg transition-colors duration-300 group whitespace-nowrap"
                    >
                      Blogs
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Mobile/Tablet Layout */}
          <div className="flex mt-2 items-center justify-between w-full lg:hidden">
            <div className="logo">
              <Image src="/img/logo.png" alt="Paradise Bliss" width={150} height={40} className="h-8 w-auto sm:h-10 md:h-12" />
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <a href="tel:+918449000181" className="text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-black sm:w-5 sm:h-5"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </a>
              <button
                className="navbar-toggler p-1.5 sm:p-2 focus:outline-none"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 sm:h-6 sm:w-6 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 sm:h-6 sm:w-6 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <div
                className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                onClick={() => setIsMobileMenuOpen(false)}
              ></div>

              {/* Slide-in Menu */}
              <div className="fixed top-0 mt-6 left-0 h-screen w-[85%] sm:w-4/5 md:w-3/5 bg-[#E4DECF] shadow-2xl transform transition-transform duration-300 ease-in-out z-50 lg:hidden overflow-y-auto">
                {/* Menu Header */}
                <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-300">
                  <Image src="/img/logo.png" alt="Paradise Bliss" width={150} height={40} className="h-10 w-auto sm:h-12" />
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-black"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <div className="p-4 sm:p-6">
                  {/* Search Bar */}
                  <div className="search-container mb-6">
                    <div className="search-box bg-white/80 backdrop-blur-sm rounded-xl p-2.5 sm:p-3 flex items-center gap-2 sm:gap-3 shadow-md border border-gray-300">
                      <svg
                        className="map-pin-icon w-5 h-5 sm:w-6 sm:h-6 text-gray-700 flex-shrink-0"
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
                        id="searchInputMobile"
                        placeholder="Search destinations..."
                        className="search-input bg-transparent text-black placeholder:text-gray-600 text-sm sm:text-base outline-none flex-grow min-w-0"
                      />
                      <svg
                        className="search-icon w-5 h-5 sm:w-6 sm:h-6 text-gray-700 cursor-pointer flex-shrink-0"
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

                  {/* Navigation Menu */}
                  <nav>
                    <ul className="flex flex-col gap-2">
                      <li>
                        <Link legacyBehavior href="/">
                          <a
                            className="relative text-black hover:text-green-600 text-base sm:text-lg font-medium transition-all duration-300 group py-3 px-4 block rounded-lg hover:bg-white/50"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <span className="flex items-center gap-3">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                              </svg>
                              Home
                            </span>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <div className="relative">
                          <button
                            className="relative text-black hover:text-green-600 text-base sm:text-lg font-medium transition-all duration-300 group flex items-center justify-between w-full text-left py-3 px-4 rounded-lg hover:bg-white/50"
                            onClick={toggleDropdown}
                          >
                            <span className="flex items-center gap-3">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                              </svg>
                              New Year Sale
                            </span>
                            <svg
                              className={`h-5 w-5 transform ${isDropdownOpen ? 'rotate-180' : ''} text-gray-700 transition-transform duration-200`}
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                          {isDropdownOpen && (
                            <div className="mt-2 bg-white/80 backdrop-blur-sm rounded-xl p-3 sm:p-4 shadow-lg border border-gray-300">
                              <h3 className="text-sm sm:text-base font-semibold mb-3 text-black flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Indian Tour Packages
                              </h3>
                              <div className="grid grid-cols-2 gap-2">
                                <div className="space-y-1">
                                  <a href="#kerala" className="block text-gray-800 hover:text-green-600 text-sm sm:text-base font-medium transition-all duration-200 hover:bg-gray-200 rounded-lg px-2.5 py-2">Kerala</a>
                                  <a href="#goa" className="block text-gray-800 hover:text-green-600 text-sm sm:text-base font-medium transition-all duration-200 hover:bg-gray-200 rounded-lg px-2.5 py-2">Goa</a>
                                  <a href="#rajasthan" className="block text-gray-800 hover:text-green-600 text-sm sm:text-base font-medium transition-all duration-200 hover:bg-gray-200 rounded-lg px-2.5 py-2">Rajasthan</a>
                                  <a href="#kashmir" className="block text-gray-800 hover:text-green-600 text-sm sm:text-base font-medium transition-all duration-200 hover:bg-gray-200 rounded-lg px-2.5 py-2">Kashmir</a>
                                </div>
                                <div className="space-y-1">
                                  <a href="#uttarakhand" className="block text-gray-800 hover:text-green-600 text-sm sm:text-base font-medium transition-all duration-200 hover:bg-gray-200 rounded-lg px-2.5 py-2">Uttarakhand</a>
                                  <a href="#ladakh" className="block text-gray-800 hover:text-green-600 text-sm sm:text-base font-medium transition-all duration-200 hover:bg-gray-200 rounded-lg px-2.5 py-2">Ladakh</a>
                                  <a href="#manali" className="block text-gray-800 hover:text-green-600 text-sm sm:text-base font-medium transition-all duration-200 hover:bg-gray-200 rounded-lg px-2.5 py-2">Manali</a>
                                  <a href="#chardham" className="block text-gray-800 hover:text-green-600 text-sm sm:text-base font-medium transition-all duration-200 hover:bg-gray-200 rounded-lg px-2.5 py-2">Chardham</a>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </li>
                      <li>
                        <a
                          href="#domestic-trips"
                          className="relative text-black hover:text-green-600 text-base sm:text-lg font-medium transition-all duration-300 group py-3 px-4 block rounded-lg hover:bg-white/50"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <span className="flex items-center gap-3">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                            </svg>
                            Domestic Trips
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#upcoming-trips"
                          className="relative text-black hover:text-green-600 text-base sm:text-lg font-medium transition-all duration-300 group py-3 px-4 block rounded-lg hover:bg-white/50"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <span className="flex items-center gap-3">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            Upcoming Trips
                          </span>
                        </a>
                      </li>
                      <li>
                        <Link legacyBehavior href="/blogs">
                          <a
                            className="relative text-black hover:text-green-600 text-base sm:text-lg font-medium transition-all duration-300 group py-3 px-4 block rounded-lg hover:bg-white/50"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <span className="flex items-center gap-3">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                              </svg>
                              Blogs
                            </span>
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </nav>

                  {/* Contact Info */}
                  <div className="mt-6 pt-6 border-t border-gray-300">
                    <a href="tel:+918449000181" className="flex items-center gap-3 text-black hover:text-green-600 transition-colors py-3 px-4 rounded-lg hover:bg-white/50">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="text-base sm:text-lg font-medium">+91 8449000181</span>
                    </a>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </header>
    </>
  );
}