import React, { Component } from 'react'

import { Row, Col } from "reactstrap"

class About extends Component {
    render() {
        return (
            <section className='about'>
                <div className='u-center-text u-margin-bottom-big'>
                    <h2 className='heading-secondary'>Exciting reports for exciting people</h2>
                </div>

                <Row>
                    <Col xs={12} sm={6}>
                        <h3 className='heading-teritary'>Spice up your league</h3>
                        <p className='paragraph'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into 
                        electronic typesetting, remaining essentially unchanged. </p>

                        <h3 className='heading-teritary'>Spice up your league</h3>
                        <p className='paragraph'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of 
                        type and scrambled it to make a type specimen book.</p>
                    </Col>

                    <Col xs={12} sm={6}>
                        <div className='composition'>
                            <img src="./images/intro/payouts.jpg" alt="photo1" className='composition__photo composition__photo--1'></img>
                            <img src="./images/intro/fantasy2.jpg" alt="photo2" className='composition__photo composition__photo--2'></img>
                            <img src="./images/intro/fantasy.jpg" alt="photo3" className='composition__photo composition__photo--3'></img>
                        </div>
                    </Col>
                </Row>
            </section>
        )
    }
}

export default About;
