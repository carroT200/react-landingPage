import './Menu.css';

const Menu = ({ items, active, setActive }) => {
  return (
    <div
      className={active ? 'menu active' : 'menu'}
      onClick={() => setActive(!active)}
    >
      <div className="blur" />
      <div className="menu-content" onClick={(e) => e.stopPropagation()}>
        <ul>
          {items.map((item) => (
            <li>
              <a href={item.href}>{item.value}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
