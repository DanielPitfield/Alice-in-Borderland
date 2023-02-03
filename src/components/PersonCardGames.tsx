import styles from "../styles/Card.module.scss";

import type { CardName, CardSuite } from "../data/Cards/cardMappings";
import Card from "./Card";
import Suite from "./Suite";

interface PersonCardGamesProps {
  gameSpeciality: CardSuite[];
  gamesPlayed: CardName[];
}

const PersonCardGames = (props: PersonCardGamesProps) => {
  return (
    <>
      <h3>Game Speciality</h3>
      <div className={styles.cardWrapper}>
        {props.gameSpeciality.map((suite) => (
          <Suite key={suite} suite={suite} size={"small"} />
        ))}
      </div>

      <h3>Games Played</h3>
      <div className={styles.cardWrapper}>
        {props.gamesPlayed.map((game) => (
          <Card key={game} card={game} size={"medium"} />
        ))}
      </div>
    </>
  );
};

export default PersonCardGames;
