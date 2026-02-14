import React from 'react';
import { Mail, Plane, Hotel, Map, FileText, Car, CreditCard } from 'lucide-react';

export const metadata = {
  title: "Cancellation & Refund Policy | Paradise Bliss Tours",
  description: "Read the Cancellation and Refund Policy of Paradise Bliss Tours. Effective from June 2025.",
};

export default function CancellationPolicy() {
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
            Cancellation & Refund Policy
          </h1>
          <p className="inline-block px-4 py-1 rounded-full bg-white/10 text-[var(--sandy)] text-sm mb-4 border border-white/20">
            (Effective June 2025)
          </p>
          <p className="text-lg md:text-xl text-[var(--sandy)]/80 max-w-2xl mx-auto font-light leading-relaxed">
            At Paradise Bliss Tours, transparency and fairness are core to how guests are treated. This Cancellation and Refund Policy applies to all trips, packages, and services arranged by Paradise Bliss Tours from June 2025 onward.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-10">
        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden border border-white/50">
          
          {/* Refund Timeframe */}
          <div className="p-8 md:p-12 border-b border-gray-100">
            <h2 className="text-3xl font-[salazur] text-[var(--color-dark)] mb-6 flex items-center gap-3">
              <CreditCard className="text-[var(--forest-green)]" />
              Refund Timeframe
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                For bookings that qualify for a refund, the eligible amount will be initiated within <span className="font-bold">90 working days</span> from the cancellation date or from the date we receive confirmation from our partner suppliers, whichever is later.
              </p>
              <p>
                If the cancellation happens <span className="italic">during the trip</span>, the 90-day period will start either from your date of return or from the supplier’s confirmation, whichever is later.
              </p>
              <p>For any questions or clarification, you can write to us at <a href="mailto:info@paradiseblisstours.com" className="text-[var(--forest-green)] hover:underline">info@paradiseblisstours.com</a>.</p>
              
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100 text-sm text-yellow-800 mt-4">
                <strong>Please note:</strong> The final refund amount may change due to foreign currency fluctuations, approvals received from our service partners, and the total payment made by the customer at that time. Should there be any change in the refund amount, your dedicated account manager will communicate this to you.
              </div>
            </div>
          </div>

          {/* Policy Detail Sections */}
          <div className="p-8 md:p-12 bg-gradient-to-b from-transparent to-[var(--light-green)]/30">
            <div className="grid gap-10 md:grid-cols-2">
              
              {/* Flights */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 md:col-span-2">
                <h3 className="text-xl font-bold text-[var(--color-dark)] mb-4 flex items-center gap-2">
                  <Plane className="w-5 h-5 text-[var(--sunset-orange)]" />
                  Flights
                </h3>
                 <div className="space-y-4 text-sm text-gray-700">
                    <div>
                        <h4 className="font-bold text-gray-900 mb-1">Non-Refundable Flights</h4>
                        <p>Any flight labelled “NonRefundable” on your final travel documents will not be eligible for a refund.</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 mb-1">Refundable Flights</h4>
                        <p>For flights marked “Refundable”:</p>
                        <ul className="list-disc pl-5 mt-1 space-y-1">
                            <li>Refunds will be processed according to the specific Cancellation Policy of the product and</li>
                            <li>As outlined in your final confirmed itinerary.</li>
                        </ul>
                        <p className="text-xs italic mt-1">Refund values for flights can vary based on international exchange rate movements.</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg mt-4 border border-gray-100">
                        <h4 className="font-bold text-[var(--color-dark)] mb-2">Important Flight Information:</h4>
                        <ul className="list-disc pl-5 space-y-2 text-gray-600">
                            <li>Paradise Bliss Tours cannot be held liable for delays, cancellations, rescheduling, or other operational issues caused by airlines. Any compensation or refund for such events must be pursued directly with the airline.</li>
                            <li>Travellers must ensure their passports are valid for at least 12 months and are undamaged. If boarding is denied due to passport validity or condition, no refund will be issued.</li>
                            <li>Guests are strongly advised to reach the airport a minimum of 3 hours before departure. When airport transfers are not arranged by Paradise Bliss Tours, missed flights caused by late arrival at the airport will not be eligible for a refund.</li>
                            <li>If airport transfers are booked through Paradise Bliss Tours and delays occur due to unavoidable local conditions, the company cannot be held responsible for missed flights.</li>
                            <li>Information regarding baggage allowance will be mentioned in your final travel documents. Any excess baggage charges at check-in are the sole responsibility of the traveller.</li>
                            <li>Certain low-cost or regional carriers may mandate online check-in. Any penalties that arise from not completing the web check-in will be borne by the customer; Paradise Bliss Tours will not cover these charges.</li>
                            <li>Meal requests on flights can be passed on to the airline but are always subject to airline policies and availability.</li>
                        </ul>
                    </div>
                 </div>
              </div>

              {/* Hotels */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-[var(--color-dark)] mb-4 flex items-center gap-2">
                  <Hotel className="w-5 h-5 text-[var(--sunset-orange)]" />
                  Hotels
                </h3>
                 <div className="space-y-4 text-sm text-gray-700">
                    <div>
                        <h4 className="font-bold text-gray-900 mb-1">Non-Refundable Hotels</h4>
                        <p>Hotel bookings clearly mentioned as “NonRefundable” will not receive any refund under any circumstances.</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 mb-1">Refundable Hotels</h4>
                        <p>For refundable hotel reservations:</p>
                        <ul className="list-disc pl-5 mt-1 space-y-1">
                             <li>The refund amount and processing schedule will follow the product’s Cancellation Policy and</li>
                             <li>The conditions mentioned in your final itinerary.</li>
                        </ul>
                        <p className="text-xs italic mt-1">All hotel-related refund amounts may be impacted by shifts in foreign exchange rates.</p>
                    </div>
                    
                    <div className="bg-gray-50 p-3 rounded-lg mt-2 border border-gray-100">
                        <h4 className="font-bold text-[var(--color-dark)] mb-2">Additional Hotel Conditions:</h4>
                        <ul className="list-disc pl-5 space-y-2 text-gray-600 text-xs">
                            <li>While Paradise Bliss Tours makes every effort to partner with quality properties, we cannot be held responsible for the behaviour of hotel staff, on-site cleanliness, or the range/standard of services provided by the hotel.</li>
                            <li>Any on-trip room upgrades, add-ons, or extra services requested by guests must be paid directly at the hotel.</li>
                            <li>If you decide to change properties during your journey by cancelling previously reserved hotels and choosing new ones, the original hotels will attract 100% cancellation charges.</li>
                            <li>Requests for early check-in or late check-out are always subject to hotel policy and availability. Refunds will not be provided if such requests cannot be fulfilled.</li>
                        </ul>
                    </div>
                 </div>
              </div>

              {/* Activities & Transfers Grouped */}
              <div className="space-y-6">
                 {/* Activities */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="text-xl font-bold text-[var(--color-dark)] mb-4 flex items-center gap-2">
                        <Map className="w-5 h-5 text-[var(--sunset-orange)]" />
                        Activities & Experiences
                    </h3>
                    <div className="space-y-3 text-sm text-gray-700">
                        <div>
                            <h4 className="font-bold text-gray-900 mb-1">Non-Refundable Activities</h4>
                            <p>Activities or experiences mentioned as “Non-Refundable” in your travel documents will not qualify for a refund.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-1">Refundable Activities</h4>
                            <p>For activities labelled “Refundable”:</p>
                             <ul className="list-disc pl-5 mt-1 space-y-1">
                                <li>Eligibility, charges, and timelines will be guided by the product-specific Cancellation Policy and</li>
                                <li>The terms listed in your final itinerary.</li>
                            </ul>
                            <p className="text-xs italic mt-1">Refunds related to activities are also subject to changes in currency exchange rates.</p>
                        </div>
                    </div>
                </div>

                {/* Transfers */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="text-xl font-bold text-[var(--color-dark)] mb-4 flex items-center gap-2">
                        <Car className="w-5 h-5 text-[var(--sunset-orange)]" />
                        Transfers
                    </h3>
                    <div className="space-y-3 text-sm text-gray-700">
                        <p>Refunds applicable to transfers (if any) will be processed according to the productlevel Cancellation Policy and as specified in your final confirmed itinerary shared over email.</p>
                        <p className="text-xs italic">Transfer refunds may also be revised depending on international currency rate fluctuations.</p>
                    </div>
                </div>
              </div>

               {/* Visa & Insurance */}
               <div className="md:col-span-2 bg-[var(--light-green)]/50 p-6 rounded-2xl border border-[var(--forest-green)]/20">
                 <h3 className="text-xl font-bold text-[var(--color-dark)] mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[var(--forest-green)]" />
                  Visa & Insurance
                </h3>
                <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-700">
                    <div>
                        <p className="mb-2 leading-relaxed">
                            Paradise Bliss Tours only helps with visa facilitation, such as document guidance and submission assistance. The power to accept or reject an application rests entirely with the relevant embassy or consulate. Visa fees remain <span className="font-bold">non-refundable</span>, even if the visa is refused.
                        </p>
                        <p className="leading-relaxed">
                            Any sudden modifications in visa rules or processes introduced by consulates before, during, or after submission are beyond our control.
                        </p>
                    </div>
                    <div>
                         <p className="leading-relaxed">
                            Travel insurance once bought or applied for is <span className="font-bold">non-refundable</span> and carries <span className="font-bold">100% cancellation charges</span>.
                        </p>
                    </div>
                </div>
              </div>

            </div>
            
            {/* Contact Section */}
            <div className="mt-12 p-8 text-center border-t border-gray-200">
                <h4 className="font-[salazur] text-2xl text-[var(--color-dark)] mb-4">Contact & Support</h4>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                    If you need any help or clarification about cancellations, refunds, or any of the points listed above, please contact:
                </p>
                <div className="inline-flex flex-col items-center gap-4">
                    <div className="text-lg font-bold text-[var(--color-dark)]">Paradise Bliss Tours</div>
                    <a href="mailto:info@paradiseblisstours.com" className="flex items-center gap-3 bg-[var(--forest-green)] text-white px-8 py-3 rounded-full shadow-lg hover:bg-[var(--color-dark)] transition-all transform hover:-translate-y-1">
                        <Mail size={20} />
                        <span className="font-medium tracking-wide">Email: info@paradiseblisstours.com</span>
                    </a>
                    <p className="text-sm text-gray-500 mt-4 max-w-lg">
                        Thank you for choosing Paradise Bliss Tours. The team is always available to guide and support you throughout your travel planning and journey.
                    </p>
                </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
