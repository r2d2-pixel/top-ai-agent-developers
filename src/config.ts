// ─── SITE CONFIG ───────────────────────────────────────────────────────────
// To clone this site for a new niche: edit EVERY field in this file,
// swap out src/data/companies.ts, and you're done.
// ─────────────────────────────────────────────────────────────────────────────

export const SITE = {
  name:          'Top AI Agent Developers',
  domain:        'top-ai-agent-developers.com',
  url:           'https://top-ai-agent-developers.com',
  tagline:       'The top-ranked AI agent developers, independently reviewed for engineering depth',
  description:   'Compare the top AI agent developers by tech stack, framework depth, and production track record. Independent, engineering-focused reviews for technical buyers.',
  locale:        'en_US',
  twitterHandle: '',
};

export const NICHE = {
  label:          'AI Agent',
  providerLabel:  'developer',
  providersLabel: 'developers',
  verticalSlug:   'ai-agent-development',
};

export const BRANDING = {
  primaryColor: '#059669',  // tailwind brand-600 (Emerald); update tailwind.config.mjs too
  logoText:     'Top AI Agent Developers',
  logoPath:     '/logos/site-logo.svg',
};

// ─── MONETIZATION ──────────────────────────────────────────────────────────
export const MONETIZATION = {
  enabled: false,
  // When enabled=true, companies with monetized:true get rel="sponsored" on outbound links.
  // Set to false site-wide to strip all sponsored rels (e.g. while testing).
  defaultRel: 'nofollow' as 'sponsored' | 'nofollow' | '',
  disclosurePath: '/affiliate-disclosure',
};

// ─── NAV ───────────────────────────────────────────────────────────────────
export const NAV = [
  { label: 'Home',        href: '/' },
  { label: 'Disclosure',  href: '/affiliate-disclosure/' },
  { label: 'Contact',     href: '/contact/' },
];
