"use client";
import dynamic from "next/dynamic";

const pages = {
  "dubai-tour-packages": dynamic(() =>
    import("../dubai-tour-packages/DubaiClient.js")
  ),
  "bali-tour-packages": dynamic(() =>
    import("../bali-tour-packages/BaliClient.js")
  ),
  "vietnam-tour-packages": dynamic(() =>
    import("../vietnam-tour-packages/VietnamClient.js")
  ),
  "thailand-tour-packages": dynamic(() =>
    import("../thailand-tour-packages/ThailandClient.js")
  ),
  "georgia-tour-packages": dynamic(() =>
    import("../georgia-tour-packages/GeorgiaClient.js")
  ),
  "bhutan-tour-packages": dynamic(() =>
    import("../bhutan-tour-packages/BhutanClient.js")
  ),
  "japan-tour-packages": dynamic(() =>
    import("../japan-tour-packages/JapanClient.js")
  ),
  "europe-tour-packages": dynamic(() =>
    import("../europe-tour-packages/EuropeClient.js")
  ),
  "almaty-tour-packages": dynamic(() =>
    import("../almaty-tour-packages/AlmatyClient.js")
  ),
};

export default function InternationalClient({ slug }) {
  const PageComponent = pages[slug];
  if (!PageComponent) return <div>Tour not found</div>;
  return <PageComponent />;
}
