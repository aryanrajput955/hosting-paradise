"use client";
import Image from 'next/image';


export default function Quote() {
  return (
    <div className="relative bg-[#00453a] py-8 xs:py-10 md:py-16 flex flex-col items-center text-center px-4 xs:px-6 md:mx-12 mx-3 my-6 xs:my-8 md:my-10 rounded-2xl xs:rounded-3xl shadow-2xl">
      {/* Left Side Image - Hidden on Small Screens */}
      <div className="absolute left-0 bottom-0 w-60 md:w-72 hidden md:block">
        <Image
          src="/img/in-doubt-svg.svg"
          alt="Confused Person"
          width={300}
          height={300}
          style={{ width: '100%', height: 'auto' }}
          loading="lazy"
        />
      </div>

      {/* Right Side Image - Hidden on Small Screens */}
      <div className="absolute right-10 top-11 w-40 md:w-56 hidden md:block">
        <Image
          src="/img/in-doubt.svg"
          alt="Question Marks"
          width={200}
          height={200}
          style={{ width: '100%', height: 'auto' }}
          loading="lazy"
        />
      </div>

      {/* Content */}
      <h2 className="text-xl xs:text-2xl md:text-3xl font-bold text-[#F1FDF3] mb-2 xs:mb-3 md:mb-4">
       Book Your Next Dream Vacation with Paradise Bliss Tours
      </h2>
      <p className="text-xs xs:text-sm md:text-base text-[#F1FDF3] max-w-lg">
        Don't hesitate & hand over your queries to our travel experts and let them
        assist you with their authentic traveling insights.
      </p>

      {/* Buttons */}
      <div className="mt-4 xs:mt-5 md:mt-6 flex flex-col items-center gap-2 xs:gap-3">
        <button className="bg-green-900 text-white px-4 xs:px-5 md:px-6 py-2 xs:py-2.5 md:py-3 text-sm xs:text-base rounded-lg shadow-md hover:bg-green-800 transition">
          Get a Quote
        </button>
        <div className="bg-green-100 text-green-800 px-3 xs:px-4 py-1.5 xs:py-2 text-xs xs:text-sm rounded-md shadow-sm">
          We're always excited to pick up your calls
        </div>
      </div>
    </div>
  );
}
