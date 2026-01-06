import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ImpactStats from "@/components/ImpactStats";
import Programs from "@/components/Programs";
import About from "@/components/About";
import Contact from "@/components/Contacts";
import Footer from "@/components/Footer";

// Optimized Metadata for SEO & Social Sharing
export const metadata = {
  title: "Vidyalok Welfare Foundation | Empowering Lives Through Education",
  description:
    "Vidyalok Welfare Foundation provides quality education, women empowerment, and healthcare initiatives to underprivileged communities in India. Join us in transforming futures.",
  keywords: [
    "NGO in Bhopal",
    "Welfare Foundation India",
    "Vidyalok Welfare Foundation",
    "Donate for education India",
    "Volunteer opportunities Bhopal",
    "Child welfare NGO",
  ],
  alternates: {
    canonical: "https://vidyalok.org",
  },
  openGraph: {
    title: "Vidyalok Education Foundation | Transforming Futures",
    description: "Nurturing minds and transforming lives through holistic development programs.",
    url: "https://vidyalok.org",
    siteName: "Vidyalok Foundation",
    images: [
      {
        url: "/og-image.jpg", // Create a 1200x630 image for social previews
        width: 1200,
        height: 630,
        alt: "Children at Vidyalok Welfare Foundation",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vidyalok Education Foundation",
    description: "Empowering underprivileged children through quality Welfare.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function HomePage() {
  // Structured Data (JSON-LD) for NGO Rich Results
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NGO",
    "name": "Vidyalok Welfare Foundation",
    "alternateName": "Vidyalok Foundation",
    "url": "https://vidyalok.org",
    "logo": "https://vidyalok.org/logo.jpeg",
    "description": "A non-profit organization dedicated to providing quality Welfare and holistic development to children in India.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-8319783509",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["en", "Hindi"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "CLP ward , katni , Madhya Pradesh",
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
    <div className="min-h-screen bg-background">
      {/* Inject Structured Data for Search Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Header />
      <main>
        {/* Each section uses specific IDs for anchor link navigation */}
        <Hero />
        <ImpactStats />
        <About />
        <Programs />
        <Contact/>
      </main>
      <Footer />
    </div>
  );
}