"use client";

import { ReviewJsonLdProps } from "@/types/seo";
import Script from "next/script";

export default function ReviewJsonLd({ itemReviewed, reviewRating, author, reviewBody }: ReviewJsonLdProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed,
    reviewRating,
    author,
    reviewBody,
  };

  return <Script id="review-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
