import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";
import { appsTable } from "./apps";
export const tokensTable = sqliteTable("tokens", {
  id: text("id").notNull().primaryKey(),
  token: text("token").notNull(),
  appId: text("app_id").notNull().references(() => appsTable.id),
  status: integer("status").notNull().default(1),
  createdAt: text('created_at')
  .default(sql`(CURRENT_TIMESTAMP)`)
  .notNull(),
  updatedAt: text('updated_at')
  .default(sql`(CURRENT_TIMESTAMP)`)
  .notNull()
});
 

export type InsertToken = typeof tokensTable.$inferInsert;
export type SelectToken = typeof tokensTable.$inferSelect;
