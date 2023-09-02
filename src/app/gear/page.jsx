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
  title: 'Gear',
  description: 'Software, gadgets, and productivity tools I love.',
  openGraph: {
    image: '/assets/open-graph/og-gear.png',
  }
}

export default function Gear() {
  return (
    <SimpleLayout
      title="Software, gadgets, and productivity tools I love."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="13” MacBook Air, M1, 8GB RAM (2020)">
            Despite the low RAM, this thing runs great. Coming from a low-end PC I built in
            2017, it quickly replaced my desktop as my daily driver due to its speed,
            portability (big factor if you know me), and battery life. I’m still amazed at how 
            well it handles my daily workload even three years later.
          </Tool>
          <Tool title="LG 29WL500-B 29 inch Ultrawide Monitor">
            I’ve been using this monitor for a few years now and it’s been awesome. It's not the 
            best monitor out there in terms of resolution and refresh rate, but it's a great 
            value for the price. I love the ultrawide aspect ratio for productivity and the 
            29” size is perfect for my desk.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development Tools">
          <Tool title="Visual Studio Code">
            The quintessential code editor. I’ve tried a few others but I always come back to 
            VS Code due to it's extensions and themes. Not a whole lot more to say here.
          </Tool>
          <Tool title="Vercel">
            Easy choice here for hosting. I’ve been using Vercel for years and it’s 
            been by far the best and easiest way to deploy my projects.
          </Tool>
          <Tool title="Supabase">
            Great alternative to Firebase. I’ve been using Supabase for a few months now when I 
            need to create a backend/user authentication for a project. It’s been great so far
            and I’m excited to continue using it.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Figma">
            I’m not a big designer, but when I need to create a quick mockup or prototype, Figma
            is my go-to. It’s super easy to use and I love the collaborative features, as well as
            that it’s all in-browser.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Raycast">
            Has saved me so many times from losing a copied link, file, or code snippet. Raycast
            does basically everything Spotlight does, but better.
          </Tool>
          <Tool title="Notion">
            At this point, my entire life is in Notion. I use it for everything from project ideas,
            to shopping lists, to college notes. It’s the best note-taking app I’ve ever used.
            (Not that I’ve used many others, but still.)
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
