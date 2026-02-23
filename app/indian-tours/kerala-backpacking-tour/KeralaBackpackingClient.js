'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import { AiOutlineCalendar, AiOutlineDown, AiOutlineUp, AiOutlineStar, AiOutlinePhone } from 'react-icons/ai';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { memo } from 'react';

// Kerala Backpacking Images
const heroImage = "https://plus.unsplash.com/premium_photo-1697729442042-c071ef0415b0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const highlightImages = [
  "https://images.pexels.com/photos/32262506/pexels-photo-32262506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://www.shutterstock.com/image-photo/houseboats-moored-dawn-after-overnight-600nw-2428778813.jpg",
  "https://www.periyarnationalparkonline.in/images/periyar-boat-safari.jpg",
  "https://media.istockphoto.com/id/1150059940/photo/kovalam-beach-sunset.jpg?s=612x612&w=0&k=20&c=H0yfOqRkOXYaFxajF8pcHVJ3ONckf7L5cTLTvabZGRU=",
  "https://upload.wikimedia.org/wikipedia/commons/2/2c/Kathakali_-Play_with_Kaurava.jpg",
];
const rightSideImage = "/img/logo.png";

// Quick Facts about Kerala Backpacking
const quickFacts = [
  { text: "Explore lush tea gardens and spice plantations in Munnar." },
  { text: "Spot wildlife on a boat safari in Periyar Lake." },
  { text: "Cruise the serene backwaters on a traditional houseboat." },
  { text: "Relax on the crescent beaches of Kovalam." },
];

// Itinerary - 7 Days
const itinerary = [
  {
    day: "Day 1",
    title: "Arrival in Kochi – Journey to Munnar",
    desc: "Morning: Arrive at Kochi International Airport. Afternoon: Drive to Munnar (approx. 130 km / 4 hrs). En route: Visit Cheeyappara Waterfalls, Valara Waterfalls (seasonal), and Karadippara Viewpoint. Evening: Check-in at a cozy Munnar homestay or eco-lodge. Optional: Experience a Zip Line adventure amidst tea plantations. Overnight: Stay in Munnar."
  },
  {
    day: "Day 2",
    title: "Munnar – Tea Gardens & Spice Trails",
    desc: "Morning: Visit the Tea Museum and explore the lush tea gardens. Afternoon: Tour a local spice plantation and learn about Kerala's aromatic treasures. Evening: Relax at Attukal Waterfalls or enjoy a nature walk. Overnight: Stay in Munnar."
  },
  {
    day: "Day 3",
    title: "Munnar to Thekkady (Periyar Wildlife Sanctuary)",
    desc: "Morning: Drive to Thekkady (approx. 110 km / 3.5 hrs). Afternoon: Embark on a boat safari in Periyar Lake to spot wildlife. Evening: Visit a spice plantation and enjoy a cultural performance. Overnight: Stay in Thekkady."
  },
  {
    day: "Day 4",
    title: "Thekkady to Alleppey – Houseboat Experience",
    desc: "Morning: Drive to Alleppey (approx. 155 km / 4 hrs). Afternoon: Board a traditional Kerala houseboat for a serene backwater cruise. Evening: Enjoy a freshly prepared Kerala-style dinner on board. Overnight: Stay on the houseboat."
  },
  {
    day: "Day 5",
    title: "Alleppey to Kovalam – Beach Bliss",
    desc: "Morning: Disembark from the houseboat and drive to Kovalam (approx. 165 km / 4.5 hrs). Afternoon: Relax at Kovalam Beach, known for its crescent-shaped shores. Evening: Stroll along the beach and enjoy the sunset. Overnight: Stay in Kovalam."
  },
  {
    day: "Day 6",
    title: "Trivandrum – Cultural Exploration",
    desc: "Morning: Visit the Sree Padmanabhaswamy Temple and explore the local markets. Afternoon: Tour the Napier Museum and the nearby zoo. Evening: Enjoy a traditional Kerala Kathakali dance performance. Overnight: Stay in Kovalam."
  },
  {
    day: "Day 7",
    title: "Departure from Trivandrum",
    desc: "Morning: Drive to Trivandrum (approx. 15 km / 30 min). Departure: Transfer to Trivandrum International Airport for your onward journey."
  },
];

// Highlights
const highlights = [
  { title: "Munnar Tea Gardens", image: highlightImages[0], desc: "Lush explorations and tea museum visit." },
  { title: "Periyar Wildlife Safari", image: highlightImages[2], desc: "Boat ride to spot elephants and more." },
  { title: "Alleppey Houseboat", image: highlightImages[1], desc: "Serene backwater cruise with dinner." },
  { title: "Kovalam Beach", image: highlightImages[3], desc: "Relaxation and sunset strolls." },
  { title: "Kathakali Performance", image: highlightImages[4], desc: "Cultural immersion in Trivandrum." },
];

// FAQ data
const faqs = [
  { question: "Is this package suitable for backpackers?", answer: "Yes, specially crafted for adventure seekers with eco-friendly stays and active explorations." },
  { question: "What is the group size for this tour?", answer: "Private or small group (2–8 travelers) for a flexible and personalized backpacking experience." },
  { question: "Are flights included?", answer: "No, flights/train to/from Kochi/Trivandrum not included. Airport transfers provided." },
  { question: "What is the accommodation standard?", answer: "6 nights in comfortable homestays/eco-lodges/houseboat on sharing basis, backpacker-friendly setups." },
  { question: "Can dietary requirements be accommodated?", answer: "Yes, vegetarian, vegan, and special requests with advance notice." },
  { question: "Is the tour shared or private?", answer: "Customizable; A/C vehicle for groups, English-speaking guide included." },
  { question: "What currency should I bring?", answer: "Indian Rupees (INR); cards accepted in major spots." },
  { question: "What seasonal activities are available?", answer: "Waterfalls in monsoon; wildlife safaris year-round; beach activities in winter; itinerary adjusts accordingly." },
  { question: "What is the cancellation policy?", answer: "Standard policy: Full refund (minus fees) 45+ days prior. Partial 15–45 days. No refund within 15 days." },
];

// Important Information
const importantInfo = [
  {
    title: "Inclusions & Exclusions",
    content: (
      <div className="space-y-4">
        <div>
          <strong className="block mb-2">What's Included:</strong>
          <ul className="list-disc pl-5 space-y-1">
            <li>Accommodation in comfortable hotels, homestays, or eco-lodges.</li>
            <li>Daily breakfast and select meals.</li>
            <li>Private A/C vehicle for all transfers and sightseeing.</li>
            <li>Houseboat cruise with meals.</li>
            <li>Entry fees to attractions and activities.</li>
            <li>Services of a local guide for cultural experiences.</li>
          </ul>
        </div>
        <div>
          <strong className="block mb-2">What's Not Included:</strong>
          <ul className="list-disc pl-5 space-y-1">
            <li>International or domestic flights.</li>
            <li>Personal expenses and tips.</li>
            <li>Meals not specified in the itinerary.</li>
            <li>Travel insurance.</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Price & Batches",
    content: (
      <p>
        <strong>Pricing:</strong> On Request<br />
        <em>Final cost may vary based on travel dates, hotel category & group size. Contact us for a personalized quote.</em>
      </p>
    ),
  },
  {
    title: "Best Time to Visit",
    content: (
      <div className="space-y-2">
        <p><strong>Winter (Oct–Mar):</strong> Pleasant weather for exploring hills and beaches</p>
        <p><strong>Monsoon (Jun–Sep):</strong> Lush greenery and cascading waterfalls</p>
        <p><strong>Summer (Apr–May):</strong> Ideal for backwaters and coastal relaxation</p>
      </div>
    ),
  },
  {
    title: "Health & Safety Guidelines",
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li>Carry valid photo ID proof.</li>
        <li>Pack layers for varying climates and light backpack essentials.</li>
        <li>Stay hydrated; bottled water provided.</li>
        <li>Follow guide for adventure activities safety.</li>
        <li>Respect local customs at cultural sites.</li>
        <li>Emergency contact 24/7 via guide.</li>
      </ul>
    ),
  },
];

// Memoized Highlight Card
const HighlightCard = memo(({ highlight, index, variants }) => (
  <motion.div
    variants={variants}
    whileHover={{ scale: 1.02 }}
    className="relative bg-white rounded-2xl shadow-xl overflow-hidden ${index % 2 === 0 ? 'rotate-2' : '-rotate-2'}"
    initial="hidden"
    animate="show"
  >
    <img src={highlight.image}
      alt={highlight.title}
      width={500}
      height={192}
      className="w-full h-48 object-cover"
      loading="lazy"
      decoding="async"
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

export default function ParadiseBlissKeralaBackpackingTour7Days() {
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-[#00453A]/40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-4 font-serif"
            >
              Paradise Bliss Kerala Backpacking Tour
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="text-lg md:text-2xl mb-6 font-sans"
            >
              7 Days Backpacking Adventure
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
              Book Your Adventure
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
        initial={{ opacity: 1 }}
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
          Trip Overview
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
              Embark on an adventurous backpacking journey through the diverse landscapes of Kerala — from misty hills of Munnar to wildlife of Thekkady, serene backwaters of Alleppey, and beaches of Kovalam. Perfect for nature lovers and cultural explorers seeking authentic experiences.
            </p>
            <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
              <li className="flex items-center">
                <AiOutlineStar className="text-[#F5A623] mr-2 flex-shrink-0" />
                <strong className="mr-1">Duration:</strong> 7 Days
              </li>
              <li className="flex items-center">
                <AiOutlineStar className="text-[#F5A623] mr-2 flex-shrink-0" />
                <strong className="mr-1">Focus:</strong> Kochi → Munnar → Thekkady → Alleppey → Kovalam → Trivandrum
              </li>
              <li className="flex items-center">
                <AiOutlineStar className="text-[#F5A623] mr-2 flex-shrink-0" />
                <strong className="mr-1">Price:</strong> On Request
              </li>
              <li className="flex items-center">
                <AiOutlineStar className="text-[#F5A623] mr-2 flex-shrink-0" />
                <strong className="mr-1">Vibe:</strong> Adventurous, nature, cultural
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
                <span className="font-semibold font-sans">{item.day}: {item.title}</span>
                {openDay === index ? <AiOutlineUp /> : <AiOutlineDown />}
              </button>
              <AnimatePresence initial={false}>
                {openDay === index && (
                  <motion.div
                    initial={{ maxHeight: 0, opacity: 0 }}
                    animate={{ maxHeight: 600, opacity: 1 }}
                    exit={{ maxHeight: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 text-gray-700 font-sans">
                      {item.desc}
                    </div>
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
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
          Pricing & Details
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
            <h3 className="text-2xl font-semibold text-[#00453A] mb-4 font-sans">Pricing (Per Person)</h3>
            <div className="flex items-baseline space-x-3">
              <span className="text-4xl font-bold text-[#00453A]">On Request</span>
              <span className="text-sm text-gray-600">starting from</span>
            </div>
            <p className="text-sm text-gray-600 mt-2 font-sans">Varies by dates, category & size. Personalized quotes available.</p>

            <h3 className="text-2xl font-semibold text-[#00453A] mt-6 mb-4 font-sans">Key Inclusions</h3>
            <ul className="space-y-3 text-gray-700 font-sans">
              <li className="flex items-center"><AiOutlineStar className="text-[#F5A623] mr-2" /> Comfortable accommodation in homestays/eco-lodges</li>
              <li className="flex items-center"><AiOutlineStar className="text-[#F5A623] mr-2" /> Daily breakfast, select meals & houseboat dinner</li>
              <li className="flex items-center"><AiOutlineStar className="text-[#F5A623] mr-2" /> Private A/C vehicle transfers & sightseeing</li>
              <li className="flex items-center"><AiOutlineStar className="text-[#F5A623] mr-2" /> Entry fees, activities & local guide services</li>
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
            <img src={rightSideImage}
              alt="Kerala Backpacking Icon"
              width={150}
              height={150}
              className="object-cover"
              loading="lazy"
              decoding="async"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleOpenModal}
              className="bg-[#00453A] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-[#00332A] transition-colors w-full max-w-xs"
            >
              Request Callback
            </motion.button>
            <motion.a
              href="tel:+918449000181"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#F5A623] text-[#00453A] px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-[#E59400] transition-colors w-full max-w-xs flex items-center justify-center"
            >
              <AiOutlinePhone className="mr-2" /> Call Us
            </motion.a>
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
              className="bg-[#E4DECF] border-l-4 border-[#F5A623] rounded-r-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <button
                onClick={() => toggleInfo(index)}
                className="w-full flex justify-between items-center p-5 text-left bg-[#E4DECF] text-[#00453A] font-semibold font-sans"
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
                    <div className="p-5 text-gray-700 font-sans">
                      {info.content}
                    </div>
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
              className="bg-[#E4DECF] border border-[#E5E7EB] rounded-lg shadow-sm hover:shadow-md transition-shadow"
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
              X
            </button>
            <div className="mb-4">
              <img src={heroImage}
                alt="Paradise Bliss Kerala Backpacking Tour"
                width={400}
                height={128}
                className="w-full h-32 object-cover rounded-lg"
                loading="lazy"
                decoding="async"
              />
              <h3 className="mt-3 text-lg font-bold text-[#00453A] font-sans">Paradise Bliss Kerala Backpacking Tour – 7 Days</h3>
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