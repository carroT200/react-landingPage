import React, { useState } from 'react';
import Menu from './panel/Menu';
import Logo from './Logo';

import classes from './Header.module.css';

const Header = (props) => {
  const [menuActive, setMenuActive] = useState(false);

  const items = [{ value: 'Rules', href: 'https://vrroom.lv/en/noteikumi' }];
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
      </div>
    </nav>
  );
};

export default Header;
