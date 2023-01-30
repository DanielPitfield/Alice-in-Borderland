import styles from "../styles/Character.module.scss";

import type { CardName, CardRank, CardSuite } from "../data/cards";

interface CharacterCardGamesProps {
  gameSpeciality: CardSuite[];
  gamesPlayed: CardName<CardRank, CardSuite>[];
}

const CharacterCardGames = (props: CharacterCardGamesProps) => {
  return (
    <>
      <h3
        className={styles.item}
      >{`Game Speciality: ${props.gameSpeciality.join(", ")}`}</h3>

      <ul className={styles.facts}>
        {props.gamesPlayed.map((game) => (
          <li key={game} className={styles.item}>
            {game}
          </li>
        ))}
      </ul>
    </>
  );
};

export default CharacterCardGames;
