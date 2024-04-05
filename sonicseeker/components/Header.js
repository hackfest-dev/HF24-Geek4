import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <Link href="/">
        <div className={styles.logo}>
          <img className={styles.icon} src="https://previews.123rf.com/images/muslumstock/muslumstock1811/muslumstock181105514/112624796-music-player-icon-black-filled-vector-illustration-music-player-symbol-on-white-background-can-be.jpg" alt="cue" />
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