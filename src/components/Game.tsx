import styles from "../styles/Game.module.scss";

import type { GameData } from "../pages/api/games/[gameID]";

export interface GameProps {
  game: GameData;
}

const Game = (props: GameProps) => {
  return (
    <article className={styles.wrapper}>
      <h1>{props.game.name}</h1>
      <div>{props.game.status}</div>
      <div>{props.game.players.join(" , ")}</div>
      <div>{props.game.description}</div>
    </article>
  );
};

export default Game;
