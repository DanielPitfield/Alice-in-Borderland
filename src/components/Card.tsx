import styles from "../styles/Card.module.scss";

import type { IconType } from "react-icons/lib";
import type { CardName } from "../data/Cards/cardMappings";
import { cardMappings } from "../data/Cards/cardMappings";
import Link from "next/link";
import { games } from "../data/games";

export interface CardProps {
  card: CardName;
}

const Card = (props: CardProps) => {
  const IconPath: IconType | undefined = cardMappings.find((x) => x.card === props.card)?.icon;
  const isLinkShown: boolean = games.some((game) => game.id === props.card);

  function renderContent(): React.ReactNode {
    // If the card image couldn't be found, just show the name of the card
    if (!IconPath) {
      return <div className={styles.text}>{props.card}</div>;
    }

    return <IconPath className={styles.icon} />;
  }

  // Add a link if there is data for the game/card
  return isLinkShown ? <Link href={`/games/${props.card}`}>{renderContent()}</Link> : <>{renderContent()}</>;
};

export default Card;
