// import React, { useState } from 'react';
// import { Redirect } from 'react-router-dom';
// import axios from 'axios';

// const Login = () => {

//     const [username, setUsername] = useState('')
//     const [password, setPassword] = useState('')
//     const [redirectTo, setRedirectTo] = useState(null)

//     const handleChange = event => {
        
//     }

//     const handleSubmit = event => {
//         event.preventDefault()
//         console.log('handleSubmit')

//         axios.post('/user/login',
//             {
//                 username: username,
//                 password: password
//             })
//             .then(response => {
//                 console.log('login response: ')
//                 console.log(response)
//                 if (response.status === 200) {
//                     // update App.js state
//                     // props.updateUser({
//                     //     loggedIn: true,
//                     //     username: response.data.username
//                     // })
//                     // update the state to redirect to home
//                     setRedirectTo({
//                         redirectTo: '/'
//                     })
//                 }
//             }).catch(error => {
//                 console.log('login error: ')
//                 console.log(error);
                
//             })
//     }
    
//     if (redirectTo) {
//         return <Redirect to={{ pathname: redirectTo }} />
//     } else {
//         return (
//                 <>
//                     <p id="logIn">Logs In</p>
//                     <form className="form-horizontal">
//                         <div className="form-group">
//                             <div className="col-1 col-ml-auto">
//                                 <label className="form-label" htmlFor="username">Username</label>
//                             </div>
//                             <div className="col-4 col-mr-auto">
//                                 <input className="form-input"
//                                     type="text"
//                                     id="username"
//                                     name="username"
//                                     placeholder="Username"
//                                     value={username}
//                                     onChange={handleChange}
//                                 />
//                             </div>
//                         </div>
//                         <div className="form-group">
//                             <div className="col-1 col-ml-auto">
//                                 <label className="form-label" htmlFor="password">Password: </label>
//                             </div>
//                             <div className="col-4 col-mr-auto">
//                                 <input className="form-input"
//                                     placeholder="password"
//                                     id="password"
//                                     type="password"
//                                     name="password"
//                                     value={password}
//                                     onChange={handleChange}
//                                 />
//                             </div>
//                         </div>
//                         <div id="rememberMeDiv" class="form-group form-group-accept">
//                             <div id="rememberMe">
//                                 <input type="checkbox" ></input>
//                                 <span className="remember-me"> Remember me   | </span>
//                                 <a className="forgot-pwd signUpLink" href="/Account/PasswordReset">Forgot password?</a>
//                             </div>
//                         </div>
                        
//                         <div className="form-group ">
//                             <button
//                                 className="btn btn-primary col-mr-auto"
//                                 id="btn"
//                                 onClick={handleSubmit}
//                                 type="submit">Log In
//                             </button>
//                         </div>
//                     </form>
//                     <hr></hr>
//                     <p className="section-register-footer">
//                     <span>Don't have an account? </span>
//                     <a class="signUpLink" href="/signup">Sign Up</a>
//                     </p>
//                 </>
//         )
//     }
// }

// export default Login;
