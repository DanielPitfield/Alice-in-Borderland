import styles from "../styles/Card.module.scss";

import type { IconType } from "react-icons/lib";
import type { CardName } from "../data/Cards/AllCards";
import { CardMappings } from "../data/Cards/AllCards";
import Link from "next/link";
import { Games } from "../data/Games/AllGames";

export interface CardProps {
  card: CardName;
  size: "small" | "medium" | "large" | "very large";
  hasLink: boolean;
}

const Card = (props: CardProps) => {
  const IconPath: IconType | undefined = CardMappings.find((x) => x.card === props.card)?.icon;
  const isLinkShown: boolean =
    props.hasLink &&
    Games.some(
      (game) =>
        game.id === props.card ||
        game.cardName.toLowerCase() === props.card.toLowerCase() ||
        game.name?.toLowerCase() === props.card.toLowerCase()
    );

  function renderContent(): React.ReactNode {
    // If the card image couldn't be found, just show the name of the card
    if (!IconPath) {
      return (
        <div className={styles.text} data-size={props.size} data-disabled={!isLinkShown}>
          {props.card}
        </div>
      );
    }

    return <IconPath className={styles.icon} title={props.card} data-size={props.size} data-disabled={!isLinkShown} />;
  }

  // Add a link if there is data for the game/card
  return isLinkShown ? <Link href={`/games/${props.card}`}>{renderContent()}</Link> : <>{renderContent()}</>;
};

export default Card;
