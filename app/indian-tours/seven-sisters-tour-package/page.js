import Image from 'next/image';
import React from 'react';
import TourCard from '../../../components/template';
import Heading from './heding';

export default function Page() {
const tours = [
  { title: "Discover Shillong Highlands", days: "3 Nights 4 Days", originalPrice: "27000", price: "24300", discount: "10%", itinerary: "Shillong → Shillong", type: "Customized Holidays", isRecommended: false, image: "/img/shoot/shillong.jpg", rating: 4.6, link: "/trip-packages/discover-shillong-highlands/" },
  { title: "Marvels of Shillong and Guwahati", days: "4 Nights 5 Days", originalPrice: "33000", price: "29700", discount: "10%", itinerary: "Shillong → Guwahati", type: "Customized Holidays", isRecommended: false, image: "/img/shoot/shillong.jpg", rating: 4.5, link: "/trip-packages/marvels-shillong-guwahati/" },
  { title: "Serenity of Meghalaya and Arunachal Pradesh", days: "9 Nights 10 Days", originalPrice: "72000", price: "64800", discount: "10%", itinerary: "Shillong → Tezpur → Dirang → Tawang", type: "Customized Holidays", isRecommended: false, image: "/img/shoot/shillong.jpg", rating: 4.8, link: "/trip-packages/serenity-meghalaya-arunachal/" }
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