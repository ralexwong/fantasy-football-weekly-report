import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';

const Navagation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
      <Navbar className="nav"  expand="md">
        <NavbarBrand className="mr-auto nav__homeText" href="/">FFWR</NavbarBrand>
        <NavbarToggler onClick={toggle} className="mr-2" />
        <Collapse isOpen={!isOpen} navbar>
          <Nav navbar>
            <NavItem>
              <Link className="" to="/report">Weekly Report</Link>
            </NavItem>

            <NavItem>
              <Link to="/report2">Overall Report</Link>
            </NavItem>

          <NavItem>
            <Link to="/sleeper">Sleeper</Link>
          </NavItem>

          <NavItem>
            <Link to="/espn">Espn</Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default Navagation;