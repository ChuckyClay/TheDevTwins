import { Helmet } from "react-helmet-async";

import { siteConfig } from "@/constants/site";

export default function SEO({
  title,
  description,
  keywords = [],
  image = "/og-image.png",
  url = "",
}) {
  const pageTitle = title
    ? `${title} | ${siteConfig.name}`
    : siteConfig.name;

  const pageDescription =
    description || siteConfig.description;

  const pageUrl = `${siteConfig.url}${url}`;

  return (
    <Helmet>
      <title>{pageTitle}</title>

      <meta
        name="description"
        content={pageDescription}
      />

      <meta
        name="keywords"
        content={keywords.join(", ")}
      />

      <link
        rel="canonical"
        href={pageUrl}
      />

      {/* Open Graph */}

      <meta property="og:type" content="website" />

      <meta property="og:title" content={pageTitle} />

      <meta
        property="og:description"
        content={pageDescription}
      />

      <meta property="og:url" content={pageUrl} />

      <meta
        property="og:image"
        content={`${siteConfig.url}${image}`}
      />

      {/* Twitter */}

      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={pageTitle}
      />

      <meta
        name="twitter:description"
        content={pageDescription}
      />

      <meta
        name="twitter:image"
        content={`${siteConfig.url}${image}`}
      />
    </Helmet>
  );
}