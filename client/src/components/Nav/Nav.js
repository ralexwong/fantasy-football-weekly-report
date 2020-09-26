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
    <Navbar className="navbar" color="light" light expand="md">
      <Link style={{ marginRight: '5rem' }} to="/">FFWR</Link>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Sleeper
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <Link to="/weekly-report-sleeper"><div className="dropdown-link">Weekly Report</div></Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="/overall-report-sleeper"><div className="dropdown-link">Overall Report</div></Link>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                <Link to="/sleeper"><div className="dropdown-link">Input</div></Link>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>

          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Espn
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <Link to="/weekly-report-espn"><div className="dropdown-link">Weekly Report</div></Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="/overall-report-espn"><div className="dropdown-link">Overall Report</div></Link>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                <Link to="/espn"><div className="dropdown-link">Input</div></Link>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default Navagation;