import styles from "../styles/Game.module.scss";

import type { GameData } from "../pages/api/games/[gameID]";

export interface GameDescriptionProps {
  description: GameData["description"];
}

const GameDescription = (props: GameDescriptionProps) => {
  if (!props.description) {
    return null;
  }

  return (
    <div className={styles.wrapper}>
      <h3>Registration</h3>
      <div>Player Limit: {props.description.registration?.playerLimit ?? "-"}</div>
      <div>Time Limit: {props.description.registration?.timeLimit ?? "-"}</div>
      <div>Prize: {props.description.registration?.prize ?? "-"}</div>

      <ul>
        {props.description.rules?.map((rule, index) => (
          <li key={index}>{rule}</li>
        ))}
      </ul>
      <div>Details: {props.description.details ?? "-"}</div>
      <div>Solution: {props.description.solution ?? "-"}</div>
    </div>
  );
};

export default GameDescription;
