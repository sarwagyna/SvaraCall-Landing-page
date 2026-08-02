/**
 * Generates SVG logo files for every integration into public/brand/integrations/.
 * Uses current simple-icons, falls back to older CDN icons, then branded monograms.
 * Output path must stay under /brand/ so it does not collide with /integrations/[slug].
 */
import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";
import * as si from "simple-icons";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const outDir = path.join(root, "public", "brand", "integrations");

/** @type {Record<string, string | null>} */
const SLUG_MAP = {
  salesforce: "salesforce",
  hubspot: "hubspot",
  "zoho-crm": "zoho",
  pipedrive: "pipedrive",
  leadsquared: null,
  freshsales: "fresh",
  copper: "copper",
  kylas: null,
  close: "close",
  bitrix24: "bitrix24",
  dynamics: "microsoft",
  gohighlevel: null,
  zapier: "zapier",
  make: "make",
  n8n: "n8n",
  pabbly: null,
  integrately: null,
  workato: null,
  "google-calendar": "googlecalendar",
  calendly: "calendly",
  calcom: "caldotcom",
  "outlook-calendar": "microsoftoutlook",
  "zoho-calendar": "zoho",
  slack: "slack",
  teams: "microsoftteams",
  telegram: "telegram",
  discord: "discord",
  shopify: "shopify",
  woocommerce: "woocommerce",
  magento: "adobecommerce",
  unicommerce: null,
  easyecom: null,
  bigcommerce: "bigcommerce",
  wix: "wix",
  zendesk: "zendesk",
  freshdesk: "fresh",
  intercom: "intercom",
  "zoho-desk": "zoho",
  helpscout: "helpscout",
  servicenow: "servicenow",
  notion: "notion",
  airtable: "airtable",
  asana: "asana",
  clickup: "clickup",
  monday: "mondaydotcom",
  trello: "trello",
  jira: "jira",
  "google-sheets": "googlesheets",
  "twilio-sms": "twilio",
  msg91: null,
  "gupshup-sms": null,
  "plivo-sms": "plivo",
  kaleyra: null,
  exotel: null,
  "twilio-voice": "twilio",
  "plivo-voice": "plivo",
  telnyx: "telnyx",
  "airtel-sip": null,
  knowlarity: null,
  wati: null,
  interakt: null,
  "gupshup-wa": null,
  aisensy: null,
  "meta-cloud": "meta",
  razorpay: "razorpay",
  cashfree: null,
  payu: null,
  phonepe: "phonepe",
  stripe: "stripe",
  sendgrid: "sendgrid",
  mailgun: "mailgun",
  resend: "resend",
  ses: "amazonwebservices",
  gmail: "gmail",
  postgres: "postgresql",
  mysql: "mysql",
  mongodb: "mongodb",
  supabase: "supabase",
  firebase: "firebase",
  redis: "redis",
  "zoho-books": "zoho",
  tally: null,
  quickbooks: "quickbooks",
  xero: "xero",
  practo: null,
  healthplix: null,
  epic: null,
  drchrono: null,
  mixpanel: "mixpanel",
  amplitude: "amplitude",
  posthog: "posthog",
  ga4: "googleanalytics",
  metabase: "metabase",
  powerbi: "powerbi",
};

/** Brand colors for monogram fallbacks (and CDN tint). */
const COLORS = {
  salesforce: "00A1E0",
  hubspot: "FF7A59",
  "zoho-crm": "E42527",
  pipedrive: "017737",
  leadsquared: "F15A29",
  freshsales: "CF4B3A",
  copper: "F15A29",
  kylas: "5B5FC7",
  close: "1A1A1A",
  bitrix24: "2FC6F6",
  dynamics: "002050",
  gohighlevel: "F5C344",
  zapier: "FF4A00",
  make: "6D00CC",
  n8n: "EA4B71",
  pabbly: "2D6CDF",
  integrately: "FF6B35",
  workato: "1F6FEB",
  "google-calendar": "4285F4",
  calendly: "006BFF",
  calcom: "111111",
  "outlook-calendar": "0078D4",
  "zoho-calendar": "E42527",
  slack: "4A154B",
  teams: "6264A7",
  telegram: "26A5E4",
  discord: "5865F2",
  shopify: "95BF47",
  woocommerce: "96588A",
  magento: "EE672F",
  unicommerce: "00A3E0",
  easyecom: "FF6A00",
  bigcommerce: "34313F",
  wix: "0C6EFC",
  zendesk: "03363D",
  freshdesk: "CF4B3A",
  intercom: "6AFDEF",
  "zoho-desk": "E42527",
  helpscout: "1292EE",
  servicenow: "81B5A1",
  notion: "000000",
  airtable: "18BFFF",
  asana: "F06A6A",
  clickup: "7B68EE",
  monday: "FF3D57",
  trello: "0052CC",
  jira: "0052CC",
  "google-sheets": "34A853",
  "twilio-sms": "F22F46",
  msg91: "1A73E8",
  "gupshup-sms": "00B67A",
  "plivo-sms": "0A0A0A",
  kaleyra: "5B2EFF",
  exotel: "FF6B00",
  "twilio-voice": "F22F46",
  "plivo-voice": "0A0A0A",
  telnyx: "00C08B",
  "airtel-sip": "E40000",
  knowlarity: "00ADEF",
  wati: "25D366",
  interakt: "5B4DFF",
  "gupshup-wa": "00B67A",
  aisensy: "7C3AED",
  "meta-cloud": "0081FB",
  razorpay: "0C2451",
  cashfree: "1E88E5",
  payu: "4A90D9",
  phonepe: "5F259F",
  stripe: "635BFF",
  sendgrid: "1A82E2",
  mailgun: "F06B66",
  resend: "000000",
  ses: "FF9900",
  gmail: "EA4335",
  postgres: "4169E1",
  mysql: "4479A1",
  mongodb: "47A248",
  supabase: "3FCF8E",
  firebase: "FFCA28",
  redis: "FF4438",
  "zoho-books": "E42527",
  tally: "1B4F72",
  quickbooks: "2CA01C",
  xero: "13B5EA",
  practo: "28328C",
  healthplix: "00A3A1",
  epic: "C8102E",
  drchrono: "00A3E0",
  mixpanel: "7856FF",
  amplitude: "1D2B3A",
  posthog: "F9BD2B",
  ga4: "E37400",
  metabase: "509EE3",
  powerbi: "F2C811",
};

const bySlug = Object.fromEntries(
  Object.values(si)
    .filter((i) => i && typeof i === "object" && "slug" in i)
    .map((i) => [i.slug, i]),
);

function svgFromPath(pathD, hex) {
  return `<svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="#${hex}"><path d="${pathD}"/></svg>\n`;
}

function monogramSvg(label, hex) {
  const text = label.slice(0, 2).toUpperCase();
  return `<svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 40 40">
  <rect width="40" height="40" rx="10" fill="#${hex}"/>
  <text x="20" y="26" text-anchor="middle" fill="#ffffff" font-family="Inter,Segoe UI,Arial,sans-serif" font-size="14" font-weight="700">${text}</text>
</svg>
`;
}

/** Hand-tuned path logos for brands missing from current simple-icons. */
const CUSTOM_PATHS = {
  // Salesforce cloud (classic mark)
  salesforce:
    "M10.006 5.415a4.195 4.195 0 013.045-1.306c1.56 0 2.903.8 3.695 2.008.66-.293 1.398-.457 2.178-.457 2.9 0 5.25 2.35 5.25 5.25s-2.35 5.25-5.25 5.25H5.25A5.25 5.25 0 010 10.91a5.25 5.25 0 015.25-5.25c.63 0 1.23.11 1.785.315a4.18 4.18 0 012.971-.56z",
  // Slack
  slack:
    "M5.042 15.165a2.528 2.528 0 01-2.52 2.523A2.528 2.528 0 010 15.165a2.527 2.527 0 012.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 012.521-2.52 2.527 2.527 0 012.521 2.52v6.313A2.528 2.528 0 018.834 24a2.528 2.528 0 01-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 01-2.521-2.52A2.528 2.528 0 018.834 0a2.528 2.528 0 012.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 012.521 2.521 2.528 2.528 0 01-2.521 2.521H2.522A2.528 2.528 0 010 8.834a2.528 2.528 0 012.522-2.521h6.312zm10.122 2.521a2.528 2.528 0 012.522-2.521A2.528 2.528 0 0124 8.834a2.528 2.528 0 01-2.522 2.521h-2.522V8.834zm-1.268 0a2.528 2.528 0 01-2.523 2.521 2.527 2.527 0 01-2.52-2.521V2.522A2.527 2.527 0 0115.165 0a2.528 2.528 0 012.523 2.522v6.312zM15.165 18.958a2.528 2.528 0 012.523 2.52A2.528 2.528 0 0115.165 24a2.527 2.527 0 01-2.52-2.522v-2.52h2.52zm0-1.268a2.527 2.527 0 01-2.52-2.523 2.526 2.526 0 012.52-2.52h6.313A2.527 2.527 0 0124 15.165a2.528 2.528 0 01-2.522 2.523h-6.313z",
  // Twilio
  twilio:
    "M12 0C5.373 0 0 5.372 0 12s5.373 12 12 12c6.628 0 12-5.372 12-12S18.628 0 12 0zm.002 3.686a8.314 8.314 0 110 16.629 8.313 8.313 0 010-16.629zM8.52 8.475a1.65 1.65 0 100 3.3 1.65 1.65 0 000-3.3zm6.96 0a1.65 1.65 0 100 3.3 1.65 1.65 0 000-3.3zm-6.96 6.96a1.65 1.65 0 100 3.3 1.65 1.65 0 000-3.3zm6.96 0a1.65 1.65 0 100 3.3 1.65 1.65 0 000-3.3z",
  // Pipedrive
  pipedrive:
    "M12.001 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.629 0 12.001 0zm-.45 18.6H7.35V7.8h4.2c2.85 0 4.65 1.5 4.65 3.9 0 1.65-.9 2.85-2.4 3.45l2.85 3.45h-4.65l-2.25-2.85H11.55v2.85zm0-6.6H10.2V10.5h1.35c.9 0 1.5.45 1.5 1.2s-.6 1.3-1.5 1.3z",
  monday:
    "M0 15.598c0-1.24.99-2.25 2.25-2.25h.04c1.24 0 2.25.99 2.25 2.25v5.15A3.25 3.25 0 015.29 24H2.25A2.25 2.25 0 010 21.75v-6.152zm6.75-6.9c0-1.24.99-2.25 2.25-2.25h.04c1.24 0 2.25.99 2.25 2.25v12.05A3.25 3.25 0 0112.04 24H9A2.25 2.25 0 016.75 21.75V8.698zm6.75-5.4c0-1.24.99-2.25 2.25-2.25h.04c1.24 0 2.25.99 2.25 2.25v17.45A3.25 3.25 0 0118.79 24H15.75A2.25 2.25 0 0113.5 21.75V3.298zm6.75 9c0-1.24.99-2.25 2.25-2.25H22.5c1.24 0 2.25.99 2.25 2.25v9.45A3.25 3.25 0 0122.5 24h-3A2.25 2.25 0 0117.25 21.75v-9.452h3z",
  sendgrid:
    "M.8 0v24h22.4V0H.8zm18.9 4.8v4.8H13.2v4.8H8.4v4.8H4.1V4.8h15.6z",
  amplitude:
    "M12 0L1.5 24h5.4L12 10.8 17.1 24h5.4L12 0zm0 7.2L15.6 16.8h-7.2L12 7.2z",
  powerbi:
    "M12.5 2a1.5 1.5 0 00-1.5 1.5V20.5A1.5 1.5 0 0012.5 22h4A1.5 1.5 0 0018 20.5V3.5A1.5 1.5 0 0016.5 2h-4zM6 8a1.5 1.5 0 00-1.5 1.5V20.5A1.5 1.5 0 006 22h4a1.5 1.5 0 001.5-1.5V9.5A1.5 1.5 0 0010 8H6zm12.5-6A1.5 1.5 0 0017 3.5V20.5A1.5 1.5 0 0018.5 22H22a1.5 1.5 0 001.5-1.5V3.5A1.5 1.5 0 0022 2h-3.5zM2 13a1.5 1.5 0 00-1.5 1.5V20.5A1.5 1.5 0 002 22h4a1.5 1.5 0 001.5-1.5V14.5A1.5 1.5 0 006 13H2z",
  microsoftteams:
    "M20.625 8.5h-3.75V6.875A2.875 2.875 0 0014 4H6.875A2.875 2.875 0 004 6.875v10.25A2.875 2.875 0 006.875 20H14a2.875 2.875 0 002.875-2.875V15.5h3.75A1.875 1.875 0 0022.5 13.625v-3.25A1.875 1.875 0 0020.625 8.5zM9.5 15.5a3 3 0 113-3 3 3 0 01-3 3zm6.5 2.625A1.125 1.125 0 0114.875 19H6.875A1.125 1.125 0 015.75 17.875V6.875A1.125 1.125 0 016.875 5.75H14a1.125 1.125 0 011.125 1.125v11.25z",
  microsoftoutlook:
    "M24 7.387v10.478c0 .23-.08.428-.237.6a.813.813 0 01-.6.237h-8.4v-6.9l1.2.9c.15.1.33.15.52.15s.37-.05.52-.15l6.75-5.1V7.387H24zM2.4 4.8h10.2c.36 0 .66.12.9.36s.36.54.36.9v12.6c0 .36-.12.66-.36.9s-.54.36-.9.36H2.4c-.36 0-.66-.12-.9-.36s-.36-.54-.36-.9V6.06c0-.36.12-.66.36-.9s.54-.36.9-.36zm5.1 11.4c1.98 0 3.3-.78 3.3-2.4 0-.9-.48-1.56-1.38-1.98.66-.36 1.08-.96 1.08-1.8 0-1.38-1.14-2.28-2.94-2.28H4.2v8.46h3.3zm-.18-6.9c.84 0 1.32.36 1.32 1.02s-.48 1.02-1.32 1.02H5.7v-2.04h1.62zm.24 5.4H5.7v-2.28h1.86c.96 0 1.5.42 1.5 1.14s-.54 1.14-1.5 1.14z",
  amazonwebservices:
    "M6.763 10.036c0 .15.033.3.1.43.1.15.2.28.35.37l1.05.7c.1.07.15.1.15.2 0 .1-.05.15-.15.25l-.25.2a.55.55 0 01-.35.12.55.55 0 01-.35-.12l-.2-.15a1.8 1.8 0 01-.2-.25 2.7 2.7 0 01-.55.65c-.2.17-.45.25-.75.25a1.3 1.3 0 01-.95-.37 1.4 1.4 0 01-.35-1.05c0-.45.15-.8.5-1.1.35-.28.8-.45 1.4-.5l.65-.05v-.2c0-.4-.1-.7-.3-.85-.2-.17-.5-.25-.9-.25-.35 0-.65.07-.9.2-.25.15-.4.3-.45.45a.4.4 0 01-.2.2.4.4 0 01-.25.08.4.4 0 01-.4-.4c0-.1.03-.2.1-.35.2-.4.5-.7.95-.95.45-.25 1-.35 1.6-.35.7 0 1.25.17 1.65.55.4.35.6.9.6 1.55v2.05h.05zm-1.35-.55c-.35.05-.6.15-.8.3-.15.15-.25.35-.25.6 0 .25.08.45.25.6.15.12.35.2.6.2.25 0 .45-.07.65-.2.2-.15.35-.35.4-.55v-.7l-.85.05zM12.5 12.3a.55.55 0 01-.4-.15l-.05-.05a.45.45 0 01-.1-.35c0-.1.03-.2.1-.3.15-.2.4-.45.7-.75.3-.3.55-.55.7-.7.4-.45.6-.85.6-1.25 0-.35-.1-.6-.3-.8-.2-.2-.5-.3-.85-.3-.55 0-.95.2-1.2.6-.1.15-.25.2-.4.2a.4.4 0 01-.4-.4c0-.1.03-.2.08-.3.1-.25.35-.5.7-.7.4-.25.85-.35 1.4-.35.6 0 1.1.15 1.45.5.35.35.55.8.55 1.35 0 .55-.2 1.05-.65 1.55-.15.15-.4.4-.75.7l-.45.4h1.85c.15 0 .25.05.35.15a.45.45 0 01.1.35.45.45 0 01-.15.35.5.5 0 01-.35.15H12.5zM18.2 12.35c-.45 0-.85-.1-1.2-.3-.35-.2-.6-.5-.75-.85a.42.42 0 01.1-.45.45.45 0 01.4-.15c.1 0 .2.05.3.15.2.35.55.55 1.05.55.35 0 .6-.07.8-.2.2-.15.3-.35.3-.55 0-.15-.05-.3-.2-.4-.15-.1-.4-.2-.8-.3l-1-.25c-.55-.15-.95-.4-1.2-.7-.25-.35-.35-.75-.35-1.2 0-.45.15-.85.45-1.15.3-.35.75-.5 1.3-.5.4 0 .75.08 1.05.25.3.15.55.4.7.7a.5.5 0 01-.1.5.45.45 0 01-.4.2c-.15 0-.25-.05-.35-.15-.2-.3-.5-.45-.9-.45-.3 0-.55.07-.7.2-.15.15-.25.3-.25.55 0 .15.05.3.2.4.15.1.4.2.85.35l.95.25c.55.15.95.4 1.2.75.25.3.35.7.35 1.15 0 .5-.15.9-.5 1.2-.35.35-.85.55-1.45.55zM3.6 18.9c2.55 1.5 5.9 2.35 9.4 2.35 3.85 0 7.3-1 10.25-2.7.35-.2.7.1.4.45-2.1 2.7-5.8 4.4-10.65 4.4-5.05 0-9.35-1.95-11.15-4.7-.25-.4.15-.75.55-.55.45.2.8.35 1.2.5zM21.55 17.1c.45-.55.3-1.3-.4-1.55-.35-.1-.7-.2-1.1-.1-.35.05-.7.25-.95.55-.25.35-.4.7-.35 1.15.05.4.3.75.65.95.4.25.9.25 1.3.05.4-.2.7-.55.85-1.05z",
  plivo:
    "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 3.6a8.4 8.4 0 110 16.8 8.4 8.4 0 010-16.8zm-3.6 4.8h2.4v7.2H8.4V8.4zm4.8 0H18v2.4h-2.4V18h-2.4V8.4z",
  telnyx:
    "M2 4h20v3.2H13.6V20h-3.2V7.2H2V4zm0 0",
  microsoft:
    "M0 0h11.377v11.372H0zm12.623 0H24v11.372H12.623zM0 12.628h11.377V24H0zm12.623 0H24V24H12.623",
  fresh:
    "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.8 16.8H7.2v-2.4h9.6v2.4zm0-4.8H7.2V9.6h9.6v2.4zm0-4.8H7.2V4.8h9.6v2.4z",
};

async function fetchLegacy(slug) {
  const urls = [
    `https://cdn.jsdelivr.net/npm/simple-icons@11.14.0/icons/${slug}.svg`,
    `https://cdn.jsdelivr.net/npm/simple-icons@9.21.0/icons/${slug}.svg`,
    `https://cdn.jsdelivr.net/npm/simple-icons@8.15.0/icons/${slug}.svg`,
  ];
  for (const url of urls) {
    try {
      const res = await fetch(url);
      if (res.ok) return await res.text();
    } catch {
      /* try next */
    }
  }
  return null;
}

function tintSvg(svg, hex) {
  if (svg.includes("fill=")) {
    return svg.replace(/fill="[^"]*"/g, `fill="#${hex}"`);
  }
  return svg.replace("<svg", `<svg fill="#${hex}"`);
}

async function main() {
  fs.mkdirSync(outDir, { recursive: true });
  const report = { package: 0, legacy: 0, custom: 0, mono: 0 };

  for (const [id, slug] of Object.entries(SLUG_MAP)) {
    const hex = COLORS[id] || "163300";
    const out = path.join(outDir, `${id}.svg`);
    let wrote = false;

    if (slug && bySlug[slug]) {
      fs.writeFileSync(out, svgFromPath(bySlug[slug].path, bySlug[slug].hex || hex));
      report.package++;
      wrote = true;
    }

    if (!wrote && CUSTOM_PATHS[id]) {
      fs.writeFileSync(out, svgFromPath(CUSTOM_PATHS[id], hex));
      report.custom++;
      wrote = true;
    }

    if (!wrote && slug && CUSTOM_PATHS[slug]) {
      fs.writeFileSync(out, svgFromPath(CUSTOM_PATHS[slug], hex));
      report.custom++;
      wrote = true;
    }

    if (!wrote && slug) {
      const legacy = await fetchLegacy(slug);
      if (legacy) {
        fs.writeFileSync(out, tintSvg(legacy, hex));
        report.legacy++;
        wrote = true;
      }
    }

    if (!wrote) {
      // Prefer custom path aliases for shared brands
      const alias =
        (id.includes("twilio") && CUSTOM_PATHS.twilio) ||
        (id.includes("plivo") && CUSTOM_PATHS.plivo) ||
        (id.includes("zoho") && bySlug.zoho?.path) ||
        (id.includes("fresh") && CUSTOM_PATHS.fresh) ||
        null;
      if (alias) {
        fs.writeFileSync(out, svgFromPath(alias, hex));
        report.custom++;
      } else {
        const mark = id.replace(/-/g, " ").split(" ").map((w) => w[0]).join("").slice(0, 2);
        fs.writeFileSync(out, monogramSvg(mark || id.slice(0, 2), hex));
        report.mono++;
      }
    }
  }

  console.log("Wrote logos to", outDir);
  console.log(report);
  console.log("files", fs.readdirSync(outDir).length);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
