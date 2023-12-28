import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vata - data analysis',
  description: 'Data analysis of future',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Script src='/animate.js' />
      <body className={inter.className}>
      <header>
        <Navbar />
      </header>
        {children}
        </body>
    </html>
  )
}
