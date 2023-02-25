import styles from "../styles/Game.module.scss";

import type { GameData } from "../pages/api/games/[gameID]";
import Link from "next/link";
import { PersonNames } from "../data/People/AllPeople";
import type { CardName } from "../data/Cards/AllCards";

interface GamePlayersProps {
  players: GameData["players"];
  additionalPlayers: GameData["additionalPlayers"];
  citizens: GameData["citizens"];
}

const GamePlayers = (props: GamePlayersProps) => {
  // TODO: Should the labels for the different properties be <span>, <strong> or text within the <div>?

  // What is the path to the citizen's profile page (if they have one)?
  function getCitizenPagePath(citizen: `${string} - ${CardName}`): string | null {
    // The citizen's name comes before the dash
    const citizenName: string | undefined = citizen.split("-")[0];

    if (!citizenName) {
      return null;
    }

    // Does the citizen have a person profile page?
    return PersonNames.find((personName) => citizenName.split(" ").some((x) => x === personName)) ?? null;
  }

  // The citizens of the game which also have their own person profile page
  const citizensWithProfiles: GameData["citizens"] = props.citizens?.filter((citizen) => {
    return getCitizenPagePath(citizen);
  });

  const otherCitizens: GameData["citizens"] = props.citizens?.filter((citizen) => {
    return getCitizenPagePath(citizen) === null;
  });

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
          {citizensWithProfiles?.map((citizen) => {
            const pagePath = getCitizenPagePath(citizen);

            if (!pagePath) {
              return citizen;
            }

            return (
              <Link className={styles.link} key={citizen} href={`/people/${pagePath}`}>
                {citizen}
              </Link>
            );
          })}

          {otherCitizens?.join(", ")}
        </div>
      )}
    </>
  );
};

export default GamePlayers;
