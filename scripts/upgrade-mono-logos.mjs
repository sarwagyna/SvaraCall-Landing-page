import fs from "node:fs";
import path from "node:path";

const dir = "public/brand/integrations";

function logo(hex, inner) {
  return `<svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 40 40" fill="none">
  <rect width="40" height="40" rx="10" fill="#${hex}"/>
  ${inner}
</svg>
`;
}

const logos = {
  leadsquared: logo(
    "F15A29",
    `<path d="M8 28V12h6.5c3.6 0 5.8 1.9 5.8 4.8 0 2.1-1.1 3.6-3 4.3L22 28h-4.2l-4-6.2H12.5V28H8zm4.5-9.5h2c1.7 0 2.7-.8 2.7-2.2S16.2 14 14.5 14H12.5v4.5z" fill="#fff"/>`,
  ),
  kylas: logo(
    "5B5FC7",
    `<circle cx="20" cy="20" r="8" stroke="#fff" stroke-width="3"/><circle cx="20" cy="20" r="3" fill="#fff"/>`,
  ),
  gohighlevel: logo(
    "F5C344",
    `<path d="M10 26V14l10-6 10 6v12l-10 6-10-6zm10-2.5l5-3v-5l-5 3-5-3v5l5 3z" fill="#1a1a1a"/>`,
  ),
  pabbly: logo(
    "2D6CDF",
    `<path d="M9 11h10.5c4 0 6.5 2.2 6.5 5.6 0 3.4-2.5 5.6-6.5 5.6H14v6.3H9V11zm5 7.5h5c1.7 0 2.7-.9 2.7-2s-1-2-2.7-2H14v4z" fill="#fff"/>`,
  ),
  integrately: logo(
    "FF6B35",
    `<rect x="9" y="9" width="8" height="8" rx="2" fill="#fff"/><rect x="23" y="9" width="8" height="8" rx="2" fill="#fff"/><rect x="9" y="23" width="8" height="8" rx="2" fill="#fff"/><rect x="23" y="23" width="8" height="8" rx="2" fill="#fff"/>`,
  ),
  workato: logo(
    "1F6FEB",
    `<path d="M8 28l4.5-16H17l2.2 9.2L21.5 12H26l4.5 16h-4.3l-2.5-10-2.6 10h-3.8l-2.6-10-2.5 10H8z" fill="#fff"/>`,
  ),
  unicommerce: logo(
    "00A3E0",
    `<path d="M8 12h24v4H22v12h-4V16H8v-4z" fill="#fff"/><circle cx="28" cy="26" r="4" fill="#fff"/>`,
  ),
  easyecom: logo(
    "FF6A00",
    `<path d="M8 12h18c3.3 0 6 2.5 6 5.8S29.3 24 26 24H14v4H8V12zm6 8h11.5c1.5 0 2.5-1 2.5-2.2S26.9 16 25.5 16H14v4z" fill="#fff"/>`,
  ),
  servicenow: logo(
    "81B5A1",
    `<path d="M20 8c4.4 0 8 3.1 8 7.2 0 2.4-1.2 4.4-3.1 5.6L26 32l-6-4.2L14 32l1.1-11.2C13.2 19.6 12 17.6 12 15.2 12 11.1 15.6 8 20 8zm0 4c-1.9 0-3.3 1.3-3.3 2.9S18.1 18 20 18s3.3-1.4 3.3-3.1S21.9 12 20 12z" fill="#fff"/>`,
  ),
  msg91: logo(
    "1A73E8",
    `<rect x="7" y="10" width="26" height="16" rx="4" fill="#fff"/><path d="M12 18h10M12 22h7" stroke="#1A73E8" stroke-width="2.2" stroke-linecap="round"/><circle cx="29" cy="18" r="2" fill="#1A73E8"/>`,
  ),
  "gupshup-sms": logo(
    "00B67A",
    `<path d="M8 10h18a4 4 0 014 4v6a4 4 0 01-4 4H16l-5 5v-5H8a4 4 0 01-4-4v-6a4 4 0 014-4z" fill="#fff"/><circle cx="14" cy="17" r="1.6" fill="#00B67A"/><circle cx="20" cy="17" r="1.6" fill="#00B67A"/><circle cx="26" cy="17" r="1.6" fill="#00B67A"/>`,
  ),
  "gupshup-wa": logo(
    "00B67A",
    `<path d="M20 6C12.3 6 6 12.1 6 19.5c0 2.4.7 4.6 1.9 6.5L6 34l8.3-2.2c1.8.8 3.7 1.2 5.7 1.2 7.7 0 14-6.1 14-13.5S27.7 6 20 6z" fill="#fff"/>`,
  ),
  kaleyra: logo(
    "5B2EFF",
    `<path d="M10 28V12h4.2l6.2 9.5V12H25v16h-4.2L14.6 18.5V28H10z" fill="#fff"/>`,
  ),
  exotel: logo(
    "FF6B00",
    `<circle cx="20" cy="20" r="11" stroke="#fff" stroke-width="3"/><path d="M14 20c0-3.3 2.7-6 6-6" stroke="#fff" stroke-width="3" stroke-linecap="round"/><circle cx="20" cy="20" r="2.2" fill="#fff"/>`,
  ),
  "airtel-sip": logo(
    "E40000",
    `<path d="M20 8l10 22h-4.4l-1.8-4.2H16.2L14.4 30H10L20 8zm0 8.5l-2.4 5.8h4.8L20 16.5z" fill="#fff"/>`,
  ),
  knowlarity: logo(
    "00ADEF",
    `<path d="M8 12h6l6 8 6-8h6L24 22v6h-5v-6l-7-9.5L12 22v6H7v-6L8 12z" fill="#fff"/>`,
  ),
  wati: logo(
    "25D366",
    `<path d="M20 6C12.8 6 7 11.6 7 18.5c0 2.2.6 4.3 1.7 6.1L7 34l9.7-2.5c1.1.3 2.2.5 3.3.5 7.2 0 13-5.6 13-12.5S27.2 6 20 6z" fill="#fff"/><path d="M15 16h10M15 20h7M15 24h8" stroke="#25D366" stroke-width="2" stroke-linecap="round"/>`,
  ),
  interakt: logo(
    "5B4DFF",
    `<rect x="8" y="10" width="24" height="20" rx="5" fill="#fff"/><path d="M14 17h12M14 22h8" stroke="#5B4DFF" stroke-width="2.2" stroke-linecap="round"/>`,
  ),
  aisensy: logo(
    "7C3AED",
    `<path d="M20 7l11 26h-4.6l-1.9-4.8H15.5L13.6 33H9L20 7zm0 9.2l-2.6 6.5h5.2L20 16.2z" fill="#fff"/>`,
  ),
  cashfree: logo(
    "1E88E5",
    `<rect x="7" y="12" width="26" height="16" rx="3" fill="#fff"/><path d="M11 18h8M11 22h5" stroke="#1E88E5" stroke-width="2.2" stroke-linecap="round"/><circle cx="27" cy="20" r="3.5" stroke="#1E88E5" stroke-width="2"/>`,
  ),
  payu: logo(
    "4A90D9",
    `<path d="M9 10h11c4.4 0 7.5 2.5 7.5 6.3S24.4 23 20 23h-6.5v7H9V10zm4.5 9.2H19c2 0 3.2-1 3.2-2.8S21 13.6 19 13.6h-5.5v5.6z" fill="#fff"/>`,
  ),
  tally: logo(
    "1B4F72",
    `<path d="M8 10h24v4.2H24V30h-8V14.2H8V10z" fill="#fff"/>`,
  ),
  practo: logo(
    "28328C",
    `<circle cx="20" cy="20" r="12" fill="#fff"/><path d="M14 22c1.5 2.5 4 4 6 4s4.5-1.5 6-4" stroke="#28328C" stroke-width="2.2" stroke-linecap="round"/><circle cx="15.5" cy="16.5" r="1.8" fill="#28328C"/><circle cx="24.5" cy="16.5" r="1.8" fill="#28328C"/>`,
  ),
  healthplix: logo(
    "00A3A1",
    `<path d="M17 8h6v9h9v6h-9v9h-6v-9H8v-6h9V8z" fill="#fff"/>`,
  ),
  epic: logo(
    "C8102E",
    `<path d="M8 10h18c3 0 5.5 2 5.5 5.2S29 20.5 26 20.5H14.5V30H8V10zm6.5 6.8H25c1.2 0 2-.8 2-1.8s-.8-1.8-2-1.8H14.5v3.6z" fill="#fff"/>`,
  ),
  drchrono: logo(
    "00A3E0",
    `<path d="M12 8h16v4.5H18.5v15H13V12.5H12V8z" fill="#fff"/><circle cx="26" cy="26" r="5" stroke="#fff" stroke-width="3"/>`,
  ),
  bitrix24: logo(
    "2FC6F6",
    `<circle cx="14" cy="16" r="5" fill="#fff"/><circle cx="26" cy="16" r="5" fill="#fff"/><circle cx="20" cy="26" r="5" fill="#fff"/>`,
  ),
  close: logo(
    "1A1A1A",
    `<path d="M10 12.5L12.5 10 20 17.5 27.5 10 30 12.5 22.5 20 30 27.5 27.5 30 20 22.5 12.5 30 10 27.5 17.5 20 10 12.5z" fill="#fff"/>`,
  ),
  copper: logo(
    "F15A29",
    `<circle cx="20" cy="20" r="11" fill="#fff"/><circle cx="20" cy="20" r="6" fill="#F15A29"/><circle cx="20" cy="20" r="2.5" fill="#fff"/>`,
  ),
  magento: logo(
    "EE672F",
    `<path d="M20 5L6 12v11l14 8 14-8V12L20 5zm0 4.2l8.5 4.3v6.8L20 24.8l-8.5-4.5v-6.8L20 9.2z" fill="#fff"/>`,
  ),
};

for (const [id, svg] of Object.entries(logos)) {
  fs.writeFileSync(path.join(dir, `${id}.svg`), svg);
}

console.log("updated", Object.keys(logos).length);
