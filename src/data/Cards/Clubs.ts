import type { CardName, CardRank, CardSuite } from "./cardMappings";
import type { IconType } from "react-icons/lib";

import { GiCard2Clubs } from "react-icons/gi";
import { GiCard3Clubs } from "react-icons/gi";
import { GiCard4Clubs } from "react-icons/gi";
import { GiCard5Clubs } from "react-icons/gi";
import { GiCard6Clubs } from "react-icons/gi";
import { GiCard7Clubs } from "react-icons/gi";
import { GiCard8Clubs } from "react-icons/gi";
import { GiCard9Clubs } from "react-icons/gi";
import { GiCard10Clubs } from "react-icons/gi";
import { GiCardJackClubs } from "react-icons/gi";
import { GiCardQueenClubs } from "react-icons/gi";
import { GiCardKingClubs } from "react-icons/gi";

export const clubsCardMappings: {
  card: CardName<CardRank, CardSuite>;
  icon: IconType;
}[] = [
  { card: "2 of Clubs", icon: GiCard2Clubs },
  { card: "3 of Clubs", icon: GiCard3Clubs  },
  { card: "4 of Clubs", icon: GiCard4Clubs  },
  { card: "5 of Clubs", icon: GiCard5Clubs },
  { card: "6 of Clubs", icon: GiCard6Clubs  },
  { card: "7 of Clubs", icon: GiCard7Clubs  },
  { card: "8 of Clubs", icon: GiCard8Clubs  },
  { card: "9 of Clubs", icon: GiCard9Clubs  },
  { card: "10 of Clubs", icon: GiCard10Clubs  },
  { card: "Jack of Clubs", icon: GiCardJackClubs  },
  { card: "Queen of Clubs", icon: GiCardQueenClubs  },
  { card: "King of Clubs", icon: GiCardKingClubs  },
];

