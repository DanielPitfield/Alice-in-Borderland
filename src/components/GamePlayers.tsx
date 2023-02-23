import styles from "../styles/Game.module.scss";

import type { GameData } from "../pages/api/games/[gameID]";
import Link from "next/link";
import { PersonNames } from "../data/People/AllPeople";

interface GamePlayersProps {
  players: GameData["players"];
  additionalPlayers: GameData["additionalPlayers"];
  citizens: GameData["citizens"];
}

const GamePlayers = (props: GamePlayersProps) => {
  // TODO: Should the labels for the different properties be <span>, <strong> or text within the <div>?
  return (
    <>
      {props.players.length > 0 && (
        <div>
          Players:
          {props.players.map((player) => {
            return (
              <Link className={styles.link} key={player} href={`/people/${player}`}>
                {player}
              </Link>
            );
          })}
        </div>
      )}

      {props.additionalPlayers && <div>Additional Players: {props.additionalPlayers.join(", ")}</div>}

      {props.citizens && (
        <div>
          <span>Citizens: </span>
          {props.citizens.map((citizen) => {
            // The citizen's name comes before the dash
            const citizenName: string | undefined = citizen.split("-")[0];

            if (!citizenName) {
              return citizen;
            }

            // Does the citizen have a person profile page?
            const hasPage: boolean = PersonNames.some((personName) =>
              citizenName.split(" ").some((x) => x === personName)
            );

            // Link to their person profile page (if they have one)
            if (hasPage) {
              // TODO: The citizen's name with their card name is not the correct path
              return (
                <Link className={styles.link} key={citizen} href={`/people/${citizen}`}>
                  {citizen}
                </Link>
              );
            }

            // Otherwise, just show their name
            return citizen;
          })}
        </div>
      )}
    </>
  );
};

export default GamePlayers;
