import styles from "../styles/Character.module.scss";

import type { CharacterData } from "../pages/api/character/[characterID]";
import CharacterFacts from "./CharacterFacts";

export interface CharacterProps {
  characterData: CharacterData | undefined;
}

const Character = (props: CharacterProps) => {
  if (!props.characterData) {
    return null;
  }

  return (
    <article className={styles.wrapper}>
      <CharacterFacts characterData={props.characterData} />
      <div
        className={styles.item}
      >{`Game Speciality: ${props.characterData.gameSpeciality.join(
        ", "
      )}`}</div>
      <div
        className={styles.item}
      >{`Games Played: ${props.characterData.gamesPlayed.join(", ")}`}</div>
    </article>
  );
};

export default Character;
