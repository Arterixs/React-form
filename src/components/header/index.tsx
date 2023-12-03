import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { RouteApp } from 'types/enum/routes';

import styles from './style.module.css';

export const Header = () => {
  const classesActiveSubLink = clsx(styles.link, styles.active);
  return (
    <header className={styles.header}>
      <section className={styles.container}>
        <h1 className={styles.title}>React Forms</h1>
        <section className={styles.links}>
          <NavLink
            to={RouteApp.UNCONTROLLED}
            className={({ isActive }) => (isActive ? classesActiveSubLink : styles.link)}
          >
            Uncontrolled form
          </NavLink>
          <NavLink 
            to={RouteApp.MAIN} 
            className={({ isActive }) => (isActive ? classesActiveSubLink : styles.link)}
          >
            Main
          </NavLink>
          <NavLink
            to={RouteApp.CONTROLLED}
            className={({ isActive }) => (isActive ? classesActiveSubLink : styles.link)}
          >
            Controlled form
          </NavLink>
        </section>
      </section>
    </header>
  );
};
