import { internationalSEO } from "../../seo/internationalseo";
import InternationalClient from "./internationalclient";

/* ✅ REQUIRED FOR STATIC EXPORT */
export function generateStaticParams() {
  return Object.keys(internationalSEO).map((slug) => ({ slug }));
}

/* ✅ DYNAMIC SEO */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const seo = internationalSEO[slug];

  return {
    title: seo?.title || "International Tours | Paradise Bliss Tours",
    description:
      seo?.description ||
      "Explore the world with Paradise Bliss Tours international tour packages.",
    keywords: seo?.keywords,
    alternates: {
      canonical:
        seo?.canonical ||
        `https://www.paradiseblisstours.com/international/${params.slug}/`,
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  return <InternationalClient slug={slug} />;
}