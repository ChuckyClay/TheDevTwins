import { siteConfig } from "@/constants/site";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",

  name: siteConfig.name,

  url: siteConfig.url,

  logo: `${siteConfig.url}/logo.png`,

  description: siteConfig.description,

  email: siteConfig.email,

  telephone: siteConfig.phone,

  address: {
    "@type": "PostalAddress",
    addressLocality: "Embu",
    addressCountry: "KE",
  },

  sameAs: [
    // Add your social media URLs later
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",

  "@type": "WebSite",

  name: siteConfig.name,

  url: siteConfig.url,

  description: siteConfig.description,

  inLanguage: "en",
};

export const localBusinessSchema = {
  "@context": "https://schema.org",

  "@type": "ProfessionalService",

  name: siteConfig.name,

  url: siteConfig.url,

  description: siteConfig.description,

  email: siteConfig.email,

  telephone: siteConfig.phone,

  areaServed: "Worldwide",

  address: {
    "@type": "PostalAddress",

    addressLocality: "Embu",

    addressCountry: "Kenya",
  },
};