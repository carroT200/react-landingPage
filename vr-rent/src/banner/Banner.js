import { Fragment } from 'react';
import Button from '../header/Button';

import classes from './Banner.module.css';

const Banner = () => {
  return (
    <main className={classes.content}>
      <p>Gaming Consoles</p>
      <p className={classes['main-paragraph']}>Try It, Rent It, </p>
      <p className={classes['paragraph']}>Save $50!</p>
      <p className={classes.text}>
        It is a long established fact that a reader will be distracted by <br />
        the readable content of a page when looking at its layout. The <br />
        point of using Lorem Ipsum is that it has a more-or-less normal <br />
        distribution of letters as opposed.
      </p>
      <Button />
    </main>
  );
};

export default Banner;
