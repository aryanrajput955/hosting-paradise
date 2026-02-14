import React from 'react';
import { Mail, AlertTriangle } from 'lucide-react';

export const metadata = {
  title: "Disclaimer | Paradise Bliss Tours",
  description: "Read the Disclaimer for Paradise Bliss Tours. Information regarding content accuracy, image usage, and copyright.",
};

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-[var(--light-green)] font-[jost]">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[var(--color-dark)] to-[#002e26] pt-36 md:pt-48 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
            <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[var(--forest-green)] blur-3xl mix-blend-screen" />
            <div className="absolute top-1/2 right-0 w-64 h-64 rounded-full bg-[var(--coral-pink)] blur-3xl mix-blend-screen" />
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center z-10">
            <h1 className="text-4xl md:text-6xl font-[salazur] text-[var(--sandy)] mb-6 drop-shadow-lg tracking-wide">
            Disclaimer
          </h1>
          <p className="text-lg md:text-xl text-[var(--sandy)]/80 max-w-2xl mx-auto font-light leading-relaxed">
            Important information regarding the content, accuracy, and materials presented on our website.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-10">
        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden border border-white/50 p-8 md:p-12">
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-[salazur] text-[var(--color-dark)] mb-4 flex items-center gap-3">
                General Information & Travel Inspiration
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                All content on this website—including text, images, and graphics—is shared purely for general information and travel inspiration. While Paradise Bliss Tours endeavors to keep details accurate and current, elements such as ticket prices, availability, schedules, local regulations, and on-ground conditions can change without prior notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-[salazur] text-[var(--color-dark)] mb-4">
                Visuals & Photography
              </h2>
              <div className="bg-[var(--light-green)]/30 rounded-xl p-6 border-l-4 border-[var(--forest-green)]">
                <p className="text-gray-700 leading-relaxed">
                  The photographs and visuals used on the website are primarily for illustrative and representational purposes. Unless explicitly mentioned, they are not the property of Paradise Bliss Tours.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-[salazur] text-[var(--color-dark)] mb-4">
                Copyright & Content Removal
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you are the rightful owner of any image or content featured on our platform and would like it removed, credited differently, or corrected, please inform us, and we will act promptly.
              </p>
              
              <div className="bg-red-50 rounded-xl p-6 border border-red-100 flex items-start gap-4">
                <div className="p-2 bg-red-100 rounded-full text-red-600 shrink-0">
                    <AlertTriangle size={20} />
                </div>
                <div>
                     <h3 className="text-red-800 font-bold mb-1">Important</h3>
                     <p className="text-red-700 text-sm">
                        If you believe any content, image, or material has been used inappropriately, kindly contact us so we can review and resolve the matter at the earliest.
                    </p>
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <div className="pt-8 mt-8 border-t border-gray-100">
               <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                 <div className="text-center sm:text-left">
                    <p className="text-gray-600 mb-1">Contact us for any concerns:</p>
                    <a href="mailto:info@paradiseblisstours.com" className="group flex items-center justify-center sm:justify-start gap-3 bg-[var(--color-dark)] text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:bg-[#002e26] transition-all duration-300">
                        <Mail size={18} />
                        <span className="font-medium">info@paradiseblisstours.com</span>
                    </a>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
