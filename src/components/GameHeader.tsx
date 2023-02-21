import styles from "../styles/Game.module.scss";

import type { GameData } from "../pages/api/games/[gameID]";

interface GameHeaderProps {
  cardName: GameData["cardName"];
  name: GameData["name"];
}

const GameHeader = (props: GameHeaderProps) => {
  const titleText: string = props.name ? `${props.cardName} (${props.name})` : props.cardName;

  return (
    <div className={styles.titleWrapper}>
      <h1 className={styles.title}>{titleText}</h1>
    </div>
  );
};

export default GameHeader;
