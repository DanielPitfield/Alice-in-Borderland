import styles from "../styles/Person.module.scss";

import type { PersonData } from "../app/api/people/[personID]/route";
import PersonFacts from "./PersonFacts";
import PersonCardGames from "./PersonCardGames";
import Image, { type StaticImageData } from "next/image";
import PersonHeader from "./PersonHeader";
import { PersonImageMappings } from "../data/People/PersonImageMappings";

interface PersonProps {
  person: PersonData;
}

export function Person(props: PersonProps) {
  const image: StaticImageData | undefined = PersonImageMappings.find((x) => x.name === props.person.name)?.image;

  return (
    <article className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <Image className={styles.image} src={image ?? ""} alt={props.person.name} priority width={650} height={650} />
      </div>

      <div className={styles.info}>
        <PersonHeader
          name={props.person.name}
          japaneseName={props.person.japaneseName}
          gameSuiteSpecialities={props.person.gameSuiteSpecialities}
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
}
