import styles from "../styles/Game.module.scss";

import type { GameData } from "../pages/api/games/[gameID]";
import Link from "next/link";
import Card from "./Card";
import GameDescription from "./GameDescription";
import GameHeader from "./GameHeader";

export interface GameProps {
  game: GameData;
}

const Game = (props: GameProps) => {
  return (
    <article className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <Card card={props.game.cardName} size={"very large"} hasLink={false} />
      </div>

      <div className={styles.info}>
        <GameHeader cardName={props.game.cardName} name={props.game.name} />

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
      </div>
    </article>
  );
};

export default Game;
