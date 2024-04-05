import styles from './Navbar.module.css';

export interface INavbar {}
// eslint-disable-next-line no-empty-pattern
export function Navbar({}: INavbar) {
  return (
    <ul className={styles.navbar}>
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">Get Started</a>
      </li>
      <li>
        <a href="#">About Us</a>
      </li>
      <li>
        <a href="#">Contact Us</a>
      </li>
    </ul>
  );
}
