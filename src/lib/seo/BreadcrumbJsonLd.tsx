"use client";

import { BreadcrumbJsonLdProps } from "@/types/seo";
import Script from "next/script";

export default function BreadcrumbJsonLd({ itemListElement }: BreadcrumbJsonLdProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement,
  };

  return <Script id="breadcrumb-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
