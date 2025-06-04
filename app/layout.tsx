import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Muhammad Rayyan - Web Developer & Full Stack Engineer',
  description:
    "Muhammad Rayyan is a passionate Web Developer and Full Stack Engineer building modern, user-friendly web applications. Discover innovative projects and creative solutions.",
  keywords: [
    'Muhammad Rayyan',
    'Web Developer',
    'Full Stack Engineer',
    'Portfolio',
    'JavaScript',
    'React',
    'Next.js',
    'Tailwind CSS',
    'Node.js',
  ],
  openGraph: {
    title: 'Muhammad Rayyan - Web Developer & Full Stack Engineer',
    description:
      "Explore the creative portfolio and projects of Muhammad Rayyan, a skilled Web Developer and Full Stack Engineer.",
    url: 'https://rayyan-web.vercel.app/', // update with your site's URL
    siteName: 'Muhammad Rayyan Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  other: {
    'linkedin:profile': 'https://www.linkedin.com/in/rayyan-asghar-4520262a5/', // update with your actual LinkedIn profile URL
  },
  icons:{
     
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}