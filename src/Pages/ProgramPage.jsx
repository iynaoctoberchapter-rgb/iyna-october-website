import React from "react";
import HeroComponent from "../Components/ProgramPage/HeroComponent";
import FirstSectionComponent from "../Components/ProgramPage/FirstSectionComponent";
import FourthSectionComponent from "../Components/ProgramPage/FourthSectionComponent";
import FifthSectionComponent from "../Components/ProgramPage/FifthSectionComponent";
import { Helmet } from 'react-helmet';


function ProgramPage() {
  const pageTitle = "Our Neuroscience Program | IYNA October Chapter";
  const pageDescription = "Explore our comprehensive neuroscience program with events, workshops, and research opportunities for young neuroscientists in Cairo.";
  const pageUrl = "https://iynaoct.com/Program";
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
            "name": "IYNA October Chapter - Neuroscience Program",
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
                <FourthSectionComponent />
                <FifthSectionComponent />
            </div>
        </section>
    </React.Fragment>
  );
}

export default ProgramPage;