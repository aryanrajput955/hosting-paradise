"use client";


export default function Quote() {
  return (
    <div className="relative bg-[#00453a] py-16 flex flex-col items-center text-center px-6 mx-12 my-10 rounded-3xl shadow-2xl">
      {/* Left Side Image - Hidden on Small Screens */}
      <div className="absolute left-0 bottom-0 w-60 md:w-72 hidden md:block">
        <img
          src="/img/in-doubt-svg.svg"
          alt="Confused Person"
          width={300}
          height={300}
          style={{ width: '100%', height: 'auto' }}
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Right Side Image - Hidden on Small Screens */}
      <div className="absolute right-10 top-11 w-40 md:w-56 hidden md:block">
        <img
          src="/img/in-doubt.svg"
          alt="Question Marks"
          width={200}
          height={200}
          style={{ width: '100%', height: 'auto' }}
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Content */}
      <h2 className="text-3xl font-bold text-[#F1FDF3] mb-4">
       Book Your Next Dream Vacation with Paradise Bliss Tours
      </h2>
      <p className="text-[#F1FDF3] max-w-lg">
        Don't hesitate & hand over your queries to our travel experts and let them
        assist you with their authentic traveling insights.
      </p>

      {/* Buttons */}
      <div className="mt-6 flex flex-col items-center gap-3">
        <button className="bg-green-900 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-800 transition">
          Get a Quote
        </button>
        <div className="bg-green-100 text-green-800 px-4 py-2 rounded-md shadow-sm">
          We're always excited to pick up your calls
        </div>
      </div>
    </div>
  );
}
