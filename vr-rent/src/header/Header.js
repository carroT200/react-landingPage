import Logo from './Logo';
import Button from './Button';

import classes from './Header.module.css';

const Header = () => {
  return (
    <header>
      <div>
        <Logo />
      </div>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Rules</a>
          </li>
          <Button />
        </ul> 
      </nav>
    </header>
  );
};

export default Header;
