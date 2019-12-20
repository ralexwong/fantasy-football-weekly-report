import React, { Component } from 'react';
import styles from "./../../../sass/components/intro/_platforms.module.scss";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Platforms extends Component {
    render() {
        return (
            <section className={styles.platforms}>
                <h2 className={styles.platformsPrimary}>Choose your platform</h2>
            </section>
        )
    }
}

export default Platforms;
