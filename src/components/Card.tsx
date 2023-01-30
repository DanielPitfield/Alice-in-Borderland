import { cardMappings } from "../data/Cards/cardMappings";
import type { CardName, CardRank, CardSuite } from "../data/Cards/cardMappings";
import Image from "next/image";

export interface CardProps {
  card: CardName<CardRank, CardSuite>;
}

const Card = (props: CardProps) => {
  const imagePath = cardMappings.find((x) => x.card === props.card)?.image;

  // If the card image couldn't be found, just show the name of the card
  if (!imagePath) {
    return <div>{props.card}</div>;
  }

  return <Image src={imagePath} alt={props.card} width={300} height={300} />;
};

export default Card;
