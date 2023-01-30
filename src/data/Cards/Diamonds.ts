import type { CardName, CardRank, CardSuite } from "./cardMappings";
import type { StaticImageData } from "next/image";

export const diamondsCardMappings: {
  card: CardName<CardRank, CardSuite>;
  image: StaticImageData | null;
}[] = [
  { card: "2 of Diamonds", image: null },
  { card: "3 of Diamonds", image: null },
  { card: "4 of Diamonds", image: null },
  { card: "5 of Diamonds", image: null },
  { card: "6 of Diamonds", image: null },
  { card: "7 of Diamonds", image: null },
  { card: "8 of Diamonds", image: null },
  { card: "9 of Diamonds", image: null },
  { card: "10 of Diamonds", image: null },
  { card: "Jack of Diamonds", image: null },
  { card: "Queen of Diamonds", image: null },
  { card: "King of Diamonds", image: null },
];
