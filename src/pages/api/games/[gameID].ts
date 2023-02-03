import type { NextApiRequest, NextApiResponse } from "next";
import type { CardName } from "../../../data/Cards/cardMappings";
import { games } from "../../../data/games";
import type { PersonName } from "../../../data/people";

export type GameData = {
  id: string;
  // The descriptive name of the game
  name?: string;
  // The card which is awarded on completion of the game
  cardName: CardName;
  // Main characters which participated in the game
  players: PersonName[];
  additionalPlayers: string[];
  description: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<GameData | { message: string }>) {
  const game: GameData | undefined = games.find(
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
