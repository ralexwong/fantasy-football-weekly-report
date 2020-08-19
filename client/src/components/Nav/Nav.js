import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
} from 'reactstrap';

const Navagation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar className="nav" expand="md">
      <NavbarBrand className="mr-auto nav__homeText" href="/">FFWR</NavbarBrand>
      <NavbarToggler onClick={toggle} className="mr-2" />
      <Collapse isOpen={!isOpen} navbar>
        <Nav navbar>
          <Link to="/sleeper">Sleeper Input</Link>
          <Link to="/weekly-report-sleeper">Sleeper Weekly </Link>
          <Link to="/overall-report-sleeper">Sleeper Overall </Link>

          <Link to="/espn">Espn Input</Link>
          <Link to="/weekly-report-espn">Espn Weekly </Link>
          <Link to="/overall-report-espn">Espn Overall </Link>

        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default Navagation;