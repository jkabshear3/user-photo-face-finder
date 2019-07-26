import React from 'react'
import './Count.css'

function Count(props) {
	return (
		<div className='Count'>
			<p>{`${props.name}, your current identifacation count is ${props.count}`}</p>
		</div>)
}

export default Count