import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config({ path: '../../.env' });

export default {
    schema: './src/schema',
    out: './migrations',
    dialect: 'turso',
    dbCredentials: {
      url: process.env.DATABASE_URL!,
      authToken: process.env.DATABASE_AUTH_TOKEN!,
    },
} satisfies Config;