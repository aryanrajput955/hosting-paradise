import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import HeroSection from "@/components/herosection";
import ImageGallery from "@/components/imageGalley";
import ImageGalleryMobile from '@/components/imagegallerymobile';

// Defer below-the-fold components with dynamic imports
const Banner1 = dynamic(() => import("@/components/banner1"), { ssr: true });
const VideoSlider = dynamic(() => import("@/components/videos"), { ssr: true });
const HolidaySaleBanner = dynamic(() => import("@/components/christmas"), { ssr: true });
const AdventureTours = dynamic(() => import("@/components/adventure"), { ssr: true });
const DomesticGetaways = dynamic(() => import("@/components/international-packages"), { ssr: true });
const InternationalSlider = dynamic(() => import("@/components/internationalbanner"), { ssr: true });
const ToursSlider = dynamic(() => import("@/components/tourSlider"), { ssr: true });
const CharDhamTours = dynamic(() => import("@/components/charDhamTours"), { ssr: true });
const WhyChooseUs = dynamic(() => import("@/components/whychooseus"), { ssr: true });
const DVDiaries = dynamic(() => import("@/components/customer-gallery"), { ssr: true });
const TestimonialSlider = dynamic(() => import("@/components/testimonials"), { ssr: true });
const Quote = dynamic(() => import("@/components/quote"), { ssr: true });

export const metadata = {
  title: "Paradise Bliss Tours - Explore India & International Trips",
  description: "Discover handpicked tour packages in India & abroad. Enjoy comfort, adventure, and memorable journeys with Paradise Bliss Tours.",
  keywords: "travel agency India, holiday packages India, international tours, honeymoon packages",
  openGraph: {
    title: "Paradise Bliss Tours - Explore India & International Trips",
    description: "Discover handpicked tour packages in India & abroad. Enjoy comfort, adventure, and memorable journeys with Paradise Bliss Tours.",
    type: "website",
    locale: "en_US",
  },
};

export default function Home() {
  return (
    <div>
      <HeroSection />
      <div className="hidden md:block">
      <ImageGallery />
      </div>
      <div className="md:hidden">
        <ImageGalleryMobile />
      </div>
      
      <Suspense fallback={null}>
        <Banner1 />
      </Suspense>
      
      <Suspense fallback={null}>
        <div className="hidden md:block">
          <VideoSlider />
        </div>
      </Suspense>

      <Suspense fallback={null}>
        {/* <HolidaySaleBanner /> */}
        {/* <AdventureTours /> */}
        <CharDhamTours />
        <DomesticGetaways />
        <InternationalSlider />
        <ToursSlider />
        <WhyChooseUs />
        <DVDiaries />
        <TestimonialSlider />
        <Quote />
      </Suspense>
    </div>
  );
}