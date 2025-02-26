import styles from "../styles/Card.module.scss";

import type { IconType } from "react-icons/lib";
import type { CardName } from "../data/Cards/AllCards";
import { CardMappings } from "../data/Cards/AllCards";
import Link from "next/link";
import { Games } from "../data/Games/AllGames";

export type Size = "small" | "medium" | "large" | "very large";

interface CardProps {
  card: CardName;
  size: Size;
  hasLink: boolean;
}

const Card = (props: CardProps) => {
  const Icon: IconType | undefined = CardMappings.find((x) => x.card === props.card)?.icon;

  const isLinkShown: boolean =
    props.hasLink &&
    Games.some(
      (game) =>
        game.id === props.card ||
        game.cardName.toLowerCase() === props.card.toLowerCase() ||
        game.name?.toLowerCase() === props.card.toLowerCase()
    );

  const cardContent = ((): React.ReactNode => {
    // If the card image couldn't be found, just show the name of the card
    if (!Icon) {
      return (
        <div
          className={styles.text}
          data-is-face-card={["Jack", "Queen", "King"].some((x) => props.card.includes(x))}
          data-size={props.size}
          data-disabled={!isLinkShown}
        >
          {props.card}
        </div>
      );
    }

    return (
      <Icon
        className={styles.icon}
        title={props.card}
        data-is-face-card={["Jack", "Queen", "King"].some((x) => props.card.includes(x))}
        data-size={props.size}
        data-disabled={!isLinkShown}
      />
    );
  })();

  // Add a link if there is data for the game/card
  if (isLinkShown) {
    return <Link href={`/games/${props.card}`}>{cardContent}</Link>;
  }

  return cardContent;
};

export default Card;
