import { NavLink } from "react-router-dom";
import { menus } from "../../../Utils/menus";
import "./MenuBar.css";

const MenuBar = () => {
  return (
    <div className="menu-bar">
      <div className="logo">
        <h1>MC</h1>
        <span>Menacoupon</span>
      </div>
      <div className="all-menu-container">
        <div className="main-menu-container">
          {menus.map((menu) => (
            <NavLink
              key={menu.label}
              to={menu.link}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active menu" : "menu"
              }
            >
              {menu.label}
            </NavLink>
          ))}
        </div>
        <NavLink to="/promotion" className="menu">
          Promotion
        </NavLink>
        <NavLink to="/logout" className="menu">
          Logout
        </NavLink>
      </div>
    </div>
  );
};

export default MenuBar;
