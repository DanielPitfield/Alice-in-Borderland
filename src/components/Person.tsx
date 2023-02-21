import styles from "../styles/Person.module.scss";

import type { PersonData } from "../pages/api/people/[personID]";
import PersonFacts from "./PersonFacts";
import PersonCardGames from "./PersonCardGames";
import Image from "next/image";
import PersonHeader from "./PersonHeader";

export interface PersonProps {
  person: PersonData;
}

// TODO: Image src path
const Person = (props: PersonProps) => {
  return (
    <article className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <Image className={styles.image} src={"/Images/usagi.gif"} alt={props.person.name} width={650} height={650} />
      </div>

      <div className={styles.info}>
        <PersonHeader
          name={props.person.name}
          japaneseName={props.person.japaneseName}
          gameSpeciality={props.person.gameSpeciality}
        />
        <PersonFacts
          gender={props.person.gender}
          occupation={props.person.occupation}
          borderlandCitizenship={props.person.borderlandCitizenship}
        />
        <PersonCardGames gamesPlayed={props.person.gamesPlayed} />
      </div>
    </article>
  );
};

export default Person;
