import { Manrope, Roboto_Mono, Klee_One } from 'next/font/google'
 
export const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '800'],
  variable: '--font-manrope'
})
 
export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono'
})

export const klee_one = Klee_One({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400'],
    variable: '--font-klee-one'
})