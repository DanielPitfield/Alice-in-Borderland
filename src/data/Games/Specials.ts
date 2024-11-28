import type { GameData } from "../../app/api/games/[gameID]/route";
import { PersonNames } from "../People/AllPeople";

export const SpecialsGames: GameData[] = [
  {
    id: "J",
    cardName: "Joker",
    isNetflixExclusive: false,
    players: PersonNames.slice(),
    description: {
      registration: {
        playerLimit: "None",
        timeLimit: "None",
      },
    },
  },
];
