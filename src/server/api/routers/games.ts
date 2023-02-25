import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import type { GameData } from "../../../pages/api/games/[gameID]";
import { getBaseUrl } from "../../../utils/api";

export const gamesRouter = createTRPCRouter({
  getInfo: publicProcedure
    .input(z.object({ gameID: z.string().min(1).trim() }))
    .query(async ({ input }): Promise<GameData> => {
      const API_URL = `${getBaseUrl()}/api/games/${input.gameID}`;
      const response = await fetch(API_URL);
      const data = (await response.json()) as GameData;
      return data;
    }),
});
