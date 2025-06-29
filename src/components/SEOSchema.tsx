import { useEffect } from "react";

interface SEOSchemaProps {
  type: "LocalBusiness" | "Product" | "Service";
  data: any;
}

const SEOSchema: React.FC<SEOSchemaProps> = ({ type, data }) => {
  useEffect(() => {
    let schema;

    switch (type) {
      case "LocalBusiness":
        schema = {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          ...data,
        };
        break;
      case "Product":
        schema = {
          "@context": "https://schema.org",
          "@type": "Product",
          ...data,
        };
        break;
      case "Service":
        schema = {
          "@context": "https://schema.org",
          "@type": "Service",
          ...data,
        };
        break;
      default:
        return;
    }

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [type, data]);

  return null;
};

export default SEOSchema;
