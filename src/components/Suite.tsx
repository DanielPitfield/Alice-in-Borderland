import styles from "../styles/Card.module.scss";

import type { IconType } from "react-icons/lib";
import type { CardSuite } from "../data/Cards/AllCards";
import type { Size } from "./Card";
import { CardSuiteMappings } from "../data/Cards/AllCards";
import Link from "next/link";

interface SuiteProps {
  suite: CardSuite;
  size: Size;
}

const Suite = (props: SuiteProps) => {
  const Icon: IconType | undefined = CardSuiteMappings.find((x) => x.suite === props.suite)?.icon;

  // If the card image couldn't be found, just show the name of the card
  if (!Icon) {
    return (
      <Link href={`/suites/${props.suite}`}>
        <div className={styles.text} data-size={props.size}>
          {props.suite}
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/suites/${props.suite}`}>
      <Icon className={styles.icon} title={props.suite} data-size={props.size} />
    </Link>
  );
};

export default Suite;
