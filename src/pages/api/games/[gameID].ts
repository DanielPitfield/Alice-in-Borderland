import type { NextApiRequest, NextApiResponse } from "next";
import type { CardName } from "../../../data/Cards/AllCards";
import { Games } from "../../../data/Games/AllGames";
import type { PersonName } from "../../../data/People/AllPeople";

export type GameData = {
  id: string;
  // The card which is awarded on completion of the game
  cardName: CardName;
  // The descriptive name of the game
  name?: string;
  // Is the game exclusive to the Netflix adaptation?
  isNetflixExclusive: boolean;
  // Main characters which participated in the game
  players: PersonName[];
  // Side characters which participated in the game
  // TODO: Remove additionalPlayers (most of these characters were not in the Netflix adaptation)?
  additionalPlayers?: string[];
  // Games (typically face card games) have borderland citizens
  citizens?: `${string} - ${CardName}`[];
  // How was the game entered, played and solved?
  description?: {
    registration?: {
      playerLimit?: number | "None";
      timeLimit?: string;
    };
    rules?: string[];
    details?: string;
    solution?: string;
  };
};

export default function handler(req: NextApiRequest, res: NextApiResponse<GameData | { message: string }>) {
  const game: GameData | undefined = Games.find(
    (game) =>
      game.id === (req.query.gameID as string) ||
      game.cardName.toLowerCase() === (req.query.gameID as string).toLowerCase() ||
      game.name?.toLowerCase() === (req.query.gameID as string).toLowerCase()
  );

  if (game) {
    return res.status(200).json(game);
  }

  return res.status(404).json({
    message: `User with id: ${req.query.gameID as string} not found.`,
  });
}
