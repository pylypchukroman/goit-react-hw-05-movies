import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <NavLink
        exact
        className={styles.link}
        activeClassName={styles.activeClass}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={styles.link}
        activeClassName={styles.activeClass}
        to="/movies"
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
