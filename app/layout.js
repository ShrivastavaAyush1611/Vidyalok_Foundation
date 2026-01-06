import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// Centralized Metadata
// app/layout.js

export const metadata = {
  title: {
    default: "Vidyalok Welfare Foundation",
    template: "%s | Vidyalok Welfare Foundation",
  },
  description: "Vidyalok Welfare Foundation provides quality education, women empowerment, and healthcare initiatives to underprivileged communities in India.",
  keywords: [
    "NGO in Katni", 
    "Welfare Foundation India", 
    "Vidyalok Welfare Foundation", 
    "Donate for education India"
  ],
  alternates: { canonical: "https://vidyalok.org" },
  // 1. ADDED ICONS
  icons: {
    icon: "/logo.jpeg", 
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Vidyalok Welfare Foundation",
    description: "Nurturing minds and transforming lives through holistic development programs.",
    url: "https://vidyalok.org",
    siteName: "Vidyalok Foundation",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  // 2. ADDED TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title: "Vidyalok Welfare Foundation",
    description: "Empowering lives through education and healthcare.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NGO",
    "name": "Vidyalok Welfare Foundation",
    "alternateName": "Vidyalok Foundation",
    "url": "https://vidyalok.org",
    "logo": "https://vidyalok.org/logo.jpg", // Ensure this matches your public folder
    "description": "A non-profit organization dedicated to providing quality welfare and holistic development to children in India.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-8319783509",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["en", "Hindi"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "CLP ward, Katni",
      "addressLocality": "Katni",
      "addressRegion": "MP",
      "postalCode": "483501",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://facebook.com/vidyalok",
      "https://instagram.com/vidyalok",
      "https://linkedin.com/company/vidyalok"
    ]
  };

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}