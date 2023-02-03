import styles from "../styles/Game.module.scss";

import type { GameData } from "../pages/api/games/[gameID]";
import Link from "next/link";

export interface GameProps {
  game: GameData;
}

// TODO: Show card (the component but without a link, maybe add hasLink prop?)
const Game = (props: GameProps) => {
  return (
    <article className={styles.wrapper}>
      <h1>{props.game.cardName}</h1>
      {props.game.name && <h3>{props.game.name}</h3>}
      <div>
        {props.game.players.map((player) => {
          return (
            <Link key={player} href={`/people/${player}`}>
              {player}
            </Link>
          );
        })}
      </div>
      <div>{props.game.additionalPlayers.join(" , ")}</div>
      <div>{props.game.description}</div>
    </article>
  );
};

export default Game;
