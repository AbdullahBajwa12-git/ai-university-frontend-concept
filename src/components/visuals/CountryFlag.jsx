import React from 'react';

// Maps country codes to the local SVG assets
const FLAG_MAP = {
  'GB': () => import('../../assets/flags/gb.svg'),
  'CA': () => import('../../assets/flags/ca.svg'),
  'AU': () => import('../../assets/flags/au.svg'),
  'US': () => import('../../assets/flags/us.svg'),
};

export const CountryFlag = ({ countryCode, name, className = "" }) => {
  const [svgSrc, setSvgSrc] = React.useState(null);

  React.useEffect(() => {
    if (FLAG_MAP[countryCode]) {
      FLAG_MAP[countryCode]()
        .then(mod => setSvgSrc(mod.default))
        .catch(console.error);
    }
  }, [countryCode]);

  if (!svgSrc) return <span className={`inline-block bg-bg-surface border border-border-subtle rounded-full ${className}`} aria-hidden="true" />;

  return (
    <img
      src={svgSrc}
      alt={`Flag of ${name}`}
      className={`inline-block object-cover rounded-full ${className}`}
      style={{ aspectRatio: '1/1' }}
    />
  );
};
