import styles from "../styles/Card.module.scss";

import Card from "./Card";
import type { PersonData } from "../pages/api/people/[personID]";

interface PersonCardGamesProps {
  gamesPlayed: PersonData["gamesPlayed"];
}

const PersonCardGames = (props: PersonCardGamesProps) => {
  return (
    <>
      <h3>Games Played</h3>
      <div className={styles.cardWrapper}>
        {props.gamesPlayed.length > 0
          ? props.gamesPlayed.map((game) => <Card key={game} card={game} size={"medium"} hasLink />)
          : "-"}
      </div>
    </>
  );
};

export default PersonCardGames;
