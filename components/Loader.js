'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Loader() {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Show loader on initial page load
    if (document.readyState !== 'complete') {
      setIsLoading(true);
    }

    const handlePageLoad = () => {
      setIsLoading(false);
    };

    window.addEventListener('load', handlePageLoad);

    return () => window.removeEventListener('load', handlePageLoad);
  }, []);

  useEffect(() => {
    // Show loader when pathname changes
    setIsLoading(true);
    
    // Hide loader after content loads
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (!isLoading) return null;

  return (
    <>
      <style jsx>{`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }
      `}</style>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
        <div className="text-center">
          <div
            className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-green-600 mx-auto"
          ></div>
          <h2 className="text-zinc-900 dark:text-white mt-4">Loading...</h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            Your adventure is about to begin
          </p>
        </div>
      </div>
    </>
  );
}
