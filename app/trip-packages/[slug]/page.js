import { tripPackagesSEO } from "../../seo/trippackagesseo";
import TripPackagesClient from "./TripPackagesClient";

/* ✅ REQUIRED FOR STATIC EXPORT */
export function generateStaticParams() {
  return Object.keys(tripPackagesSEO).map((slug) => ({ slug }));
}

/* ✅ DYNAMIC SEO */
export function generateMetadata({ params }) {
  const seo = tripPackagesSEO[params.slug];

  return {
    title: seo?.title || "Trip Packages | Paradise Bliss Tours",
    description:
      seo?.description ||
      "Explore curated trip packages with Paradise Bliss Tours.",
    keywords: seo?.keywords,
    alternates: {
      canonical:
        seo?.canonical ||
        `https://www.paradiseblisstours.com/trip-packages/${params.slug}/`,
    },
  };
}

export default function Page({ params }) {
  return <TripPackagesClient slug={params.slug} />;
}
