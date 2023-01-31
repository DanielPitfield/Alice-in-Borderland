import styles from "../styles/Card.module.scss";

import type { IconType } from "react-icons/lib";
import type { CardName } from "../data/Cards/cardMappings";
import { cardMappings } from "../data/Cards/cardMappings";

export interface CardProps {
  card: CardName;
}

const Card = (props: CardProps) => {
  const IconPath: IconType | undefined = cardMappings.find(
    (x) => x.card === props.card
  )?.icon;

  // If the card image couldn't be found, just show the name of the card
  if (!IconPath) {
    return <div className={styles.text}>{props.card}</div>;
  }

  return <IconPath className={styles.icon} />;
};

export default Card;
