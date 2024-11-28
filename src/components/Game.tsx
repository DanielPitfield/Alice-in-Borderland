import styles from "../styles/Game.module.scss";

import type { GameData } from "../pages/api/games/[gameID]";
import Card from "./Card";
import GameDescription from "./GameDescription";
import GameHeader from "./GameHeader";
import GamePlayers from "./GamePlayers";

interface GameProps {
  game: GameData;
}

export function Game(props: GameProps) {
  // TODO: When the info wrapper is very large, the card is not initially/entirely visible because the image wrapper grows to the same size
  return (
    <article className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <Card card={props.game.cardName} size={"very large"} hasLink={false} />
      </div>

      <div className={styles.info}>
        <GameHeader
          cardName={props.game.cardName}
          name={props.game.name}
          isNetflixExclusive={props.game.isNetflixExclusive}
        />

        <GamePlayers
          players={props.game.players}
          additionalPlayers={props.game.additionalPlayers}
          citizens={props.game.citizens}
        />

        <GameDescription description={props.game.description} />
      </div>
    </article>
  );
}
