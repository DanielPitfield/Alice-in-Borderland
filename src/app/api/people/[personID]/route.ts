import type { CardName, CardSuite } from "../../../../data/Cards/AllCards";
import { People, type PersonName } from "../../../../data/People/AllPeople";
import { NextResponse } from "next/server";

export type PersonData = {
  id: string;
  name: PersonName;
  japaneseName: string;
  gender: "Male" | "Female";
  occupation: string[];
  borderlandCitizenship: "Player" | "Dealer" | "Citizen";
  gameSpeciality: CardSuite[];
  gamesPlayed: CardName[];
};

export async function GET(request: Request, props: { params: Promise<{ personID: string }> }) {
  const params = await props.params;

  const person: PersonData | undefined = People.find(
    (person) =>
      person.id === params.personID ||
      person.name.toLowerCase() === params.personID.toLowerCase() ||
      person.japaneseName.toLowerCase() === params.personID.toLowerCase()
  );

  if (person) {
    return NextResponse.json(person, { status: 200 });
  }

  return NextResponse.json({ message: `Person with id: ${params.personID} not found.` }, { status: 404 });
}
