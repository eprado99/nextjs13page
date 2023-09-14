import { Header } from '@/components/Header/Header'
import './globals.css'
import { klee_one, manrope, roboto_mono } from '@/utils/fonts';
import { defaultConfig } from '@/config/defaultConfig'
import { Analytics } from '@vercel/analytics/react';


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
      <body className={`${manrope.variable} ${klee_one.variable} ${roboto_mono.variable} container px-2 mx-auto my-2 min-h-screen flex flex-col`}>
        <Header items={defaultConfig.navBar}/>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

