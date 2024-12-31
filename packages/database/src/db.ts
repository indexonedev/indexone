import { drizzle } from "drizzle-orm/libsql/http";

import * as schema from "./schema/apps";

export const db = drizzle({
  connection: {
    url: process.env.DATABASE_URL!,
    authToken: process.env.DATABASE_AUTH_TOKEN!,
  },
  schema,
});