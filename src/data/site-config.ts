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
    text: "My work centers on leveraging technology, data, and business strategy to manage teams and operations and address complex organizational problems, especially in policy and national security contexts.\n\nMy software engineering background gives me a technical lens on strategic challenges - I understand how systems are built, which helps me evaluate technology investments, manage technical teams, and bridge the gap between engineering and business leadership.\n\nI work as a Technical Advisor at Apple while completing dual degrees in Management Information Systems and Business Analytics, with minors in Security & Intelligence Studies, Political Science, and American Studies. Alongside my studies, I build and consult on digital products, bringing technical depth into business and mission-driven environments.",
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
