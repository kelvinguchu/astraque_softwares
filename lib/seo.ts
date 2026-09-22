export const SITE_URL = "https://www.astraque.com";
export const SITE_NAME = "Astraque Softwares";
export const TWITTER_HANDLE = "@astraque_kenya";

/** Mirrors the old Next.js title template: "%s | Astraque Softwares" */
export function pageTitle(title: string) {
  return `${title} | ${SITE_NAME}`;
}

export function canonical(path: string) {
  return { rel: "canonical", href: `${SITE_URL}${path}` };
}

/** Serialises JSON-LD safely for inline <script> tags */
export function serializeJsonLd(data: unknown) {
  return JSON.stringify(data).replaceAll("<", String.raw`<`);
}
