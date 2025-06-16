import { z } from "zod";

export const video = z.object({
  id: z.string(),
  week: z.number().int().nonnegative(),
  video_id: z.string(),
  title: z.string(),
  url: z.string().url(),
  views: z.number().int().nonnegative(),
  likes: z.number().int().nonnegative(),
  comments: z.number().int().nonnegative(),
  thumbnail: z.string().url(),
  origin: z.string(),
  published_at: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
});

export type VideoSchema = z.infer<typeof video>;