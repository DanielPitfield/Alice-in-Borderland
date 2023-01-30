import styles from "../styles/Person.module.scss";

import type { PersonData } from "../pages/api/people/[personID]";

interface PersonFactsProps {
  person: PersonData;
}

const PersonFacts = (props: PersonFactsProps) => {
  const items: string[] = [
    `Gender: ${props.person.gender}`,
    `Occupation: ${props.person.occupation.join(", ")}`,
    `Citizenship: ${props.person.borderlandCitizenship}`,
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
