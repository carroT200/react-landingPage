import classes from './Banner.module.css';

const Banner = (props) => {
  return (
    <main>
      <div className={classes.wrapper}>
        <section>
          <p>{props.smallParagraph}</p>
          <p className={classes['main-paragraph']}>{props.bigParagraph}</p>
          <p className={classes['paragraph']}>{props.midlleParagraph}</p>
          <p className={classes.text}>{props.text}</p>
        </section>
        <img className={classes.img} src={props.image} alt="" />
      </div>
    </main>
  );
};

export default Banner;
