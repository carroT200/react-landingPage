import classes from './Button.module.css';

const Button = (props) => {
  return (
    <button onClick={props.onShow}>
      <section className={classes.badge}>Profile</section>
    </button>
  );
};

export default Button;
