import React, { Component } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


class Features extends Component {
    render() {
        return (
            <section className='features'>
                <Container>
                    <Row className='u-space-evenly'>
                        <Col xs={9} sm={6} md={3}>
                            <div className='box'>
                                <i className='icon-basic-world box__icon'></i>
                                <h3 className='heading-tertiary'>Connect your league</h3>
                                <p className='box__text'>
                                    tur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                                    tur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                            </p>
                            </div>
                        </Col>
                        <Col xs={9} sm={6} md={3}>
                            <div className='box'>
                                <i className='icon-basic-picture-multiple box__icon'></i>
                                <h3 className='heading-tertiary'>Generate a report</h3>
                                <p className='box__text'>
                                    tur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                                    tur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                            </p>
                            </div>
                        </Col>
                        <Col xs={9} sm={6} md={3}>
                            <div className='box'>
                                <i className='icon-basic-display box__icon'></i>
                                <h3 className='heading-tertiary'>Download the report</h3>
                                <p className='box__text'>
                                    tur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                                    tur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                            </p>
                            </div>
                        </Col>
                        <Col xs={9} sm={6} md={3}>
                            <div className='box'>
                                <i className='icon-basic-link box__icon'></i>
                                <h3 className='heading-tertiary'>Rinse and repeat! now</h3>
                                <p className='box__text'>
                                    tur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                                    tur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                            </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default Features;
