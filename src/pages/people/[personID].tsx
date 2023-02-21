import { createProxySSGHelpers } from "@trpc/react-query/ssg";
import type { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from "next";
import Person from "../../components/Person";
import { People, PersonNames } from "../../data/People/AllPeople";
import { appRouter } from "../../server/api/root";
import { api } from "../../utils/api";

export const getStaticPaths: GetStaticPaths = () => {
  // Paths need to be strings (allow both the person name and their id)
  const allPaths: string[] = PersonNames.map((name) => name as string).concat(People.map((person) => person.id));

  return {
    paths: allPaths.map((path) => ({
      params: {
        personID: path,
      },
    })),
    fallback: false,
  };
};

export async function getStaticProps(context: GetStaticPropsContext<{ personID: string }>) {
  const ssg = createProxySSGHelpers({
    router: appRouter,
    ctx: {},
  });

  const personID = context.params?.personID as string;

  await ssg.people.getInfo.prefetch({ personID });

  return {
    props: {
      trpcState: ssg.dehydrate(),
      personID,
    },
    revalidate: 1,
  };
}

export default function PersonPage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const { data: person } = api.people.getInfo.useQuery({
    personID: props.personID,
  });

  if (!person) {
    return null;
  }

  return <Person person={person} />;
}
