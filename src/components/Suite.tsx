import styles from "../styles/Card.module.scss";

import type { IconType } from "react-icons/lib";
import type { CardSuite } from "../data/Cards/cardMappings";
import { cardSuiteMappings } from "../data/Cards/cardMappings";
import Link from "next/link";

export interface SuiteProps {
  suite: CardSuite;
}

const Suite = (props: SuiteProps) => {
  const IconPath: IconType | undefined = cardSuiteMappings.find((x) => x.suite === props.suite)?.icon;

  // If the card image couldn't be found, just show the name of the card
  if (!IconPath) {
    return (
      <Link href={`/suites/${props.suite}`}>
        <div className={styles.text}>{props.suite}</div>
      </Link>
    );
  }

  return (
    <Link href={`/suites/${props.suite}`}>
      <IconPath className={styles.icon} />
    </Link>
  );
};

export default Suite;
