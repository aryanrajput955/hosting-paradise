import Image from 'next/image';
import React from 'react';
import TourCard from '../../../components/template';
import Heading from './heding';

export default function Page() {
const tours = [
  { title: "Valley of Flowers Trek Escape", days: "5 Nights 6 Days", originalPrice: "12000", price: "10800", discount: "10%", itinerary: "Joshimath → Ghangaria → Joshimath", type: "Customized Holidays", isRecommended: false, image: "/img/shoot/vof.jpg", rating: 4.5, link: "/trip-packages/valley-flowers-trek/" },
  { title: "Holy Ganges Journey", days: "2 Nights 3 Days", originalPrice: "13000", price: "11700", discount: "10%", itinerary: "Haridwar → Rishikesh → Haridwar", type: "Customized Holidays", isRecommended: false, image: "/img/shoot/rishikesh-4785189.jpg", rating: 4.6, link: "/trip-packages/sacred-ganges/" },
  { title: "Quick Retreat to Queen Of Hills", days: "2 Nights 3 Days", originalPrice: "5000", price: "4500", discount: "10%", itinerary: "Mussoorie → Mussoorie", type: "Customized Holidays", isRecommended: false, image: "/img/shoot/mussorie.jpg", rating: 4.4, link: "/trip-packages/mussoorie-escape/" },
  { title: "Uttarakhand - Hills and River Bliss", days: "3 Nights 4 Days", originalPrice: "11000", price: "9900", discount: "10%", itinerary: "Haridwar → Mussoorie → Haridwar", type: "Customized Holidays", isRecommended: false, image: "/img/shoot/pexels-sanket-barik-7846563 (1).jpg", rating: 4.7, link: "/trip-packages/hills-ganges/" }
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