"use client";

import { FAQJsonLdProps } from "@/types/seo";
import Script from "next/script";

export default function FAQJsonLd({ mainEntity }: FAQJsonLdProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity,
  };

  return <Script id="faq-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
