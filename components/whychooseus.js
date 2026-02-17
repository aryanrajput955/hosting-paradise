'use client';
import React from 'react';
import Image from 'next/image';
const WhyChooseUs = () => {
  return (
    <section className="py-12 md:py-20 relative overflow-hidden">
      {/* Celestial Background Effects */}
      <div className="absolute inset-0 opacity-20">
        {/* Simulated stars (using CSS or SVG for real implementation) */}
        <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-3 h-3 bg-yellow-300 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-20 w-2 h-2 bg-white rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Header with Divine Glow */}
        <h2 style={{fontFamily:'salazur',color:'var(--color-dark)'}} className="text-3xl md:text-4xl lg:text-7xl font-extrabold text-yellow-300 mb-4 md:mb-6 tracking-wide animate-pulse-slow">
          Why Choose Paradise Bliss Tours Pvt. Ltd?
          <span className="block w-16 md:w-24 h-1 mx-auto mt-2 bg-gradient-to-r from-green-900 to-green-100 rounded-full animate-pulse-slow"></span>
        </h2>
        <p className="text-green-500 italic text-base md:text-xl mb-8 md:mb-16 font-light drop-shadow-md">
          Experience the divine difference with Paradise Bliss
        </p>

        {/* Cards Grid with Celestial Aura */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
          {/* Best Price Guaranteed */}
          <div className="bg-white/80 p-4 md:p-8 rounded-2xl shadow-2xl hover:shadow-glow hover:-translate-y-2 transition-all duration-500 transform flex flex-col items-center border border-yellow-100/20 backdrop-blur-sm">
            <div className="text-yellow-400 text-5xl mb-2 md:mb-3 animate-bounce-slow">
              {/* Replace with a golden coin or tropical flower icon (e.g., react-icons) */}
              {/* Replace with a golden coin or tropical flower icon (e.g., react-icons) */}
              <Image width={160} height={160} src="/img/best_price.png" alt="Coin icon" className="w-24 h-24 md:w-40 md:h-40" />
            </div>
            <h3 className="text-teal-800 text-xl md:text-3xl font-bold mb-2 md:mb-4 drop-shadow-md">
              Tailor-Made Itineraries for Every Budget
            </h3>
            {/* Subtle glow effect around the card */}
            <div className="absolute inset-0 bg-yellow-500/5 blur-xl rounded-2xl opacity-0 animate-pulse-slow"></div>
          </div>

          {/* Top Notch Support */}
          <div className="bg-white/80 p-4 md:p-8 rounded-2xl shadow-2xl hover:shadow-glow hover:-translate-y-2 transition-all duration-500 transform flex flex-col items-center backdrop-blur-sm">
            <div className="text-teal-300 text-5xl mb-2 md:mb-6 animate-bounce-slow">
              {/* Replace with a glowing angel or support icon */}
              {/* Replace with a glowing angel or support icon */}
              <Image width={160} height={160} src="/img/support.png" alt="Coin icon" className="w-24 h-24 md:w-40 md:h-40" />
            </div>
            <h3 className="text-teal-800 text-xl md:text-3xl font-bold mb-2 md:mb-4 drop-shadow-md">
             24/7 Support & Hassle-Free Booking
            </h3>
            <div className="absolute inset-0 bg-teal-500/5 blur-xl rounded-2xl opacity-0 animate-pulse-slow"></div>
          </div>

          {/* Expert Team */}
          <div className="bg-white/80 p-4 md:p-8 rounded-2xl shadow-2xl hover:shadow-glow hover:-translate-y-2 transition-all duration-500 transform flex flex-col items-center border border-purple-100/20 backdrop-blur-sm">
            <div className="text-purple-300 text-5xl mb-2 md:mb-6 animate-bounce-slow">
              {/* Replace with a team of divine beings or travel experts icon */}
              {/* Replace with a team of divine beings or travel experts icon */}
              <Image width={160} height={160} src="/img/expert_team.png" alt="Coin icon" className="w-24 h-24 md:w-40 md:h-40" />
            </div>
            <h3 className="text-teal-800 text-xl md:text-3xl font-bold mb-2 md:mb-4 drop-shadow-md">
              Trusted Travel Experts with 10+ Years of Experience
            </h3>
            <div className="absolute inset-0 bg-purple-500/5 blur-xl rounded-2xl opacity-0 animate-pulse-slow"></div>
          </div>

          {/* Transparency */}
          <div className="bg-white/80 p-4 md:p-8 rounded-2xl shadow-2xl hover:shadow-glow hover:-translate-y-2 transition-all duration-500 transform flex flex-col items-center border border-pink-100/20 backdrop-blur-sm">
            <div className="text-5xl mb-2 md:mb-6 animate-bounce-slow">
              {/* Replace with a glowing shield or magnifying glass icon */}
              {/* Replace with a glowing shield or magnifying glass icon */}
              <Image width={160} height={160} src="/img/Transparency.png" alt="transparency" className="w-24 h-24 md:w-40 md:h-40" />
            </div>
            <h3 className="text-teal-800 text-xl md:text-3xl font-bold mb-2 md:mb-4 drop-shadow-md">
              100% Transparency,Honest pricing—no hidden fees
            </h3>
            <div className="absolute inset-0 bg-pink-500/5 blur-xl rounded-2xl opacity-0 animate-pulse-slow"></div>
          </div>
        </div>
      </div>

      {/* Custom Tailwind utility for glow effect */}
      <style jsx>{`
        @keyframes glow {
          0% { box-shadow: 0 0 5px rgba(255, 215, 0, 0.7), 0 0 10px rgba(255, 215, 0, 0.5); }
          50% { box-shadow: 0 0 15px rgba(255, 215, 0, 0.9), 0 0 20px rgba(255, 215, 0, 0.7); }
          100% { box-shadow: 0 0 5px rgba(255, 215, 0, 0.7), 0 0 10px rgba(255, 215, 0, 0.5); }
        }
        .shadow-glow {
          animation: glow 3s infinite;
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;