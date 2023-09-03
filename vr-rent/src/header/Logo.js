import { Fragment } from 'react';

import classes from './Logo.module.css';

const Logo = () => {
  return (
    <Fragment>
      <h2 className={classes.logo}>Timmy Rent</h2>
    </Fragment>
  );
};

export default Logo;
