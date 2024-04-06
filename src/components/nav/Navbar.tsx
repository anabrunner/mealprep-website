import Link from 'next/link';
import styles from './Navbar.module.css';

export interface INavbar {}
// eslint-disable-next-line no-empty-pattern
export function Navbar({}: INavbar) {
  return (
    <ul className={styles.navbar}>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="about">About Us</Link>
      </li>
      <li>
        <Link href="blog">Blog</Link>
      </li>
      <li>
        <Link href="login">Login</Link>
      </li>
    </ul>
  );
}
