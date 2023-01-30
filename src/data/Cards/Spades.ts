import type { CardName, CardRank, CardSuite } from "./cardMappings";
import type { StaticImageData } from "next/image";

import Five from "../../../public/Images/Cards/Spades/5.png";

export const spadesCardMappings: {
  card: CardName<CardRank, CardSuite>;
  image: StaticImageData | null;
}[] = [
  { card: "2 of Spades", image: null },
  { card: "3 of Spades", image: null },
  { card: "4 of Spades", image: null },
  { card: "5 of Spades", image: Five },
  { card: "6 of Spades", image: null },
  { card: "7 of Spades", image: null },
  { card: "8 of Spades", image: null },
  { card: "9 of Spades", image: null },
  { card: "10 of Spades", image: null },
  { card: "Jack of Spades", image: null },
  { card: "Queen of Spades", image: null },
  { card: "King of Spades", image: null },
];
