import styles from "../styles/Navbar.module.scss";

import React, { useState } from "react";
import Link from "next/link";
import SubNavSuites from "./SubNavSuites";
import SubNavPeople from "./SubNavPeople";

type NavbarItem = {
  name: string;
  path?: string;
  subItem?: React.ReactNode;
};

const items: NavbarItem[] = [
  { name: "Suites", subItem: <SubNavSuites /> },
  { name: "People", subItem: <SubNavPeople /> },
  { name: "Cards", path: "/cards" },
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
            data-has-path={Boolean(item.path)}
            onMouseEnter={() => setCurrentSubMenuName(item.name)}
            onMouseLeave={() => setCurrentSubMenuName(null)}
          >
            {item.path ? <Link href={item.path}>{item.name}</Link> : item.name}
            {currentSubMenuName === item.name && item.subItem}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
