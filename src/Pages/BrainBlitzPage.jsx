import React from "react";
import HeroComponent from "../Components/BrainBlitzPage/HeroComponent";
import FirstSectionComponent from "../Components/BrainBlitzPage/FirstSectionComponent";
import WhyComponent from "../Components/BrainBlitzPage/WhyComponent";
import SecondSectionComponent from "../Components/BrainBlitzPage/SecondSectionComponent";
import ThirdSectionComponent from "../Components/BrainBlitzPage/ThirdSectionComponent";
import FourthSectionComponent from "../Components/BrainBlitzPage/FourthSectionComponent";
import FifthSectionComponent from "../Components/BrainBlitzPage/FifthSectionComponent";
import CompetitionComponent from "../Components/BrainBlitzPage/CompetionComponent";
import { Helmet } from 'react-helmet';
import TrainingExamsComponent from "../Components/BrainBlitzPage/TrainingExamsComponent";

function BrainBlitzPage() {
  const pageTitle = "BrainBliTz Competition | IYNA October Chapter";
  const pageDescription = "Brain Blitz is a high school neuroscience competition destined for nurturing youth skills in neuroscience. It grants high school students the opportunity to showcase their talents and enrich their knowledge in neuroscience";
  const pageUrl = "https://iynaoct.com/BrainBlitz";
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
            "name": "IYNA October Chapter - BrainBliTz Competition",
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
                 <WhyComponent />
                 <SecondSectionComponent />
                 <ThirdSectionComponent />
                 <FourthSectionComponent />
                  <TrainingExamsComponent />
                 <FifthSectionComponent />
                 <CompetitionComponent />
            </div>
        </section>
    </React.Fragment>
  );
}

export default BrainBlitzPage;