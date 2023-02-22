import styles from "../styles/SubNav.module.scss";

import Link from "next/link";
import React from "react";
import { CardSuites } from "../data/Cards/AllCards";

const SubNavSuites = () => {
  return (
    <ul className={styles.menu}>
      {CardSuites.map((suite) => suite as string)
        .concat("Joker")
        .map((suite) => (
          <li key={suite} className={styles.item}>
            <Link href={`/suites/${suite}`}>{suite}</Link>
          </li>
        ))}
    </ul>
  );
};

export default SubNavSuites;
