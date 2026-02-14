import Image from 'next/image';
import React from 'react';
import TourCard from '../../../components/template';
import Heading from './heding';

export default function Page() {
  const tours = [
    { title: "Chardham Yatra from Delhi", days: "10 Nights 11 Days", originalPrice: "48000", price: "44000", discount: "9%", itinerary: "Delhi → Haridwar → Barkot → Yamunotri → Gangotri → Sitapur → Pipalkoti → Badrinath → Srinagar → Haridwar → Delhi", type: "Group Tour", isRecommended: true, image: "/img/shoot/chardham_delhi.jpg", rating: 4.5, link:"/trip-packages/chardham-yatra-delhi/" },

    { title: "Chardham Yatra By Helicopter", days: "5 Nights 6 Days", originalPrice: "285000", price: "228000", discount: "20%", itinerary: " Dehradun → Yamunotri → Gangotri→ Kedarnath → Badrinath → Dehradun", type: "Group Tour", points: "1075", isRecommended: true, image: "/img/shoot/chardham_helicopter.jpg", rating: 4.2, link: "/trip-packages/chardham-yatra-helicopter/" },

    { title: "Chardham Luxury Package", days: "11 Nights 12 Days", originalPrice: "55000", price: "44000", discount: "20%", itinerary: "Delhi → Haridwar/Dehradun → Barkot → Yamunotri → Barkot → Uttarkashi → Gangotri → Uttarkashi → Sitapur → Kedarnath → Govindghat/Sitapur → Badrinath → Rudraprayag/Srinagar → Haridwar → Delhi/Dehradun", type: "Group Tour", points: "950", isRecommended: true, image: "/img/shoot/Luxury.jpg", rating: 4.7, link: "/trip-packages/chardham-luxury/" },

        { title: "Chardham From Bangalore", days: "12 Nights 13 Days", originalPrice: "49000", price: "43000", discount: "12%", itinerary: "Bangalore → Delhi → Rishikesh → Barkot → Yamunotri → Barkot → Uttarkashi → Gangotri → Uttarkashi → Sitapur → Kedarnath → Sitapur → Pipalkoti → Badrinath → Joshimath → Srinagar → Haridwar → Delhi", type: "Group Tour", points: "950", isRecommended: false, image: "/img/shoot/chardham_banglore.jpg", rating: 4.6, link: "/trip-packages/chardham-yatra-bangalore/" },

                { title: "Badrinath,Kedarnath By Helicopter", days: "1 Day", originalPrice: "128000", price: "120000", discount: "7%", itinerary: "Dehradun → Kedarnath → Badrinath → Dehradun", type: "Group Tour", points: "950", isRecommended: false, image: "/img/2dham-helocopter.jpg", rating: 4.2, link: "/trip-packages/badrinath-kedarnath-helicopter/" },


              { title: "Badrinath,Kedarnath By Helicopter", days: "1 Day", originalPrice: "128000", price: "120000", discount: "7%", itinerary: "Dehradun → Kedarnath → Badrinath → Dehradun", type: "Group Tour", points: "950", isRecommended: false, image: "/img/2dham-helocopter.jpg", rating: 4.2, link: "/trip-packages/badrinath-kedarnath-helicopter/" },

                { title: "Badrinath Yatra", days: " 2 Nights 3 Days", originalPrice: "34000", price: "28990", discount: "15%", itinerary: "Haridwar → Pipalkoti → Joshimath → Badrinath", type: "Group Tour", points: "950", isRecommended: false, image: "/img/shoot/badrinath_road.jpg", rating: 4.2, link: "#" },

                   { title: "Kedarnath Yatra", days: " 2 Nights 3 Days", originalPrice: "34000", price: "28990", discount: "15%", itinerary: "Haridwar/Dehradun → Sitapur → Kedarnath → Rishikesh", type: "Group Tour", points: "950", isRecommended: false, image: "/img/shoot/kedarnath_road.jpg", rating: 4.2, link: "#" },
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