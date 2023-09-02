import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata = {
  metadataBase: new URL('https://brandons.place/'),
  title: {
    template: '%s - Brandon Saldan',
    default:
      'Brandon Saldan',
  },
  description:
    'I’m Brandon, a frontend software engineer and aspiring TPM based in Chapel Hill, NC. I love building responsive web applications that are fast, accessible, and make a difference in people’s lives.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
