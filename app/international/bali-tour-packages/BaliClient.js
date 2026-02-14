'use client';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { AiOutlineCalendar } from 'react-icons/ai';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import WhyChooseUs from '@/components/whychooseus';
import Link from 'next/link';

const tours = [
  {
    title: "Paradise Bliss Bali Backpacking Tour",
    dates: ["Nov 15", "Dec 10", "Jan 05"],
    prices: ["₹59,999*", "₹49,999*"],
    image:"/optimised/bali1.jpg",
    duration: "7D/6N",
    group: "Group Tour",
    link: "/trip-packages/bali-packages",
  },
];

const BaliTour = () => {
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
    package: 'Bali Backpacking Tour',
  });

  const handleOpenModal = (tour) => {
    setSelectedTour(tour);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTour(null);
    setFormData({ name: '', phone: '', date: null, travellers: '', email: '', package: 'Bali Backpacking Tour' });
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
    setFormData({ name: '', phone: '', date: null, travellers: '', email: '', package: 'Bali Backpacking Tour' });
  };

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  const stats = [
    { img: '/img/instagram.png', text: 'Community of<br/> 400k+ On Instagram' },
    { img: '/img/star.png', text: '4.8<br/>Ratings' },
    { img: '/img/travel.png', text: '400+<br/>Itineraries' },
    { img: '/img/wallet.png', text: 'Book Now &<br/>Pay Later' },
  ];

  return (
    <>
      {/* Hero Section */}
      <div
        className="relative w-full h-screen bg-cover bg-center flex justify-center lg:justify-end items-center px-4 sm:px-6 lg:px-8"
        style={{ backgroundImage: "url('/optimised/bali1.webp')" }}
      >
        <h2
          className="absolute top-1/2 left-1/2 lg:left-auto lg:right-[60%] transform -translate-x-1/2 lg:translate-x-1/2 -translate-y-1/2 text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-center lg:text-left z-10 font-serif"
        >
          Bali Backpacking Tour
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
          <Image
            width={100}
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
            <option value="Bali Backpacking Tour">Bali Backpacking Tour</option>
            <option value="Bali Honeymoon">Bali Honeymoon</option>
            <option value="Bali Family Tour">Bali Family Tour</option>
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
          Discover the Magical Island of Bali with Paradise Bliss Tours Pvt. Ltd.
        </motion.h2>
        <motion.p
          className="font-sans text-lg text-gray-700 mb-6 w-full max-w-5xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Welcome to Bali, the Island of God. Bali is more than just a single island; it is formed from three different islands – Nusa Penida, Nusa Lembongan, and Nusa Ceningan. You can experience the most amazing islands here with lots of temples. Bali is the perfect blend of Charm and Devotion. Paradise Bliss Tours will provide you with a customized package that will make your trip so smooth and memorable. Whether you want to vibe on beaches, want some peaceful time in the hills, or rice fields, or want to explore the best sunset on Mount Batur. We have all the plans that will make your journey as you wish.
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
              <h3 className="text-2xl font-semibold text-green-900 mb-4">About Bali</h3>
              <p className="text-gray-600 leading-relaxed">Bali is a predominantly Hindu-majority area in Indonesia, creating a spiritual vibe. It has a special day called Nyapi, when the whole island goes silent; it’s a different kind of celebration that these people do. The most expensive coffee in the world - Kopi Luwak, was generated here with some special techniques. Bali has a Famous culture and warm hospitality that is admired worldwide.</p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-green-900 mb-4">Best Places to Visit in Bali</h3>

              <h4 className="text-xl font-semibold text-green-800 mb-3">1. Ubud</h4>
              <p className="text-gray-600 mb-3">It is a beautiful place that has many famous places to visit, some of which are:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li><strong>Tegalalang Rice Terraces:</strong> It’s a UNESCO World Heritage site, which truly shows the relationship between the Bali people and nature. You can walk through the rice terrace and can feel the calm and nature's beauty.</li>
                <li><strong>Ubud Monkey Forest:</strong> The home of thousands of Monkeys that live freely around there. There are so many ancient temples that will tell you about the tradition and their culture.</li>
                <li><strong>Puram Taman Kemuda Saraswati:</strong> In the Center of Ubud, you can explore the stunning temple that is dedicated to the Goddess Saraswati. At a short distance, there is another temple named Tirta Empul Temple, which is famous for its Holy water, which people have used for the purification of their souls for thousands of years.</li>
                <li><strong>Handara Gate:</strong> A famous Balinese-style gate, which is the entrance of a Golf course. It’s a picturesque spot, where you can snap photos that capture Bali’s Nature and Culture in one frame.</li>
              </ul>

              <h4 className="text-xl font-semibold text-green-800 mb-3">2. East Bali</h4>
              <p className="text-gray-600 mb-3">It's an adventure-filled place that will make your journey full of thrill and joy. Some of the most famous places to visit are:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li><strong>Mount Batur:</strong> It’s a Famous spot for hikers who want to experience the Breathtaking views. Once you reach the top, you can experience the panoramic view of the sunset and the sunrise as well.</li>
                <li><strong>Tirtha Ganga:</strong> It is situated in East Bali. As the name represents the Holy water of the Ganges. It is the Royal Palace that was built in 1948. It has a stunning pool and the natural springs over it. Nearby, you can explore another temple, which is Taman Soekasada Ujung. It was built in 1909 by the king of Karangasem. It is the perfect mix of Bali and the European flair that shows the real art of the Balinese architecture and the modernism of the kings.</li>
                <li><strong>Pura Gunung Cemeng:</strong> This temple is situated outside the countryside and is surrounded by lush greenery and scenic views.</li>
                <li><strong>Sidemen Valley:</strong> This Valley is untouched by the busy tourists. Smooth, traditional Villagers who live their lives at a slower Pace. You can walk through the rice terrace and explore the Bali tradition and experience the true spirit of Bali.</li>
                <li><strong>Besakih Temple:</strong> The most important temple of Hindus in the Island. It's an interesting place to learn about the Balinese culture and tradition, which is all about Hinduism. Some of the structures of the temple are about 2000 years old. In 1963, a volcano erupted, and the temple wasn’t badly damaged, which makes this temple more sacred for the Bali people.</li>
                <li><strong>Padang Bai:</strong> This charming coastal village has beautiful beaches and amazing diving spots. It’s a fair port for other islands. The beaches here have crystal clear water with colorful fish. This is the perfect place for water activities.</li>
              </ul>

              <h4 className="text-xl font-semibold text-green-800 mb-3">3. Southern Bali and Nusa Islands</h4>
              <p className="text-gray-600 mb-3">Here you can explore the most iconic parks and the temple of Bali, some of which are:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li><strong>Garuda Wisnu Kencana (GWK) Cultural Park:</strong> It is a giant theme park based on the Hindu gods. The main attraction of this park is the massive statue of Lord Vishnu seated on Garuda, one of the tallest statues in the world. And the park itself is so huge, which tells a tradition about the Balinese people.</li>
                <li><strong>Uluwatu Temple:</strong> This is a very beautiful temple in Bali that overlooks the waves of the Indian Ocean. It is one of the most important temples of Bali. It looks amazing at sunset, when the sun paints the entire sky. Here, a special folk dance takes place in the evening by a group of men while telling the story of Ramayan.</li>
                <li><strong>Tanah Lot Temple:</strong> It is famous for its sunset view and is the most picturesque spot on the island. This temple is surrounded by the ocean's heavy waves, which make it difficult to reach the temple. You can only visit there if the waves are low.</li>
                <li><strong>Nusa Penida:</strong> You can explore the picture-perfect beaches here. This is a heaven for Nature enthusiasts and adventure lovers. Some of the most popular beaches are: Angle’s Billabong and Atuh Beach.</li>
                <li><strong>Nusa Lembongan:</strong> This place is perfect for underwater activities. This is an important location where the agriculture of seaweeds takes place. Devil’ Tear is a must-visit place on this island.</li>
                <li><strong>Nusa Ceningan:</strong> This is the smallest of the three Nusa Islands. It is famous for the water sports and the tranquility. The most famous places are: Blue Lagoon and Secret Beach.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-green-900 mb-4">Best Time to Visit</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>Dry season (April-October):</strong> This is the Popular Tourist time, ideal for sightseeing and outdoor activities. As this season has clear skies and pleasant weather.</li>
                <li><strong>Wet season (November-March):</strong> This time is perfect to explore the lush greenery of the tropical regions, and the crowd is also smaller.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-green-900 mb-4">Things to Do in Bali</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Explore the charming beaches in Bali.</li>
                <li>Visit the sacred temples of Bali- Tanah Lot, Uluwatu, and Besakih.</li>
                <li>Experience the thrilling Water Activities in the Nusa Islands.</li>
                <li>Explore Bali’s culture in Ubud.</li>
                <li>Watch the incredible sunset in Tanah Lot and Uluwatu.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-green-900 mb-4">Why Choose Paradise Bliss Tours</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Experienced in Global and Personalised travel plans.</li>
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
            <Image
              width={48}
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
          Bali Tour Packages
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
                    <Link href={tour.link} className="flex-1 flex flex-col cursor-pointer">
                      <Image
                        height={224}
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
                <Image
                  height={128}
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

export default BaliTour;