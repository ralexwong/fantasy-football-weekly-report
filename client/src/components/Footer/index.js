import React, { Component } from 'react'
import { Link } from "react-router-dom";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class Footer extends Component {
  render() {
    return (
      <footer className='footer'>
        <div className='footer__logo-box'>
          <picture className='footer__logo'>
            <source  srcSet='./images/default.png 1x, ./images/default.png 2x' media="(max-width: 35.9em)" />
            <img srcSet='./images/default.png 1x, ./images/default.png 2x' alt='footer_photo' className='footer__logo' />
          </picture>
        </div>

        <Row noGutters={true} className='u-space-evenly'>
          <Col xs='4'>
            <div className='footer__navigation'>
              <ul className='footer__list'>
                <li className='footer__item'><Link to='#' className='footer__link'>Company</Link></li>
                <li className='footer__item'><Link to='#' className='footer__link'>Contact Us</Link></li>
                <li className='footer__item'><Link to='#' className='footer__link'>Careers</Link></li>
                <li className='footer__item'><Link to='#' className='footer__link'>Privacy Policy</Link></li>
                <li className='footer__item'><Link to='#' className='footer__link'>Terms</Link></li>
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