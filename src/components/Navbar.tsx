import styles from "../styles/Navbar.module.scss";

import React, { useState } from "react";
import Link from "next/link";
import { NavbarItems } from "../data/NavbarItems";

const Navbar = () => {
  const [currentSubMenuName, setCurrentSubMenuName] = useState<string | null>(null);

  return (
    <nav className={styles.wrapper}>
      <Link className={styles.title} href="/">
        Alice in Borderland
      </Link>

      <ul className={styles.menu}>
        {NavbarItems.map((item) => (
          <li
            key={item.name}
            className={styles.item}
            data-has-path={Boolean(item.path)}
            onMouseEnter={() => setCurrentSubMenuName(item.name)}
            onMouseLeave={() => setCurrentSubMenuName(null)}
          >
            {item.path ? (
              <Link href={item.path} data-has-path={Boolean(item.path)}>
                {item.name}
              </Link>
            ) : (
              item.name
            )}
            {currentSubMenuName === item.name && item.subItem}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
