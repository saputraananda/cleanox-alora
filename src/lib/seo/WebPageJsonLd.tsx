"use client";

import { WebPageJsonLdProps } from "@/types/seo";
import Script from "next/script";

export default function WebPageJsonLd({ name, description, url, datePublished, dateModified, author }: WebPageJsonLdProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url,
    datePublished,
    dateModified,
    author,
  };

  return <Script id="webpage-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
