import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "../../../sass/main.scss";

class Header extends Component {
    render() {
        return (
            <header className='header'>
                <div className='header__logo-box'>
                    <img className='header__logo' src="/images/intro/logo-white.png" alt="logo"></img>
                </div>

                <div className='header__text-box'>
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
