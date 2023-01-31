import type { IconType } from "react-icons/lib";

import { clubsCardMappings } from "./Clubs";
import { diamondsCardMappings } from "./Diamonds";
import { heartsCardMappings } from "./Hearts";
import { spadesCardMappings } from "./Spades";

import { BsSuitClubFill } from "react-icons/bs";
import { BsSuitDiamondFill } from "react-icons/bs";
import { BsSuitHeartFill } from "react-icons/bs";
import { BsSuitSpadeFill } from "react-icons/bs";

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

export type CardName = CardNameInner<CardRank, CardSuite>;

export const cardSuiteMappings: { suite: CardSuite; icon: IconType }[] = [
  { suite: "Clubs", icon: BsSuitSpadeFill },
  { suite: "Diamonds", icon: BsSuitDiamondFill },
  { suite: "Hearts", icon: BsSuitHeartFill },
  { suite: "Clubs", icon: BsSuitClubFill },
];

export const cardMappings = clubsCardMappings.concat(
  diamondsCardMappings,
  heartsCardMappings,
  spadesCardMappings
);
