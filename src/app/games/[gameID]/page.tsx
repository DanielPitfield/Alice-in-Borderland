import { Game } from "../../../components/Game";
import { getBaseURL } from "../../../utils/getBaseURL";
import { type GameData } from "../../api/games/[gameID]/route";

interface PageProps {
  params: Promise<{
    gameID: string;
  }>;
}

export default async function Page(props: PageProps) {
  const gameID = (await props.params).gameID;
  const game = await retrieveGame(gameID);

  if (!game) {
    return;
  }

  return <Game game={game} />;
}

async function retrieveGame(gameID: string): Promise<GameData> {
  const API_URL = `${getBaseURL()}/api/games/${gameID}`;
  const response = await fetch(API_URL);
  const data = (await response.json()) as GameData;

  return data;
}
