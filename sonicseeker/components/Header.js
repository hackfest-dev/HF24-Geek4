import Link from "next/link";
import Router from "next/router";


const Header = () => {
  return (
    <header className="grid min-h-50 grid-cols-12 bg-[#21212c] pt-3 pb-3 pl-20 pr-20 text-[#FBC1C1] mb-5">
      <Link href="/">
        <div
          className="grid grid-cols-12 cursor-pointer"
          onClick={() => {
            window.location.pathname === "/" &&
              Router.reload(window.location.pathname);
          }}
        >
          <img className="w-8 h-8" src="logo/cue.png" alt="cue" />
          <h2 className={styles.name}>VoiceCue</h2>
        </div>
      </Link>
      <Link href="/features">
        <div className="grid items-end">
          <p className={`${styles.link} ${styles.page}`}>Features</p>
        </div>
      </Link>
      <Link href="/about">
        <div className="grid items-end">
          <p className={`${styles.link} ${styles.page}`}>About</p>
        </div>
      </Link>
    </header>
  );
};

export default Header;