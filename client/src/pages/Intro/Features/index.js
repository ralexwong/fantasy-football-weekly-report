import React, { Component } from 'react';
import styles from "./../../../sass/components/intro/_features.module.scss";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Features extends Component {
    render() {
        return (
            <section className={styles.features}>
                <Row className={styles.row}>
                    <Col xs={11} sm={5} md={2}>
                        <div className={styles.box}>
                            <i className={`icon-basic-world ${styles.box__icon}`}></i>
                            <h3 className={styles.tertiary}>Connect your league</h3>
                            <p className={styles.box__text}>
                                tur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                                tur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                            </p>
                        </div>
                    </Col>
                    <Col xs={11} sm={5} md={2}>
                        <div className={styles.box}>
                            <i className={`icon-basic-picture-multiple ${styles.box__icon}`}></i>
                            <h3 className={styles.tertiary}>Generate a report</h3>
                            <p className={styles.box__text}>
                                tur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                                tur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                            </p>
                        </div>
                    </Col>
                    <Col xs={11} sm={5} md={2}>
                        <div className={styles.box}>
                            <i className={`icon-basic-display ${styles.box__icon}`}></i>
                            <h3 className={styles.tertiary}>Download the report</h3>
                            <p className={styles.box__text}>
                                tur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                                tur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                            </p>
                        </div>
                    </Col>
                    <Col xs={11} sm={5} md={2}>
                        <div className={styles.box}>
                            <i className={`icon-basic-link ${styles.box__icon}`}></i>
                            <h3 className={styles.tertiary}>Rinse and repeat!</h3>
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
