import React from 'react'



export const Button = ({ tag, children, ...buttonProps }) => {
	const Tag = tag ?? 'button'
	return <Tag {...buttonProps}> {children} </Tag>
}