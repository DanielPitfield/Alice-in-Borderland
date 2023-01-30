import styles from "../styles/Character.module.scss";

import type { CharacterData } from "../pages/api/characters/[characterID]";
import CharacterFacts from "./CharacterFacts";
import CharacterCardGames from "./CharacterCardGames";

export interface CharacterProps {
  characterData: CharacterData;
}

const Character = (props: CharacterProps) => {
  return (
    <article className={styles.wrapper}>
      <h1>{`${props.characterData.name} (${props.characterData.japaneseName})`}</h1>
      <CharacterFacts characterData={props.characterData} />
      <CharacterCardGames
        gameSpeciality={props.characterData.gameSpeciality}
        gamesPlayed={props.characterData.gamesPlayed}
      />
    </article>
  );
};

export default Character;
