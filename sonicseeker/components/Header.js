import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <Link href="/">
        <div className={styles.logo}>
          <img className={styles.icon} src="logo/cue.png" alt="cue" />
          <h2 className={styles.name}>VoiceCue</h2>
        </div>
      </Link>
      <Link href="/features">
        <div className={styles.navItem}>
          <p className={`${styles.link} ${styles.page}`}>Features</p>
        </div>
      </Link>
      <Link href="/about">
        <div className={styles.navItem}>
          <p className={`${styles.link} ${styles.page}`}>About</p>
        </div>
      </Link>
    </header>
  );
};

export default Header;