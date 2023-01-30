import { clubsCardMappings } from "./Clubs";
import { diamondsCardMappings } from "./Diamonds";
import { heartsCardMappings } from "./Hearts";
import { spadesCardMappings } from "./Spades";

export type CardRank =
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "Jack"
  | "Queen"
  | "King";

export type CardSuite = "Clubs" | "Diamonds" | "Hearts" | "Spades";

type CardNameInner<
  CardRank extends string,
  CardSuite extends string
> = `${CardRank} of ${CardSuite}`;

export type CardName = CardNameInner<CardRank, CardSuite>

export const cardMappings = clubsCardMappings.concat(
  diamondsCardMappings,
  heartsCardMappings,
  spadesCardMappings
);
