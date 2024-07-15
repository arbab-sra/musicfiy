import React from 'react';
import { Helmet } from 'react-helmet';

function MyComponent() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "My Website",
    "url": "http://mywebsite.com"
  };

  return (
    <div>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <h1>Hello, world!</h1>
    </div>
  );
}
export default MyComponent