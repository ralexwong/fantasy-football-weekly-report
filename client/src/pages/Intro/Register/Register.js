import React from 'react';
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <section className='register'>
            <div className='registerBox'>
                <div className='registerBox__form'>
                    <form className='form' action='#'>
                        <h2 className='u-margin-bottom-medium heading-secondary'>Sign or Log In</h2>
                        <div className='form__group'>
                            <input type='text' className='form__input' placeholder='Username' required />
                            <label htmlFor='username' className='form__label'>Username</label>
                        </div>

                        <div className='form__group'>
                            <input type='text' className='form__input' placeholder='Password' required />
                            <label htmlFor='password' className='form__label'>Password</label>
                        </div>

                        <div className='form__group'>
                            <div className='form__radio-group'>
                                <input type='radio' className='form__radio-input' id='small' name='size' />
                                <label htmlFor='small' className='form__radio-label'>
                                    <span className='form__radio-button'></span>
                                        Sign In
                                    </label>
                            </div>

                            <div className='form__radio-group u-margin-bottom-small'>
                                <input type='radio' className='form__radio-input' id='large' name='size' />
                                <label htmlFor='large' className='form__radio-label'>
                                    <span className='form__radio-button'></span>
                                        Log In
                                    </label>
                            </div>

                        </div>

                        <Link to="/" className='btn btn--sleeper btn--animated'>Continue &rarr;</Link>

                    </form>
                </div>
            </div>
        </section>
    )
}

export default Register;
