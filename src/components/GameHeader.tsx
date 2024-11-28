import styles from "../styles/Game.module.scss";

import type { GameData } from "../app/api/games/[gameID]/route";

interface GameHeaderProps {
  cardName: GameData["cardName"];
  name: GameData["name"];
  isNetflixExclusive: GameData["isNetflixExclusive"];
}

const GameHeader = (props: GameHeaderProps) => {
  const titleText: string = props.name ? `${props.cardName} (${props.name})` : props.cardName;

  return (
    <div className={styles.titleWrapper}>
      <h1 className={styles.title}>{titleText}</h1>
      {props.isNetflixExclusive && <div className={styles.status}>Netflix Exclusive</div>}
    </div>
  );
};

export default GameHeader;
