import type { GameData } from "../../pages/api/games/[gameID]";

import { ClubsGames } from "./Clubs";
import { DiamondsGames } from "./Diamonds";
import { HeartsGames } from "./Hearts";
import { SpadesGames } from "./Spades";
import { SpecialsGames } from "./Specials";

export const Games: GameData[] = ClubsGames.concat(DiamondsGames, HeartsGames, SpadesGames, SpecialsGames);
