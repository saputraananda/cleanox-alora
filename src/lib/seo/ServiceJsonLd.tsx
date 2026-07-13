"use client";

import { ServiceJsonLdProps } from "@/types/seo";
import Script from "next/script";

export default function ServiceJsonLd({ provider, serviceType, areaServed, description, offers }: ServiceJsonLdProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    provider,
    serviceType,
    areaServed: areaServed?.map((area) => ({ "@type": "City", name: area })),
    description,
    offers,
  };

  return <Script id="service-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
