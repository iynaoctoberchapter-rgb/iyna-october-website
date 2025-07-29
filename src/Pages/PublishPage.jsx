import React from "react";
import FifthSectionComponent from '../Components/PublishPage/FifthSectionComponent';
import FirstSectionComponent from '../Components/PublishPage/FirstSectionComponent';
import FourthSectionComponent from '../Components/PublishPage/FourthSectionComponent';
import HeroComponent from '../Components/PublishPage/HeroComponent';
import SecondSectionComponent from '../Components/PublishPage/SecondSectionComponent';
import ThirdSectionComponent from '../Components/PublishPage/ThirdSectionComponent';
import { Helmet } from 'react-helmet';

function PublishPage() {
  const pageTitle = "Publish with US | IYNA October Chapter";
  const pageDescription = "We welcome well-researched articles, insightful reviews, and thought-provoking essays that demonstrate curiosity, creativity, and critical thinking in the field of neuroscience. Selected submissions will be showcased to inspire and inform a community of young minds passionate about brain science.";
  const pageUrl = "https://iynaoct.com/Publish";
  const ogImage = "https://iynaoct.com/og-image.jpg";
  return (
    <React.Fragment>
      <Helmet>
        {/* Standard SEO */}
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={pageUrl} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={ogImage} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={ogImage} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "IYNA October Chapter - Publication",
            "url": pageUrl,
            "description": pageDescription,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Cairo",
              "addressRegion": "EG-C",
              "addressCountry": "EG"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "30.0444",
              "longitude": "31.2357"
            }
          })}
        </script>
      </Helmet>
      <section className="body">
        <div className="body-content has-hero">
          <HeroComponent />
          <FirstSectionComponent />
          <SecondSectionComponent />
          <ThirdSectionComponent />
          <FourthSectionComponent />
          <FifthSectionComponent />
        </div>
      </section>
      </React.Fragment>
  );
}

export default PublishPage;