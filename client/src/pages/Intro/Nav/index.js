import React, { Component } from 'react'
import { Link } from "react-router-dom";

class IntroNav extends Component {

    constructor(props) {
        super(props);
        this.state = {
          open:true
        }
    }

    stopScroll = () => {
        if(this.state.open){
            document.body.style.overflow = 'hidden';
            this.setState({ open: false })
          } else {
            document.body.style.overflow = 'unset';
            this.setState({ open: true })
        }
    }

    render() {
        return (
            <div className='navigation'>
                <input onClick={() => this.stopScroll()} type='checkbox' className='navigation__checkbox' id='navi-toggle' />

                <label htmlFor='navi-toggle' className='navigation__button'>
                    <span className='navigation__icon'>&nbsp;</span>
                </label>

                <div className='navigation__background'>&nbsp;</div>

                <nav className='navigation__nav'>
                    <ul className='navigation__list'>
                        <li className='navigation__item'><Link to='#' className='navigation__link'><span>01</span>About FFWR</Link></li>
                        <li className='navigation__item'><Link to='#' className='navigation__link'><span>02</span>Your benefits</Link></li>
                        <li className='navigation__item'><Link to='#' className='navigation__link'><span>03</span>Platforms</Link></li>
                        <li className='navigation__item'><Link to='#' className='navigation__link'><span>04</span>Payouts</Link></li>
                        <li className='navigation__item'><Link to='#' className='navigation__link'><span>05</span>Register</Link></li>
                    </ul>
                </nav>
                
            </div>
        )
    }
}

export default IntroNav;
