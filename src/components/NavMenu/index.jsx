import { Link } from "react-router-dom";

import "./styles.scss";

const NavMenu = ({ navItems }) => {
  return (
    <div className="nav-menu">
      <ul
        className={`grid ${
          navItems.length > 8 ? "grid-cols-2" : "grid-cols-1"
        }`}
      >
        {navItems.map((item) => (
          <Link to={item.url} className="nav-menu-item">
            <li key={item.name} className="item-text">
              {item.name}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default NavMenu;
