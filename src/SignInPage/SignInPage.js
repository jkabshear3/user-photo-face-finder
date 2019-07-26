import React from 'react' 

class SignInPage extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			email: '',
			password: ''
		}
	}
	onEmailChange = (event) => {
		this.setState({
			email: event.target.value
		})
	}

	onPasswordChange = (event) => {
		this.setState({
			password: event.target.value
		})
	}

	onSubmit = () => {
		fetch('http://localhost:3001/signIn', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.email,
				password: this.state.password
			})
		})
		.then(resp => resp.json())
		.then(data => {
			if (data) {
				console.log("data", data)
				this.props.loadUser(data)
				this.props.onRouteChange("home")
			}
			else {console.log('wrong email/password')}
		})
		
	}

	render() {
		const { onRouteChange } = this.props
		return (
			<main className="pa4 black-80" style={{textAlign: "center",}}>
			  <div className="measure center shadow-5 pa3 bg-lightest-blue o-70 mt6 br3">
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <legend className="f4 fw6 ph0 mh0">Welcome to FaceMaster</legend>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" for="email-address">Email</label>
			        <input onChange={this.onEmailChange}className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
			      </div>
			      <div className="mv3">
			        <label className="db fw6 lh-copy f6" for="password">Password</label>
			        <input onChange={this.onPasswordChange}className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
			      </div>
			    </fieldset>
			    <div className="">
			      <input onClick={this.onSubmit}className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" />
			    </div>
			    <div className="lh-copy mt3">
			    <p>New here? Sign up for free!</p>
			      <a href="#0" className="f6 link dim black db" onClick={() => onRouteChange('register')}>Sign up</a>
			    </div>
			  </div>
		</main>
		)
	}
}

export default SignInPage