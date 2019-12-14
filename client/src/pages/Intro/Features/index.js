import React, { Component } from 'react';
import styles from "./../../../sass/components/intro/_features.module.scss";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Features extends Component {
    render() {
        return (
            <section className={styles.features}>
                <Row>
                    <Col>
                        <div className={styles.box}>
                            <i className={`icon-basic-world ${styles.box__icon}`}></i>
                            <h3 className={styles.tertiary}>Explore the world</h3>
                            <p className={styles.box__text}>
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
