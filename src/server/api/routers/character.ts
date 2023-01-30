import { z } from "zod";
import type { CharacterData } from "../../../pages/api/character/[characterID]";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const characterRouter = createTRPCRouter({
  getInfo: publicProcedure
    .input(z.object({ characterID: z.string().min(1).trim() }))
    .query(async ({ input }): Promise<CharacterData> => {
      const API_URL = `http://localhost:3000/api/character/${input.characterID}`;

      const response = await fetch(API_URL);
      const data = await response.json();

      return data;
    }),
});
