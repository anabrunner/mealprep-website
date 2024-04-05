import styles from './Footer.module.css';

export interface IFooter {}
// eslint-disable-next-line no-empty-pattern
export function Footer({}: IFooter) {
  return (
    <ul className={styles.footer}>
      <li>Support</li>
      <li>Contact</li>
    </ul>
  );
}
