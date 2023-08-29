import { SimpleLayout } from '@/components/SimpleLayout'

const projects = [
  {
    name: 'Invii',
    description: 'All-in-one restaurant management platform and payment facilitator.',
    imageUrl:
      '/assets/projects/invii-1.png',
    tools: 'Vue, Nuxt, TailwindCSS, Figma',
    href: 'https://invii.io/',
    hasCaseStudy: true,
  },
  {
    name: 'Codex',
    description: 'A free in-browser bioinformatics platform with a focus on privacy.',
    imageUrl:
      '/assets/projects/codex-1.png',
    tools: 'Next.js, React, TailwindCSS, IndexedDB',
    href: 'https://codex-brandonsaldan.vercel.app/',
    hasCaseStudy: true,
  },
  {
    name: 'Community Center',
    description: 'A collection of open-source Stardew Valley tools and resources.',
    imageUrl:
      '/assets/projects/community-center-1.png',
    tools: 'Next.js, React, TypeScript, TailwindCSS',
    href: 'https://github.com/communitycenter/',
    hasCaseStudy: false,
  },
  {
    name: 'brandons.place',
    description: 'My personal website and blog.',
    imageUrl:
      '/assets/projects/brandons-place-1.png',
    tools: 'Next.js, React, TailwindCSS, Figma',
    href: 'https://brandons.place/',
    hasCaseStudy: false,
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
      intro="I’ve worked on tons of projects since I started developing, most of which are just for fun. Here are a few of my favorites."
    >
      <ul role="list" className="grid grid-cols-1 gap-x-12 gap-y-12">
        {projects.map((project) => (
          <li key={project.name} className="flex flex-col gap-10 sm:flex-row">
            <img className="sm:w-1/2 flex-none rounded-2xl object-cover" src={project.imageUrl} alt="" />
            <div className="max-w-xl flex-auto">
              <h3 className="text-lg font-semibold leading-8 tracking-tight text-zinc-800 dark:text-zinc-100">{project.name}</h3>
              <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">{project.description}</p>
              <p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-400">{project.tools}</p>
              <ul role="list" className="mt-4 flex gap-x-4">
                <a href={project.href}>
                  <button
                    type="button"
                    className="flex w-40 rounded-full bg-zinc-800 dark:bg-zinc-50 px-3.5 py-2 text-sm font-semibold text-zinc-100 dark:text-zinc-800 shadow-sm transition hover:bg-zinc-600 dark:hover:bg-zinc-200"
                  >
                    <div className="flex mx-auto">
                      Visit
                      <LinkIcon className="h-6 w-6 flex-none" />
                    </div>
                  </button>
                </a>
                {project.hasCaseStudy && (
                  <button
                    type="button"
                    className="w-40 rounded-full bg-zinc-50 dark:bg-zinc-800 px-3.5 py-2 text-sm font-semibold text-zinc-800 dark:text-zinc-100 shadow-sm transition hover:bg-zinc-100 dark:hover:bg-zinc-700"
                  >
                    Case Study
                  </button>
                )}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </SimpleLayout>
  )
}
