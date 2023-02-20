import styles from "../styles/Person.module.scss";

import type { PersonData } from "../pages/api/people/[personID]";
import PersonFacts from "./PersonFacts";
import PersonCardGames from "./PersonCardGames";
import Image from "next/image";
import PersonCardSpeciality from "./PersonCardSpeciality";

export interface PersonProps {
  person: PersonData;
}

// TODO: Image src path
// TODO: Maybe show game speciality next to title (would need to decouple from PersonCardGames)
// TODO: Then information/facts/bio and list of cards/games played
const Person = (props: PersonProps) => {
  return (
    <article className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <h1 className={styles.title}>{`${props.person.name} (${props.person.japaneseName})`}</h1>
        <PersonCardSpeciality gameSpeciality={props.person.gameSpeciality} />
        <Image className={styles.image} src={"/Images/usagi.gif"} alt={props.person.name} width={600} height={600} />
      </div>

      <div className={styles.info}>
        <PersonFacts person={props.person} />
        <PersonCardGames gamesPlayed={props.person.gamesPlayed} />
      </div>
    </article>
  );
};

export default Person;
