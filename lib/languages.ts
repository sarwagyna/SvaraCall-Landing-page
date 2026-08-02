import { languagePages } from "@/lib/languagePages";

/** Shared FlowingMenu items for industry language bands. */
export const languageMenuItems = languagePages.map((page) => ({
  link: `/languages/${page.slug}`,
  text: page.name,
  image: page.bandImage,
}));
