import React from 'react';
import PropTypes from 'prop-types';
import styles from './MemeNavbar.module.scss';
import { Navbar, NavLink, NavbarBrand,Nav,NavItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
const MemeNavbar = (props) => (
  <div className={styles.MemeNavbar} data-testid="MemeNavbar">
    <Navbar >
       <NavbarBrand href="#">Title</NavbarBrand>
      <Nav>
        <NavItem className="active">
          <NavLink href="#">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  </div>
);

MemeNavbar.propTypes = {};

MemeNavbar.defaultProps = {};

export default MemeNavbar;
