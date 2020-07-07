import React from 'react';
import PropTypes from 'prop-types';
import styles from './Banner.module.scss';

const Banner = () => (
  <div className={styles.Banner} data-testid="Banner">
    Meme <span>.</span> Maker
  </div>
);

Banner.propTypes = {};

Banner.defaultProps = {};

export default Banner;
