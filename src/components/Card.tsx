import type { IconType } from "react-icons/lib";
import type { CardName } from "../data/Cards/cardMappings";
import { cardMappings } from "../data/Cards/cardMappings";

export interface CardProps {
  card: CardName;
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
