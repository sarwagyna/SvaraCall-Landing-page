export const PRICE_PER_MINUTE = 5.5;
export const SETUP_FEE = 30_000;

export const LEAD_STEPS = [
  100, 200, 300, 500, 750, 1000, 1500, 2000, 3000, 4000, 5000, 7500, 10000,
] as const;

export type RoiIndustryId =
  | "healthcare"
  | "realestate"
  | "education"
  | "automotive"
  | "finance"
  | "retail"
  | "bpo"
  | "other";

export type RoiIndustryDefaults = {
  id: RoiIndustryId;
  label: string;
  avgValue: number;
  conversionRate: number;
  reachRate: number;
  avgDuration: number;
  currentReach: number;
};

export const ROI_INDUSTRIES: RoiIndustryDefaults[] = [
  {
    id: "healthcare",
    label: "Healthcare",
    avgValue: 3_000,
    conversionRate: 0.12,
    reachRate: 0.75,
    avgDuration: 2.0,
    currentReach: 0.3,
  },
  {
    id: "realestate",
    label: "Real Estate",
    avgValue: 25_000,
    conversionRate: 0.05,
    reachRate: 0.75,
    avgDuration: 2.5,
    currentReach: 0.25,
  },
  {
    id: "education",
    label: "Education",
    avgValue: 15_000,
    conversionRate: 0.08,
    reachRate: 0.75,
    avgDuration: 2.0,
    currentReach: 0.3,
  },
  {
    id: "automotive",
    label: "Automotive",
    avgValue: 5_000,
    conversionRate: 0.1,
    reachRate: 0.75,
    avgDuration: 2.0,
    currentReach: 0.3,
  },
  {
    id: "finance",
    label: "Finance",
    avgValue: 8_000,
    conversionRate: 0.07,
    reachRate: 0.75,
    avgDuration: 2.5,
    currentReach: 0.25,
  },
  {
    id: "retail",
    label: "Retail",
    avgValue: 2_000,
    conversionRate: 0.12,
    reachRate: 0.75,
    avgDuration: 1.5,
    currentReach: 0.35,
  },
  {
    id: "bpo",
    label: "BPO",
    avgValue: 1_500,
    conversionRate: 0.1,
    reachRate: 0.8,
    avgDuration: 2.0,
    currentReach: 0.4,
  },
  {
    id: "other",
    label: "Other",
    avgValue: 2_000,
    conversionRate: 0.1,
    reachRate: 0.75,
    avgDuration: 2.0,
    currentReach: 0.3,
  },
];

export type RoiInputs = {
  leads: number;
  avgValue: number;
  currentReachRate: number;
  reachRate: number;
  avgDuration: number;
  conversionRate: number;
};

export type RoiResults = {
  connectedCalls: number;
  connectedMinutes: number;
  svaraCostMonthly: number;
  baselineReached: number;
  incrementalReached: number;
  incrementalCustomers: number;
  recoveredRevenue: number;
  netGain: number;
  roiMultiple: number;
};

export function computeRoi(inputs: RoiInputs): RoiResults {
  const connectedCalls = inputs.leads * inputs.reachRate;
  const connectedMinutes = connectedCalls * inputs.avgDuration;
  const svaraCostMonthly = connectedMinutes * PRICE_PER_MINUTE;
  const baselineReached = inputs.leads * inputs.currentReachRate;
  const incrementalReached = Math.max(connectedCalls - baselineReached, 0);
  const incrementalCustomers = incrementalReached * inputs.conversionRate;
  const recoveredRevenue = incrementalCustomers * inputs.avgValue;
  const netGain = recoveredRevenue - svaraCostMonthly;
  const roiMultiple =
    svaraCostMonthly > 0 ? recoveredRevenue / svaraCostMonthly : 0;

  return {
    connectedCalls,
    connectedMinutes,
    svaraCostMonthly,
    baselineReached,
    incrementalReached,
    incrementalCustomers,
    recoveredRevenue,
    netGain,
    roiMultiple,
  };
}

export const inr = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

export function formatRoiMultiple(multiple: number): string {
  if (multiple <= 0 || !Number.isFinite(multiple)) return "—";
  if (multiple > 20) return "20x+";
  return `${multiple.toFixed(1)}x`;
}
