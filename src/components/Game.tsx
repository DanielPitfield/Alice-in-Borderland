import styles from "../styles/Game.module.scss";

import type { GameData } from "../pages/api/games/[gameID]";
import Card from "./Card";
import GameDescription from "./GameDescription";
import GameHeader from "./GameHeader";
import GamePlayers from "./GamePlayers";

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
        <GamePlayers
          players={props.game.players}
          additionalPlayers={props.game.additionalPlayers}
          citizens={props.game.citizens}
        />
        <GameDescription description={props.game.description} />
      </div>
    </article>
  );
};

export default Game;
