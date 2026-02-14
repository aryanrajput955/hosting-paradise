import React from 'react';
import { Mail, Phone } from 'lucide-react';

export const metadata = {
  title: "Privacy Policy | Paradise Bliss Tours",
  description: "Read the Privacy Policy of Paradise Bliss Tours. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicy() {
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
            Privacy Policy
          </h1>
          <p className="text-lg md:text-xl text-[var(--sandy)]/80 max-w-2xl mx-auto font-light leading-relaxed">
            Your privacy is important to us. We are committed to protecting your personal information and ensuring your trust.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-10">
        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden border border-white/50">
          
          {/* Introduction */}
          <div className="p-8 md:p-12 border-b border-gray-100">
            <h2 className="text-3xl font-[salazur] text-[var(--color-dark)] mb-6">
              Introduction
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                This Privacy Policy explains how Paradise Bliss Tours protects and uses the personal information collected from users of our website and services. The provisions in this policy are intended to comply with the Information Technology Act, 2000, and related rules in India. Paradise Bliss Tours may revise this document periodically to improve clarity and compliance, and the latest version will always apply.
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
                    Commitment to Privacy
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Paradise Bliss Tours is committed to handling your data responsibly and ethically. We do not misuse user information, nor do we trade, rent, or sell your personal details to third parties. If required by law, or when served with a valid legal notice or order from a competent authority, we may be obligated to disclose certain user information. Any disputes or legal matters relating to our website or services will fall under the jurisdiction of the courts where Paradise Bliss Tours is registered.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-bold text-[var(--color-dark)] mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[var(--sunset-orange)]"></span>
                    Use of Website and Personal Data
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Our website is designed to help you discover and book travel experiences and related services. To provide these services efficiently, we may request certain personal details from you. The information collected is used strictly to process bookings, provide customer support, improve user experience, and communicate important updates. Access to this data is restricted only to those members of Paradise Bliss Tours who need it to perform their professional duties.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-bold text-[var(--color-dark)] mb-3 flex items-center gap-2">
                     <span className="w-2 h-2 rounded-full bg-[var(--sunset-orange)]"></span>
                    Information We Collect
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-2">
                    When you interact with our website or contact us, we may collect information such as your name, email address, phone number, travel preferences, and any other details you choose to share. This information helps us:
                  </p>
                  <ul className="list-disc ml-5 text-gray-600 text-sm leading-relaxed space-y-1">
                    <li>Confirm and manage your bookings.</li>
                    <li>Respond to enquiries and provide support.</li>
                    <li>Tailor our offerings and communication to your interests.</li>
                  </ul>
                  <p className="text-gray-600 text-sm leading-relaxed mt-2">
                    We collect only the information that is relevant and necessary for delivering our services.
                  </p>
                </section>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                <section>
                  <h3 className="text-xl font-bold text-[var(--color-dark)] mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[var(--sunset-orange)]"></span>
                    Cookies and Tracking Technologies
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    To make our website faster and more user-friendly, Paradise Bliss Tours uses cookies and similar technologies. Cookies help us remember your preferences and understand how visitors use our site, which enables us to enhance performance and usability. You can disable cookies at any time through your browser settings; however, some parts of the website may not function optimally without them.
                  </p>
                </section>

                <section>
                   <h3 className="text-xl font-bold text-[var(--color-dark)] mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[var(--sunset-orange)]"></span>
                    Links to External Websites
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Our website may include links to other websites, platforms, or service providers that are not operated or controlled by Paradise Bliss Tours. These links are added in good faith after basic checks, but we do not manage or monitor the privacy practices or content of these external sites. Once you leave our website, any data you provide to these third parties is subject to their policies, and Paradise Bliss Tours cannot be held responsible for any issues arising from this.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-bold text-[var(--color-dark)] mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[var(--sunset-orange)]"></span>
                    Data Security and Confidentiality
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Safeguarding your personal information is a priority for Paradise Bliss Tours. We use reasonable technical and organizational measures to protect data from unauthorized access, misuse, alteration, or disclosure. Only authorized staff and service partners involved in delivering or supporting our services are allowed to access user data, and they are expected to follow strict confidentiality and security standards. We do not share your details with unrelated third parties for marketing or any other unauthorized purpose.
                  </p>
                </section>
              </div>

            </div>
            
            <div className="mt-12 p-6 bg-[var(--light-green)] rounded-xl border border-[var(--forest-green)]/20">
               <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                 <div>
                    <h4 className="font-[salazur] text-2xl text-[var(--color-dark)] mb-2">Questions, Complaints, and Grievances</h4>
                    <p className="text-gray-600 text-sm">
                        If you have concerns, complaints, or questions regarding this Privacy Policy or the way your information is handled, you may contact our designated grievance officer.
                    </p>
                 </div>
                 <div className="flex flex-col gap-3 min-w-[250px]">
                    <div className="group flex flex-col items-start gap-1 bg-white px-5 py-4 rounded-lg shadow-sm hover:shadow-md transition-all text-[var(--color-dark)] font-medium">
                        <div className="flex items-center gap-3 w-full mb-1">
                             <div className="p-2 bg-[var(--light-green)] rounded-full group-hover:bg-[var(--forest-green)] group-hover:text-white transition-colors">
                                <Mail size={18} />
                            </div>
                            <span className="font-bold">Grievance Officer</span>
                        </div>
                        <a href="mailto:info@paradiseblisstours.com" className="text-sm hover:text-[var(--forest-green)] transition-colors pl-10">info@paradiseblisstours.com</a>
                    </div>
                 </div>
               </div>
               <div className="mt-6 text-center text-xs text-gray-500 pt-6 border-t border-[var(--color-dark)]/10">
                 <p>For any privacy-related query, please write to us at <a href="mailto:info@paradiseblisstours.com" className="text-[var(--forest-green)] hover:underline">info@paradiseblisstours.com</a>, and we will make reasonable efforts to address your concern at the earliest.</p>
               </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
