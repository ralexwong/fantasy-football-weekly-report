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
                        <span className={styles.headingPrimaryMain}>Fantasy Football Weekly Reports</span>
                        {/* <span className={styles.headingPrimarySub}>Its about proving that you are better than your friends</span> */}
                    </h1>
                </div>
            </div>
        )
    }
}

export default Header;
