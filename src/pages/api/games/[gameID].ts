import type { NextApiRequest, NextApiResponse } from "next";
import { games } from "../../../data/games";

export type GameData = {
  id: string;
  status: "Cleared";
  players: string[];
  description: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<GameData | { message: string }>
) {
  const game: GameData | undefined = games.find(
    (game) => game.id === (req.query.gameID as string)
  );

  if (game) {
    return res.status(200).json(game);
  }

  return res.status(404).json({
    message: `User with id: ${req.query.gameID as string} not found.`,
  });
}
