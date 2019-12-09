import React, { Component } from 'react'
import styles from "./style.module.scss";

class Header extends Component {
    render() {
        return (
            <div className={styles.header}>
                <div className={styles.logoBox}>
                    <img className={styles.logo} src="/images/intro/logo-white.png" alt="logo"></img>
                </div>

                <div className={styles.textBox}>
                    <h1 className={styles.headingPrimary}>
                        <span className={styles.headingPrimaryMain}>Fantasy Football</span>
                        <span className={styles.headingPrimarySub}>Weekly Reports</span>
                    </h1>

                    <a href="#" className={`${styles.btn} ${styles.btnWhite} ${styles.btnAnimated}`}>Choose Your Platform!</a>
                </div>
            </div>
        )
    }
}

export default Header;
