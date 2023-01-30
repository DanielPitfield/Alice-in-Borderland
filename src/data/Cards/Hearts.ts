import type { CardName } from "./cardMappings";
import type { IconType } from "react-icons/lib";

import { GiCard2Hearts } from "react-icons/gi";
import { GiCard3Hearts } from "react-icons/gi";
import { GiCard4Hearts } from "react-icons/gi";
import { GiCard5Hearts } from "react-icons/gi";
import { GiCard6Hearts } from "react-icons/gi";
import { GiCard7Hearts } from "react-icons/gi";
import { GiCard8Hearts } from "react-icons/gi";
import { GiCard9Hearts } from "react-icons/gi";
import { GiCard10Hearts } from "react-icons/gi";
import { GiCardJackHearts } from "react-icons/gi";
import { GiCardQueenHearts } from "react-icons/gi";
import { GiCardKingHearts } from "react-icons/gi";

export const heartsCardMappings: {
  card: CardName;
  icon: IconType;
}[] = [
  { card: "2 of Hearts", icon: GiCard2Hearts },
  { card: "3 of Hearts", icon: GiCard3Hearts },
  { card: "4 of Hearts", icon: GiCard4Hearts },
  { card: "5 of Hearts", icon: GiCard5Hearts },
  { card: "6 of Hearts", icon: GiCard6Hearts },
  { card: "7 of Hearts", icon: GiCard7Hearts },
  { card: "8 of Hearts", icon: GiCard8Hearts },
  { card: "9 of Hearts", icon: GiCard9Hearts },
  { card: "10 of Hearts", icon: GiCard10Hearts },
  { card: "Jack of Hearts", icon: GiCardJackHearts },
  { card: "Queen of Hearts", icon: GiCardQueenHearts },
  { card: "King of Hearts", icon: GiCardKingHearts },
];
