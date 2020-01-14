import React, { Component, useState } from 'react';
import { Link } from "react-router-dom";

import "../../../sass/main.scss";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Platforms extends Component {

    
    render() {
        return (
            <section className='platforms'>
                <h2 className='u-center-text u-margin-bottom-big heading-secondary'>Choose your platform</h2>
                <Row noGutters={true} className='rowSpace-evenly'>
                    <Col xs={11} sm={5} md={3}>
                        <div className='card'>
                            <div className='card__side card__side--front card__side--front-1'>
                                <div className='card__picture card__picture--1'>
                                    &nbsp;
                                </div>
                                <div className='card__details'>
                                    <ul>
                                        <li>3 day tour</li>
                                        <li>up to 30 people</li>
                                        <li>2 your guides</li>
                                        <li>sleep in cozy hotels</li>
                                        <li>difficulty: easy</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='card__side card__side--back card__side--back-1'>
                                <Link to="#" className='platformBtn platformBtn--white platformBtn--animated'>
                                    espn
                                </Link>
                            </div>
                        </div>
                    </Col>

                    <Col xs={11} sm={5} md={3}>
                        <div className='card'>
                            <div className='card__side card__side--front card__side--front-2'>
                                <div className='card__picture card__picture--2'>
                                    &nbsp;
                                </div>
                                <div className='card__details'>
                                    <ul>
                                        <li>3 day tour</li>
                                        <li>up to 30 people</li>
                                        <li>2 your guides</li>
                                        <li>sleep in cozy hotels</li>
                                        <li>difficulty: easy</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='card__side card__side--back card__side--back-2'>
                                <Link to="#" className='platformBtn platformBtn--white platformBtn--animated'>
                                    sleeper
                                </Link>
                            </div>
                        </div>
                    </Col>

                    <Col xs={11} sm={5} md={3}>
                        <div className='card'>
                            <div className='card__side card__side--front card__side--front-3'>
                                <div className='card__picture card__picture--3'>
                                    &nbsp;
                                </div>
                                <div className='card__details'>
                                    <ul>
                                        <li>3 day tour</li>
                                        <li>up to 30 people</li>
                                        <li>2 your guides</li>
                                        <li>sleep in cozy hotels</li>
                                        <li>difficulty: easy</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='card__side card__side--back card__side--back-3'>
                                <div  className='platformBtn platformBtn--white platformBtn--animated'>
                                    yahoo
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>

                <div className='u-center-text u-margin-top-huge'>
                    <Link to="#" className='btn btn--blue btn--animated'>
                        Let's Go!
                    </Link>
                </div>
            </section>
        )
    }
}

export default Platforms;
