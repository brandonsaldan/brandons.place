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
  subtitle: "Frontend Software Engineer",
  description:
    "Frontend software engineer and aspiring TPM based in Chapel Hill, NC",
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
    text: "I'm a frontend software engineer and aspiring TPM based in Charlotte, NC. I've been passionate about technology and building things since I first started using computers at age 4. From tinkering with programs to learning to code, my journey has been driven by curiosity and a desire to create meaningful solutions.\n\nCurrently, I'm pursuing degrees in Management Information Systems and Business Administration at the University of North Carolina at Charlotte while working as a freelance software engineer. I specialize in building responsive, accessible web applications that make a real difference in people's lives.\n\nI'm constantly learning, building, and seeking new opportunities to grow both technically and professionally.",
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
