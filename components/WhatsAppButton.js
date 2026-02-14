'use client';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  return (
    <Link legacyBehavior
      href="https://wa.me/+918449000181"
      target="_blank"
      rel="noopener noreferrer"
    >
      <a className="fixed bottom-10 right-10 sm:right-10 bg-green-500 hover:bg-green-600 p-3 rounded-full shadow-lg z-50">
        <FaWhatsapp className="text-white text-3xl" />
      </a>
    </Link>
  );
}
