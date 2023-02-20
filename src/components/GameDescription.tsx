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
      {props.description.registration && (
        <>
          <h3>Registration</h3>
          <div>Player Limit: {props.description.registration.playerLimit ?? "None"}</div>
          <div>Time Limit: {props.description.registration.timeLimit ?? "None"}</div>
          <div>Prize: {props.description.registration.prize ?? "None"}</div>
        </>
      )}

      {props.description.rules && (
        <>
          <h3>Rules</h3>
          <ul>
            {props.description.rules.map((rule, index) => (
              <li key={index}>{rule}</li>
            ))}
          </ul>
        </>
      )}

      {props.description.details && (
        <>
          <h3>Details</h3>
          <div>{props.description.details}</div>
        </>
      )}

      {props.description.solution && (
        <>
          <h3>Solution</h3>
          <div>{props.description.solution}</div>
        </>
      )}
    </div>
  );
};

export default GameDescription;
