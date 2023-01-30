import styles from "../styles/Character.module.scss";

import type { CharacterData } from "../pages/api/character/[characterID]";
import CharacterFacts from "./CharacterFacts";
import CharacterCardGames from "./CharacterCardGames";

export interface CharacterProps {
  characterData: CharacterData | undefined;
}

const Character = (props: CharacterProps) => {
  if (!props.characterData) {
    return null;
  }

  return (
    <article className={styles.wrapper}>
      <CharacterFacts characterData={props.characterData} />
      <CharacterCardGames
        gameSpeciality={props.characterData.gameSpeciality}
        gamesPlayed={props.characterData.gamesPlayed}
      />
    </article>
  );
};

export default Character;
