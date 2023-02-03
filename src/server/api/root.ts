import { createTRPCRouter } from "./trpc";
import { peopleRouter } from "./routers/people";
import { gamesRouter } from "./routers/games";

export const appRouter = createTRPCRouter({
  people: peopleRouter,
  games: gamesRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
