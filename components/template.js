'use client';
import React, { useState } from 'react';
import { FaEye, FaBed, FaUtensils, FaStar } from 'react-icons/fa';
import Link from 'next/link';

export default function TourCard({ title, days, originalPrice, price, discount, itinerary, type, isRecommended, image, rating, link }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-[#E4DECF] rounded-lg my-6 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 ease-in-out max-w-4xl mx-auto flex flex-col md:flex-row">
      {/* Image Section */}
      <div className="relative w-full md:w-1/3 flex-shrink-0">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-48 md:h-64 object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
        />
        {isRecommended && (
          <span className="absolute top-3 left-3 bg-teal-900 text-white text-xs font-medium px-2 py-1 rounded-full">Recommended</span>
        )}
        <span className="absolute bottom-3 left-3 bg-green-100 text-black text-xs font-medium px-2 py-1 rounded-full capitalize">{type}</span>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-teal-800 line-clamp-2">{title}</h3>
          <div className="flex items-center">
            <FaStar className="w-4 h-4 text-yellow-400 mr-1" />
            <span className="text-sm text-gray-600">{rating}/5</span>
          </div>
        </div>

        {/* Itinerary */}
        <p className="text-gray-700 text-sm mb-4 line-clamp-3">
          {isExpanded ? itinerary : `${itinerary.substring(0, 100)}...`}
          {itinerary.length > 100 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-teal-700 hover:text-teal-900 text-sm font-medium ml-1"
            >
              {isExpanded ? 'Less' : 'More'}
            </button>
          )}
        </p>

        {/* Features */}
        <div className="flex gap-4 text-gray-600 text-sm mb-4">
          <span className="flex items-center"><FaBed className="w-4 h-4 mr-1 text-teal-600" /> Hotels</span>
          <span className="flex items-center"><FaUtensils className="w-4 h-4 mr-1 text-teal-600" /> Meals</span>
          <span className="flex items-center"><FaEye className="w-4 h-4 mr-1 text-teal-600" /> Sightseeing</span>
        </div>

        <p className="text-sm text-gray-600 mb-4">Duration: {days} | Group Size: 20-25</p>

        {/* Pricing and Action */}
        <div className="mt-auto flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-gray-400 line-through text-sm">₹{originalPrice}</span>
            <div className="flex items-center gap-2">
              <span className="text-xl font-semibold text-teal-700">₹{price}</span>
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded-full">{discount} OFF</span>
            </div>
          </div>
          <Link
            href={link}
            className="bg-[#00453a] text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors duration-200"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}