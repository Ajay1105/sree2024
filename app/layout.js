import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SREE-2024',
  description: 'International conference',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="mt-11">
      <Navbar className="w-[100vw]"/>
      {children}
      </body>
    </html>
  )
}
