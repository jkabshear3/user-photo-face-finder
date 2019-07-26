import React from 'react'
import "./TryAnother.css"

function TryAnother(props) {
	return (
		<div className="tryAnother">
			<input className="try grow" type="submit" value="You did it! Try Another Photo?" onClick={props.tryAnother}/>
		</div>)
}

export default TryAnother