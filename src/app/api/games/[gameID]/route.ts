import type { CardName } from "../../../../data/Cards/AllCards";
import type { PersonName } from "../../../../data/People/AllPeople";
import { Games } from "../../../../data/Games/AllGames";
import { NextResponse } from "next/server";

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

export async function GET(request: Request, { params }: { params: { gameID: string } }) {
  const game: GameData | undefined = Games.find(
    (game) =>
      game.id === params.gameID ||
      game.cardName.toLowerCase() === params.gameID.toLowerCase() ||
      game.name?.toLowerCase() === params.gameID.toLowerCase()
  );

  if (game) {
    return NextResponse.json(game, { status: 200 });
  }

  return NextResponse.json({ message: `Game with id: ${params.gameID} not found.` }, { status: 404 });
}
