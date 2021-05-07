import React from 'react';
import { Link } from "react-router-dom";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Platforms = (props) => {
    return (
        <section className='platforms' ref={props.reference}>
            <div className='u-center-text u-margin-bottom-big'>
                <h2 className='heading-secondary'>Choose your platform</h2>
            </div>
            <Row noGutters={true} className='u-space-evenly'>
                <Col xs={9} sm={5} md={3}>
                    <Link to="/espn">
                        <div className='box box--working'>
                            <img className='box__image box__image--espn' src={`./images/intro/espn.png`} alt='poop' />
                        </div>
                    </Link>
                </Col>

                <Col xs={9} sm={5} md={3}>
                    <Link to="/sleeper">
                        <div className='box box--working'>
                            <img className='box__image' src={`./images/intro/sleeper.png`} alt='poop' />
                        </div>
                    </Link>
                </Col>

                <Col xs={9} sm={5} md={3}>
                    <div className='box' >
                        <img className='box__image' src={`./images/intro/yahoo.jpg`} alt='poop' />
                        <div className="box__disclaimer">
                            <p className='u-margin-auto'>COMING SOON</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </section>
    )
}

export default Platforms;
