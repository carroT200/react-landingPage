import React, { useState } from 'react';
import Menu from './panel/Menu';
import Logo from './Logo';
import Button from './Button';

import classes from './Header.module.css';

const Header = (props) => {
  const [menuActive, setMenuActive] = useState(false);

  const items = [
    { value: 'Profile', href: '/main' },
    { value: 'Rules', href: '/rules' },
    { value: 'Prices', href: '/price' },
  ];
  return (
    <nav>
      <Menu items={items} active={menuActive} setActive={setMenuActive} />
      <div className={classes.menu}>
        <div
          className={classes.burger}
          onClick={() => setMenuActive(!menuActive)}
        >
          <span />
        </div>
        <Logo />
        <Button onShow={props.onShowCart} />
      </div>
    </nav>
  );
};

export default Header;
