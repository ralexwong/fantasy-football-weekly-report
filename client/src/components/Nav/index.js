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
    <Navbar className="nav" color="light" light expand="md">
      <NavbarBrand className="nav__homeText" href="/">FFWR</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <Link className="" to="/report">Weekly Report</Link>
          </NavItem>

          <NavItem>
            <Link to="/report2">Overall Report</Link>
          </NavItem>

          <NavItem>
            <Link to="/sleeperInput">Sleeper</Link>
          </NavItem>

          <NavItem>
            <Link to="/espnInput">Espn</Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default Navagation;