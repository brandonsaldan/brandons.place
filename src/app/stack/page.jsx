import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-8">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  metadataBase: new URL('https://brandons.place/'),
  title: 'Stack',
  description: 'The tools I use to build things.',
  openGraph: {
    images: '/assets/open-graph/og-stack.webp',
  },
  twitter: {
    card: "summary_large_image",
    title: "Brandon Saldan - Stack",
    description: "The tools I use to build things.",
    creator: "@brandonsaldan",
    images: [
      {
        url: "https://brandons.place/assets/open-graph/og-stack.webp",
        width: 1440,
        height: 800,
      },
    ],
  },
}

export default function Stack() {
  return (
    <SimpleLayout
      title="The tools I use to build things."
    >
      <div className="space-y-20">
        <ToolsSection title="Languages">
          <Tool title="TypeScript">
            I started using TypeScript in 2022 and it’s quickly become my go-to language for
            frontend development.
          </Tool>
          <Tool title="JavaScript">
            I’ve been using JavaScript since I really started focusing on frontend around 2020. I 
            still use it for some projects, but I’ve been using TypeScript more and more lately.
          </Tool>
          <Tool title="HTML/CSS">
            HTML and CSS are the first languages I learned when I started developing in 2017.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Frameworks">
        <Tool title="Next.js">
            Awesome framework for building React apps. I’ve been using Next.js for about a year now
            and I love it. The built-in features like image optimization and static site generation
            are great, and the community is awesome.
          </Tool>
          <Tool title="React">
            I learned React through Next.js and I’ve been using it ever since.
          </Tool>
          <Tool title="Vue">
            I learned Vue in 2021 and I’ve been using it for a few projects since then, namely Invii,
            but I’ve been using React with Next.js more recently.
          </Tool>
          <Tool title="Nuxt">
            Cool framework for building Vue apps. I’ve used it for a few projects at Invii.
          </Tool>
          <Tool title="TailwindCSS">
            The best CSS framework out there. After using other frameworks like Bootstrap and Bulma 
            for a while, switching to Tailwind was a game changer. I love the utility-first approach, 
            the customization options, and the awesome community resources, and I use it for all of my projects.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
