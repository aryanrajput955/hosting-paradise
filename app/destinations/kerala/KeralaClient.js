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
    title: "Kerala Backpacking Tour",
    dates: ["Dates on Request"],
    prices: [""," Price on Request"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Kumarkom.jpg/330px-Kumarkom.jpg",
    duration: "5N7D",
    group: "Honeymoon Package",
    link: "/indian-tours/kerala-backpacking-tour",
  },
  {
    title: "Kerala Honeymoon Gateway",
    dates: ["Dates on Request"],
    prices: [""," Price on Request"],
    image: "/optimised/k1.jpeg",
    duration: "4N5D",
    group: "Group Tour",
    link: "/indian-tours/kerala-honeymoon-gateway",
  },
  {
    title: "Kerala Romantic Holiday",
    dates: ["Dates on Request"],
    prices: [""," Price on Request"],
    image: "/optimised/k2.jpeg",
    duration: "3N4D",
    group: "Honeymoon Package",
    link: "/indian-tours/kerala-romantic-honeymoon-gateway",
  },
  {
    title: "Kerala Backpacking Escape",
    dates: ["Dates on Request"],
    prices: [""," Price on Request"],
    image: "/img/kerla.jpg",
    duration: "6N7D",
    group: "Group Tour",
    link: "/indian-tours/kerala-backpacking-escape",
  },
];

const KeralaTour = () => {
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
    package: 'Kerala Tour',
  });

  const handleOpenModal = (tour) => {
    setSelectedTour(tour);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTour(null);
    setFormData((prev) => ({
      ...prev,
      name: '',
      phone: '',
      date: null,
      travellers: '',
      email: '',
    }));
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
    console.log('Modal Form Submitted:', { ...formData, tour: selectedTour?.title });
    alert('Thank you! We will contact you soon.');
    handleCloseModal();
  };

  const handleHeroFormSubmit = (e) => {
    e.preventDefault();
    console.log('Hero Form Submitted:', formData);
    alert('Thank you! Your inquiry has been sent.');
    setFormData((prev) => ({
      ...prev,
      name: '',
      phone: '',
      email: '',
      package: 'Kerala Tour',
    }));
  };

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  const stats = [
    { img: '/img/smile.png', text: '40K+<br/> Happy Customers' },
    { img: '/img/star.png', text: '4.8<br/>Ratings' },
    { img: '/img/travel.png', text: '400+<br/>Itineraries' },
    { img: '/img/wallet.png', text: 'Book Now &<br/>Pay Later' },
  ];

  return (
    <>
      {/* Hero Section */}
      <div
        className="relative w-full h-screen bg-cover bg-center flex justify-center lg:justify-end items-center px-4 sm:px-6 lg:px-8"
        style={{ backgroundImage: "url('/img/kerala2.jpg')" }}
      >
        <h2
          className="absolute top-1/2 left-1/2 lg:left-auto lg:right-[60%] transform -translate-x-1/2 lg:translate-x-1/2 -translate-y-1/2 text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-center lg:text-left z-10 font-serif"
        >
          Kerala Tour
        </h2>

        <motion.form
          onSubmit={handleHeroFormSubmit}
          className="hidden lg:block bg-[#E4DECF]/90 p-6 rounded-lg shadow-lg w-full max-w-md z-20 mt-16 lg:mt-20 lg:mr-4 xl:mr-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            width={100}
            height={100}
            src="/img/logo.png"
            alt="Paradise Bliss Tours Logo"
            className="w-20 mx-auto mb-6"
          />

          <label className="block text-left text-gray-700 text-sm mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your Name"
            required
            className="w-full p-3 mb-4 border rounded focus:ring-[#00453A] focus:border-[#00453A]"
          />

          <label className="block text-left text-gray-700 text-sm mb-2">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="+91 98765 43210"
            required
            className="w-full p-3 mb-4 border rounded focus:ring-[#00453A] focus:border-[#00453A]"
          />

          <label className="block text-left text-gray-700 text-sm mb-2">Package</label>
          <select
            name="package"
            value={formData.package}
            onChange={handleInputChange}
            required
            className="w-full p-3 mb-4 border rounded focus:ring-[#00453A] focus:border-[#00453A]"
          >
            <option value="Kerala Tour">Kerala – God’s Own Country</option>
            <option value="Ladakh">Ladakh</option>
            <option value="Sikkim">Sikkim</option>
          </select>

          <label className="block text-left text-gray-700 text-sm mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="you@example.com"
            required
            className="w-full p-3 mb-4 border rounded focus:ring-[#00453A] focus:border-[#00453A]"
          />

          <motion.button
            type="submit"
            className="w-full bg-[#00453A] text-white py-3 rounded font-bold hover:bg-[#00332A] transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit Inquiry
          </motion.button>
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
          🌄 Explore Heaven on Earth—Kerala Tour Packages by Paradise Bliss Tours Pvt. Ltd.
        </motion.h2>
        <motion.p
          className="font-sans text-lg text-gray-700 mb-6 w-full max-w-5xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          We define the beauty of Kerala—the land of peaceful backwaters, cloud-covered highlands, sandy coastline, and energetic traditions. At Paradise Bliss Tours Pvt. Ltd., we are offering you strategic tour packages that combine relaxation, nature, and culture—we secure your review and charm as “God’s Own Country” itself.
          Whether you dream of a romantic houseboat stay in Alleppey, a family trip in the midst of Munnar’s tea gardens, or a refreshing coastal getaway in Kovalam, our organized tour packages cater to every traveler and offer support, smoothness, and cherished memories. 
        </motion.p>

        <div
          ref={contentRef}
          className={`text-left w-full max-w-5xl overflow-hidden transition-all duration-700 ease-in-out transform ${
            isOpen ? 'opacity-100 scale-y-100 mb-6' : 'opacity-0 scale-y-0'
          }`}
          style={{ height: isOpen ? `${contentHeight}px` : '0px', transformOrigin: 'top' }}
        >
          <div className="py-6 space-y-8 text-gray-600">
            <div>
              <h3 className="text-2xl font-semibold text-green-900 mb-4">The Charm of Nature and Backwaters</h3>
              <p className="leading-relaxed">
                Kerala’s charm lies in its breathtaking natural beauty. The calm backwaters of Alleppey and Kumarakom are like a dreamscape where you can drift through palm-fringed canals on a traditional houseboat. The gentle ripples of water, lush green paddy fields, and rustic village life create an experience that soothes the soul.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-green-900 mb-4">Culture, Festivals, and Traditions</h3>
              <p className="leading-relaxed">
                Witness the grace of Kathakali and Mohiniyattam, explore ancient temples and churches, and celebrate vibrant festivals like Onam and Thrissur Pooram. Kerala’s people are known for their simplicity, kindness, and unmatched hospitality.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-green-900 mb-4">A Food Lover’s Paradise</h3>
              <p className="leading-relaxed">
                Indulge in Kerala Sadya, Appam with Stew, Puttu and Kadala Curry, and fresh seafood served on banana leaves — every meal is a celebration of flavor and tradition.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-green-900 mb-4">Best Time to Visit Kerala</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Winter (Oct–Feb):</strong>The charm shines to experience the nature of Kerala—peaceful climate for houseboat cruises, beach relaxation & hill-station gateways.</li>
                <li><strong>Monsoon (Jun–Sep):</strong> This season is perfect for Ayurveda therapies and watching Kerala’s lush greenery at its peak. After rain becomes beauty to the hills, backwaters, and forests, creating an environment that is relaxed and refreshing.</li>
                <li><strong>Summer (Mar–May):</strong>Ideal for inspecting hill stations like Munnar and Wayanad, presenting a refreshing retreat to enjoy cool and pleasant weather. Kerala’s weather during the summer season is peaceful and relaxing in hill stations, where you can enjoy greenery, tea gardens, and nature walks.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-green-900 mb-4">🌸 Things to do in Kerala</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Relax on Beaches: Find the stunning sunset on the beach and swim in Kovalam or Varkala.</li>
                <li>Backwaters and Cruise: Enjoy traditional houseboat rides and village life in Alleppey and Kumarakom.</li>
                <li>Wildlife and Nature: During the safari you can go birdwatching at Kumarakom Bird in Periyar Wild Sanctuary.</li>
                <li>Experience Ayurveda and Wellness: Experience the best yoga retreats, Ayurvedic massages, and herbal therapies.</li>
                <li>Hill Stations: Explore sightseeing and enjoy trekking, tea gardens, waterfalls, and cool weather in Munnar and Wayanad.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-green-900 mb-4">Top Destinations Covered in Our Kerala Packages </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Munnar: This hill station is famous for its rolling tea plantations, misty valleys, and scenic falls. Beyond its beauty, Munnar also has a great variety of flora and fauna. In Eravikulam National Park, you can also discover the Nilgiri Tahr, which is an endangered flower, and the special Nilakurinji flower, which blooms once every twelve years.</li>
                <li>Alleppey (Alappuzha): The Venice of the East—eminent views for its tranquil backwaters, traditional houseboats, and lush paddy fields. This beautiful town defines an unforgettable experience; peaceful canals weave through villages, coconut groves, and vital landscapes.</li>
                <li>Thekkady: The land of Wilderness—home to Periyar Wildlife Sanctuary, spice plantations, and bamboo rafting adventures. It is also popular for its fragrant spice plantations, defining a savory experience of Kerala’s spice culture. Activities like bamboo rafting on the peaceful Periyar Lake deliver memorable memories of the region'sscenic beauty.</li>
                <li>Kovalam: The Oceanic Elegance—it is famous for the semilunar-shaped beaches, Ayurvedic retreats, and wonderful sunsets over the Arabian Sea. Travelers can revitalize with traditional Ayurvedic therapies, visitors also enjoy water sports, or they simply relax under waving palms as the sun paints the skyline in shades of orange and gold.</li>
                <li>Kumarakom: A calm paradise land—perfect for lake cruises and authentic Kerala village experiences. It is a heaven for birdwatchers, as countless colorful birds can be seen at Kumarakom Bird Sanctuary.</li>
                <li>Wayanad: Nature’s retreat—it is a charming eminence district filled with cascading waterfalls, caves, wildlife refuges, and lush green forests. It is also home to a rich wildlife sanctuary, as many birds and animals live together in their natural surroundings.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-green-900 mb-4">✨ Why Choose Paradise Bliss Tours for Your Kerala Trip?</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>We have a tailored itinerary for all traveler as per their need and preferences.</li>
                <li>We provide you with the best accommodation.</li>
                <li>Private Cab and local Assistance, Enjoy Hassle-free transfer with professional drivers.</li>
                <li>Enjoy local sightseeing for whatever package you choose.</li>
                <li>We provide you 24*7 customer support.</li>
              </ul>
            </div>
          </div>
        </div>

        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="mt-6 px-8 py-3 bg-green-900 text-white rounded-lg hover:bg-green-700 transition font-semibold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? 'Show Less' : 'Explore More'}
        </motion.button>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 p-6 max-w-6xl mx-auto">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="text-center text-green-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Image
              width={48}
              height={48}
              src={stat.img}
              alt=""
              className="w-12 h-12 mx-auto"
            />
            <p className="mt-2 text-lg font-bold" dangerouslySetInnerHTML={{ __html: stat.text }} />
          </motion.div>
        ))}
      </div>

      {/* Tour Packages Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1
          style={{ color: 'var(--color-dark)', fontFamily: 'salazur' }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold py-6 text-center"
        >
          Kerala Tour Packages
        </h1>
      </div>

      <div style={{ backgroundColor: 'var(--light-green)' }} className="relative px-4 sm:px-6 lg:px-10 py-10">
        <div className="swiper-container">
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true, el: '.swiper-pagination-custom', dynamicBullets: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3.5 },
            }}
            className="py-8"
          >
            {tours.map((tour, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-xl shadow-2xl overflow-hidden h-full flex flex-col">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.05, boxShadow: '0 15px 30px rgba(0,0,0,0.2)' }}
                    className="h-full flex flex-col"
                  >
                    <Link href={tour.link} className="flex-1 flex flex-col">
                      <Image
                        src={tour.image}
                        width={400}
                        height={224}
                        alt={tour.title}
                        className="w-full h-56 object-cover rounded-t-xl"
                        onError={(e) => (e.target.src = '/img/placeholder.jpg')}
                      />
                      <div className="p-6 flex-1">
                        <h3 className="text-xl font-bold text-gray-900">{tour.title}</h3>
                        <p className="text-sm text-gray-700 mt-1">{tour.duration} • {tour.group}</p>

                        <div className="mt-4 flex flex-wrap gap-2">
                          {tour.dates.map((date, i) => (
                            <span key={i} className="bg-[#F1FDF3] text-[#00453a] px-3 py-1 rounded-full text-sm flex items-center gap-1">
                              <AiOutlineCalendar /> {date}
                            </span>
                          ))}
                        </div>

                        <div className="mt-5 text-right">
                          <span className="text-gray-500 line-through text-base">{tour.prices[0]}</span>
                          <p className="text-xl font-bold text-green-600 mt-1">{tour.prices[1]}</p>
                          {tour.prices[2] && <p className="text-sm text-red-600 font-medium">{tour.prices[2]}</p>}
                        </div>
                      </div>
                    </Link>

                    <div className="px-6 pb-6">
                      <motion.button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          handleOpenModal(tour);
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full py-3 bg-[#00453A] text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-[#00332A] transition"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
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
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={handleCloseModal} aria-hidden="true"></div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative bg-white rounded-xl shadow-2xl w-full max-w-md mx-4 p-6"
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-3 right-4 text-2xl text-gray-600 hover:text-gray-900"
              aria-label="Close modal"
            >
              ×
            </button>

            {selectedTour && (
              <div className="mb-6 text-center">
                <Image src={selectedTour.image}
                  alt={selectedTour.title}
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-gray-900">{selectedTour.title}</h3>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                required
                className="w-full p-3 border rounded-lg focus:ring-[#00453A]"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone Number"
                required
                className="w-full p-3 border rounded-lg focus:ring-[#00453A]"
              />
              <div className="relative">
                <DatePicker
                  selected={formData.date}
                  onChange={handleDateChange}
                  minDate={new Date()}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Preferred Travel Date"
                  required
                  className="w-full p-3 border rounded-lg focus:ring-[#00453A]"
                />
                <AiOutlineCalendar className="absolute right-3 top-4 text-gray-500 pointer-events-none" />
              </div>
              <input
                type="number"
                name="travellers"
                value={formData.travellers}
                onChange={handleInputChange}
                placeholder="Number of Travellers"
                min="1"
                required
                className="w-full p-3 border rounded-lg focus:ring-[#00453A]"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-[#00453A] text-white py-3 rounded-lg font-bold hover:bg-[#00332A] transition"
              >
                Submit Request
              </motion.button>
            </form>
          </motion.div>
        </div>
      )}

      <style jsx>{`
        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.8);
          width: 12px;
          height: 12px;
        }
        .swiper-pagination-bullet-active {
          background: #00453A;
          width: 14px;
          height: 14px;
        }
        .react-datepicker-wrapper {
          width: 100%;
        }
      `}</style>

      <WhyChooseUs />
    </>
  );
};

export default KeralaTour;