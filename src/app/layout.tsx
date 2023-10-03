// 'use client';

import {useContext} from 'react'
import './globals.css'
import type { Metadata } from 'next'
import { Playfair_Display, Mulish } from 'next/font/google'
import {motion} from 'framer-motion'
import { mergeClassNames } from '@shared/lib/classNames/mergeClassNames'
import { Header as HeaderWidget } from '@widgets/Header'
import Header from '@/components/Header'
import { CursorProvider } from '@shared/lib/context/CursorContext'
import { AppLayout } from '@/widgets'
// import { AppLayout } from '@widgets'


const PlayfairFont = Playfair_Display({ subsets: ['latin'] })
const MulishFont = Mulish({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Home Page',
//   description: 'This is Home page of Personal Protfolio',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={mergeClassNames([ PlayfairFont.className, MulishFont.className ])}>
        <CursorProvider>
              <AppLayout 
                header={<HeaderWidget />}
                footer={<footer></footer>}
              >
                {children}
              </AppLayout>
			{/* <motion.div  className='w-[32px] h-[32px] bg-primary fixed top-0 left-0 pointer-events-none z-50 rounded-full' /> */}

        </CursorProvider>
      </body>
    </html>
  )
}
