import Image from 'next/image';
import Link from 'next/link';
import logoPic from '../../../public/PrepPotatoLogo.png';
import styles from './Navbar.module.css';

export interface INavbar {}
// eslint-disable-next-line no-empty-pattern
export function Navbar({}: INavbar) {
  return (
    <div className={styles.navbar}>
      <Image src={logoPic} alt="PrepPotato Logo" width={100} />
      <h1 className="font-headingFont">PrepPotato</h1>
      <ul className="flex justify-end w-screen p-5 space-x-6">
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
    </div>
  );
}
