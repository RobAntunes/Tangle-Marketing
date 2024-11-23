import { db, Email } from 'astro:db';
import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';

export const server = {
  addToWaitlist: defineAction({
    input: z.string().email(),
    handler: async (input: string) => {
        const result = await db
          .insert(Email)
          .values({ email: input })
          .returning();
        return { success: result, error: null };
    }})}

