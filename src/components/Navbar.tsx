import styles from "../styles/Navbar.module.scss";

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={styles.wrapper}>
      <Link className={styles.title} href="/">
        Alice in Borderland
      </Link>
    </nav>
  );
};

export default Navbar;
