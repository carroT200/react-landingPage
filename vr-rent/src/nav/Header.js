import React, { useState } from 'react';
import Menu from './panel/menu';
import Logo from './Logo';

import classes from './Header.module.css';

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const items = [
    { value: 'Profile', href: '/main' },
    { value: 'Rules', href: '/rules' },
    { value: 'Prices', href: '/price' },
  ];
  return (
    <nav>
      <div
        className={classes.burger}
        onClick={() => setMenuActive(!menuActive)}
      >
        <span />
      </div>
      <Menu items={items} active={menuActive} setActive={setMenuActive} />
      <Logo />
    </nav>
  );
};

export default Header;
