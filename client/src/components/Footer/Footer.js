import React from 'react'

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Footer() {
    return (
      <footer className='footer'>
        <div className='footer__logo-box'>
          <picture className='footer__logo'>
            <source srcSet='./images/default.png 1x, ./images/default.png 2x' media="(max-width: 35.9em)" />
            <img srcSet='./images/default.png 1x, ./images/default.png 2x' alt='footer_photo' className='footer__logo' />
          </picture>
        </div>

        <div className='footer__info'>
          <div className='footer__navigation'>
            <ul className='footer__list'>
              <li className='footer__item'><a href='https://github.com/ralexwong' className='footer__link'><GitHubIcon /> </a></li>
              <li className='footer__item'><a href='https://www.linkedin.com/in/iamwong/' className='footer__link'><LinkedInIcon /></a></li>
            </ul>
          </div>

          <p className='footer__copyright'>
            Built by Alexander Wong for personal use. Copyright &copy; by Alexander Wong. Credit to Jonas Schmedtmann for the template for the landing page.
          </p>
        </div>
      </footer>
    );
}

export default Footer;