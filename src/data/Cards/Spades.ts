import type { CardName, CardRank, CardSuite } from "./cardMappings";
import type { IconType } from "react-icons/lib";

import { GiCard2Spades } from "react-icons/gi";
import { GiCard3Spades } from "react-icons/gi";
import { GiCard4Spades } from "react-icons/gi";
import { GiCard5Spades } from "react-icons/gi";
import { GiCard6Spades } from "react-icons/gi";
import { GiCard7Spades } from "react-icons/gi";
import { GiCard8Spades } from "react-icons/gi";
import { GiCard9Spades } from "react-icons/gi";
import { GiCard10Spades } from "react-icons/gi";
import { GiCardJackSpades } from "react-icons/gi";
import { GiCardQueenSpades } from "react-icons/gi";
import { GiCardKingSpades } from "react-icons/gi";

export const spadesCardMappings: {
  card: CardName<CardRank, CardSuite>;
  icon: IconType;
}[] = [
  { card: "2 of Spades", icon: GiCard2Spades },
  { card: "3 of Spades", icon: GiCard3Spades  },
  { card: "4 of Spades", icon: GiCard4Spades  },
  { card: "5 of Spades", icon: GiCard5Spades },
  { card: "6 of Spades", icon: GiCard6Spades  },
  { card: "7 of Spades", icon: GiCard7Spades  },
  { card: "8 of Spades", icon: GiCard8Spades  },
  { card: "9 of Spades", icon: GiCard9Spades  },
  { card: "10 of Spades", icon: GiCard10Spades  },
  { card: "Jack of Spades", icon: GiCardJackSpades  },
  { card: "Queen of Spades", icon: GiCardQueenSpades  },
  { card: "King of Spades", icon: GiCardKingSpades  },
];
