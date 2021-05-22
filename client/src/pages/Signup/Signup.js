import React, { Component } from 'react'
import axios from 'axios'

class Signup extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			confirmPassword: '',

		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	handleSubmit(event) {
		console.log(`sign-up handleSubmit, username: ${this.state.username}`)
		event.preventDefault()

		//request to server to add a new username/password
		axios.post('/user/signup', {
			username: this.state.username,
			password: this.state.password
		})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('successful signup')
					window.location.replace("/login");
					this.setState({ //redirect to login page
						redirectTo: '/login'
					})
				} else {
					console.log('username already taken')
				}
			}).catch(error => {
				console.log('signup error: ')
				console.log(error)

			})
	}


	render() {
		return (

			<div id="body" className="SignupForm">
					<p id="logIn">Create an Account</p>
					<form className="form-horizontal">
						<div className="form-group">
							<div className="col-1 col-ml-auto">
								<label className="form-label" htmlFor="username">Username</label>
							</div>
							<div className="col-4 col-mr-auto">
								<input className="form-input"
									type="text"
									id="username"
									name="username"
									placeholder="Username"
									value={this.state.username}
									onChange={this.handleChange}
								/>
							</div>
						</div>
						<div className="form-group">
							<div className="col-1 col-ml-auto">
								<label className="form-label" htmlFor="password">Password: </label>
							</div>
							<div className="col-4 col-mr-auto">
								<input className="form-input"
									placeholder="password"
									id="password"
									type="password"
									name="password"
									value={this.state.password}
									onChange={this.handleChange}
								/>
							</div>
						</div>
						<div id="rememberMeDiv" class="form-group form-group-accept">
							<div id="rememberMe">
								<span class="remember-me"> We are committed to complying with all U.S. regulations that help prevent, detect and remediate unlawful behavior by customers and virtual currency developers when using the Satoshi-Pulse trading platform or any of the company’s other services. Satoshi-Pulse is not a regulated exchange under U.S. securities laws. </span>
							</div>
						</div>

						<div className="form-group ">
							<button
								className="btn btn-primary col-mr-auto"
								id="btn"
								onClick={this.handleSubmit}
								type="submit">Create Account
							</button>
						</div>
					</form>
					<p class="section-register-footer">
						<span>Already have an account? </span>
						<a class="signUpLink" href="/login">Log In</a>
					</p>
			</div>

		)
	}
}

export default Signup
