'use client';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { AiOutlineCalendar } from 'react-icons/ai';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Link from 'next/link';

// Sample tour data
const tours = [
  {
    title: "Badrinath  Yatra",
    dates: ["Jan 18", "Feb 08", "Feb 15"],
    prices: ["Starting ₹32,990*", "₹29,990*"],
    image: "/img/shoot/badrinath_road.jpg", // Ensure this path is correct
    duration: "3D2N",
    group: "Group Tour",
    link: "trip-packages/badrinath-yatra",
  },
  {
    title: "Kedarnath Yatra",
    dates: ["Jan 18", "Feb 08", "Feb 15"],
    prices: ["Starting ₹32,990*", "₹29,990*"],
    image: "/img/shoot/kedarnath_road.jpg", // Ensure this path is correct
    duration: "3D2N",
    group: "Group Tour",
    link: "/trip-packages/kedarnath-yatra",
  },
  {
    title: "Char Dham Yatra",
    dates: ["Jan 18", "Feb 08", "Feb 15"],
    prices: ["Starting ₹32,990*", "₹29,990*"],
    image: "/img/shoot/chardham2.jpg", // Ensure this path is correct
    duration: "5D6N",
    group: "Group Tour",
    link: "/trip-packages/chardham-luxury",
  },
  {
    title: "Kashmir Backpacking",
    dates: ["Jan 18", "Feb 08", "Feb 15"],
    prices: ["Starting ₹32,990*", "₹29,990*"],
    image: "/img/shoot/pexels-sanket-barik-7846563(1).jpg", // Ensure this path is correct
    duration: "5D6N",
    group: "Group Tour",
    link: "/uttarakhand/trip-packages/badrinath-yatra",
  },
  {
    title: "Manali Adventure",
    dates: ["Feb 01", "Feb 15", "Mar 01"],
    prices: ["Starting ₹32,990*", "₹29,990*"],
    image: "/img/shoot/pexels-sanket-barik-7846474(1).jpg", // Ensure this path is correct
    duration: "5D6N",
    group: "Group Tour",
    link: "/uttarakhand/trip-packages/badrinath-yatra",
  },
  {
    title: "Ladakh Explorer",
    dates: ["Mar 15", "Apr 01", "Apr 15"],
    prices: ["Starting ₹32,990*", "₹29,990*"],
    image: "/img/ladakh2.jpg", // Ensure this path is correct
    duration: "5D6N",
    group: "Group Tour",
    link: "/uttarakhand/trip-packages/badrinath-yatra",
  },
  {
    title: "Goa Beach Retreat",
    dates: ["Apr 05", "Apr 15", "May 01"],
    prices: ["Starting ₹28,990*", "₹24,990*"],
    image: "/img/goa.avif", // Ensure this path is correct
    duration: "4D5N",
    group: "Group Tour",
    link: "/uttarakhand/trip-packages/badrinath-yatra",
  },
  {
    title: "Rajasthan Heritage Tour",
    dates: ["Mar 10", "Mar 25", "Apr 10"],
    prices: ["Starting ₹30,990*", "₹27,990*"],
    image: "/img/shoot/reed-naliboff-RRdqscvVSWs-unsplash.jpg", // Ensure this path is correct
    duration: "6D7N",
    group: "Group Tour",
    link: "/uttarakhand/trip-packages/badrinath-yatra",
  },
];

export default function ToursSlider() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTour, setSelectedTour] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: null,
    travellers: '',
  });

  const handleOpenModal = (tour) => {
    setSelectedTour(tour);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTour(null);
    setFormData({ name: '', phone: '', date: null, travellers: '' });
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

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1
          style={{ color: 'var(--color-dark)', fontFamily: 'salazur' }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold py-6 text-center"
        >
          Upcoming Trips
        </h1>
      </div>

      {/* Ensure the parent container is properly styled */}
      <div
        style={{ backgroundColor: 'var(--light-green)' }}
        className="relative px-4 sm:px-6 lg:px-10 py-10"
      >
        <div className="swiper-container">
          <Swiper
            modules={[Pagination, Autoplay, Navigation]} // Ensure modules are correctly imported
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
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
                  }}
                  className="bg-white rounded-xl shadow-2xl overflow-hidden transition-all duration-300 h-full"
                >
                  <img
                    height={400}
                    width={400}
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-56 object-cover rounded-t-xl"
                    onError={(e) => {
                      console.error(`Failed to load image: ${tour.image}`);
                      e.target.src = '/img/placeholder.jpg'; // Fallback image if loading fails
                    }}
                  />
                  <div className="p-6">
                  <Link href={tour.link} passHref>
                    <h3 className="text-xl font-bold text-gray-900">{tour.title}</h3>
                    <p className="text-sm text-gray-700 mt-1">
                      {tour.duration} • {tour.group}
                    </p>
                    </Link>
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
                    <motion.button
                      onClick={() => handleOpenModal(tour)}
                      whileHover={{ scale: 1.05, backgroundColor: '#00332A' }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full mt-5 py-3 bg-[#00453A] text-white rounded-lg flex items-center justify-center gap-2 font-semibold transition-colors duration-300"
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
            >
              ✕
            </button>
            {selectedTour && (
              <div className="mb-4">
                <img
                  height={400}
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
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 bg-[#00453A] text-white rounded-lg font-semibold transition-colors duration-300"
                >
                  Submit Request
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      )}

      <style jsx global>{`
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
    </>
  );
}