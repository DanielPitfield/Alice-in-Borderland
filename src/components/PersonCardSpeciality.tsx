import styles from "../styles/Card.module.scss";

import Suite from "./Suite";
import type { PersonData } from "../pages/api/people/[personID]";

interface PersonCardSpecialityProps {
  gameSpeciality: PersonData["gameSpeciality"];
}

const PersonCardSpeciality = (props: PersonCardSpecialityProps) => {
  return (
    <>
      <h3>Game Speciality</h3>
      <div className={styles.cardWrapper}>
        {props.gameSpeciality.length > 0
          ? props.gameSpeciality.map((suite) => <Suite key={suite} suite={suite} size={"small"} />)
          : "-"}
      </div>
    </>
  );
};

export default PersonCardSpeciality;
