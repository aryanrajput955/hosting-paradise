"use client";
import dynamic from "next/dynamic";

const pages = {
  ladakh: dynamic(() => import("../ladakh/LadakhClient")),
  kashmir: dynamic(() => import("../kashmir/KashmirClient")),
  uttarakhand: dynamic(() => import("../uttarakhand/UttarakhandClient")),
  kerala: dynamic(() => import("../kerala/KeralaClient")),
  rajasthan: dynamic(() => import("../rajasthan/RajasthanClien")),
  sikkim: dynamic(() => import("../sikkim/SikkimClient")),
  spiti: dynamic(() => import("../spiti/SpitiClient")),
  himachal: dynamic(() => import("../himachal/HimachalClient")),
};

export default function DestinationClient({ slug }) {
  const PageComponent = pages[slug];

  if (!PageComponent) return <div>Destination not found</div>;

  return <PageComponent />;
}
