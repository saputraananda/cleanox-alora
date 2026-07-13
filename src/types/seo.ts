export interface OrganizationJsonLdProps {
  name: string;
  url: string;
  logo?: string;
  sameAs?: string[];
  description?: string;
  email?: string;
  telephone?: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
}

export interface LocalBusinessJsonLdProps extends OrganizationJsonLdProps {
  openingHours?: string[];
  priceRange?: string;
  areaServed?: string[];
  geo?: {
    latitude: number;
    longitude: number;
  };
}

export interface WebSiteJsonLdProps {
  name: string;
  url: string;
  description?: string;
  potentialAction?: {
    "@type": string;
    target: string;
    "query-input": string;
  };
}

export interface WebPageJsonLdProps {
  name: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  author?: {
    "@type": string;
    name: string;
  };
}

export interface FAQJsonLdProps {
  mainEntity: {
    "@type": "Question";
    name: string;
    acceptedAnswer: {
      "@type": "Answer";
      text: string;
    };
  }[];
}

export interface BreadcrumbJsonLdProps {
  itemListElement: {
    "@type": "ListItem";
    position: number;
    name: string;
    item?: string;
  }[];
}

export interface ReviewJsonLdProps {
  itemReviewed: {
    "@type": string;
    name: string;
  };
  reviewRating: {
    "@type": "Rating";
    ratingValue: string;
    bestRating?: string;
  };
  author: {
    "@type": "Person";
    name: string;
  };
  reviewBody?: string;
}

export interface ServiceJsonLdProps {
  provider: {
    "@type": string;
    name: string;
  };
  serviceType: string;
  areaServed?: string[];
  description?: string;
  offers?: {
    "@type": "Offer";
    price?: string;
    priceCurrency?: string;
  };
}
