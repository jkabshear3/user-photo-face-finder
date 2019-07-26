import React from 'react' 
import './Header2.css'

function Header2(props) {
	return (
		<div>
			<p className = "signOut" onClick = {() => props.onRouteChange("signIn")}>Sign-Out</p>
		</div>)
}

export default Header2