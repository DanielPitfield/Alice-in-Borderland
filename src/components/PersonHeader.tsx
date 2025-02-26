import styles from "../styles/Person.module.scss";

import type { PersonData } from "../app/api/people/[personID]/route";
import PersonCardSpeciality from "./PersonCardSpeciality";

interface PersonHeaderProps {
  name: PersonData["name"];
  japaneseName: PersonData["japaneseName"];
  gameSuiteSpecialities: PersonData["gameSuiteSpecialities"];
}

const PersonHeader = (props: PersonHeaderProps) => {
  return (
    <div className={styles.titleWrapper}>
      <h1 className={styles.title}>{`${props.name} (${props.japaneseName})`}</h1>
      <PersonCardSpeciality gameSuiteSpecialities={props.gameSuiteSpecialities} />
    </div>
  );
};

export default PersonHeader;
