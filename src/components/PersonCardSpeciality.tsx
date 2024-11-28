import styles from "../styles/Card.module.scss";

import Suite from "./Suite";
import type { PersonData } from "../app/api/people/[personID]/route";

interface PersonCardSpecialityProps {
  gameSpeciality: PersonData["gameSpeciality"];
}

const PersonCardSpeciality = (props: PersonCardSpecialityProps) => {
  return (
    <div className={styles.cardWrapper}>
      {props.gameSpeciality.length > 0
        ? props.gameSpeciality.map((suite) => <Suite key={suite} suite={suite} size={"small"} />)
        : "-"}
    </div>
  );
};

export default PersonCardSpeciality;
