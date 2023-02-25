import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import type { PersonData } from "../../../pages/api/people/[personID]";
import { getBaseUrl } from "../../../utils/api";

export const peopleRouter = createTRPCRouter({
  getInfo: publicProcedure
    .input(z.object({ personID: z.string().min(1).trim() }))
    .query(async ({ input }): Promise<PersonData> => {
      const API_URL = `${getBaseUrl()}/api/people/${input.personID}`;
      const response = await fetch(API_URL);
      const data = (await response.json()) as PersonData;
      return data;
    }),
});
