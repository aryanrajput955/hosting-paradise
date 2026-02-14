'use client';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useCallback } from 'react';
import { AiOutlineDown, AiOutlineUp, AiOutlineStar } from 'react-icons/ai';


// Sample image for hero section (replace with actual image path)
const heroImage = "/img/shoot/badrinath.jpg";

// Itinerary data
const itinerary = [
  {
    time: "Day 1",
    title: "Haridwar - Pipalkoti",
    desc: "Our agent greets you upon arrival in Haridwar and escorts you to a taxi for the journey to Pipalkoti. Check into your assigned hotel for an overnight stay in Pipalkoti."
  },
  {
    time: "Day 2",
    title: "Pipalkoti - Joshimath - Badrinath",
    desc: "Wake early, enjoy breakfast, and board a taxi to Badrinath. En route, visit Joshimath, home to Jyotirmath, one of Shankaracharya’s four Mathas, and Narshing Temple, the winter abode of Badrinath Ji. Joshimath is also the starting point for treks like the Valley of Flowers and offers access to Auli via one of Asia’s longest ropeways. Continue to Badrinath, the final temple of the Chardham Yatra, dedicated to Lord Vishnu, who is said to have meditated here under a badri (plum) tree. Check into your hotel, then explore Mana Village, including Mata Murti shrine, Sheshnetra, Vyas Gufa, Ganesh Guha, Bhim Pul, and Saraswati River. Attend the evening aarti and Shayan aarti darshan at Badrinath Temple before retiring for the night."
  },
  {
    time: "Day 3",
    title: "Badrinath - Haridwar",
    desc: "Rise early to visit Tapt-devotees bathe here before entering the temple-and Brahma Kapal, where Hindus perform rituals for departed ancestors. Depart for Haridwar, stopping at key pilgrimage sites: Vishnuprayag (Dhauli Ganga and Alaknanda confluence), Nandprayag (Nandakini and Alaknanda), Karnaprayag (Alaknanda and Pindar), Rudraprayag (Mandakini and Alaknanda), and Devprayag (Alaknanda and Bhagirathi). Upon arrival in Haridwar, our representative will assist you to your departure point, such as the railway station."
  },
];

// Inclusions and Exclusions data
const inclusionsExclusions = [
  {
    title: "Inclusions",
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li>Hotel accommodations on a twin-sharing basis.</li>
        <li>All transfers/tour services by an air-conditioned vehicle.</li>
        <li>Air-conditioned transport for Delhi/Rishikesh and Haridwar/Delhi.</li>
        <li>Daily vegetarian breakfast and dinner (except in Budget Package).</li>
        <li>Sightseeing as per the itinerary.</li>
        <li>Fuel, driver’s allowance, parking, toll tax, and state tax included.</li>
        <li>All applicable hotel and transportation taxes.</li>
      </ul>
    ),
  },
  {
    title: "Exclusions",
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li>Personal expenses (tipping, laundry, porters, phone bills, camera fees, etc.).</li>
        <li>Any kind of insurance.</li>
        <li>Claims or delays due to landslides, natural disasters, traffic blockages, or other unforeseen events.</li>
        <li>Additional costs for itinerary changes due to uncontrollable circumstances (landslides, traffic jams, floods, riots, political unrest, bandhs, bad weather, accidents, etc.).</li>
        <li>No reimbursement for canceled tourist locations due to such events.</li>
        <li>Fees for flights, trains, helicopters, car rentals, Manasa/Chandi Devi ropeway tickets, Doli, or ponies.</li>
        <li>5% GST on the total billed amount.</li>
      </ul>
    ),
  },
];

export default function BadrinathTourPackage() {
  const [openDay, setOpenDay] = useState(null);
  const [openInfo, setOpenInfo] = useState(null);

  const toggleDay = useCallback((index) => setOpenDay(prev => prev === index ? null : index), []);
  const toggleInfo = useCallback((index) => setOpenInfo(prev => prev === index ? null : index), []);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <div className="bg-[#F1FDF3] min-h-screen">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative h-[500px] bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-[#00453A]/30 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-4 font-serif"
            >
              Badrinath Tour Package
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="text-lg md:text-xl mb-6 font-sans"
            >
              2 Nights / 3 Days from Haridwar
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Decorative Divider */}
      <div className="relative h-12 bg-[#00453A]">
        <svg className="absolute bottom-0 w-full text-[#F1FDF3]" viewBox="0 0 1440 60">
          <path fill="currentColor" d="M0,0L1440,60H0Z"></path>
        </svg>
      </div>

      {/* Tour Overview */}
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
          className="bg-gradient-to-br from-white to-[#F1FDF3] p-6 rounded-2xl shadow-xl"
        >
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
            No introduction is necessary for Badrinath Dham or Badri Vishal, one of the most revered sites for worshiping Lord Vishnu in India. Nestled amidst the twin mountain ranges of Nar and Narayan, on the banks of the sacred Mandakini River, Badrinath Dham offers excellent road connectivity compared to other Char Dham gateways. Travel through breathtaking and unspoiled Himalayan scenery on this Badrinath Yatra by car.
          </p>
          <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
            <li className="flex items-center">
              <AiOutlineStar className="text-[#F5A623] mr-2" />
              <strong>Duration:</strong> <span className="ml-1">2 Nights / 3 Days</span>
            </li>
            <li className="flex items-center">
              <AiOutlineStar className="text-[#F5A623] mr-2" />
              <strong>Starting Point:</strong> <span className="ml-1">Haridwar</span>
            </li>
            <li className="flex items-center">
              <AiOutlineStar className="text-[#F5A623] mr-2" />
              <strong>Mode of Travel:</strong> <span className="ml-1">Air-conditioned vehicle</span>
            </li>
          </ul>
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

      {/* Inclusions & Exclusions */}
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
          Inclusions & Exclusions
          <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-16 h-1 bg-[#F5A623]"></span>
        </motion.h2>
        <div className="space-y-4">
          {inclusionsExclusions.map((info, index) => (
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

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Poppins:wght@400;500&display=swap');
        .font-serif { font-family: 'Playfair Display', serif; }
        .font-sans { font-family: 'Poppins', sans-serif; }
      `}</style>
    </div>
  );
}