"use client";
import dynamic from "next/dynamic";

const pages = {
  "kashmir-winter-extravaganza": dynamic(() =>
    import("../kashmir-winter-extravaganza/KashmirWinterClient.js")
  ),
  "kashmir-backpacking-odyssey": dynamic(() =>
    import("../kashmir-backpacking-odyssey/KashmirBackpackingClient.js")
  ),
  "kashmir-romantic-escape": dynamic(() =>
    import("../kashmir-romantic-escape/KashmirRomanticClient.js")
  ),
  "kashmir-winter-ultimate-circuit": dynamic(() =>
    import("../kashmir-winter-ultimate-circuit/KashmirWinterCircuitClient.js")
  ),
  "kashmir-summer-long-circuit": dynamic(() =>
    import("../kashmir-summer-long-circuit/KashmirSummerClient.js")
  ),

  "leh-to-turtuk-tour": dynamic(() =>
    import("../leh-to-turtuk-tour/LehTurtukClient.js")
  ),
  "ladakh-bike-trip": dynamic(() =>
    import("../ladakh-bike-trip/LadakhBikeClient.js")
  ),

  "uttarakhand-tour-package": dynamic(() =>
    import("../uttarakhand-tour-package/UttarakhandClient.js")
  ),

  "sikkim-tour-package": dynamic(() =>
    import("../sikkim-tour-package/SikkimClient.js")
  ),

  "kerala-backpacking-escape": dynamic(() =>
    import("../kerala-backpacking-escape/KeralaEscapeClient.js")
  ),
  "kerala-backpacking-tour": dynamic(() =>
    import("../kerala-backpacking-tour/KeralaBackpackingClient.js")
  ),
  "kerala-honeymoon-gateway": dynamic(() =>
    import("../kerala-honeymoon-gateway/KeralaHoneymoonClient.js")
  ),
  "kerala-romantic-honeymoon-gateway": dynamic(() =>
    import("../kerala-romantic-honeymoon-gateway/KeralaRomanticClient.js")
  ),

  "spiti-winter-tour-package": dynamic(() =>
    import("../spiti-winter-tour-package/SpitiWinterClient.js")
  ),
  "spiti-chandratal-tour-package": dynamic(() =>
    import("../spiti-chandratal-tour-package/SpitiChandraTalClient.js")
  ),
  "spiti-bike-tour-package": dynamic(() =>
    import("../spiti-bike-tour-package/SpitiBikeClient.js")
  ),
  "spitifullcircuit-tour-package": dynamic(() =>
    import("../spitifullcircuit-tour-package/SpitiFullCircuitClient.js")
  ),
  "spiti-tour-package": dynamic(() =>
    import("../spiti-tour-package/SpitiClient.js")
  ),

  "pushkarholi-tour-package": dynamic(() =>
    import("../pushkarholi-tour-package/PushkarHoliClient.js")
  ),
  "udaipur-mountabu-tour": dynamic(() =>
    import("../udaipur-mountabu-tour/UdaipurMountAbuClient.js")
  ),
  "jaipur-pushkar-tour-package": dynamic(() =>
    import("../jaipur-pushkar-tour-package/JaipurPushkarClient.js")
  ),
  "jaipur-rathambore-tour-package": dynamic(() =>
    import("../jaipur-rathambore-tour-package/JaipurRanthamboreClient.js")
  ),

  "mcleodganj-triund-trek": dynamic(() =>
    import("../mcleodganj-triund-trek/McleodganjTriundClient.js")
  ),
  "manali-kasol-sissu-tour": dynamic(() =>
    import("../manali-kasol-sissu-tour/ManaliKasolClient.js")
  ),
  "sangla-holi-tour": dynamic(() =>
    import("../sangla-holi-tour/SanglaClient.js")
  ),
  "kasol-tosh-trek": dynamic(() =>
    import("../kasol-tosh-trek/KasolToshClient.js")
  ),
};

export default function IndianToursClient({ slug }) {
  const PageComponent = pages[slug];
  if (!PageComponent) return <div>Tour not found</div>;
  return <PageComponent />;
}
