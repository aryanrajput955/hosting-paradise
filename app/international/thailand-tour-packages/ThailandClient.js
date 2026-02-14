'use client';
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { AiOutlineCalendar } from 'react-icons/ai';
import Image from 'next/image';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import WhyChooseUs from '@/components/whychooseus';
import Link from 'next/link';

const tours = [
  {
    title: "Thailand Full Moon Party Tour",
    dates: ["Nov 15", "Dec 01", "Jan 10"],
    prices: ["Starting ₹59,999*", "₹59,999*"],
    image: "/optimised/Thailand_tour.jpeg",
    duration: "8D/7N",
    group: "Group Tour",
    link: "/trip-packages/thailand-packages",
  },
  
];

const ThailandTour = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTour, setSelectedTour] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: null,
    travellers: '',
    email: '',
    package: 'Thailand Tour',
  });

  const handleOpenModal = (tour) => {
    setSelectedTour(tour);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTour(null);
    setFormData({ name: '', phone: '', date: null, travellers: '', email: '', package: 'Thailand Tour' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, date });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { ...formData, tour: selectedTour });
    handleCloseModal();
  };

  const handleHeroFormSubmit = (e) => {
    e.preventDefault();
    console.log('Hero form submitted:', formData);
    setFormData({ name: '', phone: '', date: null, travellers: '', email: '', package: 'Thailand Tour' });
  };

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  const stats = [
    { img: '/img/smile.png', text: '40k+<br/>Happy Customers' },
    { img: '/img/star.png', text: '4.8<br/>Ratings' },
    { img: '/img/travel.png', text: '400+<br/>Itineraries' },
    { img: '/img/wallet.png', text: 'Book Now &<br/>Pay Later' },
  ];

  return (
    <>
      {/* Hero Section */}
      <div
        className="relative w-full h-screen bg-cover bg-center flex justify-center lg:justify-end items-center px-4 sm:px-6 lg:px-8"
        style={{ backgroundImage: "url('/optimised/Thailand-tour.avif')" }}
      >
        <h2
          className="absolute top-1/2 left-1/2 lg:left-auto lg:right-[60%] transform -translate-x-1/2 lg:translate-x-1/2 -translate-y-1/2 text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-center lg:text-left z-10 font-serif"
        >
          Thailand Tour
        </h2>
        <motion.form
          id="travel"
          autoComplete="on"
          onSubmit={handleHeroFormSubmit}
          className="hidden lg:block bg-[#E4DECF]/90 bg-opacity-80 p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md z-20 mt-16 lg:mt-20 lg:mr-4 xl:mr-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image width={100}
            height={100}
            src="/img/logo.png"
            alt="Paradise Bliss Tours Logo"
            className="w-16 sm:w-20 md:w-24 mb-4 mx-auto"
          />
          <label htmlFor="name" className="block mb-2 text-left text-gray-700 text-sm sm:text-base">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="John"
            required
            className="w-full p-2 mb-4 border rounded text-sm sm:text-base focus:ring-[#00453A] focus:border-[#00453A]"
            aria-label="Full name"
          />
          <label htmlFor="phone" className="block mb-2 text-left text-gray-700 text-sm sm:text-base">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Phone"
            required
            className="w-full p-2 mb-4 border rounded text-sm sm:text-base focus:ring-[#00453A] focus:border-[#00453A]"
            aria-label="Phone number"
          />
          <label htmlFor="package" className="block mb-2 text-left text-gray-700 text-sm sm:text-base">
            Package
          </label>
          <select
            id="package"
            name="package"
            value={formData.package}
            onChange={handleInputChange}
            required
            className="w-full p-2 mb-4 border rounded text-sm sm:text-base focus:ring-[#00453A] focus:border-[#00453A]"
            aria-label="Tour package selection"
          >
            <option value="Thailand Tour">Thailand Tour</option>
            <option value="Full Moon Party Tour">Full Moon Party Tour</option>
            <option value="Christmas & New Year Tour">Christmas & New Year Tour</option>
            <option value="Honeymoon Tour">Honeymoon Tour</option>
            <option value="Family Adventure">Family Adventure</option>
          </select>
          <label htmlFor="email" className="block mb-2 text-left text-gray-700 text-sm sm:text-base">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="example@mail.com"
            required
            className="w-full p-2 mb-4 border rounded text-sm sm:text-base focus:ring-[#00453A] focus:border-[#00453A]"
            aria-label="Email address"
          />
          <motion.input
            type="submit"
            value="Submit"
            className="w-full bg-[#00453a] text-white p-2 rounded hover:bg-green-600 transition font-bold text-sm sm:text-base cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Submit form"
          />
        </motion.form>
      </div>

      {/* About Section */}
      <div className="flex flex-col items-center text-center my-12 px-4 w-full max-w-6xl mx-auto bg-gradient-to-b from-[#F1FDF3] to-white rounded-lg shadow-lg p-8">
        <motion.h2
          className="font-sans text-4xl sm:text-5xl font-bold text-green-900 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Discover Thailand’s Magic: Beaches, Temples, Parties & Culture
        </motion.h2>
        <motion.p
          className="font-sans text-lg text-gray-700 mb-6 w-full max-w-5xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Thailand is a dream destination for every traveler — from the bustling streets of Bangkok to the serene beaches of Krabi, the cultural richness of Chiang Mai to the vibrant nightlife of Pattaya. At Paradise Bliss Tours, we offer curated packages that blend adventure, relaxation, and cultural immersion.
        </motion.p>
        <div
          ref={contentRef}
          className={`text-left w-full max-w-5xl overflow-hidden transition-all duration-700 ease-in-out transform ${
            isOpen ? 'opacity-100 scale-y-100 mb-6' : 'opacity-0 scale-y-0'
          }`}
          style={{
            height: isOpen ? `${contentHeight}px` : '0px',
            transformOrigin: 'top',
          }}
        >
          <div className="py-6 space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-green-900 mb-4">About Thailand:</h3>
              <p className="text-gray-600 leading-relaxed">
                Also known as the Land of Smiles. Here, the Elephants are seen as the symbol of nationality, and the golden temples of Buddhist statues testify to a spirituality deeply rooted in daily life. It is the only country that was never colonized by a European power. The country is a mosaic of wonders compressed into a space that represents only 0.3% of the world’s surface.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-green-900 mb-4">Best places to visit:</h3>
              <ul className="list-decimal list-inside text-gray-600 space-y-4 mt-4">
                <li><strong>Bangkok:</strong> The Thai capital that never sleeps, with a frantic rhythm that pulses incessantly in its warm climate. The grand palace stands imposingly against the horizon, with its golden spires capturing the rays of the tropical sun. Bangkok is a living paradox. Here, monks are wrapped in their saffron colored robes, crossing the street with the skyscrapers, witnessing an encounter between eras, nowhere else manifest with such intensity. On their water boats, they continue their daily journey, transporting goods and people, exactly as they did hundreds of years ago.</li>
                <li><strong>Ayutthaya:</strong> Lies in the plains of Thailand, a city that was not just a capital once, but a true empire that dominated the entire Asian continent. Now the ruin of Ayutthaya, recognized as a UNESCO World Heritage site, remains motionless in time, guardians of memories of a kingdom that made the world tremble. It was once the most fascinating kingdom that Asia ever had.</li>
                <li><strong>Chiang Mai:</strong> the morning mist envelops the northern mountains where Chiang Mai guards the legacy of the ancient Lana Na Kingdom, which once dominated this region. More than 300 golden temples lie in the urban landscapes with golden Buddhas silently watching the faithful who come to pray day after day. With the arrival of evening instead, the night market transformed into a kaleidoscope of life and colors. Where artisans work with silver and silk, following techniques passed down through generations. During the Yeong festivals, thousands of lanterns float in the night sky, carrying the hopes & wishes of those who release them to the stars.</li>
                <li><strong>Phuket:</strong> In the Andaman Sea stretches the largest island of Thailand, once the center of tin trade between India & China usually the Western coastal areas have filled with visitors seeking the sun. The big Buddha, 45m tall, watches over the island from its hills while monks recite prayers inside. Then there are night markets which come alive at sunset, filling the air with intense aromas of spices & street food that taste the rich local culinary traditions. Phuket thus lives between modernity & traditions, continuously reinventing itself without forgetting its roots.</li>
                <li><strong>Krabi:</strong> From the turquoise water of Krabi emerge the formations of grey limestone that dominate the horizon. The Majestic rocky walls have shaped a shoreline that has no equal, where hidden coves and isolated beaches wait to be discovered. Rail Beach presents itself as a corner of paradise nestled between two cliffs and is a place reachable only by sea, since no land leads to this marvel. Venturing into the territory, the Tongta forest is the hidden gem, which is a natural mirror of emerald colored water surrounded by lush tropical vegetation.</li>
                <li><strong>Pattaya:</strong> This place has accomplished an extraordinary metamorphosis. From the modest fishing village to a coastal metropolis that never stops. In the evening, there is a walking street that comes to life with multicolored luminous signs and music that fills the air and creates a crossroads where tourists meet from every corner of the planet. The sanctuary of truth stands as a testimony to traditional craftsmanship. A monument entirely made of precious teak wood, where every single dement has been patiently carved to tell the fundamental principles of oriental philosophies. Kolan Island represents an oasis of tranquility with its immaculate beaches and clear waters, offering a regenerating pause from the frenetic rhythm of the city.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-green-900 mb-4">Things to do in Thailand:</h3>
              <ul className="list-decimal list-inside text-gray-600 space-y-2 mt-4">
                <li>Visit Phuket and Krabi to explore the stunning beaches.</li>
                <li>Stroll the iconic temples in Bangkok.</li>
                <li>Explore the Nightlife of Thailand at Phuket and Pattaya.</li>
                <li>Take a look at the islands like Phi Phi, James Bond, and Koh Samui.</li>
                <li>Visit the Elephant Sanctuary in Chiang Mai and Phuket for a great day.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-green-900 mb-4">Best time to visit:</h3>
              <ul className="list-decimal list-inside text-gray-600 space-y-2 mt-4">
                <li><strong>Winter (November-February):</strong> This is the best time to visit Thailand; the weather is cool, dry, and pleasant. Good for exploring the beach, viewing the sights, and doing cultural things.</li>
                <li><strong>Summers (July-October):</strong> During this time, the weather is so dry and hot, ideal for beach lovers who love to soak up the sunlight, as the temperature rises high.</li>
                <li><strong>Monsoon (July to October):</strong> This time brings the lush greenery and a peaceful vibe. Best for yoga retreat and the spa. Perfect for those who are seeking an off-season trip.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-green-900 mb-4">Why choose Paradise Bliss Tours:</h3>
              <ul className="list-decimal list-inside text-gray-600 space-y-2 mt-4">
                <li>Experienced in Global and Personalized travel plans.</li>
                <li>Tailored itinerary for all traveler as per their need and preferences.</li>
                <li>Complete Tour services – Hotels, Visa, Flights, and sightseeing.</li>
                <li>We provide you 24*7 customer support.</li>
                <li>Affordable Luxury Tour packages without any hidden cost.</li>
              </ul>
            </div>
          </div>
        </div>
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="mt-6 px-8 py-3 cursor-pointer bg-green-900 text-white rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out font-semibold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label={isOpen ? 'Show less content' : 'Show more content'}
        >
          {isOpen ? 'Show Less' : 'Explore More'}
        </motion.button>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 p-6 max-w-6xl mx-auto">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="text-center text-green-900 flex-1 max-w-xs mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Image width={48}
              height={48}
              src={stat.img}
              alt={stat.text.split('<br/>')[0]}
              className="w-12 h-12 mx-auto"
            />
            <p
              className="mt-2 text-lg font-bold"
              dangerouslySetInnerHTML={{ __html: stat.text }}
            />
          </motion.div>
        ))}
      </div>

      {/* Tour Packages Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1
          style={{ color: 'var(--color-dark)', fontFamily: 'salazur' }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold py-6 text-center"
        >
          Thailand Tour Packages
        </h1>
      </div>

      <div
        style={{ backgroundColor: 'var(--light-green)' }}
        className="relative px-4 sm:px-6 lg:px-10 py-10"
      >
        <div className="swiper-container">
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: '.swiper-pagination-custom',
              dynamicBullets: true,
              renderBullet: (index, className) => {
                return `<span class="${className}"></span>`;
              },
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3.5 },
            }}
            className="py-8"
          >
            {tours.map((tour, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-xl shadow-2xl overflow-hidden transition-all duration-300 h-full">
                  {/* Motion wrapper for hover scale */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
                    }}
                    className="h-full flex flex-col"
                  >
                    {/* Clickable area: image + info */}
                    <Link href={tour.link} className="flex-1 flex flex-col cursor-pointer">
                      <Image height={224}
                        width={400}
                        src={tour.image}
                        alt={tour.title}
                        className="w-full h-56 object-cover rounded-t-xl"
                      />
                      <div className="p-6 flex-1 flex flex-col">
                        <h3 className="text-xl font-bold text-gray-900">{tour.title}</h3>
                        <p className="text-sm text-gray-700 mt-1">
                          {tour.duration} • {tour.group}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2">
                          {tour.dates.map((date, i) => (
                            <span
                              key={i}
                              className="bg-[#F1FDF3] text-[#00453a] px-3 py-1 rounded-full text-sm flex items-center gap-1"
                            >
                              <AiOutlineCalendar className="text-[#00453a]" />
                              {date}
                            </span>
                          ))}
                        </div>

                        <div className="mt-5 text-right">
                          <span className="text-gray-500 line-through text-base">
                            {tour.prices[0]}
                          </span>
                          <p className="text-xl font-bold text-green-600 mt-1">
                            {tour.prices[1]}
                          </p>
                        </div>
                      </div>
                    </Link>

                    {/* Request Callback Button - OUTSIDE the Link */}
                    <div className="px-6 pb-6">
                      <motion.button
                        onClick={(e) => {
                          e.stopPropagation();
                          e.preventDefault();
                          handleOpenModal(tour);
                        }}
                        whileHover={{ scale: 1.05, backgroundColor: '#00332A' }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full py-3 bg-[#00453A] text-white rounded-lg flex items-center justify-center gap-2 font-semibold transition-colors duration-300 cursor-pointer"
                        aria-label={`Request callback for ${tour.title}`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        Request Callback
                      </motion.button>
                    </div>
                  </motion.div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-pagination-custom mt-6 text-center"></div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={handleCloseModal}
            aria-hidden="true"
          ></div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative bg-white rounded-xl shadow-2xl w-full max-w-md mx-4 p-6"
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-1 right-3 text-gray-500 hover:text-gray-700"
              aria-label="Close modal"
            >
              ✕
            </button>
            {selectedTour && (
              <div className="mb-4">
                <Image height={128}
                  width={400}
                  src={selectedTour.image}
                  alt={selectedTour.title}
                  className="w-full h-32 object-cover rounded-lg"
                />
                <h3 className="mt-3 text-lg font-bold text-gray-900">
                  {selectedTour.title}
                </h3>
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00453A] focus:ring-[#00453A]"
                    aria-label="Full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00453A] focus:ring-[#00453A]"
                    aria-label="Phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <DatePicker
                      selected={formData.date}
                      onChange={handleDateChange}
                      dateFormat="dd/MM/yyyy"
                      minDate={new Date()}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00453A] focus:ring-[#00453A]"
                      placeholderText="Select date"
                      required
                      aria-label="Preferred travel date"
                    />
                    <AiOutlineCalendar className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Number of Travellers
                  </label>
                  <input
                    type="number"
                    name="travellers"
                    value={formData.travellers}
                    onChange={handleInputChange}
                    min="1"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00453A] focus:ring-[#00453A]"
                    aria-label="Number of travellers"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 bg-[#00453A] text-white rounded-lg font-semibold transition-colors duration-300 cursor-pointer"
                  aria-label="Submit request"
                >
                  Submit Request
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      )}

      <style jsx>{`
        .swiper-container {
          position: relative;
        }
        .swiper-pagination-custom {
          position: relative;
          bottom: 0;
          padding-bottom: 10px;
        }
        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.8);
          width: 12px;
          height: 12px;
          margin: 0 8px;
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background: var(--color-dark);
          width: 14px;
          height: 14px;
          opacity: 1;
        }
        .react-datepicker-wrapper {
          width: 100%;
        }
      `}</style>
      <WhyChooseUs />
    </>
  );
};

export default ThailandTour;