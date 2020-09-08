import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

const Navagation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="light" light expand="md">
      <Link to="/">FFWR</Link>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Sleeper
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <Link to="/weekly-report-sleeper">Sleeper Weekly </Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="/overall-report-sleeper">Sleeper Overall </Link>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                <Link to="/sleeper">Sleeper Input</Link>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>

          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Espn
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <Link to="/weekly-report-espn">Espn Weekly </Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="/overall-report-espn">Espn Overall </Link>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                <Link to="/espn">Espn Input</Link>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default Navagation;