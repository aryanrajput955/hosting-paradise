import Image from 'next/image';
import React from 'react';
import TourCard from '../../../components/template';
import Heading from './heding';

export default function Page() {
const tours = [
  { title: "Spiti Valley Explorer", days: "6 Nights 7 Days", originalPrice: "45000", price: "40500", discount: "10%", itinerary: "Shimla → Narkanda → Kalpa → Tabo → Kaza → Chandratal", type: "Group Tour", isRecommended: true, image: "/img/spiti2.jpg", rating: 4.6, link: "/trip-packages/spiti-valley-explorer/" },
  { title: "Spiti Wilderness Journey", days: "8 Nights 9 Days", originalPrice: "60000", price: "54000", discount: "10%", itinerary: "Manali → Rohtang Pass → Kaza → Dhankar → Pin Valley → Manali", type: "Group Tour", isRecommended: false, image: "/img/spiti.jpg", rating: 4.5, link: "/trip-packages/spiti-wilderness-journey/" },
  { title: "Spiti Mystic Retreat", days: "7 Nights 8 Days", originalPrice: "55000", price: "49500", discount: "10%", itinerary: "Shimla → Sarahan → Nako → Kaza → Ki Monastery → Reckong Peo", type: "Group Tour", isRecommended: false, image: "/img/spiti2.jpg", rating: 4.7, link: "/trip-packages/spiti-mystic-retreat/" }
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