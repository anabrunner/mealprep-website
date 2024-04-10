import Image from 'next/image';
import Link from 'next/link';
import logoPic from '../../../public/PrepPotatoLogo.png';
import styles from './Navbar.module.css';

export interface INavbar {}
// eslint-disable-next-line no-empty-pattern
export function Navbar({}: INavbar) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logoHeader}>
          <Image src={logoPic} alt="PrepPotato Logo" width={100} />
          <h1 className="font-headingFont">PrepPotato</h1>
        </div>
        <input type="checkbox" name="" id="" />
        <div className={styles.hamburgerLines}>
          <span className={styles.line1}></span>
          <span className={styles.line2}></span>
          <span className={styles.line3}></span>
        </div>
        <ul className={styles.menuLinks}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="about">About Us</Link>
          </li>
          <li>
            <Link href="blog">Blog</Link>
          </li>
          <li className={styles.loginBtn}>
            <Link href="login">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
