import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

import logoInvii from '@/images/logos/invii.svg'
import logoCodex from '@/images/logos/codex.svg'
import logoCommunityCenter from '@/images/logos/community-center.svg'
import logoBrandonsPlace from '@/images/logos/brandons-place.svg'

const projects = [
  {
    name: 'Invii',
    description:
      'All-in-one restaurant management platform and payment facilitator.',
    tools: 'Vue, Nuxt, TailwindCSS, Figma',
    link: { href: 'https://invii.io/', label: 'invii.io' },
    logo: logoInvii,
  },
  {
    name: 'Codex',
    description:
      'A free in-browser bioinformatics platform with a focus on privacy.',
    tools: 'Next.js, React, TailwindCSS, IndexedDB',
    link: { href: 'https://github.com/brandonsaldan/codex', label: 'github.com' },
    logo: logoCodex,
  },
  {
    name: 'Community Center',
    description:
      'A collection of open-source Stardew Valley tools and resources.',
    tools: 'Next.js, React, TypeScript, TailwindCSS',
    link: { href: 'https://github.com/communitycenter', label: 'github.com' },
    logo: logoCommunityCenter,
  },
  {
    name: 'brandons.place',
    description:
      'My personal website and blog.',
    tools: 'Next.js, React, TailwindCSS, Figma',
    link: { href: 'https://github.com/brandonsaldan/brandons.place', label: 'github.com' },
    logo: logoBrandonsPlace,
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata = {
  title: 'Projects',
  description: 'Things I’ve made or contributed to over the years.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Things I’ve made or contributed to over the years."
      intro="I’ve worked on tons of little projects since I started developing, most of which are just for fun. Here are a few of my favorites."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className="h-8 w-8"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-1 flex text-sm font-medium text-zinc-400 dark:text-zinc-200">
              <span className="">{project.tools}</span>
            </p>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
