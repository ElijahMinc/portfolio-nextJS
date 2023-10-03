import React from 'react'
import { useInput } from '@/shared/hooks';

export const ContactForm = () => {
	const nameInputProvider = useInput('', {
		minLength: 1,
	});

	const emailInputProvider = useInput('', {
		minLength: 1,
	});

	const messageInputProvider = useInput('', {
		minLength: 1,
	});

	console.log('nameInputProvider', nameInputProvider)

	const handleSubmit = (e) => {
		e.preventDefault();


	}

 	return (
		<form onSubmit={handleSubmit} className='flex flex-col gap-y-4'>
			<div className='flex gap-x-10'>
			<input onChange={nameInputProvider.inputInfo.onChange} value={nameInputProvider.inputInfo.value} className='outline-none border-b border-b-rose-300 h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]' type='text' placeholder='Your name' />
			<input onChange={emailInputProvider.inputInfo.onChange} value={emailInputProvider.inputInfo.value}  className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]' type='text' placeholder='Your email address' />
			</div>
			<input onChange={messageInputProvider.inputInfo.onChange} value={messageInputProvider.inputInfo.value}  className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]' type='text' placeholder='Your message' />
			<button type='submit' className='btn mt-[30px] mx-auto lg:max-0 self-start hover:rounded-bl-lg hover:tracking-widest'>Send it</button>
	 	</form>
		)
}