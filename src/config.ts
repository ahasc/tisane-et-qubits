import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://tisaneetqubits.blog/",
  author: "Alexandre Hascour",
  desc: "L'informatique quantique expliquée, une tisane à la main",
  title: "Tisane et Qubits",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "fr",
  langTag: ["fr-FR"],
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/alexandre-hascour-7a1751112",
    linkTitle: `Suis moi sur Linkedin !`,
    active: true,
  },
];
