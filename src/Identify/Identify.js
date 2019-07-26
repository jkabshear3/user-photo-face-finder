import React from 'react'
import './Identify.css'

function Identify(props) {
	return (
		<div className="Identify grow">
			<input type="submit" value="Identify" className="button" onClick={props.onSubmit}/>
		</div>)
}

export default Identify