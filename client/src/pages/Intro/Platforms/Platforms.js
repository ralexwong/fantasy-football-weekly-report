import React from 'react';
import { Link } from "react-router-dom";

const Platforms = (props) => {
    return (
        <section className='platforms' ref={props.reference}>
            <h2 className='heading-secondary u-margin-bottom-big'>Choose your platform</h2>

            <div className='platforms__container'>

                <div className='platform platform--working'>
                    <Link to="/espn">
                        <img className='platform__image platform__image--espn' src={`./images/intro/espn.png`} alt='poop' />
                    </Link>
                </div>

                <div className='platform platform--working'>
                    <Link to="/sleeper">
                        <img className='platform__image' src={`./images/intro/sleeper.png`} alt='poop' />
                    </Link>
                </div>


                <div className='platform'>
                    <img className='platform__image' src={`./images/intro/yahoo.jpg`} alt='poop' />
                    <div className="platform__disclaimer">
                        <p className='u-margin-auto'>COMING SOON</p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Platforms;
