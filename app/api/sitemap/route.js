import { NextResponse } from 'next/server';

export async function GET() {
  // List your static routes here
  const staticPages = [
    '',
    'about',
    'contact',
    'privacy-policy',
    'terms-and-conditions',
    'testimonials',
    'trip-packages',
    'destinations',
    'indian-tours',
    'international',
    'blogs',
    'login',
    'signup',
  ];

  // You can add dynamic routes by fetching from your database or file system
  // Example: const blogSlugs = await getBlogSlugs();

  const baseUrl = 'https://yourdomain.com'; // Change to your actual domain

  let urls = staticPages.map(
    (page) => `<url><loc>${baseUrl}/${page}</loc></url>`
  );

  // Add dynamic URLs here if needed

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls.join('\n')}
    </urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
