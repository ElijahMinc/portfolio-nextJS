'use client';

import React from 'react'

import {motion, AnimatePresence} from 'framer-motion'
import { useCursor } from '@/shared/hooks'

export const AppLayout = ({header, footer, children}) => {
	const {cursorVariants, cursorBg} = useCursor();
	console.log('cursorVariants', cursorVariants)
	return (
		<>
			{header}
			<main>
				{children}
			</main>
			{/* {footer} */}
			<motion.div variants={cursorVariants}  animate={cursorBg} className='w-[32px] h-[32px] bg-primary fixed top-0 left-0 pointer-events-none z-50 rounded-full' />
		</>
		)
}