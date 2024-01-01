import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'

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
    <html lang="en" className='m-0 p-0'>
      <body className={inter.className}>
        <header>
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  )
}
