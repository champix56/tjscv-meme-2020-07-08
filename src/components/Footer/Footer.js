import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.scss';

const Footer = () => (
  <div className={styles.Footer} data-testid="Footer">
   &copy;opyright 2020 Orsys
  </div>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
