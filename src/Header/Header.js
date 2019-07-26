import React from 'react' 
import './Header.css'

function Header(props) {
	return (
		<div>
			<p className = "signOut" onClick = {() => props.onRouteChange("signIn")}>Sign-Out</p>
			<h1 className = "title">{`Welcome ${props.name}, to your Facial Identification Application`}</h1>
		</div>)
}

export default Header