import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Dropdown, DropdownItem, DropdownToggle, DropdownMenu
} from 'reactstrap';

const Navagation = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const dropdown = () => setDropdownOpen(!dropdownOpen);


  return (
    <Navbar className="nav" expand="md">
      <NavbarBrand className="mr-auto nav__homeText" href="/">FFWR</NavbarBrand>
      <NavbarToggler onClick={toggle} className="mr-2" />
      <Collapse isOpen={!isOpen} navbar>
        <Nav navbar>

          <Dropdown nav isOpen={dropdownOpen} toggle={dropdown}>
            <DropdownToggle nav caret>
              Sleeper
              </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>
                <Link to="/sleeper">Sleeper</Link>
              </DropdownItem>
              <DropdownItem>
                <Link className="" to="/weekly-report-sleeper">Weekly Report</Link>
              </DropdownItem>
              <DropdownItem> 
                <Link to="/overall-report-sleeper">Overall Report</Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>

          <Dropdown nav isOpen={dropdownOpen} toggle={dropdown}>
            <DropdownToggle nav caret>
              Espn
              </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>
                <Link to="/espn">Input</Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="/weekly-report-espn">Espn</Link>
              </DropdownItem>
              <DropdownItem>            
                <Link to="/overall-report-espn">Overall Report</Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default Navagation;