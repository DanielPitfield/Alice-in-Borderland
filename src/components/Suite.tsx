import styles from "../styles/Card.module.scss";

import type { IconType } from "react-icons/lib";
import { type CardSuite, cardSuiteMappings } from "../data/Cards/cardMappings";

export interface SuiteProps {
  suite: CardSuite;
}

const Suite = (props: SuiteProps) => {
  const IconPath: IconType | undefined = cardSuiteMappings.find(
    (x) => x.suite === props.suite
  )?.icon;

  debugger;

  // If the card image couldn't be found, just show the name of the card
  if (!IconPath) {
    return <div className={styles.text}>{props.suite}</div>;
  }

  return <IconPath className={styles.icon} />;
};

export default Suite;
