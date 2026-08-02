/** Industry / vertical photography — Unsplash, India-context where possible. */
export const industryImages: Record<
  string,
  { src: string; alt: string }
> = {
  healthcare: {
    src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&h=800&fit=crop&q=80",
    alt: "Clinic corridor with natural light",
  },
  insurance: {
    src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=800&fit=crop&q=80",
    alt: "Insurance documents and pen on a desk",
  },
  brokerage: {
    src: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=800&fit=crop&q=80",
    alt: "Trading charts on a monitor",
  },
  "real-estate": {
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop&q=80",
    alt: "Modern high-rise buildings",
  },
  ecommerce: {
    src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop&q=80",
    alt: "Customer receiving a delivery package",
  },
  education: {
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&h=800&fit=crop&q=80",
    alt: "Students collaborating on campus",
  },
  telecom: {
    src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=800&fit=crop&q=80",
    alt: "Global network connectivity visualization",
  },
  fintech: {
    src: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=800&fit=crop&q=80",
    alt: "Person paying on a smartphone",
  },
  consultation: {
    src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=800&fit=crop&q=80",
    alt: "Consultant meeting with a client",
  },
  "hr-tech": {
    src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&h=800&fit=crop&q=80",
    alt: "HR team collaborating around a laptop",
  },
  automotive: {
    src: "https://images.unsplash.com/photo-1486262715619-67b93e1e6627?w=1200&h=800&fit=crop&q=80",
    alt: "Car service bay in a dealership workshop",
  },
};

/** Home industries cards keyed by title (no slug on those cards). */
export const homeIndustryImages: Record<string, { src: string; alt: string }> = {
  "Clinics & hospitals": industryImages.healthcare,
  "Real estate": industryImages["real-estate"],
  "Education & coaching": industryImages.education,
  "Finance & NBFC": industryImages.fintech,
  Insurance: industryImages.insurance,
  Brokerage: industryImages.brokerage,
  "D2C & retail": industryImages.ecommerce,
  Services: {
    src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&h=800&fit=crop&q=80",
    alt: "Team collaborating in a service office",
  },
  Automotive: industryImages.automotive,
};

const femaleAvatars = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&q=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&q=80",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&q=80",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&q=80",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&q=80",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&q=80",
  "https://images.unsplash.com/photo-1598550874175-4bdceb8fb2d4?w=200&h=200&fit=crop&q=80",
  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop&q=80",
];

const maleAvatars = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&q=80",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&q=80",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&q=80",
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&q=80",
  "https://images.unsplash.com/photo-1463453091185-61582044d556?w=200&h=200&fit=crop&q=80",
  "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200&h=200&fit=crop&q=80",
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&h=200&fit=crop&q=80",
];

function hashName(name: string): number {
  let h = 0;
  for (let i = 0; i < name.length; i++) {
    h = (h * 31 + name.charCodeAt(i)) >>> 0;
  }
  return h;
}

export function voiceAvatar(
  name: string,
  gender: "Male" | "Female",
): string {
  const pool = gender === "Female" ? femaleAvatars : maleAvatars;
  return pool[hashName(name) % pool.length];
}

/** Atmospheric stills for home / process storytelling. */
export const sceneImages = {
  callingDesk: {
    src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1400&h=900&fit=crop&q=80",
    alt: "Team member on a phone call at a desk",
  },
  dashboard: {
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&h=900&fit=crop&q=80",
    alt: "Analytics dashboard on a laptop screen",
  },
  conversation: {
    src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1400&h=900&fit=crop&q=80",
    alt: "Professional on a headset during a customer call",
  },
} as const;

/** Use-case card photography keyed by title. */
export const useCaseImages: Record<string, { src: string; alt: string }> = {
  "Lead follow-up & qualification": {
    src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=600&fit=crop&q=80",
    alt: "Sales professional following up on a lead",
  },
  "Appointment & booking reminders": {
    src: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&h=600&fit=crop&q=80",
    alt: "Calendar and planner for appointment reminders",
  },
  "No-show recovery": {
    src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop&q=80",
    alt: "Empty waiting area in a clinic",
  },
  "Payment & renewal reminders": {
    src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop&q=80",
    alt: "Payment and billing documents",
  },
  "Order & delivery confirmations": {
    src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&q=80",
    alt: "Package delivery confirmation",
  },
  "Feedback & NPS calls": {
    src: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=800&h=600&fit=crop&q=80",
    alt: "Customer sharing feedback on a call",
  },
  "Event & webinar reminders": {
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop&q=80",
    alt: "Audience at an event or webinar",
  },
  "Win-back calls": {
    src: "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&h=600&fit=crop&q=80",
    alt: "Customer reconnecting with a brand",
  },
};
