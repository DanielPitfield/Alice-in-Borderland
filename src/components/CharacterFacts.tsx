import styles from "../styles/Character.module.scss";

import type { CharacterData } from "../pages/api/character/[characterID]";

interface CharacterFactsProps {
  characterData: CharacterData | undefined;
}

const CharacterFacts = (props: CharacterFactsProps) => {
  if (!props.characterData) {
    return null;
  }

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
