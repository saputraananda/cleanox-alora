"use client";

import { WebSiteJsonLdProps } from "@/types/seo";
import Script from "next/script";

export default function WebSiteJsonLd({ name, url, description, potentialAction }: WebSiteJsonLdProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name,
    url,
    description,
    potentialAction,
  };

  return <Script id="website-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
