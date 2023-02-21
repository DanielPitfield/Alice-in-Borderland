import styles from "../styles/Game.module.scss";

import type { GameData } from "../pages/api/games/[gameID]";
import Link from "next/link";

interface GamePlayersProps {
  players: GameData["players"];
  additionalPlayers: GameData["additionalPlayers"];
  citizens: GameData["citizens"];
}

const GamePlayers = (props: GamePlayersProps) => {
  return (
    <>
      <div>
        {props.players.map((player) => {
          return (
            <Link key={player} href={`/people/${player}`}>
              {player}
            </Link>
          );
        })}
      </div>

      {props.additionalPlayers && <div>{props.additionalPlayers.join(" , ")}</div>}

      {props.citizens && (
        <div>
          {props.citizens.map((citizen) => {
            return (
              <Link key={citizen} href={`/people/${citizen}`}>
                {citizen}
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default GamePlayers;
