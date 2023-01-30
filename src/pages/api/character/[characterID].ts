import type { NextApiRequest, NextApiResponse } from "next";
import type { CardName, CardRank, CardSuite } from "../../../data/cards";
import { characters } from "../../../data/characters";

export type CharacterData = {
  id: string;
  name: string;
  japaneseName: string;
  gender: "Male" | "Female";
  occupation: string[];
  isBorderlandCitizen: boolean;
  gameSpeciality: CardSuite[];
  gamesPlayed: CardName<CardRank, CardSuite>[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CharacterData | { message: string }>
) {
  const character: CharacterData | undefined = characters.find(
    (character) => character.id === req.query.id
  );

  if (character) {
    return res.status(200).json(character);
  }

  return res
    .status(404)
    .json({ message: `User with id: ${req.query.id as string} not found.` });
}
