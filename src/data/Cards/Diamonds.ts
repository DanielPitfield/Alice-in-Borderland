import type { CardName } from "./AllCards";
import type { IconType } from "react-icons/lib";

import { GiCard2Diamonds } from "react-icons/gi";
import { GiCard3Diamonds } from "react-icons/gi";
import { GiCard4Diamonds } from "react-icons/gi";
import { GiCard5Diamonds } from "react-icons/gi";
import { GiCard6Diamonds } from "react-icons/gi";
import { GiCard7Diamonds } from "react-icons/gi";
import { GiCard8Diamonds } from "react-icons/gi";
import { GiCard9Diamonds } from "react-icons/gi";
import { GiCard10Diamonds } from "react-icons/gi";
import { GiCardJackDiamonds } from "react-icons/gi";
import { GiCardQueenDiamonds } from "react-icons/gi";
import { GiCardKingDiamonds } from "react-icons/gi";

export const DiamondsCardMappings: {
  card: CardName;
  icon: IconType;
}[] = [
  { card: "2 of Diamonds", icon: GiCard2Diamonds },
  { card: "3 of Diamonds", icon: GiCard3Diamonds },
  { card: "4 of Diamonds", icon: GiCard4Diamonds },
  { card: "5 of Diamonds", icon: GiCard5Diamonds },
  { card: "6 of Diamonds", icon: GiCard6Diamonds },
  { card: "7 of Diamonds", icon: GiCard7Diamonds },
  { card: "8 of Diamonds", icon: GiCard8Diamonds },
  { card: "9 of Diamonds", icon: GiCard9Diamonds },
  { card: "10 of Diamonds", icon: GiCard10Diamonds },
  { card: "Jack of Diamonds", icon: GiCardJackDiamonds },
  { card: "Queen of Diamonds", icon: GiCardQueenDiamonds },
  { card: "King of Diamonds", icon: GiCardKingDiamonds },
];
