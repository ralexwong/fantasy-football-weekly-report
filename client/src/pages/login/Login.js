import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import './login.css';
import { Col, Row, Container } from "../../components/Grid";

class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            redirectTo: null
        }
  
    }
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    componentDidMount = () => {
        // if (this.props.alert) {
        //     alert("You must have an account to view this page!");
        // }
    }

    handleSubmit = event => {
        event.preventDefault()
        console.log('handleSubmit')

        axios.post('/user/login',
            {
                username: this.state.username,
                password: this.state.password
            })
            .then(response => {
                console.log('login response: ')
                console.log(response)
                if (response.status === 200) {
                    // update App.js state
                    // this.props.updateUser({
                    //     loggedIn: true,
                    //     username: response.data.username
                    // })
                    // update the state to redirect to home
                    this.setState({
                        redirectTo: '/'
                    })
                }
            }).catch(error => {
                console.log('login error: ')
                console.log(error);
                
            })
    }
    
    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
                <div id="body">
                    <Container>
                        <p id="logIn">Logs In</p>
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
                                    <input type="checkbox" ></input>
                                    <span className="remember-me"> Remember me   | </span>
                                    <a className="forgot-pwd signUpLink" href="/Account/PasswordReset">Forgot password?</a>
                                </div>
                            </div>
                            
                            <div className="form-group ">
                                <button
                                    className="btn btn-primary col-mr-auto"
                                    id="btn"
                                    onClick={this.handleSubmit}
                                    type="submit">Log In
                                </button>
                            </div>
                        </form>
                        <hr></hr>
                        <p className="section-register-footer">
                        <span>Don't have an account? </span>
                        <a class="signUpLink" href="/signup">Sign Up</a>
                        </p>
                    </Container>
                </div>
            )
        }
    }
}

export default Login;
