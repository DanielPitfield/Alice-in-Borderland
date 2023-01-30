import { z } from "zod";
import type { PersonData } from "../../../pages/api/people/[personID]";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const peopleRouter = createTRPCRouter({
  getInfo: publicProcedure
    .input(z.object({ personID: z.string().min(1).trim() }))
    .query(async ({ input }): Promise<PersonData> => {
      const API_URL = `http://localhost:3000/api/people/${input.personID}`;
      const response = await fetch(API_URL);
      return await response.json();
    }),
});
