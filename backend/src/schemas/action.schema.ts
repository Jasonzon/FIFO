import z from "zod";

export const actionSchema = z.object({
  action: z.string(),
});
