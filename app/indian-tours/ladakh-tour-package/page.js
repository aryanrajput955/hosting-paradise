import Image from 'next/image';
import React from 'react';
import TourCard from '../../../components/template';
import Heading from './heding';

export default function Page() {
const tours = [
  { title: "Enchanting Ladakh - Standard", days: "6 Nights 7 Days", originalPrice: "42000", price: "37500", discount: "11%", itinerary: "Leh → Nubra Valley → Pangong → Leh", type: "Group Tour", isRecommended: true, image: "/img/ladakh.jpg", rating: 4.6, link: "/trip-packages/enchanting-ladakh-standard/" },
  { title: "Adventurous Ladakh with Kashmir", days: "9 Nights 10 Days", originalPrice: "85000", price: "76500", discount: "10%", itinerary: "Srinagar → Kargil → Leh → Nubra Valley → Leh", type: "Group Tour", isRecommended: false, image: "/img/ladakh2.jpg", rating: 4.5, link: "/trip-packages/adventurous-ladakh-kashmir/" },
  { title: "Serene Ladakh with Hanle", days: "6 Nights 7 Days", originalPrice: "52000", price: "47000", discount: "10%", itinerary: "Leh → Hanle → Tso Moriri → Leh", type: "Customized Holidays", isRecommended: false, image: "/img/ladakh.jpg", rating: 4.7, link: "/trip-packages/serene-ladakh-hanle/" },
  { title: "Spectacular Ladakh Journey", days: "6 Nights 7 Days", originalPrice: "46000", price: "41500", discount: "10%", itinerary: "Leh → Nubra Valley → Pangong → Leh", type: "Group Tour", isRecommended: false, image: "/img/ladakh2.jpg", rating: 4.4, link: "/trip-packages/spectacular-ladakh-journey/" }
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