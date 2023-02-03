import type { IconType } from "react-icons/lib";

import { clubsCardMappings } from "./Clubs";
import { diamondsCardMappings } from "./Diamonds";
import { heartsCardMappings } from "./Hearts";
import { spadesCardMappings } from "./Spades";

import { BsSuitClubFill } from "react-icons/bs";
import { BsSuitDiamondFill } from "react-icons/bs";
import { BsSuitHeartFill } from "react-icons/bs";
import { BsSuitSpadeFill } from "react-icons/bs";

export const CardRanks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"] as const;
export type CardRank = typeof CardRanks[number];

export const CardSuites = ["Clubs", "Diamonds", "Hearts", "Spades"] as const;
export type CardSuite = typeof CardSuites[number];

type CardNameInner<CardRank extends string, CardSuite extends string> = `${CardRank} of ${CardSuite}`;
export type CardName = CardNameInner<CardRank, CardSuite>;

export const cardSuiteMappings: { suite: CardSuite; description: string; icon: IconType }[] = [
  {
    suite: "Clubs",
    description:
      "Balance - Games that balance all three concepts of the other card suites (Intelligence, Psychology and Physical) with an element of teamwork",
    icon: BsSuitClubFill,
  },
  {
    suite: "Diamonds",
    description: "Intelligence - Games of intelligence, strategy, and wits",
    icon: BsSuitDiamondFill,
  },
  { suite: "Hearts", description: "Psychology - Games of psychology, trust, and betrayal", icon: BsSuitHeartFill },
  {
    suite: "Spades",
    description: "Physical - Games of physical endurance, strength, and agility",
    icon: BsSuitSpadeFill,
  },
];

export const cardMappings = clubsCardMappings.concat(diamondsCardMappings, heartsCardMappings, spadesCardMappings);
