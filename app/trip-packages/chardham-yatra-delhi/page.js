'use client';
import { motion, AnimatePresence } from 'framer-motion';
import React, { useState, useEffect, useCallback } from 'react';
import { AiOutlineCalendar, AiOutlineDown, AiOutlineUp, AiOutlineStar, AiOutlinePhone } from 'react-icons/ai';
import Image from 'next/image';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { memo } from 'react';

// Sample images (replace with actual paths)
const heroImage = "/img/shoot/kedarnath2.jpg"; // Update as needed
const highlightImages = [
  "/img/shoot/YAMUNOTRI.jpg",
  "/img/shoot/gangotri.jpg",
  "/img/shoot/kedar.jpg",
  "/img/shoot/badrinath.jpg",
];
const rightSideImage = "/img/logo.png";

// Quick Facts about Chardham Yatra (from your data)
const quickFacts = [
  { text: "Yamunotri honors Goddess Yamuna, believed to grant a peaceful demise." },
  { text: "Gangotri is the origin of the Ganges, purifying souls with its sacred waters." },
  { text: "Kedarnath is one of Lord Shiva’s 12 Jyotirlingas, tied to the Pandavas’ penance." },
  { text: "Badrinath, dedicated to Lord Vishnu, is a key site for attaining moksha." },
];

// Itinerary data (Updated to match your 10N/11D package)
const itinerary = [
  {
    time: "Day 1",
    title: "Delhi to Haridwar (230 km, 5-6 hours)",
    desc: "Arrive at Delhi Airport or Railway Station, meet our representative, and travel to Haridwar. Check into a comfortable hotel, visit Har-ki-Pauri for Ganga Aarti, and bathe in the holy Ganga. Overnight stay in Haridwar."
  },
  {
    time: "Day 2",
    title: "Haridwar to Barkot (200 km, 6-7 hours)",
    desc: "After breakfast, drive to Barkot via Dehradun, Kempty Fall, and Mussoorie. Enjoy tea/coffee en route. Check into a cozy hotel in Barkot for an overnight stay."
  },
  {
    time: "Day 3",
    title: "Barkot to Yamunotri (45 km by car, 6 km trek)",
    desc: "Drive to Jankichatti after breakfast, then trek 6 km to Yamunotri Temple. Take a holy dip in the Yamuna River or Surya Kund, offer prayers, and visit Divya Shila. Return to Barkot for the night. Pony: Rs. 1200-2500, Doli: Rs. 4000-5500."
  },
  {
    time: "Day 4",
    title: "Barkot to Uttarkashi (90 km, 4 hours)",
    desc: "Post-breakfast, travel to Uttarkashi. Visit Prakateshwar Mahadev (Shiv Cave) and Kashi Vishwanath Temple. Check into a hotel for a restful night."
  },
  {
    time: "Day 5",
    title: "Uttarkashi to Gangotri & Back (100 km each way, 4 hours)",
    desc: "Drive to Gangotri after breakfast, enjoy Himalayan views, take a dip in the Bhagirathi River, and perform Darshan and Pooja at Gangotri Temple. Visit Harsil en route and return to Uttarkashi for the night."
  },
  {
    time: "Day 6",
    title: "Uttarkashi to Sitapur (280 km, 11 hours)",
    desc: "After breakfast, drive to Sitapur. Check into your accommodation and rest overnight."
  },
  {
    time: "Day 7",
    title: "Sitapur to Kedarnath & Back (19 km trek, 6 hours)",
    desc: "Start early, drive to Sonprayag, and trek 19 km to Kedarnath Temple for Darshan and Pooja. Return to Sitapur for the night. Pony: Rs. 2500-5000, Doli: Rs. 6500-16000."
  },
  {
    time: "Day 8",
    title: "Sitapur to Pipalkoti (120 km, 6 hours)",
    desc: "Enjoy a leisurely breakfast, then drive to Pipalkoti. Check into your hotel and relax overnight."
  },
  {
    time: "Day 9",
    title: "Pipalkoti to Badrinath via Joshimath (80 km, 4 hours)",
    desc: "Drive to Badrinath via Joshimath Narasimha Temple and Vishnu Prayag. Trek to Mana Village (Vyasa Gufa, Ganesh Gufa, Bhim Pul), dip in Tapt Kund, and visit Badrinath Temple. Overnight stay in Badrinath."
  },
  {
    time: "Day 10",
    title: "Badrinath to Srinagar (170 km, 7 hours)",
    desc: "Seek Badrivishal’s Darshan, then drive to Srinagar via Karnaprayag, Nandprayag, and Rudraprayag Dhari Devi Temple. Check into your hotel for the night."
  },
  {
    time: "Day 11",
    title: "Srinagar to Haridwar to Delhi (Travel Day)",
    desc: "After breakfast, drive to Haridwar via Devprayag (Bhagirathi-Alaknanda confluence). Continue to Delhi, arriving by nightfall, concluding your spiritual journey."
  },
];

// Highlights data (Based on your tour)
const highlights = [
  { title: "Yamunotri Temple", image: highlightImages[0], desc: "Trek to the sacred source of the Yamuna River amidst stunning Himalayan views." },
  { title: "Gangotri Temple", image: highlightImages[1], desc: "Pray at the origin of the Ganges with breathtaking scenery." },
  { title: "Kedarnath Temple", image: highlightImages[2], desc: "Visit Lord Shiva’s Jyotirlinga with a scenic trek." },
  { title: "Badrinath Temple", image: highlightImages[3], desc: "Seek blessings at Lord Vishnu’s shrine with serene surroundings." },
];

// FAQ data (Updated from your FAQs)
const faqs = [
    { 
      question: "How can I get to Chardham from Delhi?", 
      answer: "Road travel is the most popular method of getting from Delhi to Chardham. You can drive alone or reserve a tour package that includes transportation." 
    },
    { 
      question: "What is the duration of the Chardham Yatra from Delhi?", 
      answer: "The duration depends on the schedule and transportation mode. By road, it typically takes 10 to 12 days." 
    },
    { 
      question: "What are the Chardham Yatra’s 2025 beginning and closing dates?", 
      answer: "It starts on April 30 and ends in the final week of October." 
    },
    { 
      question: "Do the temples in Chardham offer a VIP Darshan facility?", 
      answer: "Yes, all temples provide VIP Darshan tickets for a smoother experience." 
    },
    { 
      question: "Does the Char Dham Yatra require registration?", 
      answer: "Yes, registration is required for all road travelers. Helicopter passengers are exempt." 
    },
    { 
      question: "For the Chardham Yatra, what should I bring?", 
      answer: "Bring comfortable clothing for warm and cool weather, durable walking shoes, basic medications, and personal hygiene products." 
    },
    { 
      question: "During the Chardham Yatra, what kind of food is available?", 
      answer: "Only vegetarian options are available, typically including breakfast, lunch, and dinner." 
    },
    { 
      question: "What sort of lodging will be offered at the locations?", 
      answer: "Accommodations vary by package, offering comfort suited to remote Himalayan areas. Upscale 5-star hotels are rare due to seasonal closures; we provide the best available options." 
    },
    { 
      question: "What is the Chardham Yatris age limit?", 
      answer: "There’s no strict age limit, but the ideal range is 7 to 75 years due to high altitudes. Pregnant women over six weeks are advised against participating." 
    },
    { 
      question: "How long does it take to get a refund and what is the process?", 
      answer: "Refunds for credit card payments are credited back to the same card, taking 2 to 8 weeks depending on banking regulations." 
    },
  ];

// Important Information data (Adjusted from your data)
const importantInfo = [
    {
      title: "Key Details for Chardham Yatra",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Trekking required: Yamunotri (6 km), Kedarnath (19 km).</li>
          <li>Altitude ranges from 3,000 to over 10,000 feet; acclimatize properly.</li>
          <li>Vegetarian meals provided; limited amenities in remote areas.</li>
          <li>Best time: May-June, September-October.</li>
          <li>
            <strong>Special Needs:</strong> Bring canvas shoes, oxygen cylinder, umbrella, monkey cap, hand gloves, raincoat, and personal medications.
          </li>
        </ul>
      ),
    },
    {
      title: "Yatra Precautions",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Cover your head with a monkey cap or woolen garment at high altitudes to prevent giddiness and hill-sickness.</li>
          <li>Stay hydrated by drinking water continuously.</li>
          <li>Trek only on the hillside; avoid the valley side to prevent injury from passing horses.</li>
          <li>Use packaged water (available everywhere) or heated water from tea shops during treks.</li>
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
          <li>See Uttarkashi’s Kashi Vishwanath Temple and Mana Village, India’s first settlement on the Indo-Tibetan border.</li>
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
              Chardham Yatra from Delhi
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="text-lg md:text-2xl mb-6 font-sans"
            >
              10 Nights / 11 Days
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
        transition={{ duration: 0.1 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-4 py-16 relative"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-[#00453A] text-center mb-12 font-serif relative"
        >
          Tour Overview
          <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-16 h-1 bg-[#F5A623]"></span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 bg-gradient-to-br from-white to-[#F1FDF3] p-6 rounded-2xl shadow-xl"
        >
          <div className="space-y-4">
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Embark on a spiritually enriching 10N/11D Chardham Yatra from Delhi, visiting Badrinath, Kedarnath, Gangotri, and Yamunotri. Enjoy comfortable lodging, reliable transportation, and vegetarian meals while exploring 13 holy sites amidst breathtaking Himalayan scenery.
            </p>
            <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
              <li className="flex items-center">
                <AiOutlineStar className="text-[#F5A623] mr-2" />
                <strong>Duration:</strong> <span className="ml-1">10 Nights / 11 Days</span>
              </li>
              <li className="flex items-center">
                <AiOutlineStar className="text-[#F5A623] mr-2" />
                <strong>Price:</strong> <span className="ml-1">Starting at Rs. 44,000 per person</span>
              </li>
              <li className="flex items-center">
                <AiOutlineStar className="text-[#F5A623] mr-2" />
                <strong>Transport:</strong> <span className="ml-1">Dependable vehicles</span>
              </li>
              <li className="flex items-center">
                <AiOutlineStar className="text-[#F5A623] mr-2" />
                <strong>Best Time:</strong> <span className="ml-1">May-June, Sept-Oct</span>
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
            <p className="text-xl text-[#F5A623] font-bold">Rs. 44,000 per person</p>
            <p className="text-sm text-gray-600 mt-2 font-sans">*Includes GST (5%) on total billing</p>

            <h3 className="text-2xl font-semibold text-[#00453A] mt-6 mb-4 font-sans">Scheduled Dates</h3>
            <ul className="space-y-3 text-gray-700 font-sans">
              <li className="flex items-center"><AiOutlineCalendar className="text-[#F5A623] mr-2" /> Late April - Early November 2025</li>
              <li className="flex items-center"><AiOutlineCalendar className="text-[#F5A623] mr-2" /> Ideal: May-June, Sept-Oct</li>
            </ul>

            <h3 className="text-2xl font-semibold text-[#00453A] mt-6 mb-4 font-sans">Inclusions</h3>
            <ul className="space-y-3 text-gray-700 font-sans">
              <li className="flex items-center"><AiOutlineStar className="text-[#F5A623] mr-2" /> Personal assistance at Delhi arrival</li>
              <li className="flex items-center"><AiOutlineStar className="text-[#F5A623] mr-2" /> Dependable transportation throughout</li>
              <li className="flex items-center"><AiOutlineStar className="text-[#F5A623] mr-2" /> Cozy double-sharing accommodations</li>
              <li className="flex items-center"><AiOutlineStar className="text-[#F5A623] mr-2" /> All vegetarian meals</li>
              <li className="flex items-center"><AiOutlineStar className="text-[#F5A623] mr-2" /> 1L mineral water daily during sightseeing</li>
              <li className="flex items-center"><AiOutlineStar className="text-[#F5A623] mr-2" /> Fuel, tolls, and hotel taxes</li>
            </ul>

            <h3 className="text-2xl font-semibold text-[#00453A] mt-6 mb-4 font-sans">Exclusions</h3>
            <ul className="space-y-3 text-gray-700 font-sans">
              <li className="flex items-center"><AiOutlineStar className="text-[#F5A623] mr-2" /> Personal expenses (tips, laundry, etc.)</li>
              <li className="flex items-center"><AiOutlineStar className="text-[#F5A623] mr-2" /> Insurance</li>
              <li className="flex items-center"><AiOutlineStar className="text-[#F5A623] mr-2" /> Pony/Doli charges</li>
              <li className="flex items-center"><AiOutlineStar className="text-[#F5A623] mr-2" /> Costs due to delays (landslides, etc.)</li>
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