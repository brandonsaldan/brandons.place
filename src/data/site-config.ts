export type Image = {
  src: string;
  alt?: string;
  caption?: string;
};

export type Link = {
  text: string;
  href: string;
};

export type HeaderLink = Link & {
  section?: 'work' | 'personal';
  showOnHome?: boolean;
};

export type Hero = {
  title?: string;
  text?: string;
  image?: Image;
  actions?: Link[];
};

export type SiteConfig = {
  logo?: Image;
  title: string;
  subtitle?: string;
  description: string;
  image?: Image;
  portrait?: Image;
  headerNavLinks?: HeaderLink[];
  footerNavLinks?: Link[];
  socialLinks?: Link[];
  hero?: Hero;
  postsPerPage?: number;
  projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
  title: "Brandon Saldan",
  subtitle: "MIS/BA @ UNC Charlotte",
  description:
    "Technical professional and undergraduate researcher in national security, technology, and policy based in Charlotte, NC",
  portrait: {
    src: "/photos/portrait.webp",
    alt: "Brandon Saldan",
  },
  image: {
    src: "/og/og-main.png",
    alt: "Brandon Saldan - Frontend Software Engineer",
  },
  headerNavLinks: [
    {
      text: "Home",
      href: "/",
    },
    {
      text: "Projects",
      href: "/projects",
      section: 'work',
    },
    {
      text: "Research",
      href: "/research",
      section: 'work',
    },
    {
      text: "Blog",
      href: "/blog",
      section: 'work',
    },
    {
      text: "Travel",
      href: "/travel",
      section: 'personal',
      showOnHome: false,
    },
    {
      text: "Listening",
      href: "/listening",
      section: 'personal',
      showOnHome: false,
    },
  ],
  footerNavLinks: [
    {
      text: "Contact",
      href: "/contact",
    },
  ],
  socialLinks: [
    {
      text: "LinkedIn",
      href: "https://linkedin.com/in/brandonsaldan",
    },
    {
      text: "GitHub",
      href: "https://github.com/brandonsaldan",
    },
    {
      text: "Twitter",
      href: "https://twitter.com/brandonsaldan",
    },
    {
      text: "Instagram",
      href: "https://instagram.com/brandonsaldan",
    },
  ],
  hero: {
    text: "I work at the intersection of technology, data, and business strategy, helping teams navigate complex operational and organizational problems, especially in policy and national security.\n\nI’m a Technical Advisor at Apple, completing dual degrees in Management Information Systems and Business Analytics with minors in Political Science and American Studies. My software engineering background helps me evaluate technology, lead technical work, and build digital products that connect engineering with business strategy.",
    actions: [
      {
        text: "Get in Touch",
        href: "/contact",
      },
    ],
  },
  postsPerPage: 8,
  projectsPerPage: 8,
};

export default siteConfig;
