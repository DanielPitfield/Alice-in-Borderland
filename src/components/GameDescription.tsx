import styles from "../styles/Game.module.scss";

import type { GameData } from "../app/api/games/[gameID]/route";

interface GameDescriptionProps {
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
          <div className={styles.details}>{props.description.details}</div>
        </>
      )}

      {props.description.solution && (
        <>
          <h3 className={styles.subtitle}>Solution</h3>
          <div className={styles.solution}>{props.description.solution}</div>
        </>
      )}
    </>
  );
};

export default GameDescription;
