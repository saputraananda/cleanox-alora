import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cleanox.co.id"),
  title: "Cleanox | Jasa Cleaning Service Profesional Rumah & Kantor Jabodetabek",
  description:
    "Cleanox menghadirkan jasa cleaning service profesional berkualitas tinggi untuk rumah, apartemen, kantor, & ruko di Jakarta, Bekasi, Depok, Bogor, Cibubur, dan Sentul.",
  keywords: [
    "cleaning service jakarta", 
    "jasa cleaning service bekasi", 
    "jasa cleaning rumah cibubur", 
    "deep cleaning depok", 
    "office cleaning bogor", 
    "cleanox cleaning service"
  ],
  authors: [{ name: "Cleanox" }],
  creator: "Cleanox",
  publisher: "Cleanox",
  alternates: {
    canonical: "https://cleanox.co.id/",
  },
  formatDetection: { email: false, address: false, telephone: false },
  robots: {
    index: true,
    follow: true,
    googleBot: { 
      index: true, 
      follow: true, 
      "max-video-preview": -1, 
      "max-image-preview": "large", 
      "max-snippet": -1 
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://cleanox.co.id",
    title: "Cleanox | Jasa Cleaning Service Profesional Rumah & Kantor",
    description: "Cleanox menghadirkan jasa cleaning service profesional untuk rumah, apartemen, kantor, & area komersial di Jabodetabek.",
    siteName: "Cleanox",
    images: [
      {
        url: "https://cleanox.co.id/logo-cleanox.webp",
        width: 800,
        height: 600,
        alt: "Cleanox Logo",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Cleanox | Jasa Cleaning Service Profesional Rumah & Kantor",
    description: "Cleanox menghadirkan jasa cleaning service profesional untuk rumah, apartemen, kantor, & area komersial di Jabodetabek.",
    images: ["https://cleanox.co.id/logo-cleanox.webp"]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        {/* Favicons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/favicons/apple-touch-icon.webp" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicons/favicon-32x32.webp" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/favicons/favicon-16x16.webp" />
        <link rel="manifest" href="/assets/images/favicons/site.webmanifest" />

        {/* Google Analytics 4 (GA4) Placeholder */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script 
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `
          }}
        />

        {/* Google Tag Manager (GTM) Placeholder */}
        <script 
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-XXXXXXX');
            `
          }}
        />

        {/* Structured Data JSON-LD Schemas */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Cleanox",
              "image": "https://cleanox.co.id/logo-cleanox.webp",
              "@id": "https://cleanox.co.id/#localbusiness",
              "url": "https://cleanox.co.id/",
              "telephone": "+6285122333381",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Raffles Hills Blok T11 No.18",
                "addressLocality": "Bekasi",
                "addressRegion": "Jawa Barat",
                "postalCode": "17435",
                "addressCountry": "ID"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -6.3607736,
                "longitude": 106.9157404
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"
                  ],
                  "opens": "08:00",
                  "closes": "17:00"
                }
              ],
              "sameAs": [
                "https://instagram.com/",
                "https://wa.me/6285122333381",
                "https://maps.google.com"
              ],
              "areaServed": [
                "Jakarta", "Bekasi", "Depok", "Bogor", "Cibubur", "Gunung Putri", "Jatisampurna", "Sentul"
              ]
            })
          }}
        />

        {/* Vendors styles */}
        <link rel="stylesheet" href="/assets/vendors/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/vendors/animate/animate.min.css" />
        <link rel="stylesheet" href="/assets/vendors/animate/custom-animate.css" />
        <link rel="stylesheet" href="/assets/vendors/fontawesome/css/all.min.css" />
        <link rel="stylesheet" href="/assets/vendors/jarallax/jarallax.css" />
        <link rel="stylesheet" href="/assets/vendors/jquery-magnific-popup/jquery.magnific-popup.css" />
        <link rel="stylesheet" href="/assets/vendors/odometer/odometer.min.css" />
        <link rel="stylesheet" href="/assets/vendors/swiper/swiper.min.css" />
        <link rel="stylesheet" href="/assets/vendors/cleniq-icons/style.css" />
        <link rel="stylesheet" href="/assets/vendors/owl-carousel/owl.carousel.min.css" />
        <link rel="stylesheet" href="/assets/vendors/owl-carousel/owl.theme.default.min.css" />
        <link rel="stylesheet" href="/assets/vendors/bootstrap-select/css/bootstrap-select.min.css" />
        <link rel="stylesheet" href="/assets/vendors/jquery-ui/jquery-ui.css" />
        <link rel="stylesheet" href="/assets/vendors/nice-select/nice-select.css" />
        <link rel="stylesheet" href="/assets/vendors/reey-font/stylesheet.css" />

        {/* Template styles */}
        <link rel="stylesheet" href="/assets/css/cleniq.css" />
        <link rel="stylesheet" href="/assets/css/cleniq-responsive.css" />
      </head>
      <body className={cn("min-h-screen antialiased custom-cursor", poppins.variable)}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {children}
      </body>
    </html>
  );
}
