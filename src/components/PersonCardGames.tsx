import styles from "../styles/Card.module.scss";

import Card from "./Card";
import type { PersonData } from "../app/api/people/[personID]/route";

interface PersonCardGamesProps {
  gamesPlayed: PersonData["gamesPlayed"];
}

const PersonCardGames = (props: PersonCardGamesProps) => {
  if (props.gamesPlayed.length === 0) {
    return;
  }

  return (
    <>
      <h3 className={styles.subtitle}>Games Played</h3>
      <div className={styles.cardWrapper} data-align={"left"}>
        {props.gamesPlayed.map((game) => (
          <Card key={game} card={game} size={"medium"} hasLink />
        ))}
      </div>
    </>
  );
};

export default PersonCardGames;
