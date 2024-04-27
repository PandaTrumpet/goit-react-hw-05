import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

import clsx from "clsx";
export default function Navigation() {
  const linkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <nav className={css.headerNav}>
      <NavLink to="/" className={linkClass}>
        Home
      </NavLink>
      <NavLink to="/movies" className={linkClass}>
        Movies
      </NavLink>
    </nav>
  );
}
