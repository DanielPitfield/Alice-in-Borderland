import styles from "../styles/Navbar.module.scss";

import React, { useState } from "react";
import Link from "next/link";
import SubNavSuites from "./SubNavSuites";
import SubNavPeople from "./SubNavPeople";

export type NavbarItem = {
  name: string;
  subItem: React.ReactNode;
};

const items: NavbarItem[] = [
  { name: "Suites", subItem: <SubNavSuites /> },
  { name: "People", subItem: <SubNavPeople /> },
];

const Navbar = () => {
  const [currentSubMenuName, setCurrentSubMenuName] = useState<string | null>(null);

  return (
    <nav className={styles.wrapper}>
      <Link className={styles.title} href="/">
        Alice in Borderland
      </Link>

      <ul className={styles.menu}>
        {items.map((item) => (
          <li
            key={item.name}
            className={styles.item}
            onMouseEnter={() => setCurrentSubMenuName(item.name)}
            onMouseLeave={() => setCurrentSubMenuName(null)}
          >
            <span>{item.name}</span>
            {currentSubMenuName === item.name && item.subItem}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
