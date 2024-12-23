import { HelmetProvider } from "react-helmet-async";

const HelmetSEO = () => {
  return (
    <HelmetProvider>
      <title>Milo Chambers - Full Stack Developer</title>
      <meta
        name="description"
        content="Milo Chambers is a Full Stack Developer with expertise in React, Node.js, and modern web technologies. Explore my portfolio to learn more."
      />
      <meta
        name="keywords"
        content="Milo Chambers, Full Stack Developer, React, JavaScript, Node.js, Portfolio, Developer"
      />
      <meta name="author" content="Milo Chambers" />

      {/* Open Graph Meta Tags for Social Media */}
      <meta
        property="og:title"
        content="Milo Chambers - Full Stack Developer"
      />
      <meta
        property="og:description"
        content="Explore Milo Chambers' portfolio showcasing his work as a Full-Stack Developer."
      />
      <meta property="og:image" content="/mc-website-img.png" />
      <meta property="og:url" content="https://milochambers.co.uk" />
      <meta property="og:type" content="website" />

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Milo Chambers",
              "jobTitle": "Full-Stack Developer",
              "url": "https://milochambers.co.uk",
              "sameAs": [
                "https://www.linkedin.com/in/milochambers/",
                "https://github.com/milochambers"
              ],
              "description": "Milo Chambers is a Full-Stack Developer specializing in React, Node.js, and modern web technologies."
            }
          `}
      </script>
    </HelmetProvider>
  );
};

export default HelmetSEO;
