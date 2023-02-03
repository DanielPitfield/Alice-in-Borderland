import styles from "../styles/Person.module.scss";

import type { PersonData } from "../pages/api/people/[personID]";
import PersonFacts from "./PersonFacts";
import PersonCardGames from "./PersonCardGames";

export interface PersonProps {
  person: PersonData;
}

// TODO: Image (on left side), then all information (on right side)
// TODO: Maybe show game speciality next to title (would need to decouple from PersonCardGames)
// TODO: Then information/facts/bio and list of cards/games played
const Person = (props: PersonProps) => {
  return (
    <article className={styles.wrapper}>
      <h1 className={styles.title}>{`${props.person.name} (${props.person.japaneseName})`}</h1>
      <PersonFacts person={props.person} />
      <PersonCardGames
        gameSpeciality={props.person.gameSpeciality}
        gamesPlayed={props.person.gamesPlayed}
      />
    </article>
  );
};

export default Person;
