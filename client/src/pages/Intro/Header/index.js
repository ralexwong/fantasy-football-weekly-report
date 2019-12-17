import React, { Component } from 'react'
import { Link } from "react-router-dom";
import styles from "./../../../sass/components/intro/_header.module.scss";

class Header extends Component {
    render() {
        return (
            <div className={styles.header}>
                <div className={styles.header__logoBox}>
                    <img className={styles.header__logo} src="/images/intro/logo-white.png" alt="logo"></img>
                </div>

                <div className={styles.header__textBox}>
                    <h1 className={styles.headingPrimary}>
                        <span className={styles['headingPrimary--main']}>Fantasy Football</span>
                        <span className={styles['headingPrimary--sub']}>Weekly Reports</span>
                    </h1>

                    <Link to="#" className={`${styles.headingBtn} ${styles['headingBtn--white']} ${styles['headingBtn--animated']}`}>Choose Your Platform!</Link>
                </div>
            </div>
        )
    }
}

export default Header;
