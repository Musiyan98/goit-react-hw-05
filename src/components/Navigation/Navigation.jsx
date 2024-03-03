import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './Navigation.module.css';

const createLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Navigation = () => {
  return (
    <nav className={css.nav}>
      <NavLink to="/" className={createLinkClass}>
        Home
      </NavLink>
      <NavLink to="/movies" className={createLinkClass}>
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
