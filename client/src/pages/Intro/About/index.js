import React, { Component } from 'react'
import { Link } from "react-router-dom";

import styles from "../../../sass/main.scss";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class About extends Component {
    render() {
        return (
            <section className='about'>
                <h2 className='u-center-text u-margin-bottom-big heading-secondary'>Exciting reports for exciting people</h2>

                <Row>
                    <Col>
                        <h3 className='heading-teritary'>Spice up your league</h3>
                        <p className='paragraph'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into 
                        electronic typesetting, remaining essentially unchanged. </p>

                        <h3 className='heading-teritary'>Spice up your league</h3>
                        <p className='paragraph'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of 
                        type and scrambled it to make a type specimen book.</p>

                        <Link to="#" className='btn-text'>Learn more &rarr;</Link> 
                    </Col>

                    <Col>
                        <div classname='composition'>
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
