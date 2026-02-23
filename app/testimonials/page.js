"use client";
import React, { useState } from "react";
import Image from "next/image";

const allTestimonials = [
  // ===== Kashmir & Spiti =====
  {
    image: "/testimonials/t5.jpeg",
    title: "Flawless Travel, Every Time!",
    text: "Switched to Paradise Bliss after bad experiences elsewhere. Kashmir & Spiti both flawless—safe vehicles, local insights, 24/7 help. The drivers knew every shortcut and shared awesome stories at Key Monastery and Dal Lake. Pricing was fair, no surprises. They're building the real satisfaction for happy travelers!",
    name: "Reshma T.",
    location: "Ahmedabad",
    rating: 5,
    trip: "Kashmir",
  },

  // ===== Kashmir =====
  {
    image: "/testimonials/t3.jpeg",
    title: "Char Dham Like a Pro!",
    text: "Just finished Char Dham with Paradise Bliss Tours – driver uncle was like a pro on those crazy roads, got us VIP darshan without stress. Felt super safe, will definitely go back! Highly recommend.",
    name: "Shweta",
    location: "Pune",
    rating: 5,
    trip: "Uttarakhand",
  },
  {
    image: "/testimonials/t1.jpeg",
    title: "Kashmir Perfection!",
    text: "Booked Kashmir with Paradise Bliss, and it was perfection. From Srinagar houseboat vibes to snowy Gulmarg gondola rides and frozen Dal Lake shikara, the driver knew every shortcut past traffic. Felt like a local, not a tourist. Memorable af, already planning Spiti next! ❤️",
    name: "Sachin",
    location: "Noida",
    rating: 5,
    trip: "Kashmir",
  },
  {
    image: "/testimonials/t2.jpeg",
    title: "Honeymoon Goals Achieved!",
    text: "Our Kashmir honeymoon was straight fire thanks to Paradise Bliss. Betaab Valley snow photoshoot, Sonamarg's Thajiwas Glacier sledding, Dal Lake frozen shikara at dusk. Personalized touches made it special. Highly recommend for couples!",
    name: "Nilesh",
    location: "Bandra",
    rating: 5,
    trip: "Kashmir",
  },
  {
    image: "/testimonials/t4.jpeg",
    title: "Dreamy Honeymoon Vibes!",
    text: "Kashmir honeymoon sorted by Paradise Bliss was dreamy! Betaab Valley snow pics, Sonmarg zero-point thrills, cozy Srinagar nights. They even arranged a private shikara—felt like a movie. Highly recommend!",
    name: "Shweta & Mukul",
    location: "Delhi",
    rating: 5,
    trip: "Kashmir",
  },
  {
    image: "/testimonials/t6.jpeg",
    title: "Best Family Memories!",
    text: "Our family Kashmir adventure rocked thanks to Paradise Bliss! Kids went wild on the Gulmarg cable car and snow fights. Apple orchard picnics in Pahalgam, houseboat nights in Srinagar with Kashmiri stories. Aru Valley hikes were gentle and scenic. Permits, transport, everything seamless. Best family memories!",
    name: "Ramesh P.",
    location: "Surat",
    rating: 5,
    trip: "Kashmir",
  },
  {
    image: "/testimonials/t7.jpeg",
    title: "Flawless Honeymoon Service!",
    text: "Their Kashmir package service was flawless from inquiry to drop-off! Quick confirmations, customized itinerary for our honeymoon, polite local driver who shared tips without pushing. VIP houseboat arrangements, seamless transfers. Felt taken care of every step!",
    name: "Neha M.",
    location: "Chandigarh",
    rating: 5,
    trip: "Kashmir",
  },
  {
    image: "/testimonials/t8.jpeg",
    title: "Impeccable Kashmir Service!",
    text: "Paradise Bliss Tours' service was impeccable on our Kashmir trip! Instant WhatsApp booking, driver picked us up right on time from Srinagar airport with a spotless Innova. Handled all permits and traffic like pros—no waiting around. 24/7 support felt reassuring, comfy rides even on windy roads. 5 stars!",
    name: "Vikram P.",
    location: "Noida",
    rating: 5,
    trip: "Kashmir",
  },

  // ===== Ladakh =====
  {
    image: "/testimonials/t9.jpeg",
    title: "Epic Ladakh Bike Trip!",
    text: "Ladakh bike trip with Paradise Bliss was perfectly organized! Royal Enfield bikes were serviced pre-trip, and an expert mechanic rode along for back-up. Route briefing covered Pangong to Nubra seamlessly, fuel stops pre-planned. Flexible for weather delays, felt totally safe. Epic service!",
    name: "Rajiv T.",
    location: "Mumbai",
    rating: 5,
    trip: "Ladakh",
  },
  {
    image: "/testimonials/t10.jpeg",
    title: "Stress-Free High-Altitude Magic!",
    text: "Family Ladakh tour service impressed—Paradise Bliss arranged comfy Tempo Traveller, oxygen kits in every vehicle, and kid-friendly pacing. Instant confirmations, no permit drama at checkpoints. Guides knew shortcuts past crowds. Stress-free high-altitude magic!",
    name: "Sneha J.",
    location: "Hyderabad",
    rating: 5,
    trip: "Ladakh",
  },
  {
    image: "/testimonials/t11.jpeg",
    title: "Next Level Bike Expedition!",
    text: "Ladakh bike expedition service was next level from Paradise Bliss! Bullet rentals spotless with fresh tires, mechanic escort for Chang La breakdowns, daily briefings for Nubra-Pangong. Fuel dumps pre-planned, a 24/7 hotline saved our Tso Moriri night. Flawless!",
    name: "Karan S.",
    location: "Mumbai",
    rating: 5,
    trip: "Ladakh",
  },
  {
    image: "/testimonials/t12.jpeg",
    title: "Flawless Big Family Tour!",
    text: "Our big family Ladakh tour was flawless thanks to Paradise Bliss! Innova fleet for splitting grandparents/kids, pre-booked Diskit monastery visits, and Thiksey lunch halts. WhatsApp updates kept everyone calm at Khardung La. Safe, fun, perfect!",
    name: "Sharma Family",
    location: "Delhi",
    rating: 5,
    trip: "Ladakh",
  },

  // ===== Uttarakhand =====
  {
    image: "/testimonials/t13.jpeg",
    title: "Spot On Family Adventure!",
    text: "Uttarakhand family adventure with Paradise Bliss was spot on! Tempo Traveller for our big group to the Valley of Flowers, pony bookings for the Yamunotri trek are done. Flexible Auli ropeway timings for grandparents, WhatsApp updates on monsoon roads. Stress-free magic!",
    name: "Priyanka & Family",
    location: "Bangalore",
    rating: 5,
    trip: "Uttarakhand",
  },
  {
    image: "/testimonials/t14.jpeg",
    title: "Super Smooth Holy Trip!",
    text: "Paradise Bliss Tours made our family's Haridwar-Rishikesh trip super smooth! Innova pickup from Delhi with Ganga Aarti seats pre-booked at Har ki Pauri, safe rafting for teens on the Ganges. The driver knew the quiet Laxman Jhula spots away from crowds, all puja items arranged. Perfect holy vibes!",
    name: "Rahul V.",
    location: "Mumbai",
    rating: 5,
    trip: "Uttarakhand",
  },
  {
    image: "/testimonials/t15.jpeg",
    title: "Char Dham Yatra Made Easy!",
    text: "Paradise Bliss Tours made our family's Char Dham Yatra super easy! Big comfy Tempo Traveller with seats good for elders from Haridwar, all permits and VIP darshan ready. The driver went slowly for the Yamunotri pony ride & the Kedarnath chopper had oxygen kits too. Safe and peaceful!",
    name: "Divya K.",
    location: "Chennai",
    rating: 5,
    trip: "Uttarakhand",
  },
  {
    image: "/testimonials/t16.jpeg",
    title: "Total Breeze Family Trip!",
    text: "Paradise Bliss Tours made our family Nainital-Auli-Mussoorie trip a total breeze! Comfy Innova from Delhi with lake boat rides pre-booked at Naini, Auli ropeway tickets ready for snow fun. The driver knew quiet Kempty Falls spots, perfect pacing for kids & elders. Super smooth!",
    name: "Kushal T.",
    location: "Noida",
    rating: 5,
    trip: "Uttarakhand",
  },

  // ===== Kerala =====
  {
    image: "/testimonials/t17.jpeg",
    title: "Perfectly Family-Focused!",
    text: "Our Kerala backwaters trip with Paradise Bliss was perfectly family-focused! Alleppey houseboat cruise with kid games onboard, Periyar jeep safaris pre-arranged safely. WhatsApp updates on monsoon roads, comfy vehicles throughout. 5 stars!",
    name: "Sameer Family",
    location: "Delhi",
    rating: 5,
    trip: "Kerala",
  },
  {
    image: "/testimonials/t18.jpeg",
    title: "Honeymoon Heaven!",
    text: "Paradise Bliss made Kerala our honeymoon heaven! Wayanad treehouse stay with bonfire, Kumarakom backwaters cruise at sunset, Marari Beach couple yoga. Every service is intimate & thoughtful. Best memories ever!",
    name: "Priyanka & Amit",
    location: "Bangalore",
    rating: 5,
    trip: "Kerala",
  },
  {
    image: "/testimonials/t19.jpeg",
    title: "Absolutely Perfect Vacation!",
    text: "Paradise Bliss Tours made our Kerala family vacation absolutely perfect! Spacious houseboat on Alleppey backwaters with games for kids and AC rooms for grandparents, Periyar tiger safari jeep all pre-booked safely. The driver shared fun spice stories, comfy transfers everywhere.",
    name: "Priya D.",
    location: "Mumbai",
    rating: 5,
    trip: "Kerala",
  },
  {
    image: "/testimonials/t20.jpeg",
    title: "Big Family Kerala Adventure!",
    text: "Our big family Kerala adventure rocked thanks to Paradise Bliss! Thekkady bamboo rafting is gentle for beginners, Athirappilly falls picnic spots are chosen perfectly, Marari Beach resort kids' club is arranged. No hassle, all happy!",
    name: "Radhika",
    location: "Bangalore",
    rating: 5,
    trip: "Kerala",
  },

  // ===== Spiti Valley =====
  {
    image: "/testimonials/t21.jpeg",
    title: "Adrenaline Fix in Spiti!",
    text: "Spiti Valley adrenaline fix via Paradise Bliss! Pin Valley treks, Chicham Bridge zipline setup, Key Gompa night hikes under stars. 24/7 support when roads are iced over, pro mechanics for bike issues. Wild & safe!",
    name: "Arnav P.",
    location: "Bangalore",
    rating: 5,
    trip: "Spiti Valley",
  },
  {
    image: "/testimonials/t22.jpeg",
    title: "Non-Stop Spiti Action!",
    text: "Spiti Valley rush with Paradise Bliss was non-stop action! River crossing on Spiti waters, treks to Dhankar Gompa ruins, motorbike rally on rugged Hikkim trails. Backup jeeps shadowed us, and mechanics fixed flat tires instantly. Adrenaline + pro support = epic!",
    name: "Vikram P.",
    location: "Noida",
    rating: 5,
    trip: "Spiti Valley",
  },
  {
    image: "/testimonials/t23.jpeg",
    title: "Extreme Spiti Adventure!",
    text: "Paradise Bliss nailed our Spiti extreme adventure! Chandratal frozen lake camping, Kibber village high-altitude runs, Tabo cave explorations with headlamps. 24/7 rescue team on standby, meals packed with energy boosters. Heart-pounding fun!",
    name: "Riya K.",
    location: "Chandigarh",
    rating: 5,
    trip: "Spiti Valley",
  },
  {
    image: "/testimonials/t1.jpeg",
    title: "Best Bike Trip Service Ever!",
    text: "Spiti motorcycle adventure with Paradise Bliss was flawless! Bullet handover smooth at Manali, detailed GPS maps for Chandratal detour, spare parts carried for water crossings. Support jeep trailed us through rugged Kibber trails. Best bike trip service ever!",
    name: "Sourav S.",
    location: "Mumbai",
    rating: 5,
    trip: "Spiti Valley",
  },

  // ===== Himachal =====
  {
    image: "/testimonials/t2.jpeg",
    title: "Smooth From Start to Finish!",
    text: "Our Himachal tour with Paradise Bliss Tours was smooth from start to finish. Hotels were clean, views were amazing, and the driver was very polite and knowledgeable. The itinerary was well planned without making us feel rushed. Truly a memorable experience.",
    name: "Shrishti G.",
    location: "Pune",
    rating: 5,
    trip: "Himachal",
  },
  {
    image: "/testimonials/t4.jpeg",
    title: "Everything As Promised!",
    text: "We booked our Shimla–Manali package with Paradise Bliss Tours and everything went exactly as promised. From pick-up in Delhi to sightseeing and hotel stays, everything was well managed. Special thanks to the team for their quick support whenever we had questions.",
    name: "Darshana R.",
    location: "Vadodara",
    rating: 5,
    trip: "Himachal",
  },
  {
    image: "/testimonials/t6.jpeg",
    title: "Stunning Mountain Views!",
    text: "Paradise Bliss Tours selected excellent hotels with stunning views. Waking up to snow-capped mountains in Manali was a dream. Everything was well arranged, and the journey was comfortable throughout.",
    name: "Ankit S.",
    location: "Jaipur",
    rating: 5,
    trip: "Himachal",
  },
  {
    image: "/testimonials/t7.jpeg",
    title: "Great Decision, Great Team!",
    text: "We found Paradise Bliss Tours online, and it turned out to be a great decision. Their team is professional, responsive, and genuinely cares about customer satisfaction. Would definitely book again for our next trip.",
    name: "Pooja M.",
    location: "Mumbai",
    rating: 5,
    trip: "Himachal",
  },

  // ===== Rajasthan =====
  {
    image: "/testimonials/t8.jpeg",
    title: "Loved Every Moment!",
    text: "We booked a Jaisalmer package and loved every moment. The desert safari, cultural evening, and camp stay were exactly as promised. Paradise Bliss Tours handled everything professionally. No stress at all.",
    name: "Rakesh K.",
    location: "Delhi",
    rating: 5,
    trip: "Rajasthan",
  },
  {
    image: "/testimonials/t9.jpeg",
    title: "Comfortable & Well-Coordinated!",
    text: "The team was always available on call and WhatsApp. Even when we needed a small change in the plan, they handled it smoothly. Our Rajasthan tour was comfortable and well-coordinated.",
    name: "Deepak S.",
    location: "Faridabad",
    rating: 5,
    trip: "Rajasthan",
  },
  {
    image: "/testimonials/t10.jpeg",
    title: "Romantic & Memorable Honeymoon!",
    text: "We chose Paradise Bliss Tours for our honeymoon trip to Udaipur and Jaipur. The lake-view hotel in Udaipur and the candlelight dinner arrangement were lovely. Truly a romantic and memorable experience.",
    name: "Amit R.",
    location: "Noida",
    rating: 5,
    trip: "Rajasthan",
  },
  {
    image: "/testimonials/t11.jpeg",
    title: "No Surprises, All Perfect!",
    text: "What I liked the most was that there were no surprises. Everything mentioned in the itinerary was provided. The desert camp in Jaisalmer was clean, and the cultural program was enjoyable.",
    name: "Priyanka S.",
    location: "Lucknow",
    rating: 5,
    trip: "Rajasthan",
  },

  // ===== Sikkim =====
  {
    image: "/testimonials/t12.jpeg",
    title: "Absolutely Peaceful!",
    text: "Our Sikkim tour with Paradise Bliss Tours was absolutely peaceful. From Gangtok to Lachung, everything was well organized. The mountain views were stunning, and the hotels were comfortable. A truly refreshing experience.",
    name: "Aarti K.",
    location: "Kota",
    rating: 5,
    trip: "Sikkim",
  },
  {
    image: "/testimonials/t13.jpeg",
    title: "Very Well Planned!",
    text: "Our Sikkim trip with Paradise Bliss Tours was very well planned. From Gangtok to North Sikkim, all arrangements were smooth and on time. Hotels were comfortable, and the views were amazing. The team was always available for support. Overall, a very satisfying experience.",
    name: "Shalini M.",
    location: "Gurugram",
    rating: 5,
    trip: "Sikkim",
  },
  {
    image: "/testimonials/t14.jpeg",
    title: "Great Family Experience!",
    text: "We traveled to Sikkim with family and had a great experience. Hotels in Gangtok were clean with beautiful mountain views. The itinerary was well-balanced and not rushed. Paradise Bliss Tours did a wonderful job.",
    name: "Rohit N.",
    location: "Nagpur",
    rating: 5,
    trip: "Sikkim",
  },
  {
    image: "/testimonials/t15.jpeg",
    title: "Right Decision, Great Service!",
    text: "Booking Paradise Bliss Tours for Sikkim was the right decision. Clear communication, no hidden charges, and good service throughout. The trip was peaceful and well-organized. Would definitely recommend them.",
    name: "Nitin M.",
    location: "Nashik",
    rating: 5,
    trip: "Sikkim",
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= rating ? "text-yellow-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsPage() {
  const [filter, setFilter] = useState("All");

  const tripOrder = [
    "All",
    "Kashmir",
    "Ladakh",
    "Uttarakhand",
    "Kerala",
    "Spiti Valley",
    "Himachal",
    "Rajasthan",
    "Sikkim",
  ];

  const filtered =
    filter === "All"
      ? allTestimonials
      : allTestimonials.filter((t) => t.trip === filter);

  // Count per trip for badges
  const tripCounts = {};
  allTestimonials.forEach((t) => {
    tripCounts[t.trip] = (tripCounts[t.trip] || 0) + 1;
  });

  return (
    <div style={{ fontFamily: "jost" }}>
      {/* Hero Section */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "var(--color-dark)",
          minHeight: "340px",
        }}
      >
        {/* Decorative circles */}
        <div
          className="absolute top-[-60px] right-[-60px] w-[200px] h-[200px] rounded-full opacity-10"
          style={{ background: "var(--coral-pink)" }}
        />
        <div
          className="absolute bottom-[-40px] left-[-40px] w-[150px] h-[150px] rounded-full opacity-10"
          style={{ background: "var(--gold)" }}
        />

        <div className="max-w-5xl mx-auto px-6 py-20 text-center relative z-10">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-6"
            style={{
              background: "rgba(255,255,255,0.15)",
              color: "var(--gold)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            ★ Real Stories from Real Travelers
          </span>
          <h1
            className="text-3xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "jost" }}
          >
            What Our Travelers Say
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Thousands of happy travelers have explored India and beyond with
            Paradise Bliss Tours. Here are some of their stories.
          </p>

          {/* Stats bar */}
          <div className="flex flex-wrap justify-center gap-8 mt-10">
            {[
              { value: "500+", label: "Happy Travelers" },
              { value: "4.9", label: "Average Rating" },
              { value: "50+", label: "Destinations" },
              { value: "100%", label: "Satisfaction" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="text-2xl md:text-3xl font-bold"
                  style={{ color: "var(--gold)" }}
                >
                  {stat.value}
                </div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-wrap justify-center gap-3">
          {tripOrder.map((trip) => (
            <button
              key={trip}
              onClick={() => setFilter(trip)}
              className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer"
              style={{
                background:
                  filter === trip
                    ? "var(--color-dark)"
                    : "#EAF6F6",
                color: filter === trip ? "#fff" : "var(--color-dark)",
                border:
                  filter === trip ? "none" : "1px solid var(--color-dark)",
              }}
            >
              {trip}
              {trip !== "All" && tripCounts[trip] && (
                <span
                  className="ml-1.5 text-xs opacity-70"
                >
                  ({tripCounts[trip]})
                </span>
              )}
            </button>
          ))}
        </div>
      </section>

      {/* Testimonial Grid */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((testimonial, index) => (
            <div
              key={index}
              className="group rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col"
              style={{
                background: "#fff",
                border: "1px solid #e0f0ec",
                boxShadow: "0 4px 24px rgba(0,69,58,0.06)",
              }}
            >
              {/* Quote icon */}
              <div className="mb-4">
                <svg
                  className="w-8 h-8 opacity-20"
                  style={{ color: "var(--color-dark)" }}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.731-9.57 8.983-10.609l.998 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.986z" />
                </svg>
              </div>

              {/* Trip badge */}
              <span
                className="inline-block self-start px-3 py-1 rounded-full text-xs font-semibold mb-3"
                style={{
                  background: "rgba(76,175,80,0.1)",
                  color: "var(--forest-green)",
                }}
              >
                {testimonial.trip}
              </span>

              {/* Title */}
              <h3
                className="text-lg font-bold mb-3"
                style={{ color: "var(--color-dark)" }}
              >
                {testimonial.title}
              </h3>

              {/* Text */}
              <p className="text-gray-600 leading-relaxed text-sm flex-1 mb-4">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Divider */}
              <div
                className="w-full h-px mb-4"
                style={{
                  background:
                    "linear-gradient(to right, transparent, #C4DAD2, transparent)",
                }}
              />

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 flex-shrink-0">
                  <Image
                    fill
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded-full object-cover shadow-md"
                  />
                </div>
                <div className="flex-1">
                  <h4
                    className="font-semibold text-sm"
                    style={{ color: "var(--color-dark)" }}
                  >
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-gray-500">
                    {testimonial.location}
                  </p>
                </div>
                <StarRating rating={testimonial.rating} />
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-16 text-gray-500">
            <p className="text-lg">No reviews found for this filter.</p>
          </div>
        )}
      </section>
    </div>
  );
}
