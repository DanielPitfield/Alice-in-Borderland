import { createTRPCRouter } from "./trpc";
import { peopleRouter } from "./routers/people";

export const appRouter = createTRPCRouter({
  people: peopleRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
