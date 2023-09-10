import { Header } from '@/components/Header/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import { defaultConfig } from '@/config/defaultConfig'
import { Analytics } from '@vercel/analytics/react';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Emilio Prado ~ Software Engineer',
  description: 'Find out more about me and my projects.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} md:container mx-auto m-2 min-h-screen flex flex-col`}>
        <Header items={defaultConfig.navBar}/>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
