import React, { useState } from 'react'
import { Link } from "react-router-dom";

const IntroNav = () => {
    const [open, setOpen] = useState(true)

    const stopScroll = () => {
        if (open) {
            document.body.style.overflow = 'hidden';
            setOpen(false)
        } else {
            document.body.style.overflow = 'unset';
            setOpen(true)
        }
    }

    return (
        <div className='navigation'>
            <input onClick={() => stopScroll()} type='checkbox' className='navigation__checkbox' id='navi-toggle' />

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

export default IntroNav;
