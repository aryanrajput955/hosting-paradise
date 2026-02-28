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
    title: "Sikkim Himalayan Explorer",
    dates: ["Dates on Request"],
    prices: ["₹12,499*"],
    image: "/img/sikkim2.jpg",
    duration: "3N4D",
    group: "Group Tour",
    link: "/indian-tours/sikkim-tour-package",
  },
];

const SikkimTour = () => {
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
    package: 'Sikkim Tour',
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
      package: 'Sikkim Tour',
    }));
  };

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  const stats = [
    { img: '/img/smile.png', text: '400k+<br/>Happy Customers' },
    { img: '/img/star.png', text: '4.8<br/>Ratings' },
    { img: '/img/travel.png', text: '400+<br/>Itineraries' },
    { img: '/img/wallet.png', text: 'Book Now &<br/>Pay Later' },
  ];

  return (
    <>
      {/* Hero Section */}
      <div
        className="relative w-full h-[65vh] lg:h-screen bg-cover bg-center flex justify-center lg:justify-end items-center px-4 sm:px-6 lg:px-8"
        style={{ backgroundImage: "url('/img/sikkim2.jpg')" }}
      >
        <h2
          className="absolute top-1/2 left-1/2 lg:left-auto lg:right-[60%] transform -translate-x-1/2 lg:translate-x-1/2 -translate-y-1/2 text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-center lg:text-left z-10 font-serif"
        >
          Sikkim Tour
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
            <option value="Sikkim Tour">Sikkim – Himalayan Paradise</option>
            <option value="Ladakh Tour">Ladakh</option>
            <option value="Rajasthan Tour">Rajasthan</option>
            <option value="Kerala Tour">Kerala</option>
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
          Sikkim – The Hidden Gem of the Himalayas
        </motion.h2>
        <motion.p
          className="font-sans text-lg text-gray-700 mb-6 w-full max-w-5xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Tucked away in the Eastern Himalayas, Sikkim is a paradise of snow-capped mountains, cascading waterfalls, ancient monasteries, and vibrant culture. Often called the “Gateway to the Northeast”, Sikkim is one of India’s most peaceful and picturesque states.
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
              <h3 className="text-2xl font-semibold text-green-900 mb-4">🌄 Explore Heaven on Earth – Sikkim Tour Packages by Paradise Bliss Tours Pvt. Ltd.</h3>
              <p className="leading-relaxed">
                We explains a joyful beauty of Sikkim – the place has ice-capped peaks, peaceful monasteries, lush green valley and a vital mixture of culture. In Paradise Bliss Tours Pvt. Ltd., we are sharing you planned tour packages that defines adventure, nature and devotion – we authorize you to experience the beauty of Himalayas and charm. 
                In Gangtok, find the stunning view and crystal clear water in Tsomgo Lake, every corner of Sikkim defines a story of peace of mind and Harmony culture. Feel the spiritual aura of Rumtek Monastery, explore the raw beauty of Lachung and Lachen, and discover the vibrant blooms in Yumthang Valley.  
                Whether you are finding a romantic gateway, a family trip, or an adventure escape, Our Sikkim Tour Package are planned to suit every traveler. We make sure of smooth travelers, comfortable stays, and unforgettable experiences surrounded by the scenic beauty of Himalayas. With Paradise Bliss Tours Pvt. Ltd., visit Sikkim – where every journey is a memorable moment for lifetime.    
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-green-900 mb-4">🏞️ Top Destinations Covered in Our Sikkim Packages</h3>
              <ol className="list-decimal list-inside space-y-2">
                <li><strong>Gangtok:</strong> The glamour capital of Sikkim, Gangtok combines modernism with natural beauty covered with cloudy mountains and monasteries, it boasts stunning views of the Kanchenjunga Range. Travelers can visit the attractions like Rumtek Monastery, MG Marg, and Tashi View Point. Its tranquil ambiance and vibrant markets, these are the spots to start the Sikkim journey.</li>
                <li><strong>Tsomgo Lake:</strong> Exist at an altitude of 12,000 feet, Tsomgo Lake is one of the most attractive glacial lakes in India. This lake changes the color as per the season, creating an adorable sight. Covered with snow-capped peaks and picturesque beauty of nature and also experience yak rides. Perfect for those who love calmness and natural of beauty.</li>
                <li><strong>Lachen:</strong> It is a peaceful mountain range untouched beauty and warmth and affection. It determines the base to visit the holy Gurudongmar Lake, one of the highest lake in the world. The Journey from Lachen offers the picturesque views of snowy peaks and valleys.</li>
                <li><strong>Lachung & Yumthang Valley:</strong> It known as the ‘Valley of Flowers’, it covers with colorful blooms and offers quit hot springs and majestic mountain views. Known for its apple orchids and rich local culture, it’s one of the north Sikkim’s most beautiful regions.</li>
                <li><strong>Pelling:</strong> Pelling is the attractive hill town that defines the elevated views of Mount Kanchenjunga. Its home to the famous Sky Walk, Pemayangtse Monastery, and the blessed khecheopalri lake.</li>
              </ol>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-green-900 mb-4">🌸 Best Time to Visit Sikkim</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Spring Season (March to June):</strong> This season paints the valleys with colors as flowers bloom around the hills. This season temperature is comfortable for sightseeing, adventure, and nature walks.</li>
                <li><strong>Autumn and early winter (September to December):</strong> In this season view of snow-capped peaks are crystal clear and making it ideal for picture spot and high altitude places like Nathula Pass and Tsomgo Lake.</li>
                <li><strong>Winter Season (December to February):</strong> If you love to travel cold weather, then December to February is great for undergo snowfall in North Sikkim but some high passes may be closed during this season because of high snow fall.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-green-900 mb-4">🌸 Things to do in Sikkim</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Visit Monasteries:</strong> Explore calm monasteries like Rumtek and Pemayangtse to undergo Sikkim’s rich Buiddhist Culture.</li>
                <li><strong>Experience Local Culture:</strong> Visit MG Marg, taste local delicacies like momos and thukpa, and shops for Sikkim’s craft.</li>
                <li><strong>Adventure Activities:</strong> Feel the joy of paragliding, river rafting and thrilling view of the Himalayas through cable car rides.</li>
                <li><strong>Yumthang Valley:</strong> Admiring the vibrant colorful flowers blooms, wonderful, and hot springs, mountain environment.</li>
                <li><strong>Visit Scenic Lakes:</strong> Observe the beauty of Tsomgo Lake, Nathula Pass, and Gurudongmar Lake covered by snow- capped peaks.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-green-900 mb-4">✨ Why Choose Paradise Bliss Tours for Your Sikkim Trip?</h3>
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
              alt={stat.text}
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
          Sikkim Tour Packages
        </h1>
      </div>

      <div style={{ backgroundColor: 'var(--light-green)' }} className="relative px-4 sm:px-6 lg:px-10 py-10">
        <div className="swiper-container">
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true, el: '.swiper-pagination-custom' }}
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
                    scale: 1.03,
                    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
                  }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 h-full flex flex-col"
                >
                  <div className="relative w-full h-44 xs:h-48 sm:h-52 md:h-56">
                    <Image
                      src={tour.image}
                      alt={tour.title}
                      fill
                      className="object-cover"
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      onError={(e) => {
                        console.error(`Failed to load image: ${tour.image}`);
                        e.target.src = '/img/placeholder.jpg';
                      }}
                    />
                  </div>
                  <div className="p-4 xs:p-5 md:p-6 flex flex-col flex-1">
                  <Link href={tour.link} passHref>
                    <h3 className="text-base xs:text-lg sm:text-lg md:text-xl font-bold text-gray-900 leading-snug">{tour.title}</h3>
                    <p className="text-xs xs:text-sm text-gray-500 mt-1">
                      {tour.duration} • {tour.group}
                    </p>
                    </Link>
                    <div className="mt-3 md:mt-4 flex flex-wrap gap-1.5 xs:gap-2">
                      {tour.dates.map((date, i) => (
                        <span
                          key={i}
                          className="bg-[#F1FDF3] text-[#00453a] px-2.5 xs:px-3 py-1 rounded-full text-xs xs:text-sm flex items-center gap-1"
                        >
                          <AiOutlineCalendar className="text-[#00453a]" />
                          {date}
                        </span>
                      ))}
                    </div>
                    <div className="mt-3 xs:mt-4 md:mt-5 flex items-end justify-between">
                      <span className="text-gray-400 line-through text-xs xs:text-sm">
                        {tour.prices[0] !== "Price on Request*" && tour.prices[0] !== "Price on Request" && tour.prices[0] !== "On Request" ? tour.prices[0] : ""}
                      </span>
                      <p className="text-lg xs:text-xl md:text-xl font-bold text-green-600">
                        {tour.prices[1] || tour.prices[0]}
                      </p>
                    </div>
                    <div className="flex gap-2.5 mt-4 xs:mt-5">
                      {/* Phone Call Button */}
                      <motion.a
                        href="tel:+918449000181"
                        whileHover={{ scale: 1.08, backgroundColor: '#00332A' }}
                        whileTap={{ scale: 0.95 }}
                        className="py-3 px-5 bg-[#00453A] text-white rounded-xl flex items-center justify-center transition-colors duration-300"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                      </motion.a>

                      {/* Details Button */}
                      <Link href={tour.link} className="flex-1">
                        <motion.div
                          whileHover={{ scale: 1.05, backgroundColor: '#00453A', color: '#ffffff' }}
                          whileTap={{ scale: 0.95 }}
                          className="w-full py-3 border-2 border-[#00453A] text-[#00453A] bg-white rounded-xl flex items-center justify-center gap-2 font-semibold text-sm xs:text-base transition-all duration-300"
                        >
                          Details
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            style={{ transform: 'rotate(-45deg)' }}
                          >
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </motion.div>
                      </Link>
                    </div>
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
                  width="400"
                  height="128"
                  onError={(e) => (e.target.src = '/img/placeholder.jpg')}
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

      <style jsx global>{`
        .swiper-pagination-custom {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 24px;
        }
        .swiper-pagination-bullet {
          background-color: #00453A !important;
          opacity: 0.4;
          width: 10px !important;
          height: 10px !important;
          margin: 0 6px !important;
          border-radius: 50% !important;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          opacity: 1 !important;
          transform: scale(1.2);
        }
        .react-datepicker-wrapper {
          width: 100%;
        }
      `}</style>

      <WhyChooseUs />
    </>
  );
};

export default SikkimTour;