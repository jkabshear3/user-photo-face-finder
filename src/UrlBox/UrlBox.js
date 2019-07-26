import React from 'react'
import './UrlBox.css'

function UrlBox(props) {
	return (
		<div className='UrlBox'>
			<input id="pp" className='enjoy' type="text" onChange={props.UrlBox}/>
		</div>)
}

export default UrlBox