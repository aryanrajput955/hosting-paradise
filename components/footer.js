'use client';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="text-black p-8">
      <div className="container mx-auto">
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-8">
          {/* Logo */}
          <Image
            src="https://raw.githubusercontent.com/aryanrajput955/icons_paradise/refs/heads/main/logo.png"
            alt="Paradise Bliss"
            width={200}
            height={50}
            className="object-contain mt-10 mb-6 hover:scale-105 transition-transform duration-300 ease-in-out"
          />

          {/* Social Media Icons */}
          <div className="flex space-x-6 mb-10">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Image
                src="https://raw.githubusercontent.com/aryanrajput955/icons_paradise/refs/heads/main/twitter.png"
                alt="X (Twitter)"
                width={30}
                height={30}
                className="hover:scale-125 transition-transform duration-300 ease-in-out filter hover:brightness-110"
              />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Image
                src="https://raw.githubusercontent.com/aryanrajput955/icons_paradise/refs/heads/main/fb.png"
                alt="Facebook"
                width={30}
                height={30}
                className="hover:scale-125 transition-transform duration-300 ease-in-out filter hover:brightness-110"
              />
            </a>
            <a href="https://www.instagram.com/paradiseblisstours?igsh=YXZpaHE3ZHBxZ3gy" target="_blank" rel="noopener noreferrer">
              <Image
                src="https://raw.githubusercontent.com/aryanrajput955/icons_paradise/refs/heads/main/instagram2.png"
                alt="Instagram"
                width={30}
                height={30}
                className="hover:scale-125 transition-transform duration-300 ease-in-out filter hover:brightness-110"
              />
            </a>
            <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
              <Image
                src="https://raw.githubusercontent.com/aryanrajput955/icons_paradise/refs/heads/main/whatsapp1.png"
                alt="WhatsApp"
                width={30}
                height={30}
                className="hover:scale-125 transition-transform duration-300 ease-in-out filter hover:brightness-110"
              />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Image
                src="https://raw.githubusercontent.com/aryanrajput955/icons_paradise/refs/heads/main/linkedin.png"
                alt="LinkedIn"
                width={30}
                height={30}
                className="hover:scale-125 transition-transform duration-300 ease-in-out filter hover:brightness-110"
              />
            </a>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* About Us */}
          <div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">About Us</h3>
            <p className="text-sm ">
              Paradise Bliss Tours is a travel company that makes planning your perfect trip easy and hassle-free. Whether you’re looking for a peaceful escape, an exciting adventure, or a spiritual journey, we take care of everything so you can simply enjoy the experience. We offer customized trips, from relaxing beach vacations and exploring vibrant cities to special religious tours across India. Our spiritual journeys include the sacred Char Dham Yatra, Jyotirlinga Yatras, and pilgrimages to other sacred destinations. No matter where you want to go, we’re here to turn your travel dreams into reality with smooth planning and unforgettable experiences!                        </p>
          </div>

          {/* Blogs Section */}
          <div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">Blogs</h3>
            <ul style={{ fontFamily: 'jost' }} className="sm:text-base lg:text-md space-y-2">
              <li>
                <Link href="/top-10-tourist-attractions-in-kedarnath" className="hover:text-[var(--forest-green)] hover:underline transition-all duration-300 block">
                  <span className="text-green-500 mr-1">#</span>Top 10 Tourist Attractions in Kedarnath
                </Link>
              </li>
              <li>
                <Link href="/best-places-to-visit-in-spiti-valley" className="hover:text-[var(--forest-green)] hover:underline transition-all duration-300 block">
                  <span className="text-green-500 mr-1">#</span> Best places to visit in Spiti Valley for a Happy Vacations
                </Link>
              </li>
              <li>
                <Link href="/manali-zen-town-of-himachal" className="hover:text-[var(--forest-green)] hover:underline transition-all duration-300 block">
                  <span className="text-green-500 mr-1">#</span>Manali: The Zen Town of Himachal, India's Best Hill Station
                </Link>
              </li>
              <li>
                <Link href="/interesting-ways-to-explore-manali" className="hover:text-[var(--forest-green)] hover:underline transition-all duration-300 block">
                  <span className="text-green-500 mr-1">#</span> The Interesting Ways to Explore Manali
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">Quick Links</h3>
            <ul style={{ fontFamily: 'jost' }} className="sm:text-base lg:text-md space-y-2">
              <li><Link href="/blogs" className="hover:text-[var(--forest-green)] hover:translate-x-2 inline-block transition-transform duration-300">Blogs</Link></li>
              <li><Link href="/disclaimer" className="hover:text-[var(--forest-green)] hover:translate-x-2 inline-block transition-transform duration-300">Disclaimer</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-[var(--forest-green)] hover:translate-x-2 inline-block transition-transform duration-300">Privacy Policy</Link></li>
              <li><Link href="/cancellation-policy" className="hover:text-[var(--forest-green)] hover:translate-x-2 inline-block transition-transform duration-300">Cancellation Policy</Link></li>
              <li><Link href="/terms-and-conditions" className="hover:text-[var(--forest-green)] hover:translate-x-2 inline-block transition-transform duration-300">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">Contact Us</h3>
            <p className="text-sm">
              <span className="font-bold block mb-1">Paradise Bliss Tours Pvt Ltd – Haridwar</span>
              2nd Floor Plaza Complex, Chandra Charya Chowk, Haridwar, Uttarakhand -249401<br />
              <span className="hover:text-[var(--forest-green)] transition-colors duration-300">Mobile: +91-8449000181</span>
            </p>
            <p className="text-sm mt-4">
              <span className="font-bold block mb-1">Paradise Bliss Tours Pvt Ltd – Bengaluru</span>
              TF-2, CJN Heritage, A.Narayanapura, Mahadevpura, Bengaluru, Karnataka -560016  <br />
              <span className="hover:text-[var(--forest-green)] transition-colors duration-300">Mobile: +91-8459000182</span>
            </p>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-12 text-sm flex flex-col items-center border-t border-gray-200 pt-8">
  {/* Centered for all screen sizes */}
  <p className="hover:text-[var(--forest-green)] transition-colors duration-300">
    © {new Date().getFullYear()} Paradise Bliss Tour All Rights Reserved.
  </p>
  {/* Below the copyright text */}
  <p className="mt-2">
    Designed and developed by <a href="https://thecraftsync.com" className="font-medium text-[var(--forest-green)] hover:text-yellow-600 underline decoration-dotted underline-offset-4 hover:decoration-solid transition-all duration-300">TheCraftSync.com</a>
  </p>
</div>
      </div>
    </footer>
  );
};

export default Footer;