import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata: Metadata = {
  title: 'Talk healthy to me - CUI 2026 Workshop',
  description: 'Opportunities and Challenges of Conversational User Interfaces for Digital Public Health. A CUI 2026 workshop in Bremen, Germany.',
  keywords: ['CUI', 'Conversational User Interfaces', 'Digital Public Health', 'Health', 'Workshop', 'CUI 2026', 'Bremen'],
  openGraph: {
    title: 'Talk healthy to me - CUI 2026 Workshop',
    description: 'Opportunities and Challenges of Conversational User Interfaces for Digital Public Health. A CUI 2026 workshop in Bremen, Germany.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth bg-background">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
