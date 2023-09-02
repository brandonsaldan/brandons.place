"use client";
import { SimpleLayout } from '@/components/SimpleLayout'
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { GitHubIcon, TwitterIcon } from '@/components/SocialIcons';
import Head from 'next/head'
import Image from 'next/image'

const projects = [
  {
    name: 'Invii',
    description: 'All-in-one restaurant management platform and payment facilitator.',
    imageUrl:
      '/assets/projects/invii-1.png',
    coverImage: '/assets/projects/cover/invii-cover.png',
    tools: 'Vue, Nuxt, TailwindCSS, Figma',
    href: 'https://invii.io/',
    hasCaseStudy: true,
    role: 'Founder',
    duties: 'Operations, Frontend',
    team: [
      { name: 'Brandon Saldan', role: 'CEO' },
      { name: 'Mustafa Mohamed', role: 'CTO' },
    ],
    timeline: '3 Years',
    status: 'Pilot Program',
    overview: 'Bringing innovation to the dining industry, Invii seeks to revolutionize the way restaurants operate through a suite of tools that help them manage their business, engage with their customers, and accept payments.\nIn my role as CEO, I have led the development of the Invii landing page, internal dashboard, and customer-facing web app, as well as the design of the Invii brand and marketing materials.\n I have also been responsible for the day-to-day operations of the company, including management, legal compliance, financial actions, fundraising, and customer acquisition, resulting in a pilot program with a popular restaurant in Philadelphia, PA.',
    hasGitHub: true,
    hasTwitter: true,
    hasExternalLink: true,
    githubUrl: 'https://github.com/GetInvii/',
    twitterUrl: 'https://twitter.com/GetInvii/',
    externalLinkUrl: 'https://invii.io/',
  },
  {
    name: 'Codex',
    description: 'A free in-browser bioinformatics platform with a focus on privacy.',
    imageUrl:
      '/assets/projects/codex-1.png',
      coverImage: '/assets/projects/cover/codex-cover.png',
    tools: 'Next.js, React, TailwindCSS, IndexedDB',
    href: 'https://codex-brandonsaldan.vercel.app/',
    hasCaseStudy: true,
    role: 'Sole Developer',
    duties: 'Research, Frontend',
    team: [
      { name: 'Brandon Saldan', role: 'Sole Developer' },
    ],
    timeline: '2 Months',
    status: 'Launched May 2023',
    overview: 'Codex is a free in-browser bioinformatics platform with a focus on privacy. It allows users to analyze their genomic data without having to upload it to a third-party server.\n As the sole developer, I was responsible for the research and development of the Codex platform, including the design and implementation of the user interface and the integration of the bioinformatics tools.',
    hasGitHub: true,
    hasTwitter: false,
    hasExternalLink: true,
    githubUrl: 'https://github.com/brandonsaldan/codex/',
    externalLinkUrl: 'https://codex-brandonsaldan.vercel.app/',
  },
  {
    name: 'Community Center',
    description: 'A collection of open-source Stardew Valley tools and resources.',
    imageUrl:
      '/assets/projects/community-center-1.png',
    coverImage: '/assets/projects/cover/community-center-cover.png',
    tools: 'Next.js, React, TypeScript, TailwindCSS',
    href: 'https://github.com/communitycenter/',
    hasCaseStudy: true,
    role: 'SWE',
    duties: 'Frontend',
    team: [
      { name: 'Jack LaFond', role: 'LSE' },
      { name: 'Clemente Solorio', role: 'LSE' },
      { name: 'Brandon Saldan', role: 'SWE' },
      { name: 'Conrad Crawford', role: 'SWE' },
      { name: 'Danny Doan', role: 'SWE' },
      { name: 'Leah Lundqvist', role: 'SWE' },
    ],
    timeline: '1 Year',
    status: 'Launched August 2023',
    overview: 'Community Center is a collection of open-source tools and resources for the popular game Stardew Valley. The goal of the project is to provide users with a centralized location to find, share, and track their progress in-game through an intuitive and easy-to-use interface.\n As a frontend developer, I was responsible for the development of user interface components and the integration of avatar generation tools.',
    hasGitHub: true,
    hasTwitter: false,
    hasExternalLink: false,
    githubUrl: 'https://github.com/communitycenter/',
  },
  {
    name: 'brandons.place',
    description: 'My personal website and blog.',
    imageUrl:
      '/assets/projects/brandons-place-1.png',
    coverImage: '/assets/projects/cover/brandons-place-cover.png',
    tools: 'Next.js, React, TailwindCSS, Figma',
    href: 'https://brandons.place/',
    hasCaseStudy: true,
    role: 'Sole Developer',
    duties: 'Frontend, Design',
    team: [
      { name: 'Brandon Saldan', role: 'LDSE' },
    ],
    timeline: '5 Years',
    status: 'Launched April 2018',
    overview: 'brandons.place is my personal website and blog. The development of the site was motivated by my desire to learn more about web development and to share my thoughts and experiences with others.\n As the sole developer, I was responsible for the design and implementation of the site, including the user interface, content management system, and blog.\n The site has gone through several iterations since its initial launch in April 2018, each of which has showcased my growth as a developer and designer, and has been driven by my desire to improve the user experience and to learn new technologies.',
    hasGitHub: true,
    hasTwitter: false,
    hasExternalLink: false,
    githubUrl: 'https://github.com/brandonsaldan/brandons.place/',
  },
  {
    name: 'Capsl',
    description: 'An experimental supplement personalization and delivery service.',
    imageUrl:
      '/assets/projects/capsl-1.png',
    coverImage: '/assets/projects/cover/capsl-cover.png',
    tools: 'Next.js, React, TailwindCSS, Figma, Supabase',
    href: 'https://trycapsl.com/',
    hasCaseStudy: true,
    role: 'Sole Developer & Designer',
    duties: 'Frontend, Design',
    team: [
      { name: 'Brandon Saldan', role: 'LDSE' },
    ],
    timeline: '1 Month',
    status: 'Not expected to launch',
    overview: 'Capsl is an experimental (non-functional, and not a real company) supplement personalization and delivery service. It allows users to create custom vitamin and supplement blends tailored to their needs based on a personalization questionnaire.\n This project was created to challenge myself to learn new technologies, mainly backend, and to refine my design skills.\n As the sole developer, I was responsible for the development of the Capsl landing page, registration flow, customer dashboard, questionnaire, and e-commerce platform interface.\n As the designer, I created the Capsl branding and marketing materials, including the logo, color palette, and supplement packaging.',
    hasGitHub: false,
    hasTwitter: false,
    hasExternalLink: false,
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

function XIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x">
      <path d="M18 6 6 18"/>
      <path d="m6 6 12 12"/>
    </svg>
  )
}

function ProjectModal({ project, open, setOpen }) {
  
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 dark:bg-zinc-800 bg-opacity-75 dark:bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-xl bg-white dark:bg-zinc-800 px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl sm:p-6 sm:mt-20">
                <div className="absolute right-0 top-0 block pr-4 pt-4 sm:hidden">
                  <button
                    type="button"
                    className="rounded-md text-zinc-800 dark:text-zinc-100 focus:outline-none focus:ring-0 focus:ring-offset-0"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="sm:flex sm:items-start">
                  <div className="mt-10 text-center sm:mt-0 sm:text-left">
                    <Image className="flex-none rounded-2xl object-cover" src={project.coverImage} alt="" width={1760} height={924} placeholder="blur" blurDataURL={project.coverImage} />
                    <div className="bg-white dark:bg-zinc-800">
                      <div className="mx-auto max-w-7xl py-4 px-4 mt-4 text-left">
                        <h2 className="text-2xl font-bold leading-10 tracking-tight text-zinc-800 dark:text-zinc-100">{project.name}</h2>
                        <div className="mt-4">
                          <dl className="space-y-8 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-3 sm:space-y-0 lg:gap-x-10">
                          <div>
                            <div>
                              <dt className="text-base font-semibold leading-7 text-zinc-600 dark:text-zinc-100">My Role</dt>
                              <dt className="max-w-2xl text-sm leading-7 text-zinc-600 dark:text-zinc-400">{project.role} — {project.duties}</dt>
                            </div>
                            <dd className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                            <dt className="text-base font-semibold leading-7 text-zinc-600 dark:text-zinc-100">Team</dt>
                              {project.team.map((teamMember, index) => (
                                <div key={index}>
                                  {teamMember.name}, {teamMember.role}
                                </div>
                              ))}
                            </dd>
                            <div className="mt-4">
                              <dt className="text-base font-semibold leading-7 text-zinc-600 dark:text-zinc-100">Timeline & Status</dt>
                              <dt className="max-w-2xl text-sm leading-7 text-zinc-600 dark:text-zinc-400">{project.timeline}, {project.status}</dt>
                            </div>
                            <div className="mt-4 flex gap-4">
                              {project.hasGitHub && (
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                  <GitHubIcon className="h-6 w-6 flex-none fill-zinc-800 dark:fill-zinc-100" />
                                </a>
                              )}
                              {project.hasTwitter && (
                                <a href={project.twitterUrl} target="_blank" rel="noopener noreferrer">
                                  <TwitterIcon className="h-6 w-6 flex-none fill-zinc-800 dark:fill-zinc-100" />
                                </a>
                              )}
                              {project.hasExternalLink && (
                                <a href={project.externalLinkUrl} target="_blank" rel="noopener noreferrer">
                                  <LinkIcon className="h-6 w-6 flex-none fill-zinc-800 dark:fill-zinc-100" />
                                </a>
                              )}
                            </div>
                          </div>
                            <div>
                              <dt className="text-base font-semibold leading-7 text-zinc-600 dark:text-zinc-100">Overview</dt>
                              <div className="max-w-2xl text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                                {project.overview.split('\n').map((line, index) => (
                                  <p key={index} className="mb-4">{line}</p>
                                ))}
                              </div>
                            </div>
                          </dl>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default function Projects() {

  const [open, setOpen] = useState(false)
  const cancelButtonRef = useRef(null)
  const [selectedProject, setSelectedProject] = useState(projects[0])

  return (
    <>
    <Head>
      <title>Projects - Brandon Saldan</title>
      <meta name="description" content="I’ve worked on tons of projects since I started developing, most of which are just for fun. Here are a few of my favorites." />
      <meta property="og:image" content="/assets/open-graph/og-projects.png" />
    </Head>
    <ProjectModal project={selectedProject} open={open} setOpen={setOpen} />
    <SimpleLayout
      title="Things I’ve made or contributed to over the years."
      intro="I’ve worked on tons of projects since I started developing, most of which are just for fun. Here are a few of my favorites."
    >
      <ul role="list" className="grid grid-cols-1 gap-x-12 gap-y-12">
        {projects.map((project) => (
          <li key={project.name} className="flex flex-col gap-10 sm:flex-row">
            <Image className="sm:w-1/2 flex-none rounded-2xl object-cover" src={project.imageUrl} alt="" width={1760} height={924} placeholder="blur" blurDataURL={project.coverImage} />
            <div className="max-w-xl flex-auto">
              <h3 className="text-lg font-semibold leading-8 tracking-tight text-zinc-800 dark:text-zinc-100">{project.name}</h3>
              <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">{project.description}</p>
              <p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-400">{project.tools}</p>
              <ul role="list" className="mt-4 flex gap-x-4">
                <a href={project.href}>
                  <button
                    type="button"
                    className="flex w-40 rounded-md bg-zinc-800 dark:bg-zinc-50 px-3.5 py-2 text-sm font-semibold text-zinc-100 dark:text-zinc-800 shadow-sm transition hover:bg-zinc-600 dark:hover:bg-zinc-200"
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
                    onClick={() => {
                      setSelectedProject(project);
                      setOpen(true);
                    }}
                    className="w-40 rounded-md bg-zinc-50 dark:bg-zinc-800 px-3.5 py-2 text-sm font-semibold text-zinc-800 dark:text-zinc-100 shadow-sm transition hover:bg-zinc-100 dark:hover:bg-zinc-700"
                  >
                    Details
                  </button>
                )}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </SimpleLayout>
    </>
  )
}
