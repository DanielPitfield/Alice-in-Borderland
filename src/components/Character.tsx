import styles from "../styles/Character.module.scss";

import type { CharacterData } from "../pages/api/character/[characterID]";

interface CharacterProps {
  characterData: CharacterData | undefined;
}

const Character = (props: CharacterProps) => {
  if (!props.characterData) {
    return null;
  }

  return (
    <article className={styles.wrapper}>
      <ul className={styles.facts}>
        <li
          className={styles.item}
        >{`Name: ${props.characterData.name} (${props.characterData.japaneseName})`}</li>
        <li
          className={styles.item}
        >{`Gender: ${props.characterData.gender}`}</li>
        <li
          className={styles.item}
        >{`Occupation: ${props.characterData.occupation.join(", ")}`}</li>
        <li className={styles.item}>
          {`Citizenship: ${
            props.characterData.isBorderlandCitizen
              ? "Borderland Citizen"
              : "Player"
          }`}
        </li>
        <li
          className={styles.item}
        >{`Game Speciality: ${props.characterData.gameSpeciality.join(
          ", "
        )}`}</li>
        <li
          className={styles.item}
        >{`Games Played: ${props.characterData.gamesPlayed.join(", ")}`}</li>
      </ul>
    </article>
  );
};

export default Character;
