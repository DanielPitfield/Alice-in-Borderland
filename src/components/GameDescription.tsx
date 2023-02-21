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
    <>
      {props.description.registration && (
        <>
          <h3 className={styles.subtitle}>Registration</h3>
          <div>Player Limit: {props.description.registration.playerLimit ?? "None"}</div>
          <div>Time Limit: {props.description.registration.timeLimit ?? "None"}</div>
        </>
      )}

      {props.description.rules && (
        <>
          <h3 className={styles.subtitle}>Rules</h3>
          <ul className={styles.list}>
            {props.description.rules.map((rule, index) => (
              <li key={index}>{rule}</li>
            ))}
          </ul>
        </>
      )}

      {props.description.details && (
        <>
          <h3 className={styles.subtitle}>Details</h3>
          <div>{props.description.details}</div>
        </>
      )}

      {props.description.solution && (
        <>
          <h3 className={styles.subtitle}>Solution</h3>
          <div>{props.description.solution}</div>
        </>
      )}
    </>
  );
};

export default GameDescription;
