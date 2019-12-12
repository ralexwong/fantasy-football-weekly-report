import React, { Component } from 'react'
import { Link } from "react-router-dom";

import styles from "./../../../sass/components/intro/_about.module.scss";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class About extends Component {
    render() {
        return (
            <div className={styles.about}>
                <h2 className={styles.aboutPrimary}>Exciting reports for cool people</h2>

                <Row className={styles.aboutRow}>
                    <Col>
                        <h3 className={styles.aboutTeritary}>Spice up your league</h3>
                        <p className={styles.aboutParagraph}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into 
                        electronic typesetting, remaining essentially unchanged. </p>

                        <h3 className={styles.aboutTeritary}>Spice up your league</h3>
                        <p className={styles.aboutParagraph}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of 
                        type and scrambled it to make a type specimen book.</p>

                        <Link to="#" className={styles.aboutBtn}>Learn more &rarr;</Link> 
                    </Col>

                    <Col>

                    </Col>
                </Row>
            </div>
        )
    }
}

export default About;
