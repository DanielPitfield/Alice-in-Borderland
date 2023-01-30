import { createProxySSGHelpers } from "@trpc/react-query/ssg";
import type {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import Character from "../../components/Character";
import { appRouter } from "../../server/api/root";
import { api } from "../../utils/api";

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [{ params: { characterID: "1" } }, { params: { characterID: "2" } }],
    fallback: "blocking",
  };
};

export async function getStaticProps(
  context: GetStaticPropsContext<{ characterID: string }>
) {
  const ssg = createProxySSGHelpers({
    router: appRouter,
    ctx: {},
  });

  const characterID = context.params?.characterID as string;

  await ssg.character.getInfo.prefetch({ characterID });

  return {
    props: {
      trpcState: ssg.dehydrate(),
      characterID,
    },
    revalidate: 1,
  };
}

export default function CharacterPage(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const { data: characterData } = api.character.getInfo.useQuery({
    characterID: props.characterID,
  });

  if (!characterData) {
    return null;
  }

  return <Character characterData={characterData} />;
}
