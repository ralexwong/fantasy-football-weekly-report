import React, { Component } from 'react'

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

                    <button style={{ height: '7rem' }} onClick={this.props.click} className='btn btn--white btn--animated'>Choose Your Platform!</button>  
                </div>
            </header>
        )
    }
}

export default Header;
