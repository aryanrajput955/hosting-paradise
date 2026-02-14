import { destinationsSEO } from "../../seo/destinationseo";
import DestinationClient from "./DestinationClient";

/* ✅ REQUIRED FOR STATIC EXPORT */
export function generateStaticParams() {
  return Object.keys(destinationsSEO).map((slug) => ({
    slug,
  }));
}

/* ✅ DYNAMIC SEO */
export function generateMetadata({ params }) {
  const seo = destinationsSEO[params.slug];

  return {
    title: seo?.title || "Destinations | Paradise Bliss Tours",
    description:
      seo?.description ||
      "Explore India's best travel destinations with Paradise Bliss Tours.",
    keywords: seo?.keywords || "travel, tours, destinations, India",
    alternates: {
      canonical:
        seo?.canonical ||
        `https://www.paradiseblisstours.com/destinations/${params.slug}/`,
    },
  };
}

/* ✅ PAGE RENDER */
export default function Page({ params }) {
  return <DestinationClient slug={params.slug} />;
}
