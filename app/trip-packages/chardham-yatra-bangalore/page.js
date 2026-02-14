'use client';
import { motion, AnimatePresence } from 'framer-motion';
import React, { useState, useEffect, useCallback } from 'react';
import { AiOutlineCalendar, AiOutlineDown, AiOutlineUp, AiOutlineStar, AiOutlinePhone } from 'react-icons/ai';
import Image from 'next/image';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { memo } from 'react';

// Sample images (replace with actual paths)
const heroImage = "/img/shoot/bg.jpg"; // Updated for Bangalore package
const highlightImages = [
  "/img/shoot/YAMUNOTRI.jpg",
  "/img/shoot/gangotri.jpg",
  "/img/shoot/kedar.jpg",
  "/img/shoot/badrinath.jpg",
];
const rightSideImage = "/img/logo.png";

// Quick Facts about Chardham Yatra
const quickFacts = [
  { text: "Yamunotri honors Goddess Yamuna, believed to grant a peaceful demise." },
  { text: "Gangotri is the origin of the Ganges, purifying souls with its sacred waters." },
  { text: "Kedarnath is one of Lord Shiva’s 12 Jyotirlingas, tied to the Pandavas’ penance." },
  { text: "Badrinath, dedicated to Lord Vishnu, is a key site for attaining moksha." },
];

// Itinerary data (Updated for 12N/13D from Bangalore)
const itinerary = [
  {
    time: "Day 1",
    title: "Train/Flight from Bangalore to Delhi",
    desc: "Begin your Chardham Yatra from Bangalore with Lord Vigneswar’s blessings. Travel to Delhi by train or flight of your choice."
  },
  {
    time: "Day 2",
    title: "Delhi to Rishikesh (230 km, 7 hours)",
    desc: "Arrive in Delhi, meet our representative at the station, and depart for Rishikesh around 10 PM. Overnight travel."
  },
  {
    time: "Day 3",
    title: "Rishikesh to Barkot (200 km, 7 hours)",
    desc: "Arrive in Rishikesh, the 'gateway to Garhwal Himalayas.' Spend half a day sightseeing (Ram Jhoola, Laxman Jhoola, Geeta Ashram, Swarg Ashram). Drive to Barkot after lunch, visiting Kempty Falls in Mussoorie en route. Overnight stay in Barkot."
  },
  {
    time: "Day 4",
    title: "Barkot to Yamunotri & Back (45 km by car, 6 km trek)",
    desc: "Drive to Jankichatti, then trek 6 km to Yamunotri Temple. Take a dip in Yamuna or Surya Kund, offer prayers at Divya Shila, and cook Prasadam in the hot spring. Return to Barkot for the night."
  },
  {
    time: "Day 5",
    title: "Barkot to Uttarkashi (90 km, 4 hours)",
    desc: "After breakfast, drive to Uttarkashi. Visit Prakateshwar Mahadev (Shiv Cave) and Kashi Vishwanath Temple. Overnight stay in Uttarkashi."
  },
  {
    time: "Day 6",
    title: "Uttarkashi to Gangotri & Back (100 km each way, 4 hours)",
    desc: "Drive to Gangotri, enjoy Himalayan views, dip in the Bhagirathi River, and perform Darshan at Gangotri Temple. Visit Harsil en route and return to Uttarkashi for the night."
  },
  {
    time: "Day 7",
    title: "Uttarkashi to Sitapur (280 km, 11 hours)",
    desc: "Travel to Sitapur, your base for Kedarnath. Check into the hotel and rest overnight."
  },
  {
    time: "Day 8",
    title: "Sitapur to Kedarnath & Back (19 km trek, 6 hours)",
    desc: "Drive to Sonprayag, then trek 19 km to Kedarnath Temple for Darshan (pony/doli or helicopter optional). Return to Sitapur for the night."
  },
  {
    time: "Day 9",
    title: "Sitapur to Pipalkoti (120 km, 6 hours)",
    desc: "Relax after the trek, departing for Pipalkoti in the afternoon. Overnight stay in Pipalkoti."
  },
  {
    time: "Day 10",
    title: "Pipalkoti to Badrinath via Joshimath (80 km, 4 hours)",
    desc: "Drive to Badrinath via Joshimath’s Narsimha Temple and Vishnuprayag. Visit Mana Village (Vyas Gufa, Bhim Pul, Ganesha Gufa), dip in Tapt Kund, and offer prayers at Badrinath Temple. Overnight stay in Badrinath."
  },
  {
    time: "Day 11",
    title: "Badrinath to Srinagar (170 km, 7 hours)",
    desc: "After morning Darshan, drive to Srinagar via Karnaprayag, Nandprayag, and Rudraprayag’s Dhari Devi Temple. Overnight stay in Srinagar."
  },
  {
    time: "Day 12",
    title: "Srinagar to Haridwar (132 km, 4.5 hours)",
    desc: "Drive to Haridwar via Devprayag (Bhagirathi-Alaknanda confluence). Bathe in the Ganga, visit Manasa Devi Temple, and attend Ganga Aarti at Har-ki-Pauri. Depart for Delhi after dinner."
  },
  {
    time: "Day 13",
    title: "Delhi Arrival",
    desc: "Arrive in Delhi, concluding your spiritual journey. Depart for Bangalore by train or flight."
  },
];

// Highlights data (Updated from Additional Information)
const highlights = [
  { title: "Yamunotri Temple", image: highlightImages[0], desc: "Trek to the sacred source of the Yamuna with a hot spring at Surya Kund." },
  { title: "Gangotri Temple", image: highlightImages[1], desc: "Pray at the origin of the Ganges amidst Himalayan beauty." },
  { title: "Kedarnath Temple", image: highlightImages[2], desc: "Visit Lord Shiva’s Jyotirlinga with a scenic trek." },
  { title: "Badrinath Temple", image: highlightImages[3], desc: "Seek blessings at Lord Vishnu’s shrine with Tapt Kund." },
];

// FAQ data (Updated from Bangalore-specific FAQs)
const faqs = [
  { question: "When is the best time to undertake the Chardham Yatra?", answer: "The best time is from May to October, avoiding the monsoon season for safety." },
  { question: "What is the average duration of the Chardham Yatra from Haridwar?", answer: "It typically takes 10 to 14 days, depending on the itinerary and pace." },
  { question: "What kind of weather should one expect during the Chardham Yatra?", answer: "Weather ranges from pleasant to cold at higher altitudes. Check forecasts and pack accordingly." },
  { question: "Should someone take any medical measures prior to the Yatra?", answer: "Yes, consult a doctor and bring necessary medications, especially if you have health conditions." },
  { question: "What are the accommodation options available during the Chardham Yatra?", answer: "Options include guesthouses, dharamshalas, and hotels, ranging from basic to comfortable." },
  { question: "Is it necessary to hire a guide for the Chardham Yatra?", answer: "Not mandatory, but a guide enhances navigation and provides cultural insights." },
  { question: "Are there facilities for senior citizens and differently-abled pilgrims?", answer: "Yes, many facilities cater to senior citizens and differently-abled individuals along the route." },
  { question: "What should one pack for the Chardham Yatra?", answer: "Pack warm clothing, comfortable shoes, medicines, hygiene items, and spiritual essentials." },
  { question: "Is it possible to go by car on the Chardham Yatra?", answer: "Yes, taxis and private cars can be hired from Haridwar for the circuit." },
  { question: "Does the route have access to banking facilities and ATMs?", answer: "Limited banking is available in towns like Uttarkashi, Guptkashi, and Joshimath; carry extra cash." },
];

// Important Information data (Updated with Additional Information)
const importantInfo = [
  {
    title: "Key Details for Chardham Yatra",
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li>Trekking required: Yamunotri (6 km), Kedarnath (19 km).</li>
        <li>Altitude ranges from 3,000 to over 10,000 feet; acclimatize properly.</li>
        <li>Vegetarian meals provided; limited amenities in remote areas.</li>
        <li>Best time: May-October.</li>
        <li><strong>Special Needs:</strong> Bring raincoat, umbrella, monkey cap, hand gloves, canvas shoes, oxygen cylinder, and personal medications.</li>
      </ul>
    ),
  },
  {
    title: "Yatra Precautions",
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li>Cover your head with a monkey cap or woolen garment at high altitudes to prevent giddiness and hill-sickness.</li>
        <li>Stay hydrated by drinking water continuously.</li>
        <li>Trek only on the hillside; avoid the valley side to prevent injury from horses.</li>
        <li>Use packaged water (widely available) or heated water from tea shops during treks.</li>
      </ul>
    ),
  },
  {
    title: "Health & Safety",
    content: (
      <p>
        High altitudes may cause sickness; stay hydrated and consult a doctor if elderly or with health issues. Physical fitness is required for treks.
      </p>
    ),
  },
  {
    title: "Weather & Travel Advisory",
    content: (
      <p>
        Avoid monsoon (July-August) due to landslides and slippery roads, and winter (November-April) when temples are closed due to snow.
      </p>
    ),
  },
  {
    title: "Tour Highlights",
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li>Personal support from a ChardhamTour.in representative.</li>
        <li>Visit Gangotri, Badrinath, Kedarnath, and Yamunotri.</li>
        <li>Experience Ganga Aarti Darshan at Har-Ki-Pauri, Haridwar.</li>
        <li>Explore the Panch Prayag Darshan.</li>
        <li>Discover Rishikesh and Kempty Fall in Mussoorie.</li>
        <li>Relax at hot springs in Yamunotri (Surya Kund) and Badrinath (Tapt Kund).</li>
        <li>See Uttarkashi’s Kashi Vishwanath Temple and Mana Village, India’s last settlement before the Indo-Tibetan border.</li>
      </ul>
    ),
  },
];

// Memoized Highlight Card Component
const HighlightCard = memo(({ highlight, index, variants }) => (
  <motion.div
    variants={variants}
    whileHover={{ scale: 1.02 }}
    className="relative bg-white rounded-2xl shadow-xl overflow-hidden ${index % 2 === 0 ? 'rotate-2' : '-rotate-2'}"
    initial="hidden"
    animate="show"
  >
    <Image src={highlight.image}
      alt={highlight.title}
      width={500}
      height={192}
      className="w-full h-48 object-cover"
      quality={75}
    />
    <div className="p-5">
      <h3 className="text-lg font-semibold text-[#00453A] font-sans">{highlight.title}</h3>
      <p className="text-sm text-gray-600 mt-2 font-sans">{highlight.desc}</p>
    </div>
    <motion.div
      whileHover={{ rotate: 180 }}
      transition={{ duration: 0.3 }}
      className="absolute top-4 right-4 text-[#F5A623]"
    >
      <AiOutlineStar size={24} />
    </motion.div>
  </motion.div>
));
HighlightCard.displayName = 'HighlightCard';

export default function ChardhamYatraPackage() {
  const [openDay, setOpenDay] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);
  const [openInfo, setOpenInfo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: null,
    travellers: '',
  });
  const [currentFactIndex, setCurrentFactIndex] = useState(0);

  const toggleDay = useCallback((index) => setOpenDay(prev => prev === index ? null : index), []);
  const toggleFaq = useCallback((index) => setOpenFaq(prev => prev === index ? null : index), []);
  const toggleInfo = useCallback((index) => setOpenInfo(prev => prev === index ? null : index), []);
  const handleOpenModal = useCallback(() => setIsModalOpen(true), []);
  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    setFormData({ name: '', phone: '', date: null, travellers: '' });
  }, []);
  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);
  const handleDateChange = useCallback((date) => setFormData(prev => ({ ...prev, date })), []);
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    handleCloseModal();
  }, [formData, handleCloseModal]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFactIndex((prevIndex) => (prevIndex + 1) % quickFacts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const factVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-[#F1FDF3] min-h-screen">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative h-[600px] bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-[#00453A]/30 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-4 font-serif"
            >
              Chardham Yatra from Bangalore
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="text-lg md:text-2xl mb-6 font-sans"
            >
              12 Nights / 13 Days
            </motion.p>
            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleOpenModal}
              className="bg-[#F1FDF3] text-[#00453A] px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl"
            >
              Book Your Yatra
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Decorative Divider */}
      <div className="relative h-12 bg-[#00453A]">
        <svg className="absolute bottom-0 w-full text-[#F1FDF3]" viewBox="0 0 1440 60">
          <path fill="currentColor" d="M0,0L1440,60H0Z"></path>
        </svg>
      </div>

      {/* Trip Overview */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-4 py-16 relative"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-[#00453A] text-center mb-12 font-serif relative"
        >
          Tour Overview
          <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-16 h-1 bg-[#F5A623]"></span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 bg-gradient-to-br from-white to-[#F1FDF3] p-6 rounded-2xl shadow-xl"
        >
          <div className="space-y-4">
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Embark on a sacred 12N/13D Chardham Yatra from Bangalore starting at Rs. 40,900 per person. This all-inclusive package ensures a seamless pilgrimage to Yamunotri, Gangotri, Kedarnath, and Badrinath with luxurious accommodations, meals, transportation, and expert guides.
            </p>
            <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
              <li className="flex items-center">
                <AiOutlineStar className="text-[#F5A623] mr-2" />
                <strong>Duration:</strong> <span className="ml-1">12 Nights / 13 Days</span>
              </li>
              <li className="flex items-center">
                <AiOutlineStar className="text-[#F5A623] mr-2" />
                <strong>Price:</strong> <span className="ml-1">Starting at Rs. 43,900 per person</span>
              </li>
              <li className="flex items-center">
                <AiOutlineStar className="text-[#F5A623] mr-2" />
                <strong>Transport:</strong> <span className="ml-1">Flight/Train to Delhi, then AC vehicles</span>
              </li>
              <li className="flex items-center">
                <AiOutlineStar className="text-[#F5A623] mr-2" />
                <strong>Best Time:</strong> <span className="ml-1">May-October</span>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center mt-6 md:mt-0">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleOpenModal}
              className="bg-[#00453A] text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-[#00332A] transition-colors"
            >
              Book Now
            </motion.button>
          </div>
        </motion.div>
      </motion.section>

      {/* Itinerary */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-4 py-16 relative"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-[#00453A] text-center mb-12 font-serif relative"
        >
          Itinerary
          <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-16 h-1 bg-[#F5A623]"></span>
        </motion.h2>
        <div className="space-y-4">
          {itinerary.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <button
                onClick={() => toggleDay(index)}
                className="w-full flex justify-between items-center p-5 text-left bg-gradient-to-r from-[#00453A] to-[#00332A] text-white transition-all hover:from-[#00332A] hover:to-[#00251F]"
              >
                <span className="font-semibold font-sans">{item.time}: {item.title}</span>
                {openDay === index ? <AiOutlineUp /> : <AiOutlineDown />}
              </button>
              <AnimatePresence initial={false}>
                {openDay === index && (
                  <motion.div
                    initial={{ maxHeight: 0, opacity: 0 }}
                    animate={{ maxHeight: 500, opacity: 1 }}
                    exit={{ maxHeight: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 text-gray-700 font-sans">{item.desc}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Highlights */}
      <motion.section
        initial="hidden"
        whileInView="show"
        variants={containerVariants}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-6xl mx-auto px-4 py-16 relative"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-[#00453A] text-center mb-12 font-serif relative"
        >
          Trip Highlights
          <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-16 h-1 bg-[#F5A623]"></span>
        </motion.h2>
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {highlights.map((highlight, index) => (
            <HighlightCard
              key={index}
              highlight={highlight}
              index={index}
              variants={itemVariants}
            />
          ))}
        </motion.div>
      </motion.section>

      {/* Pricing & Inclusions */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-4 py-16 relative"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-[#00453A] text-center mb-12 font-serif relative"
        >
          Pricing & Inclusions
          <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-16 h-1 bg-[#F5A623]"></span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 bg-gradient-to-br from-white to-[#F1FDF3] p-8 rounded-2xl shadow-xl relative"
        >
          <div>
            <h3 className="text-2xl font-semibold text-[#00453A] mb-4 font-sans">Pricing</h3>
            <p className="text-xl text-[#F5A623] font-bold">Rs. 40,900 per person</p>
            <p className="text-sm text-gray-600 mt-2 font-sans">*Excludes GST (5%) and flight/train fare</p>

            <h3 className="text-2xl font-semibold text-[#00453A] mt-6 mb-4 font-sans">Scheduled Dates</h3>
            <ul className="space-y-3 text-gray-700 font-sans">
              <li className="flex items-center"><AiOutlineCalendar className="text-[#F5A623] mr-2" /> May 25, June 12, June 30</li>
              <li className="flex items-center"><AiOutlineCalendar className="text-[#F5A623] mr-2" /> Ideal: May-October</li>
            </ul>

            <h3 className="text-2xl font-semibold text-[#00453A] mt-6 mb-4 font-sans">Inclusions</h3>
            <ul className="space-y-3 text-gray-700 font-sans">
              <li className="flex items-center"><AiOutlineStar className="text-[#F5A623] mr-2" /> Personal assistance by ChardhamTour.in representative</li>
              <li className="flex items-center"><AiOutlineStar className="text-[#F5A623] mr-2" /> Clean, double-sharing accommodations</li>
              <li className="flex items-center"><AiOutlineStar className="text-[#F5A623] mr-2" /> AC vehicle (Delhi-Rishikesh-Delhi only)</li>
              <li className="flex items-center"><AiOutlineStar className="text-[#F5A623] mr-2" /> All vegetarian meals (breakfast, lunch, dinner)</li>
              <li className="flex items-center"><AiOutlineStar className="text-[#F5A623] mr-2" /> Daily tea/coffee at hotels</li>
              <li className="flex items-center"><AiOutlineStar className="text-[#F5A623] mr-2" /> Dedicated tour manager and local guide in Rishikesh</li>
              <li className="flex items-center"><AiOutlineStar className="text-[#F5A623] mr-2" /> 1L mineral water daily during sightseeing</li>
              <li className="flex items-center"><AiOutlineStar className="text-[#F5A623] mr-2" /> Fuel, driver allowance, parking, tolls, and taxes</li>
            </ul>

            <h3 className="text-2xl font-semibold text-[#00453A] mt-6 mb-4 font-sans">Exclusions</h3>
            <ul className="space-y-3 text-gray-700 font-sans">
              <li className="flex items-center"><AiOutlineStar className="text-[#F5A623] mr-2" /> Personal expenses (tips, laundry, etc.)</li>
              <li className="flex items-center"><AiOutlineStar className="text-[#F5A623] mr-2" /> Insurance</li>
              <li className="flex items-center"><AiOutlineStar className="text-[#F5A623] mr-2" /> Train/flight fare to/from Bangalore</li>
              <li className="flex items-center"><AiOutlineStar className="text-[#F5A623] mr-2" /> Pony/doli, helicopter, ropeway tickets</li>
              <li className="flex items-center"><AiOutlineStar className="text-[#F5A623] mr-2" /> Meals in Kedarnath</li>
              <li className="flex items-center"><AiOutlineStar className="text-[#F5A623] mr-2" /> Costs due to delays (landslides, etc.)</li>
              <li className="flex items-center"><AiOutlineStar className="text-[#F5A623] mr-2" /> GST (5%)</li>
            </ul>
          </div>
          <div className="flex flex-col items-center gap-2 space-y-4">
            <div className="w-full max-w-sm bg-white border-2 border-dashed border-[#00453A] rounded-lg p-6 shadow-md">
              <h4 className="text-xl font-semibold text-[#00453A] font-sans mb-3 flex items-center">
                <AiOutlineStar className="text-[#F5A623] mr-2" /> Did You Know?
              </h4>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentFactIndex}
                  variants={factVariants}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="text-gray-700 font-sans text-base"
                >
                  {quickFacts[currentFactIndex].text}
                </motion.div>
              </AnimatePresence>
            </div>
            <Image src={rightSideImage}
              alt="Chardham Icon"
              width={150}
              height={150}
              className="object-cover"
              quality={75}
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleOpenModal}
              className="bg-[#00453A] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-[#00332A] transition-colors w-full max-w-xs"
            >
              Request Callback
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#F5A623] text-[#00453A] px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-[#E59400] transition-colors w-full max-w-xs flex items-center justify-center"
            >
              <AiOutlinePhone className="mr-2" /> Call Us
            </motion.button>
          </div>
        </motion.div>
      </motion.section>

      {/* Important Information */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-4 py-16 relative"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-[#00453A] text-center mb-12 font-serif relative"
        >
          Important Information
          <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-16 h-1 bg-[#F5A623]"></span>
        </motion.h2>
        <div className="space-y-4">
          {importantInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="bg-white border-l-4 border-[#F5A623] rounded-r-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <button
                onClick={() => toggleInfo(index)}
                className="w-full flex justify-between items-center p-5 text-left bg-[#FFF7ED] text-[#00453A] font-semibold font-sans"
              >
                <span>{info.title}</span>
                {openInfo === index ? <AiOutlineUp /> : <AiOutlineDown />}
              </button>
              <AnimatePresence initial={false}>
                {openInfo === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 text-gray-700 font-sans">{info.content}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* FAQs */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-4 py-16 relative"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-[#00453A] text-center mb-12 font-serif relative"
        >
          Frequently Asked Questions
          <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-16 h-1 bg-[#F5A623]"></span>
        </motion.h2>
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center p-4 text-left"
              >
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-[#F5A623] text-white rounded-full font-semibold mr-3">
                  {index + 1}
                </span>
                <span className="flex-1 text-[#00453A] font-semibold font-sans text-lg">
                  {faq.question}
                </span>
                {openFaq === index ? (
                  <AiOutlineUp className="text-[#00453A]" />
                ) : (
                  <AiOutlineDown className="text-[#00453A]" />
                )}
              </button>
              <AnimatePresence initial={false}>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 pt-2 text-gray-700 font-sans text-sm">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Booking Form Modal */}
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={handleCloseModal}
          ></div>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 p-6"
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <div className="mb-4">
              <Image src={heroImage}
                alt="Chardham Yatra"
                width={400}
                height={128}
                className="w-full h-32 object-cover rounded-lg"
                quality={75}
              />
              <h3 className="mt-3 text-lg font-bold text-[#00453A] font-sans">Chardham Yatra 2025</h3>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 font-sans">Name</label>
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
                  <label className="block text-sm font-medium text-gray-700 font-sans">Phone Number</label>
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
                  <label className="block text-sm font-medium text-gray-700 font-sans">Preferred Date</label>
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
                  <label className="block text-sm font-medium text-gray-700 font-sans">Number of Travellers</label>
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
                  className="w-full py-3 bg-[#F5A623] text-[#00453A] rounded-full font-semibold shadow-lg hover:shadow-xl transition-colors"
                >
                  Submit Request
                </motion.button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Poppins:wght@400;500&display=swap');
        .react-datepicker-wrapper { width: 100%; }
        .font-serif { font-family: 'Playfair Display', serif; }
        .font-sans { font-family: 'Poppins', sans-serif; }
        .rotate-2 { transform: rotate(2deg); }
        .rotate--2 { transform: rotate(-2deg); }
      `}</style>
    </div>
  );
}