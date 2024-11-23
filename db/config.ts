import { column, defineDb, defineTable } from 'astro:db';

// https://astro.build/db/config
export const Email = defineTable({
  columns: {
    email: column.text({unique: true}),
  },
});


export default defineDb({
  tables: { Email }
});
