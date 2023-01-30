import type { NextApiRequest, NextApiResponse } from "next";
import type {
  CardName,
  CardRank,
  CardSuite,
} from "../../../data/Cards/cardMappings";
import { people } from "../../../data/people";

export type PersonData = {
  id: string;
  name: string;
  japaneseName: string;
  gender: "Male" | "Female";
  occupation: string[];
  borderlandCitizenship: "Player" | "Dealer" | "Citizen";
  gameSpeciality: CardSuite[];
  gamesPlayed: CardName<CardRank, CardSuite>[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PersonData | { message: string }>
) {
  const person: PersonData | undefined = people.find(
    (person) => person.id === (req.query.personID as string)
  );

  if (person) {
    return res.status(200).json(person);
  }

  return res.status(404).json({
    message: `User with id: ${req.query.personID as string} not found.`,
  });
}
