import { createTRPCRouter } from "./trpc";
import { characterRouter } from "./routers/character";

export const appRouter = createTRPCRouter({
  character: characterRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
