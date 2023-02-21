import styles from "../styles/Person.module.scss";

import type { PersonData } from "../pages/api/people/[personID]";

interface PersonFactsProps {
  gender: PersonData["gender"];
  occupation: PersonData["occupation"];
  borderlandCitizenship: PersonData["borderlandCitizenship"];
}

const PersonFacts = (props: PersonFactsProps) => {
  const items: string[] = [
    `Gender: ${props.gender}`,
    `Occupation: ${props.occupation.join(", ")}`,
    `Citizenship: ${props.borderlandCitizenship}`,
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

export default PersonFacts;
