'use client'
import React, {useState, useRef, useEffect} from 'react'
import {motion} from 'framer-motion'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Pagination, Autoplay, Navigation} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import {AiOutlineCalendar} from 'react-icons/ai'
import Image from 'next/image'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import WhyChooseUs from '@/components/whychooseus'
import Link from 'next/link'

const tours = [
  {
    title: "Uttarakhand Tour Package",
    dates: ["Dates on Request"],
    prices: ["₹12,999*", "₹9,999*"],
    image: "/img/uttarakhand2.jpeg",
    duration: "5N6D",
    group: "Group Departure",
    link: "/indian-tours/uttarakhand-tour-package",
  },
  
];

const UttarakhandTour = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [contentHeight, setContentHeight] = useState(0)
	const contentRef = useRef(null)
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [selectedTour, setSelectedTour] = useState(null)
	const [formData, setFormData] = useState({
		name: '',
		phone: '',
		date: null,
		travellers: '',
		email: '',
		package: 'Uttarakhand Tour',
	})

	const handleOpenModal = (tour) => {
		setSelectedTour(tour)
		setIsModalOpen(true)
	}

	const handleCloseModal = () => {
		setIsModalOpen(false)
		setSelectedTour(null)
		setFormData({
			name: '',
			phone: '',
			date: null,
			travellers: '',
			email: '',
			package: 'Uttarakhand Tour',
		})
	}

	const handleInputChange = (e) => {
		const {name, value} = e.target
		setFormData({...formData, [name]: value})
	}

	const handleDateChange = (date) => {
		setFormData({...formData, date})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log('Form submitted:', {...formData, tour: selectedTour})
		alert(
			'Thank you! We will contact you shortly for your Uttarakhand journey.'
		)
		handleCloseModal()
	}

	const handleHeroFormSubmit = (e) => {
		e.preventDefault()
		console.log('Hero form submitted:', formData)
		alert('Thank you! Your inquiry has been received.')
		setFormData({
			name: '',
			phone: '',
			date: null,
			travellers: '',
			email: '',
			package: 'Uttarakhand Tour',
		})
	}

	useEffect(() => {
		if (contentRef.current) {
			setContentHeight(isOpen ? contentRef.current.scrollHeight : 0)
		}
	}, [isOpen])

	const stats = [
		{img: '/img/smile.png', text: '400k+<br/>Happy Customers'},
		{img: '/img/star.png', text: '4.8<br/>Ratings'},
		{img: '/img/travel.png', text: '400+<br/>Itineraries'},
		{img: '/img/wallet.png', text: 'Book Now &<br/>Pay Later'},
	]

	return (
		<>
			{/* Hero Section */}
			<div
				className='relative w-full h-screen bg-cover bg-center flex justify-center lg:justify-end items-center px-4 sm:px-6 lg:px-8'
				style={{backgroundImage: "url('/img/uttarakhand2.jpg')"}}>
				<h2 className='absolute top-1/2 left-1/2 lg:left-auto lg:right-[60%] transform -translate-x-1/2 lg:translate-x-1/2 -translate-y-1/2 text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-center lg:text-left z-10 font-serif'>
					Uttarakhand Tour
				</h2>

				<motion.form
					onSubmit={handleHeroFormSubmit}
					className='hidden lg:block bg-[#E4DECF]/90 p-6 rounded-lg shadow-lg w-full max-w-md z-20 mt-16 lg:mt-20 lg:mr-4 xl:mr-24'
					initial={{opacity: 0, y: 20}}
					animate={{opacity: 1, y: 0}}
					transition={{duration: 0.5}}>
					<Image
						width={100}
						height={100}
						src='/img/logo.png'
						alt='Paradise Bliss Tours Logo'
						className='w-20 mx-auto mb-6'
					/>

					<label className='block text-left text-gray-700 text-sm mb-2'>
						Name
					</label>
					<input
						type='text'
						name='name'
						value={formData.name}
						onChange={handleInputChange}
						placeholder='Your Name'
						required
						className='w-full p-3 mb-4 border rounded focus:ring-[#00453A] focus:border-[#00453A]'
					/>

					<label className='block text-left text-gray-700 text-sm mb-2'>
						Phone
					</label>
					<input
						type='tel'
						name='phone'
						value={formData.phone}
						onChange={handleInputChange}
						placeholder='+91 98765 43210'
						required
						className='w-full p-3 mb-4 border rounded focus:ring-[#00453A] focus:border-[#00453A]'
					/>

					<label className='block text-left text-gray-700 text-sm mb-2'>
						Package
					</label>
					<select
						name='package'
						value={formData.package}
						onChange={handleInputChange}
						required
						className='w-full p-3 mb-4 border rounded focus:ring-[#00453A] focus:border-[#00453A]'>
						<option value='Uttarakhand Tour'>Uttarakhand – Dev Bhoomi</option>
						<option value='Char Dham Yatra'>Char Dham Yatra</option>
						<option value='Rishikesh & Haridwar'>Rishikesh & Haridwar</option>
						<option value='Nainital & Corbett'>Nainital & Jim Corbett</option>
						<option value='Auli & Chopta'>Auli & Chopta Adventure</option>
					</select>

					<label className='block text-left text-gray-700 text-sm mb-2'>
						Email
					</label>
					<input
						type='email'
						name='email'
						value={formData.email}
						onChange={handleInputChange}
						placeholder='you@example.com'
						required
						className='w-full p-3 mb-4 border rounded focus:ring-[#00453A] focus:border-[#00453A]'
					/>

					<motion.button
						type='submit'
						className='w-full bg-[#00453A] text-white py-3 rounded font-bold hover:bg-[#00332A] transition'
						whileHover={{scale: 1.05}}
						whileTap={{scale: 0.95}}>
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
         Explore the Land of Gods – Uttarakhand Tour Packages by Paradise Bliss Tours Pvt. Ltd.
        </motion.h2>
        <motion.p
          className="font-sans text-lg text-gray-700 mb-6 w-full max-w-5xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
         Discover the beauty of Dev Bhoomi (Uttarakhand), the land where spirituality meets tranquility. It is situated in the foothills of the Himalayas. It has snow-capped mountains, lush Valleys, sacred rivers, and pleasant hill stations. At paradise Bliss Tours, we bring you the best Uttarakhand Tour Package, which is a perfect combination of spirituality, peace, and Adventure.
Whether you want to seek blessings from the Chardham yatra, or want the thrill of a snow adventure in Auli, or want peace in Mussoorie and Nainital, we have tailored packages for all travelers.
        </motion.p>
                <motion.p
          className="font-sans text-lg text-gray-700 mb-6 w-full max-w-5xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
         Uttarakhand is also known as the Dev Bhoomi (Land of God). It offers many destinations to every traveler, Rishikesh and Haridwar, for peace and spirituality, Chopta and Auli for adventure, and for scenic views, Nainital and Mussoorie. Uttarakhand is mostly known for its rich tradition and culture. 
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
              <h3 className="text-2xl font-semibold text-green-900 mb-4">Spiritual Heart of India</h3>
              <p>Home to the sacred Char Dham Yatra (Yamunotri, Gangotri, Kedarnath, Badrinath), Rishikesh (Yoga Capital of the World), and Haridwar — where the holy Ganga touches the plains.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-green-900 mb-4">Best Places  to Visit </h3>
              <ul className="list-disc list-inside space-y-2">
               <li><strong>Haridwar and Rishikesh </strong>They are the Heart of Uttarakhand. These twin cities offer the perfect blend of spirituality and serenity. Rishikesh is known as the Yoga Capital of the World, which gives the thrill and peace both, through its divine aarti, ancient ashrams, and the adventurous hub like River rafting, Bungee jumping and etc.</li>
               <li><strong>Nainital</strong>It is also known as the city of lakes. A beautiful city surrounded by the charming Naini Lake. This city is full of charm, peaceful lakes, and colonial architecture. You can experience a soothing walk on the Mall Road and the panoramic views from the Snow Viewpoint, and a boat ride on the Naini Lake. Every corner of Nainital emanates peace and romance.</li>
                <li><strong>Mussoorie</strong>Popularly known as the Queen of Hills. This is located at 6,000 ft. above sea level. This place offers the picturesque hills and breathtaking Himalayan views. Here you can explore the scenic Kempty Falls and the romantic Camel’s Back Road. Adventure lovers can explore Gun Hill Point for the panoramic view, or could explore the Lal Tibba, the town’s highest peak. You can also go to Jim Corbett National Park, India’s oldest wildlife sanctuary. </li>
                 <li><strong>Auli</strong> It is a popular hill station in India, which is situated at an altitude of 8,000 ft. It is surrounded by the Peaks of Nanda Devi, Mana Parvat, and Kamet. It is a premium Skiing destination in India. During winter, Auli transforms into a snow wonderland best for skiing, snowboarding, and cable car rides, and in summer, it has lush green meadows, best for trekking and walking. And the famous Auli ropeway is Asia’s longest ropeway, which gives panoramic views is an experience that should not be missed.</li>
                  <li><strong>Kedarnath and Badrinath</strong>These are the two main shrines among the Chardham dham of Uttarakhand. Kedarnath temple is dedicated to lord shiva, which holds a supreme spiritual eminence for devotees. It is believed that it was constructed by the Pandavas and rebuilt by Adi Shankaracharya. And it is also one of the 12 Jyotirlingas of lord shiva. Badrinath is dedicated to Lord Vishnu. This temple is situated between the high snowcapped mountains. Every year, thousands of devotees travel here to seek blessings and take a view of Mana village, the last village of India, and Vasudhara falls. </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-green-900 mb-4">Adventure Hub</h3>
              <p>River rafting in Rishikesh, trekking to Kedarnath & Tungnath, camping in Chopta, skiing in Auli, wildlife safari in Corbett.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-green-900 mb-4">Best Time to Visit</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>March–June</strong>: This season is great for trekking, Temple visits, and ideal for hill stations.</li>
                <li><strong>July–August</strong>: this is the perfect time for snow lovers and the best time for Auli skiing. </li>
                <li><strong>Decembber–February</strong>: This time is better for Nature lovers, as it looks like the lush green Landscape. But try to avoid to visit at hilly areas, as it will be quite risky due to the heavy chances of Landslides. </li>
              </ul>
            </div>
             <div>
              <h3 className="text-2xl font-semibold text-green-900 mb-4">Things to do in Uttarakhand</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>1.	Took part in the evening arti at Rishikesh and Haridwar.</li>
                 <li>2.	Skiing and a cable car ride at Auli.</li>
                  <li>3.	Explore the beautiful lakes of Nainital and the elegant hills of Mussoorie.</li>
                   <li>4.	Undertake the Chardham Yatra.</li>
                    <li>5.	Go for the Jungle safari in Jim Corbett National Park. </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-green-900 mb-4">✨ Why Choose Paradise Bliss Tours for Your Uttarakhand Trip?</h3>
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
					className='mt-6 px-8 py-3 bg-green-900 text-white rounded-lg hover:bg-green-700 transition font-semibold'
					whileHover={{scale: 1.05}}
					whileTap={{scale: 0.95}}>
					{isOpen ? 'Show Less' : 'Explore More'}
				</motion.button>
			</div>

			{/* Stats Section */}
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 p-6 max-w-6xl mx-auto'>
				{stats.map((stat, index) => (
					<motion.div
						key={index}
						className='text-center text-green-900'
						initial={{opacity: 0, y: 20}}
						whileInView={{opacity: 1, y: 0}}
						transition={{duration: 0.5, delay: index * 0.1}}>
						<Image
							width={48}
							height={48}
							src={stat.img}
							alt=''
							className='w-12 h-12 mx-auto'
						/>
						<p
							className='mt-2 text-lg font-bold'
							dangerouslySetInnerHTML={{__html: stat.text}}
						/>
					</motion.div>
				))}
			</div>

			{/* Tour Packages Section */}
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<h1
					style={{color: 'var(--color-dark)', fontFamily: 'salazur'}}
					className='text-4xl sm:text-5xl md:text-7xl font-bold py-6 text-center'>
					Uttarakhand Tour Packages
				</h1>
			</div>

			<div
				style={{backgroundColor: 'var(--light-green)'}}
				className='relative px-4 sm:px-6 lg:px-10 py-10'>
				<div className='swiper-container'>
					<Swiper
						modules={[Pagination, Autoplay, Navigation]}
						spaceBetween={20}
						slidesPerView={1}
						autoplay={{delay: 3000, disableOnInteraction: false}}
						pagination={{clickable: true, el: '.swiper-pagination-custom'}}
						breakpoints={{
							768: {slidesPerView: 2},
							1024: {slidesPerView: 3.5},
						}}
						className='py-8'>
						{tours.map((tour, index) => (
							<SwiperSlide key={index}>
								<div className='bg-white rounded-xl shadow-2xl overflow-hidden transition-all duration-300 h-full'>
									<motion.div
										initial={{opacity: 0, y: 20}}
										whileInView={{opacity: 1, y: 0}}
										transition={{duration: 0.5}}
										whileHover={{
											scale: 1.05,
											boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
										}}
										className='h-full flex flex-col'>
										<Link
											href={tour.link}
											className='flex-1 flex flex-col cursor-pointer'>
											<Image
												src={tour.image}
												width={400}
												height={224}
												alt={tour.title}
												className='w-full h-56 object-cover rounded-t-xl'
												onError={(e) => (e.target.src = '/img/placeholder.jpg')}
											/>
											<div className='p-6 flex-1 flex flex-col'>
												<h3 className='text-xl font-bold text-gray-900'>
													{tour.title}
												</h3>
												<p className='text-sm text-gray-700 mt-1'>
													{tour.duration} • {tour.group}
												</p>

												<div className='mt-4 flex flex-wrap gap-2'>
													{tour.dates.map((date, i) => (
														<span
															key={i}
															className='bg-[#F1FDF3] text-[#00453a] px-3 py-1 rounded-full text-sm flex items-center gap-1'>
															<AiOutlineCalendar />
															{date}
														</span>
													))}
												</div>

												<div className='mt-5 text-right'>
													<span className='text-gray-500 line-through text-base'>
														{tour.prices[0]}
													</span>
													<p className='text-xl font-bold text-green-600 mt-1'>
														{tour.prices[1]}
													</p>
												</div>
											</div>
										</Link>

										<div className='px-6 pb-6'>
											<motion.button
												onClick={(e) => {
													e.preventDefault()
													e.stopPropagation()
													handleOpenModal(tour)
												}}
												whileHover={{scale: 1.05}}
												whileTap={{scale: 0.95}}
												className='w-full py-3 bg-[#00453A] text-white rounded-lg flex items-center justify-center gap-2 font-semibold hover:bg-[#00332A] transition'>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													className='h-5 w-5'
													viewBox='0 0 20 20'
													fill='currentColor'>
													<path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
												</svg>
												Request Callback
											</motion.button>
										</div>
									</motion.div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
					<div className='swiper-pagination-custom mt-6 text-center'></div>
				</div>
			</div>

			{/* Modal */}
			{isModalOpen && (
				<div className='fixed inset-0 z-50 flex items-center justify-center'>
					<div
						className='fixed inset-0 bg-black/50 backdrop-blur-sm'
						onClick={handleCloseModal}></div>
					<motion.div
						initial={{opacity: 0, scale: 0.9}}
						animate={{opacity: 1, scale: 1}}
						className='relative bg-white rounded-xl shadow-2xl w-full max-w-md mx-4 p-6'>
						<button
							onClick={handleCloseModal}
							className='absolute top-3 right-4 text-2xl text-gray-600 hover:text-gray-900'>
							×
						</button>

						{selectedTour && (
							<div className='mb-6 text-center'>
								<Image
									src={selectedTour.image}
									width={400}
									height={128}
									alt={selectedTour.title}
									className='w-full h-32 object-cover rounded-lg mb-4'
									onError={(e) => (e.target.src = '/img/placeholder.jpg')}
								/>
								<h3 className='text-xl font-bold text-gray-900'>
									{selectedTour.title}
								</h3>
							</div>
						)}

						<form
							onSubmit={handleSubmit}
							className='space-y-4'>
							<input
								type='text'
								name='name'
								value={formData.name}
								onChange={handleInputChange}
								placeholder='Your Name'
								required
								className='w-full p-3 border rounded-lg focus:ring-[#00453A]'
							/>
							<input
								type='tel'
								name='phone'
								value={formData.phone}
								onChange={handleInputChange}
								placeholder='Phone Number'
								required
								className='w-full p-3 border rounded-lg focus:ring-[#00453A]'
							/>
							<div className='relative'>
								<DatePicker
									selected={formData.date}
									onChange={handleDateChange}
									minDate={new Date()}
									dateFormat='dd/MM/yyyy'
									placeholderText='Preferred Date'
									required
									className='w-full p-3 border rounded-lg focus:ring-[#00453A]'
								/>
								<AiOutlineCalendar className='absolute right-3 top-4 text-gray-500' />
							</div>
							<input
								type='number'
								name='travellers'
								value={formData.travellers}
								onChange={handleInputChange}
								placeholder='No. of Travellers'
								min='1'
								required
								className='w-full p-3 border rounded-lg focus:ring-[#00453A]'
							/>
							<motion.button
								type='submit'
								whileHover={{scale: 1.05}}
								whileTap={{scale: 0.95}}
								className='w-full bg-[#00453A] text-white py-3 rounded-lg font-bold hover:bg-[#00332A] transition'>
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
					background: #00453a;
					width: 14px;
					height: 14px;
				}
				.react-datepicker-wrapper {
					width: 100%;
				}
			`}</style>

			<WhyChooseUs />
		</>
	)
}

export default UttarakhandTour
