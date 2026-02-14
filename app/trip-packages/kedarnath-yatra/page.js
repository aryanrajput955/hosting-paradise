'use client';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useCallback } from 'react';
import { AiOutlineDown, AiOutlineUp, AiOutlineStar } from 'react-icons/ai';


// Sample image for hero section (replace with actual image path)
const heroImage = "/img/shoot/kedarnath2.jpg";

// Itinerary data
const itinerary = [
  {
    time: "Day 1",
    title: "Haridwar/Dehradun - Sitapur",
    desc: "Our representative greets you when you arrive in Haridwar or Dehradun and shows you to the waiting taxi that will transport you to Sitapur.  Travel across the picturesque river valleys of Ganaga and its tributaries.  You will be required to check into the hotel that has been assigned to you for the duration of your stay in Sitapur."
  },
  {
    time: "Day 2",
    title: "Sitapur - Kedarnath - Sitapur",
    desc: "You will be dropped off at Sonprayag, the starting point for the trek to Kedarnath Dham, early in the morning.  You can shorten your route by using a local taxi from Sonpryag to Gaurikund.  Pony or Doli services are also available, but they will be paid for separately.  You can also select from a variety of helicopter packages for Kedarnath to further simplify your trip.Being at a height, keep in mind to plan for the trip in advance and to bring along any necessary items for the yatra, such as medications, toiletries, bulky wool clothing, etc. after you are done with your puja rites and other ceremonies you will be returning back to Sitapur for an overnight stay."
  },
  {
    time: "Day 3",
    title: "Sitapur - Rishikesh - Haridwar or Dehradun",
    desc: "After breakfast in the morning, you will be driven to Hardwar, stopping along the way to visit two important pilgrimage sites.  You will be required to continue with a visit that includes Shivanand Ashram, Gita Bhavan, Parmarth Niketan, Ram Jhula, and Lakshman Jhula after taking a rest at Rishikesh.  After you make the drive to Haridwar, our agent will help you get to the place where you will depart.  The railway station is where you will be dropped off.  Rudraprayag is the meeting point between the Mandakini and the Alaknanda.  Devprayag is the meeting point of the Bhagirathi and the Alaknanda."
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
        <li>All meals as indicated by the trip manager.</li>
        <li>Daily vegetarian breakfast and dinner (except in Budget Package).</li>
        <li>Sightseeing as per your liking.</li>
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
     Kedarnath Tour Package
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
          One of Lord Shiva's twelve sacred jyotirlingas in India is the Kedarnath Dham shrine.  Kedarnath Temple is a once-in-a-lifetime experience, situated in the Rudraprayag district with the majestic Kedar dome mountains in the backdrop and the rushing Mandakini River on one end.  Along with Badrinath, Yamunotri, and Gangotri, Kedarnath is an essential part of Uttarakhand's sacred Char Dham Yatra, which offers the ideal fusion of spiritual tranquility and unmistakable natural Himalayan grandeur.
          The Kedarnath Yatra by automobile is now a reality thanks to the construction of roads and the establishment of reliable connectivity.  If you are intending to travel to Kedarnath by automobile with your loved ones, here is how to get there.
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
            <li className="flex items-center">
              <AiOutlineStar className="text-[#F5A623] mr-2" />
              <strong>Pricing:</strong> <span className="ml-1">₹28,990</span>
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