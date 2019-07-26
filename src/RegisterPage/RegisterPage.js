import React from 'react'

class RegisterPage extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			regEmail: '',
			regPassword: '',
			name: ''
		}
	}

		onEmailChange = (event) => {
			this.setState({
				regEmail: event.target.value
			})
		}

		onPasswordChange = (event) => {
			this.setState({
				regPassword: event.target.value
			})
		}

		onNameChange = (event) => {
			this.setState({
				name: event.target.value
			})
		}

		onSubmit = () => {
		/*fetch('http://localhost:3001/register', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				name: this.state.name,
				email: this.state.regEmail,
				password: this.state.regPassword
			})
		})
		.then(resp => resp.json())
		.then(user => {
			if (user) {
				console.log('user register', user)
				this.props.loadUser(user)
				this.props.onRouteChange("home")
			}
			
		})*/
		this.props.onRouteChange("home")
		
	}

		render() {
			return (
				<article className="measure center shadow-5 pa3 bg-lightest-blue o-70 mt6 br3" style={{textAlign: "center",}}>
				  <div action="sign-up_submit" method="get" accept-charset="utf-8">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				      <legend classNameName="f4 fw6 ph0 mh0">Welcome to FaceMaster</legend>
				      <div className="mt3">
				        <label className="db fw4 lh-copy f6" htmlFor="email-address">Name</label>
				        <input onChange={this.onNameChange}className="pa2 input-reset ba bg-transparent w-100 measure" type="email" name="email-address"  id="email-address"/>
				      </div>
				      <div className="mt3">
				        <label className="db fw4 lh-copy f6" htmlFor="email-address">Email address</label>
				        <input onChange={this.onEmailChange}className="pa2 input-reset ba bg-transparent w-100 measure" type="email" name="email-address"  id="email-address"/>
				      </div>
				      <div className="mt3">
				        <label className="db fw4 lh-copy f6" htmlFor="password">Password</label>
				        <input onChange={this.onPasswordChange}className="b pa2 input-reset ba bg-transparent" type="password" name="password"  id="password"/>
				      </div>
				    </fieldset>
				    <div className="mt3"><input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" type="submit" value="Get Started!" onClick={this.onSubmit}/></div>
				  </div>
				</article>)
		}
}

export default RegisterPage