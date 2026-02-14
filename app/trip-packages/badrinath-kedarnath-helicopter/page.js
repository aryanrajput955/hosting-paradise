'use client'
import {motion, AnimatePresence} from 'framer-motion'
import {useState, useEffect, useCallback} from 'react'
import {
	AiOutlineCalendar,
	AiOutlineDown,
	AiOutlineUp,
	AiOutlineStar,
	AiOutlinePhone,
} from 'react-icons/ai'
import Image from 'next/image'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import {memo} from 'react'

// Sample images (replace with actual image paths)
const heroImage = '/img/shoot/Kedarnath2.jpg'
const highlightImages = [
	'/img/shoot/kedar.jpg',
	'/img/shoot/badrinath.jpg',
	'/img/shoot/helicopter.jpg',
	'/img/shoot/heli_inside.png',
]
const rightSideImage = '/img/logo.png'

// Quick Facts about Do Dham Yatra
const quickFacts = [
	{text: 'Kedarnath is one of the 12 Jyotirlingas in India.'},
	{text: 'Badrinath is one of the 108 Divya Deshams revered by Vaishnavites.'},
	{text: 'The helicopter Yatra completes both Dhams in a single day.'},
	{text: 'The Himalayas offer breathtaking views from the air.'},
]

// Itinerary data
const itinerary = [
	{
		time: '7:00 AM',
		title: 'Departure from Sahastradhara Helipad, Dehradun',
		desc: "Around seven in the morning, the sacred Do Dham Yatra would start from the Sahastradhara helipad in Dehradun.\n\nIn order to attend the briefing session when the pilot and ground crew would go over the dos and don'ts of the helicopter journey, you are encouraged to arrive at the helipad well in advance of the departure time.\n\nThe chopper would land at the Guptkashi helipad less than an hour later.\n\nThe reason for this is that government regulations require that a separate helicopter service, commonly known as a shuttle service, operate between the shrines of Guptkashi/Phata and Kedarnath.\n\nAs a result, you will be taken to a shuttle service at Guptkashi, which will carry you in around eight to nine minutes to the Kedarnath shrine.",
	},

	{
		time: '8:00 AM',
		title: 'Arrival at Kedarnath Shrine',
		desc: ' You can walk from the helipad where you will land to Kedarnath Temple.  VIP Darshan slips are included in our package.  Enjoy a hassle-free Kedarnath Jyotirlinga Darshan as a result.  Are you aware that there are just twelve Jyotirlingas in all of India?  Being able to see the Jyotirlingas is regarded as a matter of the highest fortune.',
	},
	{
		time: '11:00 AM',
		title: 'Travel to Badrinath',
		desc: " Now is the time to go for Badrinath, our next stop.  Puranas and devotional writings from long ago make frequent mention to Badrinath, and the region has long been regarded as sacred soil that can inspire anyone's desire for spiritual transformation.  In order to bring about the greatest welfare for all living things in the cosmos, Vishnu's twin avatars Nar and Narayan actually carried out austerities in the same location for thousands of years.",
	},
	{
		time: '12:00 PM',
		title: 'Arrival at Badrinath',
		desc: 'One might reach Badrinath Dham after an hour-long helicopter ride above the skies.  As one of the 108 Divya Deshams described in the writings of Tamil saint-poets Alvars, Badrinath Dham is revered.  According to the Skanda Purana, it is the most revered Vaishnavite sanctuary in the entire universe.',
	},
	{
		time: 'Post-Lunch',
		title: 'Return to Dehradun',
		desc: 'Board the helicopter for the return journey, savoring the Himalayan vistas. Arrive back at Sahastradhara Helipad.',
	},
]

// Highlights data
const highlights = [
	{
		title: 'Kedarnath Jyotirlinga',
		image: highlightImages[0],
		desc: 'Visit one of the holiest Shiva temples with VIP Darshan.',
	},
	{
		title: 'Badrinath Dham',
		image: highlightImages[1],
		desc: 'Pray at Lord Vishnu’s sacred abode amidst the Himalayas.',
	},
	{
		title: 'Himalayan Vistas',
		image: highlightImages[2],
		desc: 'Enjoy stunning aerial views of snow-capped peaks.',
	},
	{
		title: 'Helicopter Comfort',
		image: highlightImages[3],
		desc: 'Experience a luxurious and time-efficient pilgrimage.',
	},
]

// FAQ data
const faqs = [
	{
		question: 'What type of helicopter is used and what is its capacity?',
		answer:
			'We operate Airbus AS350 B3 and BELL 407 single-engine helicopters, known for high-altitude performance. Each can carry up to 6 passengers.',
	},
	{
		question:
			'How many people can board a helicopter for the Do Dham Yatra at once?',
		answer: 'Yes, a maximum of 6 people can fly at once.',
	},
	{
		question: 'What are the opening and closing dates for the Do Dham Yatra?',
		answer:
			'The Yatra typically opens in late April or early May and closes in the first week of November.',
	},
	{
		question: 'Are there facilities for VIP Darshan at the temples?',
		answer:
			'Yes, VIP Darshan tickets are available at both Kedarnath and Badrinath temples.',
	},
	{
		question: 'When is the best time to take a helicopter to Do Dham Yatra?',
		answer:
			'The ideal months are May, June, September, and October. Avoid the monsoon season (July-August).',
	},
	{
		question:
			'Are helicopter flights available from cities like Hyderabad, Bangalore, etc.?',
		answer:
			'No direct flights to the Dhams are available from other cities. Fly to Dehradun, and we can assist with booking if needed.',
	},
	{
		question: 'Is registration required for the Do Dham Yatra by helicopter?',
		answer:
			'No, passengers traveling by helicopter do not need to register, unlike those traveling by road.',
	},
	{
		question: 'What sort of attire should I pack?',
		answer:
			'Wear comfortable, modest clothing. In May-June, light clothing with woolens for sudden weather changes. In Sept-Oct, bring jackets, sweaters, and rain gear.',
	},
	{
		question: 'What kind of food is provided?',
		answer:
			'Only vegetarian meals are served for breakfast, lunch, and dinner during the Yatra.',
	},
	{
		question: 'What type of lodging is offered?',
		answer:
			'No overnight lodging is included as this is a same-day trip. Comfort varies by package, but expect basic facilities in high-altitude areas.',
	},
]

// Important Information data
const importantInfo = [
	{
		title: 'Crucial Details for the Helicopter Dham Yatra',
		content: (
			<ul className='list-disc pl-5 space-y-2'>
				<li>
					The VIP Darshan facility is subject to alteration at the discretion of
					the temple authorities and the State government.
				</li>
				<li>
					Strict passenger weight regulations apply to the helicopters. We may
					move passengers between helicopters to meet weight restrictions,
					meaning you may not travel together.
				</li>
				<li>
					Fixed flight timings apply. Arrive at the helipad on time to avoid
					missing your flight. Flights may be postponed or canceled due to
					weather or force majeure.
				</li>
				<li>
					Flight schedules and reporting times will be notified one day prior to
					the Yatra.
				</li>
				<li>
					Provide accurate weights at booking. Incorrect information may prevent
					boarding without refund.
				</li>
				<li>
					Baggage allowance: 1 bag up to 5 kg per traveler. Large bags or
					suitcases are not permitted.
				</li>
				<li>
					Kedarnath shuttle service may separate groups onto different shuttles.
				</li>
				<li>
					Passengers are responsible for additional taxes or fees imposed by
					temple or state authorities.
				</li>
				<li>
					All guests must complete an online Yatra registration form before the
					trip.
				</li>
				<li>Dress comfortably in tracksuits and athletic footwear.</li>
				<li>
					Our group will accompany you to both Dhams and provide assistance.
				</li>
				<li>
					Infants under 12 kg fly free with ID or birth certificate for age
					verification.
				</li>
				<li>Bringing an infant reduces the group’s total allowable weight.</li>
				<li>
					Passengers cover all additional fees (contributions, Pitthu charges,
					tips, porters, etc.).
				</li>
				<li>
					Network connectivity is poor in mountainous areas, though Jio and BSNL
					may work in some spots.
				</li>
				<li>
					Pack warm clothing (jackets, sweaters) and essential medications due
					to cold temperatures and altitude sickness risks.
				</li>
				<li>
					A medical examination is advised, especially for those with conditions
					or mobility issues. Consult your doctor if elderly or impaired.
				</li>
			</ul>
		),
	},
	{
		title: 'Bad Weather or Force Majeure Disclaimer',
		content: (
			<p>
				Weather in highland regions is unpredictable, and flight cancellations
				may occur. Force majeure events include inclement weather, poor
				visibility, Indian Air Force (NOTAM) restrictions, delayed clearances,
				crew illness, technical issues, VVIP movements, or late arrivals at
				helipads. Such issues will be managed per our policies.
			</p>
		),
	},
	{
		title: 'Health Warning for the Helicopter Do Dham Yatra',
		content: (
			<div>
				<p>
					Acclimatization is recommended due to the high elevations of Kedarnath
					and Badrinath, but the same-day Yatra offers no time for this. Rest
					and breathe deeply to cope. Avoid exertion to prevent Acute Mountain
					Sickness (AMS), which affects the brain and lungs above 2500 meters.
					Symptoms include breathing issues, dizziness, appetite loss,
					exhaustion, nausea, vomiting, weakness, insomnia, and headaches.
				</p>
				<p className='mt-2'>
					<strong>High Altitude Cerebral Edema (HACE):</strong> A severe AMS
					form with brain swelling, potentially leading to coma or death.
				</p>
				<p className='mt-2'>
					<strong>High Altitude Pulmonary Edema (HAPE):</strong> Fluid buildup
					in the lungs causing respiratory failure, often rapid and fatal.
					Symptoms: breathlessness, red sputum, weakness, dry cough, drowsiness,
					fast heart rate, exhaustion, chest tightness, congestion. More common
					in younger individuals.
				</p>
			</div>
		),
	},
	{
		title: 'What to Wear for Do Dham Yatra by Helicopter',
		content: (
			<div>
				<p>
					<strong>Season After the Monsoon</strong>
					<br />
					If you are planning a trip in September or October, expect cool,
					pleasant weather. The temperature ranges from 10°C and 20°C, which is
					pleasant. However, especially at night, there is a danger that the
					temperatures at Kedarnath and Badrinath will fall below 10°. It is
					therefore recommended to bring warm clothing. Jackets and sweaters
					made of wool are advised. We give our passengers disposable rain gear
					so they can handle unexpected downpours.
				</p>
				<p className='mt-2'>
					<strong>Season Before the Monsoon</strong>
					<br />
					Expect sunny days with temperatures hovering around 20 to 30 degrees
					Celsius if you're going to take the Dham Yatra by helicopter during
					the summer months of May and June. The recommended dress includes
					light cotton clothing, sunglasses, and a hat to protect against the
					sun. Comfortable walking shoes are also essential for temple visits
					and short walks.
				</p>
			</div>
		),
	},
]

// Memoized Highlight Card Component
const HighlightCard = memo(({highlight, index, variants}) => (
	<motion.div
		variants={variants}
		whileHover={{scale: 1.02}}
		className="relative bg-white rounded-2xl shadow-xl overflow-hidden ${index % 2 === 0 ? 'rotate-2' : '-rotate-2'}"
		initial='hidden'
		animate='show'>
		<Image
			src={highlight.image}
			alt={highlight.title}
			width={500}
			height={192}
			className='w-full h-48 object-cover'
			quality={75}
		/>
		<div className='p-5'>
			<h3 className='text-lg font-semibold text-[#00453A] font-sans'>
				{highlight.title}
			</h3>
			<p className='text-sm text-gray-600 mt-2 font-sans'>{highlight.desc}</p>
		</div>
		<motion.div
			whileHover={{rotate: 180}}
			transition={{duration: 0.3}}
			className='absolute top-4 right-4 text-[#F5A623]'>
			<AiOutlineStar size={24} />
		</motion.div>
	</motion.div>
))
HighlightCard.displayName = 'HighlightCard'

export default function DoDhamYatraPackage() {
	const [openDay, setOpenDay] = useState(null)
	const [openFaq, setOpenFaq] = useState(null)
	const [openInfo, setOpenInfo] = useState(null)
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [formData, setFormData] = useState({
		name: '',
		phone: '',
		date: null,
		travellers: '',
	})
	const [currentFactIndex, setCurrentFactIndex] = useState(0)

	const toggleDay = useCallback(
		(index) => setOpenDay((prev) => (prev === index ? null : index)),
		[]
	)
	const toggleFaq = useCallback(
		(index) => setOpenFaq((prev) => (prev === index ? null : index)),
		[]
	)
	const toggleInfo = useCallback(
		(index) => setOpenInfo((prev) => (prev === index ? null : index)),
		[]
	)
	const handleOpenModal = useCallback(() => setIsModalOpen(true), [])
	const handleCloseModal = useCallback(() => {
		setIsModalOpen(false)
		setFormData({name: '', phone: '', date: null, travellers: ''})
	}, [])
	const handleInputChange = useCallback((e) => {
		const {name, value} = e.target
		setFormData((prev) => ({...prev, [name]: value}))
	}, [])
	const handleDateChange = useCallback(
		(date) => setFormData((prev) => ({...prev, date})),
		[]
	)
	const handleSubmit = useCallback(
		(e) => {
			e.preventDefault()
			console.log('Form submitted:', formData)
			handleCloseModal()
		},
		[formData, handleCloseModal]
	)

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentFactIndex((prevIndex) => (prevIndex + 1) % quickFacts.length)
		}, 3000)
		return () => clearInterval(interval)
	}, [])

	const containerVariants = {
		hidden: {opacity: 0},
		show: {opacity: 1, transition: {staggerChildren: 0.2}},
	}

	const itemVariants = {
		hidden: {opacity: 0, y: 10},
		show: {opacity: 1, y: 0, transition: {duration: 0.3}},
	}

	const factVariants = {
		hidden: {opacity: 0, y: 10},
		show: {opacity: 1, y: 0, transition: {duration: 0.5}},
		exit: {opacity: 0, y: -10, transition: {duration: 0.5}},
	}

	return (
		<div className='bg-[#F1FDF3] min-h-screen'>
			{/* Hero Section */}
			<motion.div
				initial={{opacity: 0}}
				animate={{opacity: 1}}
				transition={{duration: 0.5}}
				className='relative h-[600px] bg-cover bg-center bg-fixed'
				style={{backgroundImage: `url(${heroImage})`}}>
				<div className='absolute inset-0 bg-gradient-to-b from-black/50 to-[#00453A]/30 flex items-center justify-center'>
					<div className='text-center text-white px-4'>
						<motion.h1
							initial={{y: 20, opacity: 0}}
							animate={{y: 0, opacity: 1}}
							transition={{duration: 0.4, delay: 0.2}}
							className='text-5xl md:text-7xl font-bold mb-4 font-serif'>
							Badrinath Kedarnath By Helicopter
						</motion.h1>
						<motion.p
							initial={{y: 20, opacity: 0}}
							animate={{y: 0, opacity: 1}}
							transition={{duration: 0.4, delay: 0.3}}
							className='text-lg md:text-2xl mb-6 font-sans'>
							Same Day Do Dham Yatra from Dehradun
						</motion.p>
						<motion.button
							initial={{y: 20, opacity: 0}}
							animate={{y: 0, opacity: 1}}
							transition={{duration: 0.4, delay: 0.4}}
							whileHover={{scale: 1.05}}
							whileTap={{scale: 0.95}}
							onClick={handleOpenModal}
							className='bg-[#F1FDF3] text-[#00453A] px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl'>
							Book Your Yatra
						</motion.button>
					</div>
				</div>
			</motion.div>

			{/* Decorative Divider */}
			<div className='relative h-12 bg-[#00453A]'>
				<svg
					className='absolute bottom-0 w-full text-[#F1FDF3]'
					viewBox='0 0 1440 60'>
					<path
						fill='currentColor'
						d='M0,0L1440,60H0Z'></path>
				</svg>
			</div>

			{/* Trip Overview */}
			<motion.section
				initial={{opacity: 0}}
				whileInView={{opacity: 1}}
				transition={{duration: 0.4}}
				viewport={{once: true}}
				className='max-w-5xl mx-auto px-4 py-16 relative'>
				<motion.h2
					initial={{opacity: 0, y: 20}}
					whileInView={{opacity: 1, y: 0}}
					transition={{duration: 0.3}}
					viewport={{once: true}}
					className='text-4xl md:text-5xl font-bold text-[#00453A] text-center mb-12 font-serif relative'>
					Trip Overview
					<span className='absolute left-1/2 transform -translate-x-1/2 bottom-0 w-16 h-1 bg-[#F5A623]'></span>
				</motion.h2>
				<motion.div
					initial={{opacity: 0, y: 20}}
					whileInView={{opacity: 1, y: 0}}
					transition={{duration: 0.3}}
					viewport={{once: true}}
					className='grid md:grid-cols-2 gap-6 bg-gradient-to-br from-white to-[#F1FDF3] p-6 rounded-2xl shadow-xl'>
					<div className='space-y-4'>
						<p className='text-gray-700 text-sm sm:text-base leading-relaxed'>
							Experience the ultimate blend of luxury and spirituality with our
							same-day helicopter Yatra to Kedarnath and Badrinath. Starting
							from Dehradun, this opulent journey offers breathtaking aerial
							views of the Himalayas, VIP Darshan at both sacred temples, and a
							seamless pilgrimage completed in a single day—perfect for senior
							citizens or those short on time.
						</p>
						<ul className='space-y-2 text-gray-700 text-sm sm:text-base'>
							<li className='flex items-center'>
								<AiOutlineStar className='text-[#F5A623] mr-2' />
								<strong>Duration:</strong> <span className='ml-1'>1 Day</span>
							</li>
							<li className='flex items-center'>
								<AiOutlineStar className='text-[#F5A623] mr-2' />
								<strong>Price:</strong>{' '}
								<span className='ml-1'>Starting at ₹120,000 per person</span>
							</li>
							<li className='flex items-center'>
								<AiOutlineStar className='text-[#F5A623] mr-2' />
								<strong>Group Size:</strong>{' '}
								<span className='ml-1'>Up to 6 travelers per helicopter</span>
							</li>
							<li className='flex items-center'>
								<AiOutlineStar className='text-[#F5A623] mr-2' />
								<strong>Best Time:</strong>{' '}
								<span className='ml-1'>May-June, Sept-Oct</span>
							</li>
						</ul>
					</div>
					<div className='flex items-center justify-center mt-6 md:mt-0'>
						<motion.button
							whileHover={{scale: 1.05}}
							whileTap={{scale: 0.95}}
							onClick={handleOpenModal}
							className='bg-[#00453A] text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-[#00332A] transition-colors'>
							Book Now
						</motion.button>
					</div>
				</motion.div>
			</motion.section>

			{/* Itinerary */}
			<motion.section
				initial={{opacity: 0}}
				whileInView={{opacity: 1}}
				transition={{duration: 0.4}}
				viewport={{once: true}}
				className='max-w-5xl mx-auto px-4 py-16 relative'>
				<motion.h2
					initial={{opacity: 0, y: 20}}
					whileInView={{opacity: 1, y: 0}}
					transition={{duration: 0.3}}
					viewport={{once: true}}
					className='text-4xl md:text-5xl font-bold text-[#00453A] text-center mb-12 font-serif relative'>
					Itinerary
					<span className='absolute left-1/2 transform -translate-x-1/2 bottom-0 w-16 h-1 bg-[#F5A623]'></span>
				</motion.h2>
				<div className='space-y-4'>
					{itinerary.map((item, index) => (
						<motion.div
							key={index}
							initial={{opacity: 0, y: 20}}
							whileInView={{opacity: 1, y: 0}}
							transition={{duration: 0.3}}
							viewport={{once: true}}
							className='bg-white rounded-2xl shadow-lg overflow-hidden'>
							<button
								onClick={() => toggleDay(index)}
								className='w-full flex justify-between items-center p-5 text-left bg-gradient-to-r from-[#00453A] to-[#00332A] text-white transition-all hover:from-[#00332A] hover:to-[#00251F]'>
								<span className='font-semibold font-sans'>
									{item.time}: {item.title}
								</span>
								{openDay === index ? <AiOutlineUp /> : <AiOutlineDown />}
							</button>
							<AnimatePresence initial={false}>
								{openDay === index && (
									<motion.div
										initial={{maxHeight: 0, opacity: 0}}
										animate={{maxHeight: 500, opacity: 1}}
										exit={{maxHeight: 0, opacity: 0}}
										transition={{duration: 0.4, ease: 'easeInOut'}}
										className='overflow-hidden'>
										<div className='p-5 text-gray-700 font-sans'>
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
				initial='hidden'
				whileInView='show'
				variants={containerVariants}
				viewport={{once: true, amount: 0.2}}
				className='max-w-6xl mx-auto px-4 py-16 relative'>
				<motion.h2
					initial={{opacity: 0, y: 20}}
					whileInView={{opacity: 1, y: 0}}
					transition={{duration: 0.3}}
					viewport={{once: true}}
					className='text-4xl md:text-5xl font-bold text-[#00453A] text-center mb-12 font-serif relative'>
					Trip Highlights
					<span className='absolute left-1/2 transform -translate-x-1/2 bottom-0 w-16 h-1 bg-[#F5A623]'></span>
				</motion.h2>
				<motion.div
					variants={containerVariants}
					className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
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
				initial={{opacity: 0}}
				whileInView={{opacity: 1}}
				transition={{duration: 0.4}}
				viewport={{once: true}}
				className='max-w-5xl mx-auto px-4 py-16 relative'>
				<motion.h2
					initial={{opacity: 0, y: 20}}
					whileInView={{opacity: 1, y: 0}}
					transition={{duration: 0.3}}
					viewport={{once: true}}
					className='text-4xl md:text-5xl font-bold text-[#00453A] text-center mb-12 font-serif relative'>
					Pricing & Inclusions
					<span className='absolute left-1/2 transform -translate-x-1/2 bottom-0 w-16 h-1 bg-[#F5A623]'></span>
				</motion.h2>
				<motion.div
					initial={{opacity: 0, y: 20}}
					whileInView={{opacity: 1, y: 0}}
					transition={{duration: 0.3}}
					viewport={{once: true}}
					className='grid md:grid-cols-2 gap-8 bg-gradient-to-br from-white to-[#F1FDF3] p-8 rounded-2xl shadow-xl relative'>
					<div>
						<h3 className='text-2xl font-semibold text-[#00453A] mb-4 font-sans'>
							Pricing
						</h3>
						<p className='text-xl text-[#F5A623] font-bold'>
							Starting at ₹125,000 per person
						</p>
						<p className='text-sm text-gray-600 mt-2 font-sans'>
							*Prices may vary based on availability and additional fees
						</p>

						<h3 className='text-2xl font-semibold text-[#00453A] mt-6 mb-4 font-sans'>
							Scheduled Dates
						</h3>
						<ul className='space-y-3 text-gray-700 font-sans'>
							<li className='flex items-center'>
								<AiOutlineCalendar className='text-[#F5A623] mr-2' /> May-June
								2025
							</li>
							<li className='flex items-center'>
								<AiOutlineCalendar className='text-[#F5A623] mr-2' />{' '}
								September-October 2025
							</li>
						</ul>

						<h3 className='text-2xl font-semibold text-[#00453A] mt-6 mb-4 font-sans'>
							Inclusions
						</h3>
						<ul className='space-y-3 text-gray-700 font-sans'>
							<li className='flex items-center'>
								<AiOutlineStar className='text-[#F5A623] mr-2' /> Helicopter
								transfers (Dehradun-Kedarnath-Badrinath-Dehradun)
							</li>
							<li className='flex items-center'>
								<AiOutlineStar className='text-[#F5A623] mr-2' /> VIP Darshan
								passes
							</li>
							<li className='flex items-center'>
								<AiOutlineStar className='text-[#F5A623] mr-2' /> Lunch at
								Badrinath
							</li>
							<li className='flex items-center'>
								<AiOutlineStar className='text-[#F5A623] mr-2' /> Shuttle
								service at Kedarnath
							</li>
						</ul>

						<h3 className='text-2xl font-semibold text-[#00453A] mt-6 mb-4 font-sans'>
							Exclusions
						</h3>
						<ul className='space-y-3 text-gray-700 font-sans'>
							<li className='flex items-center'>
								<AiOutlineStar className='text-[#F5A623] mr-2' /> Flights
								to/from Dehradun
							</li>
							<li className='flex items-center'>
								<AiOutlineStar className='text-[#F5A623] mr-2' /> Personal
								expenses (tips, porters, etc.)
							</li>
							<li className='flex items-center'>
								<AiOutlineStar className='text-[#F5A623] mr-2' /> Additional
								taxes/fees by temple authorities
							</li>
							<li className='flex items-center'>
								<AiOutlineStar className='text-[#F5A623] mr-2' /> Travel
								insurance
							</li>
						</ul>
					</div>
					<div className='flex flex-col items-center gap-2 space-y-4'>
						<div className='w-full max-w-sm bg-white border-2 border-dashed border-[#00453A] rounded-lg p-6 shadow-md'>
							<h4 className='text-xl font-semibold text-[#00453A] font-sans mb-3 flex items-center'>
								<AiOutlineStar className='text-[#F5A623] mr-2' /> Did You Know?
							</h4>
							<AnimatePresence mode='wait'>
								<motion.div
									key={currentFactIndex}
									variants={factVariants}
									initial='hidden'
									animate='show'
									exit='exit'
									className='text-gray-700 font-sans text-base'>
									{quickFacts[currentFactIndex].text}
								</motion.div>
							</AnimatePresence>
						</div>
						<Image
							src={rightSideImage}
							alt='Do Dham Icon'
							width={150}
							height={150}
							className='object-cover'
							quality={75}
						/>
						<motion.button
							whileHover={{scale: 1.05}}
							whileTap={{scale: 0.95}}
							onClick={handleOpenModal}
							className='bg-[#00453A] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-[#00332A] transition-colors w-full max-w-xs'>
							Request Callback
						</motion.button>
						<motion.button
							whileHover={{scale: 1.05}}
							whileTap={{scale: 0.95}}
							className='bg-[#F5A623] text-[#00453A] px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-[#E59400] transition-colors w-full max-w-xs flex items-center justify-center'>
							<AiOutlinePhone className='mr-2' /> Call Us
						</motion.button>
					</div>
				</motion.div>
			</motion.section>

			{/* Important Information */}
			<motion.section
				initial={{opacity: 0}}
				whileInView={{opacity: 1}}
				transition={{duration: 0.4}}
				viewport={{once: true}}
				className='max-w-5xl mx-auto px-4 py-16 relative'>
				<motion.h2
					initial={{opacity: 0, y: 20}}
					whileInView={{opacity: 1, y: 0}}
					transition={{duration: 0.3}}
					viewport={{once: true}}
					className='text-4xl md:text-5xl font-bold text-[#00453A] text-center mb-12 font-serif relative'>
					Important Information
					<span className='absolute left-1/2 transform -translate-x-1/2 bottom-0 w-16 h-1 bg-[#F5A623]'></span>
				</motion.h2>
				<div className='space-y-4'>
					{importantInfo.map((info, index) => (
						<motion.div
							key={index}
							initial={{opacity: 0, y: 20}}
							whileInView={{opacity: 1, y: 0}}
							transition={{duration: 0.3}}
							viewport={{once: true}}
							className='bg-[#E4DECF] border-l-4 border-[#F5A623] rounded-r-lg shadow-md hover:shadow-lg transition-shadow'>
							<button
								onClick={() => toggleInfo(index)}
								className='w-full flex justify-between items-center p-5 text-left bg-[#E4DECF] text-[#00453A] font-semibold font-sans'>
								<span>{info.title}</span>
								{openInfo === index ? <AiOutlineUp /> : <AiOutlineDown />}
							</button>
							<AnimatePresence initial={false}>
								{openInfo === index && (
									<motion.div
										initial={{height: 0, opacity: 0}}
										animate={{height: 'auto', opacity: 1}}
										exit={{height: 0, opacity: 0}}
										transition={{duration: 0.3, ease: 'easeInOut'}}
										className='overflow-hidden'>
										<div className='p-5 text-gray-700 font-sans'>
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
				initial={{opacity: 0}}
				whileInView={{opacity: 1}}
				transition={{duration: 0.4}}
				viewport={{once: true}}
				className='max-w-5xl mx-auto px-4 py-16 relative'>
				<motion.h2
					initial={{opacity: 0, y: 20}}
					whileInView={{opacity: 1, y: 0}}
					transition={{duration: 0.3}}
					viewport={{once: true}}
					className='text-4xl md:text-5xl font-bold text-[#00453A] text-center mb-12 font-serif relative'>
					Frequently Asked Questions
					<span className='absolute left-1/2 transform -translate-x-1/2 bottom-0 w-16 h-1 bg-[#F5A623]'></span>
				</motion.h2>
				<div className='space-y-3'>
					{faqs.map((faq, index) => (
						<motion.div
							key={index}
							initial={{opacity: 0, y: 20}}
							whileInView={{opacity: 1, y: 0}}
							transition={{duration: 0.3}}
							viewport={{once: true}}
							className='bg-[#E4DECF] border border-[#E5E7EB] rounded-lg shadow-sm hover:shadow-md transition-shadow'>
							<button
								onClick={() => toggleFaq(index)}
								className='w-full flex items-center p-4 text-left'>
								<span className='flex-shrink-0 w-8 h-8 flex items-center justify-center bg-[#F5A623] text-white rounded-full font-semibold mr-3'>
									{index + 1}
								</span>
								<span className='flex-1 text-[#00453A] font-semibold font-sans text-lg'>
									{faq.question}
								</span>
								{openFaq === index ? (
									<AiOutlineUp className='text-[#00453A]' />
								) : (
									<AiOutlineDown className='text-[#00453A]' />
								)}
							</button>
							<AnimatePresence initial={false}>
								{openFaq === index && (
									<motion.div
										initial={{height: 0, opacity: 0}}
										animate={{height: 'auto', opacity: 1}}
										exit={{height: 0, opacity: 0}}
										transition={{duration: 0.3, ease: 'easeInOut'}}
										className='overflow-hidden'>
										<div className='px-4 pb-4 pt-2 text-gray-700 font-sans text-sm'>
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
					initial={{opacity: 0}}
					animate={{opacity: 1}}
					exit={{opacity: 0}}
					transition={{duration: 0.3}}
					className='fixed inset-0 z-50 flex items-center justify-center'>
					<div
						className='fixed inset-0 bg-black/50 backdrop-blur-sm'
						onClick={handleCloseModal}></div>
					<motion.div
						initial={{scale: 0.9, opacity: 0}}
						animate={{scale: 1, opacity: 1}}
						exit={{scale: 0.9, opacity: 0}}
						transition={{duration: 0.3}}
						className='relative bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 p-6'>
						<button
							onClick={handleCloseModal}
							className='absolute top-3 right-3 text-gray-500 hover:text-gray-700'>
							✕
						</button>
						<div className='mb-4'>
							<Image
								src={heroImage}
								alt='Do Dham Yatra'
								width={400}
								height={128}
								className='w-full h-32 object-cover rounded-lg'
								quality={75}
							/>
							<h3 className='mt-3 text-lg font-bold text-[#00453A] font-sans'>
								Badrinath Kedarnath Helicopter Yatra
							</h3>
						</div>
						<form onSubmit={handleSubmit}>
							<div className='space-y-4'>
								<div>
									<label className='block text-sm font-medium text-gray-700 font-sans'>
										Name
									</label>
									<input
										type='text'
										name='name'
										value={formData.name}
										onChange={handleInputChange}
										required
										className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00453A] focus:ring-[#00453A]'
									/>
								</div>
								<div>
									<label className='block text-sm font-medium text-gray-700 font-sans'>
										Phone Number
									</label>
									<input
										type='tel'
										name='phone'
										value={formData.phone}
										onChange={handleInputChange}
										required
										className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00453A] focus:ring-[#00453A]'
									/>
								</div>
								<div>
									<label className='block text-sm font-medium text-gray-700 font-sans'>
										Preferred Date
									</label>
									<div className='relative'>
										<DatePicker
											selected={formData.date}
											onChange={handleDateChange}
											dateFormat='dd/MM/yyyy'
											minDate={new Date()}
											className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00453A] focus:ring-[#00453A]'
											placeholderText='Select date'
											required
										/>
										<AiOutlineCalendar className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400' />
									</div>
								</div>
								<div>
									<label className='block text-sm font-medium text-gray-700 font-sans'>
										Number of Travellers
									</label>
									<input
										type='number'
										name='travellers'
										value={formData.travellers}
										onChange={handleInputChange}
										min='1'
										max='6'
										required
										className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00453A] focus:ring-[#00453A]'
									/>
								</div>
								<motion.button
									type='submit'
									whileHover={{scale: 1.05}}
									whileTap={{scale: 0.95}}
									className='w-full py-3 bg-[#F5A623] text-[#00453A] rounded-full font-semibold shadow-lg hover:shadow-xl transition-colors'>
									Submit Request
								</motion.button>
							</div>
						</form>
					</motion.div>
				</motion.div>
			)}

			<style
				jsx
				global>{`
				@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Poppins:wght@400;500&display=swap');
				.react-datepicker-wrapper {
					width: 100%;
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
	)
}
