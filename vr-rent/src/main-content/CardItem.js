import CardButton from './CardButton';
import Swoosh from './Swoosh';

import classes from './CardItem.module.css';

const CardItem = (props) => {
  return (
    <section className={classes.wrapper}>
      <h4 className={classes.name}>{props.name}</h4>
      <h2 className={classes.price}>{props.price}</h2>
      <p className={classes.list}>
        <Swoosh />
        {props.userQnty}
      </p>
      <p className={classes.list}>
        <Swoosh />
        {props.storageSize}
      </p>
      <p className={classes.list}>
        <Swoosh />
        {props.emailSupport}
      </p>
      <p className={classes.list}>
        <Swoosh />
        {props.help}
      </p>
      <CardButton />
    </section>
  );
};

export default CardItem;
