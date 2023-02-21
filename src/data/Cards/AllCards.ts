import type { IconType } from "react-icons/lib";

import { ClubsCardMappings } from "./Clubs";
import { DiamondsCardMappings } from "./Diamonds";
import { HeartsCardMappings } from "./Hearts";
import { SpadesCardMappings } from "./Spades";
import { SpecialsCardMappings } from "./Specials";

import { BsSuitClubFill } from "react-icons/bs";
import { BsSuitDiamondFill } from "react-icons/bs";
import { BsSuitHeartFill } from "react-icons/bs";
import { BsSuitSpadeFill } from "react-icons/bs";
import { GiCardJoker } from "react-icons/gi";

export const CardRanks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"] as const;
export type CardRank = typeof CardRanks[number];

export const CardSuites = ["Clubs", "Diamonds", "Hearts", "Spades"] as const;
export type CardSuite = typeof CardSuites[number];

export type CardName = `${CardRank} of ${CardSuite}` | "Joker";

export const CardSuiteMappings: { suite: CardSuite | "Joker"; description: string; icon: IconType }[] = [
  {
    suite: "Clubs",
    description:
      "Games that balance all three concepts of the other card suites (Intelligence, Psychology and Physical) with an element of teamwork",
    icon: BsSuitClubFill,
  },
  {
    suite: "Diamonds",
    description: "Games of intelligence, strategy, and wits",
    icon: BsSuitDiamondFill,
  },
  { suite: "Hearts", description: "Games of psychology, trust, and betrayal", icon: BsSuitHeartFill },
  {
    suite: "Spades",
    description: "Games of physical endurance, strength, and agility",
    icon: BsSuitSpadeFill,
  },
  {
    suite: "Joker",
    description: "Is this just another game?",
    icon: GiCardJoker,
  },
];

export const CardMappings = ClubsCardMappings.concat(
  DiamondsCardMappings,
  HeartsCardMappings,
  SpadesCardMappings,
  SpecialsCardMappings
);
