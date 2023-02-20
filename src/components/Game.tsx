import styles from "../styles/Game.module.scss";

import type { GameData } from "../pages/api/games/[gameID]";
import Link from "next/link";
import Card from "./Card";
import GameDescription from "./GameDescription";

export interface GameProps {
  game: GameData;
}

const Game = (props: GameProps) => {
  return (
    <article className={styles.wrapper}>
      <h1>{props.game.cardName}</h1>
      <Card card={props.game.cardName} size={"medium"} hasLink={false} />
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

      <div>{props.game.additionalPlayers?.join(" , ")}</div>

      {props.game.citizens && (
        <div>
          {props.game.citizens.map((citizen) => {
            return (
              <Link key={citizen} href={`/people/${citizen}`}>
                {citizen}
              </Link>
            );
          })}
        </div>
      )}

      <GameDescription description={props.game.description} />
    </article>
  );
};

export default Game;
