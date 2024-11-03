import { Header } from '@/components/Header/Header'
import './globals.css'
import { klee_one, manrope, roboto_mono } from '@/utils/fonts';
import { defaultConfig } from '@/config/defaultConfig'
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';

export const metadata = {
  title: 'Emilio Prado ~ Software Engineer',
  description: 'Find out more about me and my projects.',
}
const GA_ID = process.env.GOOGLE_ANALYTICS_ID || '';
const GTM_ID = process.env.GOOGLE_TAG_MANAGER_ID || '';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');`}
      </Script>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
      <body className={`${manrope.variable} ${klee_one.variable} ${roboto_mono.variable} mx-2 w-full my-2 min-h-screen flex flex-col`}>
        <Header items={defaultConfig.navBar}/>
        {children}
        <Analytics />
        <noscript 
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`
          }}
        />
      </body>
    </html>
  )
}

