import type { CardName, CardRank, CardSuite } from "./cardMappings";
import type { StaticImageData } from "next/image";

export const clubsCardMappings: {
  card: CardName<CardRank, CardSuite>;
  image: StaticImageData | null;
}[] = [
  { card: "2 of Clubs", image: null },
  { card: "3 of Clubs", image: null },
  { card: "4 of Clubs", image: null },
  { card: "5 of Clubs", image: null },
  { card: "6 of Clubs", image: null },
  { card: "7 of Clubs", image: null },
  { card: "8 of Clubs", image: null },
  { card: "9 of Clubs", image: null },
  { card: "10 of Clubs", image: null },
  { card: "Jack of Clubs", image: null },
  { card: "Queen of Clubs", image: null },
  { card: "King of Clubs", image: null },
];
