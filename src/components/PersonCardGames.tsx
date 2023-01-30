import type { CardName, CardSuite } from "../data/Cards/cardMappings";
import Card from "./Card";

interface PersonCardGamesProps {
  gameSpeciality: CardSuite[];
  gamesPlayed: CardName[];
}

const PersonCardGames = (props: PersonCardGamesProps) => {
  return (
    <>
      <h3>{`Game Speciality: ${props.gameSpeciality.join(", ")}`}</h3>
      {props.gamesPlayed.map((game) => (
        <Card key={game} card={game} />
      ))}
    </>
  );
};

export default PersonCardGames;
