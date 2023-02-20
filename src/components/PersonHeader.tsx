import styles from "../styles/Person.module.scss";

import type { PersonData } from "../pages/api/people/[personID]";
import PersonCardSpeciality from "./PersonCardSpeciality";

interface PersonHeaderProps {
  name: PersonData["name"];
  japaneseName: PersonData["japaneseName"];
  gameSpeciality: PersonData["gameSpeciality"];
}

const PersonHeader = (props: PersonHeaderProps) => {
  return (
    <div className={styles.titleWrapper}>
      <h1 className={styles.title}>{`${props.name} (${props.japaneseName})`}</h1>
      <PersonCardSpeciality gameSpeciality={props.gameSpeciality} />
    </div>
  );
};

export default PersonHeader;
