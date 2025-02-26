import styles from "../styles/Card.module.scss";

import Suite from "./Suite";
import type { PersonData } from "../app/api/people/[personID]/route";

interface PersonCardSpecialityProps {
  gameSuiteSpecialities: PersonData["gameSuiteSpecialities"];
}

const PersonCardSpeciality = (props: PersonCardSpecialityProps) => {
  if (props.gameSuiteSpecialities.length === 0) {
    return;
  }

  return (
    <div className={styles.cardWrapper}>
      {props.gameSuiteSpecialities.map((suite) => (
        <Suite key={suite} suite={suite} size={"small"} hasLink />
      ))}
    </div>
  );
};

export default PersonCardSpeciality;
