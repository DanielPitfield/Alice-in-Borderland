import styles from "../styles/SubNav.module.scss";

import Link from "next/link";
import React from "react";
import { PersonNames } from "../data/People/AllPeople";

const SubNavPeople = () => {
  return (
    <ul className={styles.menu}>
      {PersonNames.map((name) => (
        <li key={name} className={styles.item}>
          <Link href={`/people/${name}`}>{name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default SubNavPeople;
