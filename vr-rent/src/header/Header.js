import React, { useState } from 'react';
import Menu from './menu/Menu';

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
    </nav>
  );
};

export default Header;
