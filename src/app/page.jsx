import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import logoRaleigh from '@/images/logos/raleigh.svg'
import logoWakeTech from '@/images/logos/waketech.svg'
import logoUNCCharlotte from '@/images/logos/unccharlotte.svg'
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'
import image6 from '@/images/photos/image-6.jpg'
import image7 from '@/images/photos/image-7.jpg'
import image8 from '@/images/photos/image-8.jpg'
import image9 from '@/images/photos/image-9.jpg'
import image10 from '@/images/photos/image-10.jpg'
import image11 from '@/images/photos/image-11.jpg'
import image12 from '@/images/photos/image-12.jpg'
import image13 from '@/images/photos/image-13.jpg'
import image14 from '@/images/photos/image-14.jpg'
import image15 from '@/images/photos/image-15.jpg'
import image16 from '@/images/photos/image-16.jpg'
import image17 from '@/images/photos/image-17.jpg'
import image18 from '@/images/photos/image-18.jpg'
import image19 from '@/images/photos/image-19.jpg'
import image20 from '@/images/photos/image-20.jpg'
import image21 from '@/images/photos/image-21.jpg'
import image22 from '@/images/photos/image-22.jpg'
import { formatDate } from '@/lib/formatDate'
import { getAllArticles } from '@/lib/getAllArticles'

export const metadata = {
  title: 'Brandon Saldan',
  description: 'I’m Brandon, a frontend software engineer and aspiring TPM based in Chapel Hill, NC. I love building responsive web applications that are fast, accessible, and make a difference in people’s lives.',
  openGraph: {
    image: '/assets/open-graph/og-about.png',
  }
}

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function GraduationCapIcon(props) {
  return (
    <svg
     xmlns="http://www.w3.org/2000/svg" 
     width="24" 
     height="24" 
     viewBox="0 0 24 24" 
     fill="none" 
     stroke="currentColor" 
     strokeWidth="2" 
     strokeLinecap="round" 
     strokeLinejoin="round" 
     className="lucide lucide-graduation-cap">
      <path 
        d="M22 10v6M2 10l10-5 10 5-10 5z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path 
        d="M6 12v5c3 3 9 3 12 0v-5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function School() {
  let school = [
    {
      college: 'University of North Carolina at Charlotte',
      degree: 'BSBA, MIS',
      logo: logoUNCCharlotte,
      start: '2024',
      end: '2026',
    },
    {
      college: 'Wake Technical Community College',
      degree: 'AA, Business Administration',
      logo: logoWakeTech,
      start: '2022',
      end: '2024',
    }
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <GraduationCapIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Education</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {school.map((uni, uniIndex) => (
          <li key={uniIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={uni.logo} alt="" className="h-7 w-7" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">University</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {uni.college}
              </dd>
              <dt className="sr-only">Degree</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {uni.degree}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${uni.start.label ?? uni.start} until ${
                  uni.end.label ?? uni.end
                }`}
              >
                <time dateTime={uni.start.dateTime ?? uni.start}>
                  {uni.start.label ?? uni.start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={uni.end.dateTime ?? uni.end}>
                  {uni.end.label ?? uni.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
    </div>
  )
}

function Resume() {
  let resume = [
    {
      company: 'City of Raleigh Municipal Government',
      title: 'Business Analyst Intern',
      logo: logoRaleigh,
      start: '2021',
      end: '2021',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start.label ?? role.start} until ${
                  role.end.label ?? role.end
                }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Button href="/assets/BrandonSaldanResume.pdf" variant="secondary" className="group mt-6 w-full">
        Download Resume
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="flex flex-col mt-16 sm:mt-20">
      <div className="flex overflow-x-scroll pb-10 hide-scrollbar">
        <div className="flex gap-5 py-4 sm:gap-8 -ml-12">
          {[image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16, image17, image18, image19, image20, image21, image22].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}

function MobilePhotos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="flex flex-col mt-16 sm:mt-20">
      <div className="flex overflow-x-scroll hide-scrollbar">
        <div className="flex gap-5 py-4 sm:gap-8 -ml-12">
          {[image1, image3, image2, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16, image17, image18, image19, image20, image21, image22].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4)

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Brandon Saldan
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I’m Brandon, a frontend software engineer and aspiring TPM based in Chapel Hill, NC. I love building responsive web applications that are fast, accessible, and make a difference in people’s lives.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://twitter.com/brandonsaldan"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              href="https://instagram.com/brandonsaldan"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://github.com/brandonsaldan"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://linkedin.com/in/brandonsaldan/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <div className="hidden sm:block">
        <Photos />
      </div>
      <div className="block sm:hidden">
        <MobilePhotos />
      </div>
      <Container className="mt-12 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="hidden sm:flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Resume />
            <School />
          </div>
          <div className="sm:hidden flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </Container>
    </>
  )
}
