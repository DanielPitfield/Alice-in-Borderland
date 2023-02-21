import type { CardName } from "./AllCards";
import type { IconType } from "react-icons/lib";

import { GiCardJoker } from "react-icons/gi";

export const SpecialsCardMappings: {
  card: CardName;
  icon: IconType;
}[] = [{ card: "Joker", icon: GiCardJoker }];
