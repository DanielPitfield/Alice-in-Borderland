import styles from "../styles/Card.module.scss";

import type { IconType } from "react-icons/lib";
import type { CardSuite } from "../data/Cards/AllCards";
import { CardSuiteMappings } from "../data/Cards/AllCards";
import type { Size } from "./Card";
import Link from "next/link";

interface SuiteProps {
  suite: CardSuite;
  size: Size;
}

const Suite = (props: SuiteProps) => {
  const IconPath: IconType | undefined = CardSuiteMappings.find((x) => x.suite === props.suite)?.icon;

  // If the card image couldn't be found, just show the name of the card
  if (!IconPath) {
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
      <IconPath className={styles.icon} title={props.suite} data-size={props.size} />
    </Link>
  );
};

export default Suite;
