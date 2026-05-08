import React from 'react';
import { Helmet } from 'react-helmet-async';

export const SEO = ({ title, description, ogImage, ogType = 'website' }) => {
  const defaultTitle = 'CodeShastra - Practical Coding Platform';
  const defaultDesc = 'Bridge the gap between theoretical knowledge and practical coding skills with CodeShastra.';
  
  const siteTitle = title ? `${title} | CodeShastra` : defaultTitle;
  const siteDesc = description || defaultDesc;

  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={siteDesc} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDesc} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDesc} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
    </Helmet>
  );
};

export default SEO;
