import { cardMappings } from "../data/Cards/cardMappings";
import type { CardName, CardRank, CardSuite } from "../data/Cards/cardMappings";
import type { IconType } from "react-icons/lib";

export interface CardProps {
  card: CardName<CardRank, CardSuite>;
}

const Card = (props: CardProps) => {
  const iconPath: IconType | undefined = cardMappings.find(
    (x) => x.card === props.card
  )?.icon;

  // If the card image couldn't be found, just show the name of the card
  if (!iconPath) {
    return <div>{props.card}</div>;
  }

  return <iconPath />;
};

export default Card;
