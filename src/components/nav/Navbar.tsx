'use client';
import { SignOutButton, useUser } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import logoPic from '../../../public/PrepPotatoLogo.png';
import styles from './Navbar.module.css';

export interface INavbar {}
// eslint-disable-next-line no-empty-pattern
export function Navbar({}: INavbar) {
  const { user, isLoaded } = useUser();
  return (
    <header className={styles.navbar}>
      <nav className={styles.container}>
        <Link href="/">
          <div className={styles.logoHeader}>
            <Image src={logoPic} alt="PrepPotato Logo" width={100} />
            <h1 className="font-headingFont">PrepPotato</h1>
          </div>
        </Link>
        <input type="checkbox" name="" id="" />
        <div className={styles.hamburgerLines}>
          <span className={styles.line1}></span>
          <span className={styles.line2}></span>
          <span className={styles.line3}></span>
        </div>
        <ul className={styles.menuLinks}>
          <li>
            <Link href="dashboard">Dashboard</Link>
          </li>
          <li>
            <Link href="blog">Blog</Link>
          </li>
          <li>
            <Link href="about">About</Link>
          </li>
          <li>
            <Link href="contact">Contact</Link>
          </li>
          {isLoaded && user && (
            <li className={styles.loginBtn}>
              <SignOutButton>Logout</SignOutButton>
            </li>
          )}
          {!user && (
            <li className={styles.loginBtn}>
              <Link href="sign-in">Login</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
