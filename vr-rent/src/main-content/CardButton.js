import React from 'react';

import classes from './CardButton.module.css';

const CardButton = React.forwardRef((props) => {
  return (
    <button className={classes.btn} onClick={props.onClick}>
      Select this plan
    </button>
  );
});

export default CardButton;
