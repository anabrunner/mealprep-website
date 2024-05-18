'use client';
import { SignOutButton, useUser } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import logoPic from '../../../public/PrepPotatoLogo.png';
import GitHubLogo from '../../../public/github-mark.png';
import styles from './Footer.module.css';

export interface IFooter {}
// eslint-disable-next-line no-empty-pattern
export function Footer({}: IFooter) {
  const { user, isLoaded } = useUser();
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoHeader}>
          <Image src={logoPic} alt="PrepPotato Logo" width={50} />
          <h2 className="font-headingFont text-2xl m-2">PrepPotato</h2>
        </div>
        <h3 className="text-xl">Navigation</h3>
        <ul className={styles.navigationLinks}>
          <li>
            <Link href="/">Home</Link>
          </li>
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
        <div className={styles.copyright}>
          &copy;&nbsp;{currentYear}&nbsp;
          <a href="https://github.com/anabrunner" target="_blank">
            anabrunner
          </a>
          &nbsp;
          <a href="https://github.com/anabrunner" target="_blank">
            <Image src={GitHubLogo} alt="GitHub Logo" width={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
