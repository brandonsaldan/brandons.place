export type Image = {
  src: string;
  alt?: string;
  caption?: string;
};

export type Link = {
  text: string;
  href: string;
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
  headerNavLinks?: Link[];
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
    "Frontend software engineer and aspiring TPM based in Charlotte, NC",
  portrait: {
    src: "/photos/portrait.webp",
    alt: "Brandon Saldan",
  },
  image: {
    src: "/og/og-main.webp",
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
    },
    {
      text: "Blog",
      href: "/blog",
    },
    {
      text: "Travel",
      href: "/travel",
    },
    {
      text: "Research",
      href: "/research",
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
    text: "My work focuses on how technology and business shape complex systems, especially in policy and national security contexts.\n\nWith a foundation in frontend software engineering, I focus on product and strategy by examining how organizations grow, how value is created, and how technology supports meaningful outcomes.\n\nI’m a Technical Advisor at Apple while completing dual degrees in Management Information Systems and Business Analytics, with minors in Security & Intelligence Studies, Political Science, and American Studies. Alongside my studies, I build and consult on digital products, bringing technical depth into business and mission-driven environments.\n\nI’m drawn to work where technology, governance, and security intersect and shape real-world impact.",
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
