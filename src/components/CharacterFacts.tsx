import styles from "../styles/Character.module.scss";

import type { CharacterData } from "../pages/api/characters/[characterID]";

interface CharacterFactsProps {
  characterData: CharacterData;
}

const CharacterFacts = (props: CharacterFactsProps) => {
  const items: string[] = [
    `Gender: ${props.characterData.gender}`,
    `Occupation: ${props.characterData.occupation.join(", ")}`,
    `Citizenship: ${
      props.characterData.isBorderlandCitizen ? "Borderland Citizen" : "Player"
    }`,
  ];

  return (
    <ul className={styles.facts}>
      {items.map((item, index) => (
        <li key={index} className={styles.item}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default CharacterFacts;
