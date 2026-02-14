import Image from 'next/image';
import React from 'react';
import TourCard from '../../../components/template';
import Heading from './heding';

export default function Page() {
const tours = [
  { title: "Kashmir Serenity Escape", days: "5 Nights 6 Days", originalPrice: "40000", price: "36000", discount: "10%", itinerary: "Srinagar → Gulmarg → Pahalgam → Srinagar", type: "Customized Holidays", isRecommended: true, image: "/img/kashmir.jpg", rating: 4.6, link: "/trip-packages/kashmir-serenity-escape/" },
  { title: "Kashmir Alpine Adventure", days: "7 Nights 8 Days", originalPrice: "55000", price: "49500", discount: "10%", itinerary: "Srinagar → Sonamarg → Gulmarg → Pahalgam → Srinagar", type: "Customized Holidays", isRecommended: false, image: "/img/kashmir3.jpg", rating: 4.5, link: "/trip-packages/kashmir-alpine-adventure/" },
  { title: "Kashmir Valley Retreat", days: "6 Nights 7 Days", originalPrice: "48000", price: "43200", discount: "10%", itinerary: "Srinagar → Dal Lake → Yusmarg → Pahalgam", type: "Customized Holidays", isRecommended: false, image: "/img/kashmir3.jpg", rating: 4.7, link: "/trip-packages/kashmir-valley-retreat/" }
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