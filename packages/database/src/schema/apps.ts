import { sqliteTable, text } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";

export const appsTable = sqliteTable("apps", {
  id: text("id").notNull().primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  createdAt: text('created_at')
  .default(sql`(CURRENT_TIMESTAMP)`)
  .notNull(),
  updatedAt: text('updated_at')
  .default(sql`(CURRENT_TIMESTAMP)`)
  .notNull()
});


export type InsertApp = typeof appsTable.$inferInsert;
export type SelectApp = typeof appsTable.$inferSelect;
