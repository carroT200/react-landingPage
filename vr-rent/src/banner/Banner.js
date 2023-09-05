import { Fragment } from 'react';
import Button from '../header/Button';

import classes from './Banner.module.css';

const Banner = (props) => {
  return (
    <main className={classes.content}>
      <div className={classes.wrapper}>
        <p>{props.smallParagraph}</p>
        <p className={classes['main-paragraph']}>{props.bigParagraph}</p>
        <p className={classes['paragraph']}>{props.midlleParagraph}</p>
        <p className={classes.text}>{props.text}</p>
        <Button />
      </div>
    </main>
  );
};

export default Banner;
