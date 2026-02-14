import Image from 'next/image';
import React from 'react';
import TourCard from '../../../components/template';
import Heading from './heding';

export default function Page() {
const tours = [
  { title: "Rajasthan Heritage Trail", days: "5 Nights 6 Days", originalPrice: "40000", price: "36000", discount: "10%", itinerary: "Delhi → Agra → Jaipur", type: "Customized Holidays", isRecommended: true, image: "/img/rajasthan.jpeg", rating: 4.6, link: "/trip-packages/rajasthan-heritage-trail/" },
  { title: "Romantic Rajasthan Escape", days: "6 Nights 7 Days", originalPrice: "70000", price: "63000", discount: "10%", itinerary: "Udaipur → Jodhpur → Jaisalmer → Jodhpur", type: "Customized Holidays", isRecommended: false, image: "/img/rajasthan.jpeg", rating: 4.5, link: "/trip-packages/romantic-rajasthan-escape/" },
  { title: "Rajasthan Safari with Ranthambore", days: "7 Nights 8 Days", originalPrice: "45000", price: "40500", discount: "10%", itinerary: "Delhi → Agra → Jaipur → Ranthambore", type: "Customized Holidays", isRecommended: false, image: "/img/rajasthan.jpeg", rating: 4.7, link: "/trip-packages/rajasthan-ranthambore-safari/" }
];
  return (
    <>
      <Heading />
      <div className="container mx-auto p-4">
        {tours.map((tour, index) => (
          <TourCard key={index} {...tour} />
        ))}
      </div>
    </>
  );
}