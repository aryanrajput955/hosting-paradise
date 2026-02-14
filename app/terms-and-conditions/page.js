import React from 'react';
import { Mail } from 'lucide-react';

export const metadata = {
  title: "Terms and Conditions | Paradise Bliss Tours",
  description: "Read the terms and conditions for booking tours with Paradise Bliss Tours. Cancellation policies, safety guidelines, and more.",
};

export default function TermsAndConditions() {
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
            Terms & Conditions
          </h1>
          <p className="text-lg md:text-xl text-[var(--sandy)]/80 max-w-2xl mx-auto font-light leading-relaxed">
            Transparency and trust are at the heart of our journeys. Please review our policies to ensure a safe and memorable experience.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-10">
        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden border border-white/50">
          
          {/* Introduction / Policy Header */}
          <div className="p-8 md:p-12 border-b border-gray-100">
            <h2 className="text-3xl font-[salazur] text-[var(--color-dark)] mb-6">
              Tour Conduct & Safety Policy
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Paradise Bliss Tours and its team strictly prohibit the use of narcotics or any banned substances during the trip, and will not be liable for any consequences arising from their consumption. Weapons, fireworks, and hazardous or toxic materials are not permitted on the tour, and the company bears no responsibility for anyone found guilty under Indian law in relation to such items.
              </p>
              <p>
                The organizers reserve the right to remove any participant from the tour or campsite, without refund, if their behavior violates camp rules or causes inconvenience, harassment, or misconduct towards fellow travelers or staff. Paradise Bliss Tours is not responsible for your safety, whereabouts, or personal conduct when you step outside the designated campsite or accommodation premises.
              </p>
            </div>
          </div>

          {/* Detailed Sections */}
          <div className="p-8 md:p-12 bg-gradient-to-b from-transparent to-[var(--light-green)]/30">
            <div className="grid gap-10 md:grid-cols-2">
              
              {/* Left Column */}
              <div className="space-y-8">
                <section>
                  <h3 className="text-xl font-bold text-[var(--color-dark)] mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[var(--sunset-orange)]"></span>
                    Property & Liability
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Any damage, loss, or misuse of campsite property or tour equipment—including but not limited to tents, pillows, mattresses, or other infrastructure—will be charged at the full market price of the item. Paradise Bliss Tours will not be held liable for loss, theft, or damage of any personal belongings of guests at any time during the trip. All travelers are required to carry a valid, government-issued photo identification card.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-bold text-[var(--color-dark)] mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[var(--sunset-orange)]"></span>
                    Guest Policy
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Only registered guests staying with Paradise Bliss Tours are allowed within the campsite or designated stay areas. If you wish to invite any external visitors, prior approval from the team is mandatory. The availability of hot water at the campsite or stay location is not guaranteed and may be limited or unavailable depending on local conditions.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-bold text-[var(--color-dark)] mb-3 flex items-center gap-2">
                     <span className="w-2 h-2 rounded-full bg-[var(--sunset-orange)]"></span>
                    Bookings & Payments
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Campsite or tour slots are considered confirmed only after receipt of full payment. The management will not be responsible for any injuries, accidents, loss, or theft of personal items during the trip.
                  </p>
                </section>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                <section>
                  <h3 className="text-xl font-bold text-[var(--color-dark)] mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[var(--sunset-orange)]"></span>
                    Travel & Delays
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    In the event of a vehicle breakdown or delay caused by technical issues en route, travelers may be required to wait until the vehicle is repaired, and no replacement vehicle is guaranteed. Paradise Bliss Tours is not responsible for delays, itinerary changes, or additional expenses resulting from natural calamities, accidents, weather conditions, landslides, roadblocks, political disturbances, or any unforeseen incidents beyond our control.
                  </p>
                </section>

                <section>
                   <h3 className="text-xl font-bold text-[var(--color-dark)] mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[var(--sunset-orange)]"></span>
                    Itinerary Modifications
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Paradise Bliss Tours is also not liable for delays in reaching destinations due to traffic or other external factors. If such delays occur, scheduled sightseeing points or activities for that day may be shortened, modified, or cancelled altogether, without any refund. The trip leader or tour coordinator holds full authority to modify the itinerary on the spot, based on safety, weather, traffic, or other operational considerations.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-bold text-[var(--color-dark)] mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[var(--sunset-orange)]"></span>
                    Cancellations
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Once registrations or tickets are booked, they are non-transferable, non-cancelable, and non-refundable, unless otherwise stated under a specific product or offer. Guests are encouraged to enjoy the experience, respect fellow travelers and locals, and help create a positive and memorable journey for everyone.
                  </p>
                </section>
              </div>

            </div>
            
            <div className="mt-12 p-6 bg-[var(--light-green)] rounded-xl border border-[var(--forest-green)]/20">
               <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                 <div>
                    <h4 className="font-[salazur] text-2xl text-[var(--color-dark)] mb-2">Have Questions?</h4>
                    <p className="text-gray-600 text-sm">
                        If you have any issues with the terms and conditions, contact us directly.
                    </p>
                 </div>
                 <div className="flex flex-col gap-3">
                    <a href="mailto:info@paradiseblisstours.com" className="group flex items-center gap-3 bg-white px-5 py-3 rounded-lg shadow-sm hover:shadow-md transition-all text-[var(--color-dark)] font-medium">
                        <div className="p-2 bg-[var(--light-green)] rounded-full group-hover:bg-[var(--forest-green)] group-hover:text-white transition-colors">
                            <Mail size={18} />
                        </div>
                        <span>info@paradiseblisstours.com</span>
                    </a>
                 </div>
               </div>
               <div className="mt-6 text-center text-xs text-gray-500 pt-6 border-t border-[var(--color-dark)]/10">
                 <p>Thank you for choosing Paradise Bliss Tours. The team is always available to guide and support you throughout your travel planning and journey.</p>
               </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
