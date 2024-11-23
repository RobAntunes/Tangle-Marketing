import { db } from 'astro:db';
import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';
import { Email } from '../../db/config';

export const server = {
  addToWaitlist: defineAction({
    input: z.object({
      email: z.string().email(),
    }),
    handler: async (input) => {
      try {
        const result = await db
          .insert(Email)
          .values(input.email)
          .returning();

        return {
          success: true,
          cookies: [
            {
              name: 'waitlist',
              value: 'true',
              path: '/',
              maxAge: 60 * 60 * 24 * 365, // 1 year
              secure: true,
              httpOnly: true,
              sameSite: 'strict'
            }
          ]
        };
      } catch (error) {
        return {
          success: false,
          error: 'Failed to add email to waitlist'
        };
      }
    },
  }),
};
