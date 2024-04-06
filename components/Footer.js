import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <p className={styles.author}>
        Made by a humble NITTE team:{" "}
        <span className={styles.link}>
          <a
            href="https://github.com/hackfest-dev/HF24-Geek4"
            target="_blank"
            rel="noreferrer"
          >
            Geek4
          </a>
        </span>
      </p>
      <p>
        Powered by{" "}
        <span className={styles.link}>
          <a href="https://deepgram.com" target="_blank" rel="noreferrer">
            Deepgram
          </a>
        </span>
        and{" "}
        <span className={styles.link}>
          <a href="https://nextjs.org" target="_blank" rel="noreferrer">
            NextJS
          </a>
        </span>{" "}
        {" "}
      </p>
    </footer>
  );
};

export default Footer;
