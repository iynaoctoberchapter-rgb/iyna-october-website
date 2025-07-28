import HeroComponent from '../Components/HomePage/HeroComponent';
import BodyComponent from '../Components/HomePage/BodyComponent';
import React from 'react';
import { Helmet } from 'react-helmet';

export default function HomePage() {
  return (
    <React.Fragment>
      <Helmet>
        <meta name="robots" content="index, follow" />
<meta name="googlebot" content="index, follow" />
<meta name="google" content="nositelinkssearchbox" />
<meta name="google-site-verification" content="your_verification_code" />

<link rel="canonical" href="https://iynaoct.com" />

<meta name="language" content="English" />
<meta http-equiv="content-language" content="en" />

<meta name="geo.region" content="EG-C" />  
<meta name="geo.placename" content="Cairo" />  
<meta name="geo.position" content="30.0444;31.2357" />
<meta name="ICBM" content="30.0444, 31.2357" />  

<meta property="og:type" content="website" />
<meta property="og:url" content="https://iynaoct.com" />
<meta property="og:title" content="IYNA October Chapter ● Home" />
<meta property="og:description" content="Discover the future of neuroscience. We are a group of young neuroscientists who are passionately dedicated to help the next generation of neuroscientists, hoping to achieve a better understanding of neuroscience through our events, websites, sessions, and research papers." />
<meta property="og:image" content="https://iyna-oct.com/og-img.jpg" />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:url" content="https://iynaoct.com" />
<meta name="twitter:title" content="IYNA October Chapter ● Home" />
<meta name="twitter:description" content="Your page description" />
<meta name="twitter:image" content="https://iynaoct.com/og-img.jpg" />

<meta name="author" content="Eyad Ashraf, IYNA October Chapter Developer" />
<meta name="publisher" content="Eyad Ashraf, IYNA October Chapter Developer" />


<meta name="theme-color" content="#950a55" />
<meta name="mobile-web-app-capable" content="yes" />

<meta name="apple-mobile-web-app-title" content="IYNA Oct. Chapter" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
<link rel="apple-touch-icon" href="https://iynaoct.com/apple-touch-icon.png" />
      </Helmet>
      <HeroComponent />
      <BodyComponent />
      </React.Fragment>
  );
}
