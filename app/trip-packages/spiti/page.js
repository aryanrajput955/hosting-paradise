'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { AiOutlineCalendar, AiOutlineDown, AiOutlineUp, AiOutlineStar, AiOutlinePhone } from 'react-icons/ai';
import Image from 'next/image';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


// Sample images (replace with actual image paths)
const heroImage = "/img/spiti2.jpg";
const highlightImages = [
  "/img/destination_img/chitkul.jpg",
  "/img/destination_img/tabo.jpg",
  "/img/destination_img/monastry.jpg",
  "/img/destination_img/Chicham.jpg",
];
const rightSideImage = "/img/logo.png"; // Spiti-related image (e.g., monastery or mountain)

// Quick Facts about Spiti Valley
const quickFacts = [
  { text: "Spiti Valley is known as 'Little Tibet'." },
  { text: "It’s home to the world’s highest post office in Hikkim." },
  { text: "Spiti means 'The Middle Land' between India and Tibet." },
  { text: "The region is a cold desert with minimal rainfall." },
];

// Updated Itinerary data
const itinerary = [
  {
    day: "Day 0",
    title: "Departure from Delhi to Shimla",
    desc: "In an air-conditioned vehicle, we leave Delhi at approximately 9:30 p.m. (Understand the actual worth of time; grasp, grab, and relish each minute.) Any good roadside eatery is a good place to stop for dinner."
  },
  {
    day: "Day 1",
    title: "Drive from Shimla to the Last Indian Village, Dinner & Overnight Stay in Chitkul/Sangla",
    desc: "On your way to Chitkul, take the Indo-Tibetan Highway through Kufri and Narkanda. The Kinnaur Gate, a rock tunnel renowned as the Gateway to Kinnaur, is the entrance to the Kinnaur Valley. This tunnel is situated on the Shimla-Kaza route, commonly known as the Hindustan-Tibet route, approximately 170 kilometers from Shimla. Take in the breathtaking white wonderland as you tour the final Indian town before the China border. Get to Chitkul by nightfall. An evening meal and a stay in Chitkul."
  },
  {
    day: "Day 2",
    title: "Drive from Chitkul to Tabo via Nako, Dinner & Overnight Stay in Tabo",
    desc: "Start your travel to Spiti Valley by getting up early and eating breakfast. To get to Nako, drive through the Ka Loops. Then, visit Nako Lake and take in the stunning scenery. Visit the Tabo Monastery, the oldest in the Spiti Valley, after arriving in Tabo in the evening. After dinner, check into your lodging for the night."
  },
  {
    day: "Day 3",
    title: "Visit Dhankar Monastery, Dinner & Overnight Stay in Kaza",
    desc: "Have breakfast, get up early, and travel to Dhankar Village. See the breathtaking vistas of the Spiti and Pin rivers coming together at the Dhankar Monastery. Arrive in Kaza in the evening, check in, and spend the night there."
  },
  {
    day: "Day 4",
    title: "Visit Hikkim, Komic & Langza, Dinner & Overnight Stay in Kaza",
    desc: "After morning, travel to Komik, visit Hikkim (which has the world's highest post office; mail postcards to your loved ones), and have breakfast at the world's highest cafe. Langza, where the revered Buddha statue is located. Return to Kaza, have dinner, and spend the night there."
  },
  {
    day: "Day 5",
    title: "Visit Key Monastery & Chicham Bridge, Overnight Stay in Kaza",
    desc: "After breakfast, depart from the hotel. See the Key Monastery and take a ride on the Chicham Bridge, Asia's tallest suspension bridge. Return to Kaza, have dinner, and spend the night there."
  },
  {
    day: "Day 6",
    title: "Departure to Kalpa from Kaza, Overnight Stay in Kalpa",
    desc: "After breakfast, depart the hotel. We will leave for Kalpa after breakfast and arrive there at night. Eat dinner and spend the night at Kalpa."
  },
  {
    day: "Day 7",
    title: "Depart to Shimla, Overnight Journey to Delhi",
    desc: "There are a lot of emotions on this final day of the journey. We leave the hotel after breakfast and begin our journey back to Delhi. We initially take a 10- to 11-hour drive to Shimla, after which we take a Volvo overnight to Delhi."
  },
  {
    day: "Day 8",
    title: "Reach Delhi by Morning",
    desc: "Arrive at Delhi in the morning. We returned home with enduring memories of the distant continent."
  }
];

// Updated Highlights data
const highlights = [
  { title: "Last Indian Village: Chitkul", image: highlightImages[0], desc: "Explore the serene beauty of Chitkul, the last inhabited village near the Indo-China border." },
  { title: "Ancient Tabo Monastery", image: highlightImages[1], desc: "Visit the 1000-year-old Tabo Monastery, often called the 'Ajanta of the Himalayas'." },
  { title: "Key Monastery", image: highlightImages[2], desc: "Discover the largest monastery in Spiti Valley, perched atop a hill at 4,166 meters." },
  { title: "Chicham Bridge", image: highlightImages[3], desc: "Experience Asia’s highest suspension bridge, offering breathtaking views of the Spiti Valley." },
];

export default function SpitiValleyTripPackage() {
  // State for itinerary accordion
  const [openDay, setOpenDay] = useState(null);
  const toggleDay = (index) => {
    setOpenDay(openDay === index ? null : index);
  };

  // State for booking form modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: null,
    travellers: '',
  });

  // State for Quick Facts rotation
  const [currentFactIndex, setCurrentFactIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFactIndex((prevIndex) => (prevIndex + 1) % quickFacts.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => {
    setIsModalOpen(false);
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
    console.log('Form submitted:', formData);
    handleCloseModal();
  };

  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.1 } },
  };

  // Animation for Quick Facts
  const factVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-[#F1FDF3] min-h-screen">
      {/* Hero Section with Subtle Parallax */}
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
              Spiti Valley Trip Package
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="text-lg md:text-2xl mb-6 font-sans"
            >
              Embark on an 8-Day Adventure through the Cold Desert of Himachal Pradesh
            </motion.p>
            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.95 }}
              onClick={handleOpenModal}
              className="bg-[#F1FDF3] text-[#00453A] px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl"
            >
              Plan Your Journey
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
              Embark on an 8-day journey from Delhi through Shimla to the rugged and mystical Spiti Valley. Experience ancient monasteries, high-altitude villages, and the raw beauty of the Himalayas.
            </p>
            <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
              <li className="flex items-center">
                <AiOutlineStar className="text-[#F5A623] mr-2" />
                <strong>Duration:</strong> <span className="ml-1">8 Days / 7 Nights</span>
              </li>
              <li className="flex items-center">
                <AiOutlineStar className="text-[#F5A623] mr-2" />
                <strong>Price:</strong> <span className="ml-1">Starting at ₹29,999 per person</span>
              </li>
              <li className="flex items-center">
                <AiOutlineStar className="text-[#F5A623] mr-2" />
                <strong>Group Size:</strong> <span className="ml-1">10-15 travelers</span>
              </li>
              <li className="flex items-center">
                <AiOutlineStar className="text-[#F5A623] mr-2" />
                <strong>Best Time:</strong> <span className="ml-1">May to October</span>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center mt-6 md:mt-0">
            <motion.button
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
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
          {itinerary.map((day, index) => (
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
                <span className="font-semibold font-sans">{day.day}: {day.title}</span>
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
                    <div className="p-5 text-gray-700 font-sans">
                      {day.desc}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Highlights with Overlapping Cards */}
      <motion.section
        initial="hidden"
        whileInView="show"
        variants={containerVariants}
        viewport={{ once: true }}
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
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10, transition: { duration: 0.2 } }}
              className="relative bg-white rounded-2xl shadow-xl overflow-hidden ${index % 2 === 0 ? 'rotate-2' : '-rotate-2'}"
            >
              <Image height={500}
                width={500}
                src={highlight.image}
                alt={highlight.title}
                className="w-full h-48 object-cover"
                onError={(e) => (e.target.src = '/img/placeholder.jpg')}
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-[#00453A] font-sans">{highlight.title}</h3>
                <p className="text-sm text-gray-600 mt-2 font-sans">{highlight.desc}</p>
              </div>
              <motion.div
                whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
                className="absolute top-4 right-4 text-[#F5A623]"
              >
                <AiOutlineStar size={24} />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Pricing & Inclusions with Quick Facts */}
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
            <p className="text-xl text-[#F5A623] font-bold">Starting at ₹29,999 per person</p>
            <p className="text-sm text-gray-600 mt-2 font-sans">*Prices may vary based on travel dates and availability</p>

            <h3 className="text-2xl font-semibold text-[#00453A] mt-6 mb-4 font-sans">Scheduled Dates</h3>
            <ul className="space-y-3 text-gray-700 font-sans">
              <li className="flex items-center"><AiOutlineCalendar className="text-[#F5A623] mr-2" /> 15th May 2025</li>
              <li className="flex items-center"><AiOutlineCalendar className="text-[#F5A623] mr-2" /> 10th June 2025</li>
              <li className="flex items-center"><AiOutlineCalendar className="text-[#F5A623] mr-2" /> 20th September 2025</li>
              <li className="flex items-center"><AiOutlineCalendar className="text-[#F5A623] mr-2" /> 5th October 2025</li>
            </ul>

            <h3 className="text-2xl font-semibold text-[#00453A] mt-6 mb-4 font-sans">Inclusions</h3>
            <ul className="space-y-3 text-gray-700 font-sans">
              <li className="flex items-center"><AiOutlineStar className="text-[#F5A623] mr-2" /> Volvo Transfers to and from Shimla and Delhi</li>
              <li className="flex items-center"><AiOutlineStar className="text-[#F5A623] mr-2" /> Entire journey via Tempo Traveler from Shimla</li>
              <li className="flex items-center"><AiOutlineStar className="text-[#F5A623] mr-2" /> Six nights' lodging (Chitkul: 1 night, Tabo: 1 night, Kalpa: 1 night, Kaza: 3 nights)</li>
              <li className="flex items-center"><AiOutlineStar className="text-[#F5A623] mr-2" /> Twelve meals (breakfasts and dinners)</li>
              <li className="flex items-center"><AiOutlineStar className="text-[#F5A623] mr-2" /> Team Leader during the journey</li>
              <li className="flex items-center"><AiOutlineStar className="text-[#F5A623] mr-2" /> Oxygen available 24/7 in case of emergency</li>
              <li className="flex items-center"><AiOutlineStar className="text-[#F5A623] mr-2" /> All relevant parking, toll, and driver fees</li>
              <li className="flex items-center"><AiOutlineStar className="text-[#F5A623] mr-2" /> Every inner line permit</li>
            </ul>

            <h3 className="text-2xl font-semibold text-[#00453A] mt-6 mb-4 font-sans">Exclusions</h3>
            <ul className="space-y-3 text-gray-700 font-sans">
              <li className="flex items-center"><AiOutlineStar className="text-[#F5A623] mr-2" /> Any personal costs, advice, or licenses</li>
              <li className="flex items-center"><AiOutlineStar className="text-[#F5A623] mr-2" /> 5% GST (tax)</li>
              <li className="flex items-center"><AiOutlineStar className="text-[#F5A623] mr-2" /> Porters and guides</li>
              <li className="flex items-center"><AiOutlineStar className="text-[#F5A623] mr-2" /> Lunch in Kalpa or Rampur, lunches during transit, any beverages, and any meals not specifically listed</li>
              <li className="flex items-center"><AiOutlineStar className="text-[#F5A623] mr-2" /> Sightseeing in Shimla</li>
              <li className="flex items-center"><AiOutlineStar className="text-[#F5A623] mr-2" /> Any accommodation, activities, or transfers other than what is mentioned</li>
              <li className="flex items-center"><AiOutlineStar className="text-[#F5A623] mr-2" /> Expenses due to unanticipated events (medical crises or natural disasters)</li>
              <li className="flex items-center"><AiOutlineStar className="text-[#F5A623] mr-2" /> Anything not specifically listed in the inclusions</li>
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
            {/* Small Image */}
            <Image src={rightSideImage}
              alt="Spiti Icon"
              width={150}
              height={150}
              className="object-cover"
              onError={(e) => (e.target.src = '/img/placeholder.jpg')}
            />
            {/* Primary Button */}
            <motion.button
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.95 }}
              onClick={handleOpenModal}
              className="bg-[#00453A] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-[#00332A] transition-colors w-full max-w-xs"
            >
              Request Callback
            </motion.button>
            {/* Secondary Button */}
            <motion.button
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#F5A623] text-[#00453A] px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-[#E59400] transition-colors w-full max-w-xs flex items-center justify-center"
            >
              <AiOutlinePhone className="mr-2" /> Call Us
            </motion.button>
          </div>
        </motion.div>
      </motion.section>

      {/* Notes Section */}
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
          Important Notes
          <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-16 h-1 bg-[#F5A623]"></span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="bg-white p-6 rounded-2xl shadow-xl"
        >
          <ul className="space-y-3 text-gray-700 font-sans">
            <li className="flex items-start">
              <AiOutlineStar className="text-[#F5A623] mr-2 mt-1" />
              Due to heavy snowfall, access to high-altitude areas of the Spiti Valley, including Hikkim, Komik, Langza Village, Pin Valley, etc., may be impeded during the winter months. As a result, the weather determines the stopover at these destinations. In this situation, we shall search for the greatest options that are feasible.
            </li>
            <li className="flex items-start">
              <AiOutlineStar className="text-[#F5A623] mr-2 mt-1" />
              Tourists are responsible for making arrangements for a 4x4 vehicle and related costs in the event of natural disasters, such as significant snowfall that closes roads to heavy vehicles. Any such divine acts or related costs are not the responsibility of Paradise Uttarakhand.
            </li>
            <li className="flex items-start">
              <AiOutlineStar className="text-[#F5A623] mr-2 mt-1" />
              It is advised that those who live outside of Delhi reserve trains or flights that arrive in Delhi no later than 4 PM on the day of departure. Likewise, schedule the return train or flight after 2:00 PM on the day of the trip's conclusion.
            </li>
            <li className="flex items-start">
              <AiOutlineStar className="text-[#F5A623] mr-2 mt-1" />
              The weather, the state of the roads, the participants’ physical capabilities, and other variables can all affect the itinerary. For the sake of everyone’s safety, comfort, and general well-being, we reserve the right to alter any timetable.
            </li>
            <li className="flex items-start">
              <AiOutlineStar className="text-[#F5A623] mr-2 mt-1" />
              Because of the full itineraries we offer our travelers, the age range for our group departures is 16 to 42 years old. Travelers who are older than the specified age range can have their journeys customized by us.
            </li>
          </ul>
        </motion.div>
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
              <Image height={200}
                width={400}
                src={heroImage}
                alt="Spiti Valley Trip"
                className="w-full h-32 object-cover rounded-lg"
              />
              <h3 className="mt-3 text-lg font-bold text-[#00453A] font-sans">Spiti Valley Trip Package</h3>
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
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
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

        .react-datepicker-wrapper {
          width: 100%;
        }
        .motion-element {
          will-change: transform, opacity;
        }
        .font-serif {
          font-family: 'Playfair Display', serif;
        }
        .font-sans {
          font-family: 'Poppins', sans-serif;
        }
        .rotate-2 {
          transform: rotate(2deg);
        }
        .rotate--2 {
          transform: rotate(-2deg);
        }
      `}</style>
    </div>
  );
}