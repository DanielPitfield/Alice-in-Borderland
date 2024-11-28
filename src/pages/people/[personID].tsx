import { Person } from "../../components/Person";
import { getBaseURL } from "../../utils/getBaseURL";
import { type PersonData } from "../api/people/[personID]";

interface PageProps {
  params: {
    personID: string;
  }
}

export default async function Page(props: PageProps) {
  const person = await retrievePerson(props.params.personID);

  if (!person) {
    return null;
  }

  return <Person person={person} />;
}

async function retrievePerson(personID: string): Promise<PersonData> {
  const API_URL = `${getBaseURL()}/api/people/${personID}`;
  const response = await fetch(API_URL);
  const data = (await response.json()) as PersonData;

  return data;
}
