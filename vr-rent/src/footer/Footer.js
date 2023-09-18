import classes from './Footer.module.css';

import Inst from './inst';
import Facebook from './facebook';

const Footer = () => {
  return (
    <section className={classes.footer}>
      <p className={classes.text}>
        Copyright © 2022 HEALAS.LT. All Rights Reserved.
      </p>
      <label>
        <ul className={classes.links}>
          <li className={classes.list}>
            <a href="https://www.facebook.com/" className={classes.logo}>
              <Facebook />
            </a>
          </li>
          <li className={classes.list}>
            <a href="https://www.instagram.com/" className={classes.logo}>
              <Inst />
            </a>
          </li>
        </ul>
      </label>
    </section>
  );
};

export default Footer;
