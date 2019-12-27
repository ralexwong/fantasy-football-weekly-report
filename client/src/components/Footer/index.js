import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "../../sass/main.scss";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class Footer extends Component {
  render() {
    return (
      <footer className='footer'>
        <div className='footer__logo-box'>
          <img src='../../images/intro/logo-green-2x.png' alt='footer_photo' className='footer__logo'>
          </img>
        </div>

        <Row noGutters={true} className='rowSpace-evenly'>
          <Col xs='4'>
            <div className='footer__navigation'>
              <ul className='footer__list'>
                <li className='footer__item'><a href='#' className='footer__link'>Company</a></li>
                <li className='footer__item'><a href='#' className='footer__link'>Contact Us</a></li>
                <li className='footer__item'><a href='#' className='footer__link'>Careers</a></li>
                <li className='footer__item'><a href='#' className='footer__link'>Privacy Policy</a></li>
                <li className='footer__item'><a href='#' className='footer__link'>Terms</a></li>
              </ul>
            </div>
          </Col>

          <Col xs='4'>
            <p className='footer__copyright'>
              Built by Alexander Wong for personal use. Copyright &copy; by Alexander Wong. Credit to Jonas Schmedtmann for the template for the landing page. 
            </p>
          </Col>
        </Row>
      </footer>
    );
  }
}

export default Footer;