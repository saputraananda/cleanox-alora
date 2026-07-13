"use client";

import { OrganizationJsonLdProps } from "@/types/seo";
import Script from "next/script";

export default function OrganizationJsonLd({
  name,
  url,
  logo,
  sameAs,
  description,
  email,
  telephone,
  address,
}: OrganizationJsonLdProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
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
  };

  return <Script id="organization-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
