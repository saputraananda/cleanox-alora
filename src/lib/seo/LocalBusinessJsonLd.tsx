"use client";

import { LocalBusinessJsonLdProps } from "@/types/seo";
import Script from "next/script";

export default function LocalBusinessJsonLd({
  name,
  url,
  logo,
  sameAs,
  description,
  email,
  telephone,
  address,
  openingHours,
  priceRange,
  areaServed,
  geo,
}: LocalBusinessJsonLdProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name,
    url,
    logo,
    sameAs,
    description,
    email,
    telephone,
    address: address
      ? {
          "@type": "PostalAddress",
          ...address,
        }
      : undefined,
    openingHours,
    priceRange,
    areaServed: areaServed?.map((area) => ({ "@type": "City", name: area })),
    geo: geo
      ? {
          "@type": "GeoCoordinates",
          ...geo,
        }
      : undefined,
  };

  return <Script id="local-business-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
