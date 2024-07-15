
import { Helmet } from 'react-helmet';

function MyComponent() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "musicfy",
    "url": "https://arbab.shop"
  };

  return (
    <div>
      <Helmet>
        
        <title>Musicfy - Your Music Destination</title>
        <meta name="description" content="Discover and enjoy music on Musicfy. Explore new artists, albums, and playlists." />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <h1>Hello, world</h1>
    </div>
  );
}

export default MyComponent;
