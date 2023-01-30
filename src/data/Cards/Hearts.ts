import type { CardName, CardRank, CardSuite } from "./cardMappings";
import type { StaticImageData } from "next/image";

export const heartsCardMappings: {
  card: CardName<CardRank, CardSuite>;
  image: StaticImageData | null;
}[] = [
  { card: "2 of Hearts", image: null },
  { card: "3 of Hearts", image: null },
  { card: "4 of Hearts", image: null },
  { card: "5 of Hearts", image: null },
  { card: "6 of Hearts", image: null },
  { card: "7 of Hearts", image: null },
  { card: "8 of Hearts", image: null },
  { card: "9 of Hearts", image: null },
  { card: "10 of Hearts", image: null },
  { card: "Jack of Hearts", image: null },
  { card: "Queen of Hearts", image: null },
  { card: "King of Hearts", image: null },
];
