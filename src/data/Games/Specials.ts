import type { GameData } from "../../pages/api/games/[gameID]";
import { PersonNames } from "../People/AllPeople";

export const SpecialsGames: GameData[] = [
  {
    id: "J",
    cardName: "Joker",
    players: PersonNames.slice(),
    description: {
      registration: {
        playerLimit: "None",
        timeLimit: "None",
      },
    },
  },
];
