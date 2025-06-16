import { z } from "zod";

export const ranking = z.object({
  id: z.string(),
  username: z.string(),
  youtube_id: z.string(),
  photo: z.string().url(),
  position: z.number().int().nonnegative(),
  comments: z.number().int().nonnegative(),
  first_week: z.number().int().nonnegative(),
  second_week: z.number().int().nonnegative(),
  third_week: z.number().int().nonnegative(),
  fourth_week: z.number().int().nonnegative(),
  videos: z.array(z.string()),
  created_at: z.string(),
  updated_at: z.string(),
});

export type RankingSchema = z.infer<typeof ranking>;