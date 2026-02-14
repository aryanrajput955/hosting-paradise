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
    title: "Winter Spiti Valley Tour",
    dates: ["March 28", "April 01", "April 15"],
    prices: ["Starting ₹20,990*", "₹17,990*"],
    image: "/optimised/Winter_spiti-transformed.jpeg",
    duration: "9D8N",
    group: "Group Tour",
    link: "/indian-tours/spiti-winter-tour-package",
  },
  {
    title: "Spiti Valley with Chandra Taal",
    dates: ["March 29", "April 02", "April 15"],
    prices: ["Starting ₹20,990*", "₹16,000*"],
    image: "/optimised/Chandratal-Lake-Spiti.jpeg",
    duration: "7D6N",
    group: "Group Tour",
    link: "/indian-tours/spiti-chandratal-tour-package",
  },
  {
    title: "Spiti Valley Bike Tour Package",
    dates: ["March 27", "April 05", "April 14"],
    prices: ["Starting ₹32,990*", "₹29,990*"],
    image: "/optimised/Spiti-Valley-Bike-Trip.jpeg",
    duration: "5D6N",
    group: "Group Adventure",
    link: "/indian-tours/spiti-bike-tour-package",
  },
  {
    title: "Spiti Valley Full Circuit Tour",
    dates: ["Jan 18", "Feb 08", "Feb 15"],
    prices: ["Starting ₹30,990*", "₹21,999*"],
    image: "/optimised/Spiti-valey-full-curcuit.jpeg",
    duration: "9D8N",
    group: "Group Tour",
    link: "/indian-tours/spitifullcircuit-tour-package",
  },
  {
    title: "Spiti Valley – Cold Desert Adventure",
    dates: ["Feb 01", "Feb 15", "Mar 01"],
    prices: ["Starting ₹32,990*", "Price On Request*"],
    image: "https://images.unsplash.com/photo-1651955670895-9aa2e9243b66?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    duration: "9D8N",
    group: "Group Adventure",
    link: "/indian-tours/spiti-winter-tour-package",
  },
    {
    title: "Spiti Valley Himalayan Odyssey",
    dates: ["Feb 01", "Feb 15", "Mar 01"],
    prices: ["Starting ₹32,990*", "Price On Request*"],
    image: "https://wallpaperaccess.com/full/7928594.jpg",
    duration: "8D7N",
    group: "Group Adventure",
    link: "/indian-tours/spiti-tour-package",
  },
];

const SpitiValleyTour = () => {
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
    package: 'Spiti Valley Tour',
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
    alert('Thank you! We will contact you shortly for your Spiti adventure.');
    handleCloseModal();
  };

  const handleHeroFormSubmit = (e) => {
    e.preventDefault();
    console.log('Hero Form Submitted:', formData);
    alert('Thank you! Your inquiry has been sent successfully.');
    setFormData((prev) => ({
      ...prev,
      name: '',
      phone: '',
      email: '',
      package: 'Spiti Valley Tour',
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
        className="relative w-full h-screen bg-cover bg-center flex justify-center lg:justify-end items-center px-4 sm:px-6 lg:px-8"
        style={{ backgroundImage: "url('/img/spiti2.jpg')" }}
      >
        <h2
          className="absolute top-1/2 left-1/2 lg:left-auto lg:right-[60%] transform -translate-x-1/2 lg:translate-x-1/2 -translate-y-1/2 text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-center lg:text-left z-10 font-serif"
        >
          Spiti Valley Tour
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
            <option value="Spiti Valley Tour">Spiti Valley – Cold Desert Adventure</option>
            <option value="Ladakh Tour">Ladakh</option>
            <option value="Himachal Tour">Himachal Pradesh</option>
            <option value="Sikkim Tour">Sikkim</option>
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
          Explore the Untouched Beauty of Spiti Valley with Paradise Bliss Tours Pvt. Ltd.
        </motion.h2>
        <motion.p
          className="font-sans text-lg text-gray-700 mb-6 w-full max-w-5xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Welcome to Spiti Valley – The land that lies between India and Tibet. Here you can feel that every mountain is telling you a story of adventure, Peace, and faith. Spiti is bounded by the Rocky Mountains, ancient monasteries, and the pristine sky. Spiti is one of the breathtaking destinations that offers the raw beauty of nature and a Soulful experience. 
In Paradise Bliss Tours, we organize personalized packages for you, which include the Comfort and the Thrill. From the Crazy drive through the high-altitude hills to the cozy stays at the Himalayan villages. Our goal is to make your trip seamless and unforgettable.

        </motion.p>
                <motion.p
          className="font-sans text-lg text-gray-700 mb-6 w-full max-w-5xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Popularly known as the Middle Land, Spiti Valley is located in the Lahaul and Spiti district of Himachal Pradesh. It is one of the most delightful high-altitude cold deserts in the Himalayas. Surrounded by the snow-covered peaks and monasteries, and scenic villages. It is a perfect destination that offers a perfect blend of adventure, spirituality, and peace. Its raw beauty, crystal clear rivers, and the starlit nights make it the ideal destination for the Nature lover.

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
              <h3 className="text-2xl font-semibold text-green-900 mb-4">The Land Between Heaven and Earth</h3>
              <p className="leading-relaxed">
                Spiti means “The Middle Land” — between India and Tibet. With barren landscapes, ancient monasteries, and snow-capped peaks, it offers a surreal escape from the ordinary.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-green-900 mb-4">Must-Visit Places in Spiti</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Kaza</strong>: The Heart of Spiti Valley, it is the most famous town in the Spiti Valley. It is the perfect hub that gives you the complete vibes of their local culture. It offers vibrant markets, cozy cafes, fascinating mountains, and warm-hearted people. It also provides the base to reach the nearby places like Hikkim, Key monastery, and Langza. </li>
                <li><strong>Langza</strong>: Renowned as the Fossil Village, it is the most picture-perfect place of the Spiti. It is situated at 14,500 ft, and is famous for its ancient marine fossils that tell the story about that time when the land was immersed under the Tethys sea. This place is surrounded by lush greenery in summer and covered with snow in the winter, and it is also a great place for Stargazing.</li>
                <li><strong>Key Monastery</strong>: This is the largest and most famous Monastery of the Spiti Valley, situated on the hilltop of the Spiti River. This monastery is a thousand years old and was built as a fortress. Monks live here a disciplined and calm life, giving the visitor a chance to experience their peaceful life. From the top, it gives a stunning view, especially at sunset and sunrise. </li>
                <li><strong>Chicham Bridge</strong>: The highest bridge of Asia, which stands at a height of 14,569 ft., joining the Chicham and the Kibber village. This bridge offers a stunning view of the rugged valley, which makes it the favorite spot for travelers and photographers. It is the most glorious landmark of the Spiti Valley.</li>
                <li><strong>Komic</strong>: It holds the title of World’s highest village with a connected motorable road, situated at an altitude of about 15,000 ft. The Komic monastery is known as the heart of this village, and is believed to be 500 years old. The monks practice deep meditations in a silent and charming environment.  </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-green-900 mb-4">Best Time to Visit</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>May–Sep</strong>:  This time is good for sightseeing and the road trip, as all the roads remain open.</li>
                <li><strong>oct-feb</strong>: During this time, the whole Spiti becomes a snow desert, and it also becomes a paradise for snow lovers. </li>
                <li><strong>Note </strong>Avoid travel in the monsoon due to the high risk of landslides. </li>
              </ul>
            </div>
             <div>
              <h3 className="text-2xl font-semibold text-green-900 mb-4">Things to do in Spiti </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>1.	Visit the ancient monasteries like Key, Komic, Tabo, and Dhankar.</li>
                <li>2.	Send a postcard from the world’s highest post office at Hikkim.</li>
                <li>3.	Experience the best Stargazing with a clear sky in Langza and Komic.</li>
                <li>4.	Explore the ancient marine fossils at Langza. </li>
                <li>5.	Visit Asia’s highest bridge, Chicham Bridge. </li>
              </ul>
            </div>
           <div>
              <h3 className="text-2xl font-semibold text-green-900 mb-4">✨ Why Choose Paradise Bliss Tours for Your Spiti Trip?</h3>
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
          Spiti Valley Tour Packages
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
                <Image
                  src={selectedTour.image}
                  width={400}
                  height={128}
                  alt={selectedTour.title}
                  className="w-full h-32 object-cover rounded-lg mb-4"
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

export default SpitiValleyTour;