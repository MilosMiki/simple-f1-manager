import ReactCountryFlag from "react-country-flag";
import { countries } from 'country-code-lookup';

// Helper function to convert country name to ISO code
const getCountryCode = (countryName) => {
  if (!countryName) return null;
  const country = countries.find(c => 
    c.country.toLowerCase() === countryName.toLowerCase() ||
    (c.iso2 && c.iso2.toLowerCase() === countryName.toLowerCase()) ||
    (c.iso3 && c.iso3.toLowerCase() === countryName.toLowerCase())
  );
  return country?.iso2 || null;
};

export const getCountryFlag = (country) => {
  const countryCode = getCountryCode(country);
  if (!countryCode) {
    return `(${country})`; // Fallback to country name if code not found
  }
  return (
    <ReactCountryFlag
      countryCode={countryCode}
      svg
      style={{
        width: '1.5em',
        height: '1.5em',
      }}
      title={country}
    />
  );
};