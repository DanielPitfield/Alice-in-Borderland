import { createProxySSGHelpers } from "@trpc/react-query/ssg";
import type { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from "next";
import Game from "../../components/Game";
import { Games } from "../../data/Games/AllGames";
import { appRouter } from "../../server/api/root";
import { api } from "../../utils/api";

export const getStaticPaths: GetStaticPaths = () => {
  // Paths need to be strings (allow both the game name and the game id)
  const allPaths: string[] = Games.map((game) => game.cardName as string)
    .concat(Games.map((game) => game.id))
    .filter((x) => x);

  return {
    paths: allPaths.map((path) => ({
      params: {
        gameID: path,
      },
    })),
    fallback: false,
  };
};

export async function getStaticProps(context: GetStaticPropsContext<{ gameID: string }>) {
  const ssg = createProxySSGHelpers({
    router: appRouter,
    ctx: {},
  });

  const gameID = context.params?.gameID as string;

  await ssg.games.getInfo.prefetch({ gameID });

  return {
    props: {
      trpcState: ssg.dehydrate(),
      gameID,
    },
    revalidate: 1,
  };
}

export default function GamePage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const { data: game } = api.games.getInfo.useQuery({
    gameID: props.gameID,
  });

  if (!game) {
    return null;
  }

  return <Game game={game} />;
}
