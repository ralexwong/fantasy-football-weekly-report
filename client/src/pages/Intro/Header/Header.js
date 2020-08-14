import React, { Component } from 'react'
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <header className='introHeader'>
                <div className='introHeader__logo-box'>
                    <img className='introHeader__logo' src="/images/logo.png" alt="logo"></img>
                </div>

                <div className='introHeader__text-box'>
                    <h1 className='heading-primary'>
                        <span className='heading-primary--main'>Fantasy Football</span>
                        <span className='heading-primary--sub'>Weekly Reports</span>
                    </h1>

                    <Link to="#" className='btn btn--white btn--animated'>Choose Your Platform!</Link>  
                </div>
            </header>
        )
    }
}

export default Header;
