import { indianToursSEO } from "../../seo/indianToursSeo";
import IndianToursClient from "./IndianToursClient";

/* REQUIRED FOR STATIC EXPORT */
export function generateStaticParams() {
  return Object.keys(indianToursSEO).map((slug) => ({ slug }));
}

/* DYNAMIC SEO */
export function generateMetadata({ params }) {
  const seo = indianToursSEO[params.slug];

  return {
    title: seo?.title || "Indian Tours | Paradise Bliss Tours",
    description:
      seo?.description ||
      "Explore curated Indian tour packages with Paradise Bliss Tours.",
    keywords: seo?.keywords,
    alternates: {
      canonical:
        seo?.canonical ||
        `https://www.paradiseblisstours.com/indian-tours/${params.slug}/`,
    },
  };
}

export default function Page({ params }) {
  return <IndianToursClient slug={params.slug} />;
}
