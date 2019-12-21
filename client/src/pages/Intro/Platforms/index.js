import React, { Component } from 'react';
import styles from "./../../../sass/components/intro/_platforms.module.scss";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Platforms extends Component {
    render() {
        return (
            <section className={styles.platforms}>
                <h2 className={styles.platformsPrimary}>Choose your platform</h2>
                <Row noGutters={true} className={styles.row}>
                    <Col xs={11} sm={5} md={3}>
                        <div className={styles.card}>
                            <div className={`${styles.card__side} ${styles['card__side--front']} ${styles['card__side--front-1']}`}>
                                <div className={`${styles.card__picture} ${styles['card__picture--1']}`}>
                                    &nbsp;
                                </div>
                                <div className={styles.card__details}>
                                    <ul>
                                        <li>3 day tour</li>
                                        <li>up to 30 people</li>
                                        <li>2 your guides</li>
                                        <li>sleep in cozy hotels</li>
                                        <li>difficulty: easy</li>
                                    </ul>
                                </div>
                            </div>
                            <div className={`${styles.card__side} ${styles['card__side--back']} ${styles['card__side--back-1']}`}>back</div>
                        </div>
                    </Col>

                    <Col xs={11} sm={5} md={3}>
                        <div className={styles.card}>
                            <div className={`${styles.card__side} ${styles['card__side--front']} ${styles['card__side--front-2']}`}>
                                <div className={`${styles.card__picture} ${styles['card__picture--2']}`}>
                                    &nbsp;
                                </div>
                                <div className={styles.card__details}></div>
                            </div>
                            <div className={`${styles.card__side} ${styles['card__side--back']} ${styles['card__side--back-2']}`}>back</div>
                        </div>
                    </Col>

                    <Col xs={11} sm={5} md={3}>
                        <div className={styles.card}>
                            <div className={`${styles.card__side} ${styles['card__side--front']} ${styles['card__side--front-3']}`}>
                                <div className={`${styles.card__picture} ${styles['card__picture--3']}`}>
                                    &nbsp;
                                </div>
                                <div className={styles.card__details}></div>
                            </div>
                            <div className={`${styles.card__side} ${styles['card__side--back']} ${styles['card__side--back-3']}`}>back</div>
                        </div>
                    </Col>
                </Row>
            </section>
        )
    }
}

export default Platforms;
