import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const productSchema = sqliteTable("product", {
  id: text()
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  title: text().notNull(),
  image_url: text().notNull(),
  mockup_url: text().notNull(),
  created_at: integer({ mode: "timestamp_ms" })
    .default(sql`(current_timestamp)`)
    .notNull(),
  time_taken: integer(),
});
