import React from 'react';
import { Link } from "react-router-dom";

const Platforms = (props) => {
    return (
        <section className='platforms' ref={props.reference}>
            <h2 className='heading-secondary u-margin-bottom-big'>Choose your platform</h2>

        
            <Link to="/espn">
                <div className='box box--working'>
                    <img className='box__image box__image--espn' src={`./images/intro/espn.png`} alt='poop' />
                </div>
            </Link>


            <Link to="/sleeper">
                <div className='box box--working'>
                    <img className='box__image' src={`./images/intro/sleeper.png`} alt='poop' />
                </div>
            </Link>


            <div className='box' >
                <img className='box__image' src={`./images/intro/yahoo.jpg`} alt='poop' />
                <div className="box__disclaimer">
                    <p className='u-margin-auto'>COMING SOON</p>
                </div>
            </div>

        </section>
    )
}

export default Platforms;
