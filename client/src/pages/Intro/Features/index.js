import React, { Component } from 'react';
import "../../../sass/main.scss";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Features extends Component {
    render() {
        return (
            <section className='features'>
                <Row noGutters={true}>
                    <Col xs={11} sm={5} md={2}>
                        <div className='box'>
                            <i className='icon-basic-world box__icon'></i>
                            <h3 className='heading-tertiary'>Connect your league</h3>
                            <p className='box__text'>
                                tur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                                tur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                            </p>
                        </div>
                    </Col>
                    <Col xs={11} sm={5} md={2}>
                        <div className='box'>
                            <i className='icon-basic-picture-multiple box__icon'></i>
                            <h3 className='heading-tertiary'>Generate a report</h3>
                            <p className='box__text'>
                                tur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                                tur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                            </p>
                        </div>
                    </Col>
                    <Col xs={11} sm={5} md={2}>
                        <div className='box'>
                            <i className='icon-basic-display box__icon'></i>
                            <h3 className='heading-tertiary'>Download the report</h3>
                            <p className='box__text'>
                                tur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                                tur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                            </p>
                        </div>
                    </Col>
                    <Col xs={11} sm={5} md={2}>
                        <div className='box'>
                            <i className='icon-basic-link box__icon'></i>
                            <h3 className='heading-tertiary'>Rinse and repeat!</h3>
                            <p className='box__text'>
                                tur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                                tur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                            </p>
                        </div>
                    </Col>
                </Row>
            </section>
        )
    }
}

export default Features;
