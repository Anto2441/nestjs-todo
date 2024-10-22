import { pgTable, serial, timestamp, varchar } from 'drizzle-orm/pg-core';

export const todos = pgTable('todos', {
  id: serial().primaryKey(),
  createdAt: timestamp().defaultNow().notNull(),
  title: varchar({ length: 128 }).notNull(),
});
