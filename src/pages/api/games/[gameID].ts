import type { NextApiRequest, NextApiResponse } from "next";
import type { CardName } from "../../../data/Cards/AllCards";
import { Games } from "../../../data/Games/AllGames";
import type { PersonName } from "../../../data/people";

export type GameData = {
  id: string;
  // The descriptive name of the game
  name?: string;
  // The card which is awarded on completion of the game
  cardName: CardName;
  // Main characters which participated in the game
  players: PersonName[];
  // Side characters which participated in the game
  additionalPlayers?: string[];
  // Face card games have borderland citizens
  citizens?: PersonName[];
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
