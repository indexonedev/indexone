"use server"

import { db } from "@indexone/database";
import { appsTable, InsertApp } from "@indexone/database";
import { tokensTable } from "@indexone/database";
import { generateToken } from "@indexone/id-generator";

type createNewAppType = {
  name: string;
  description?: string;
};

type Token = typeof tokensTable.$inferInsert;
type SelectToken = typeof tokensTable.$inferSelect;
export async function createNewApp(app: createNewAppType): Promise<{token: string, appId: string}> {
  const token = "sk-" + generateToken();
  // we don't store the full token in the database, we only store the first 8 characters
  const tokenToSave = token.substring(0, 8);
  const appId = crypto.randomUUID().substring(0, 8);
  const tokenId = crypto.randomUUID().substring(0, 8);
  const appObj = await db.insert(appsTable).values({
    id: appId,
    name: app.name,
    description: app.description || "",
  });
  const tokenObj = await db.insert(tokensTable).values({
    id: tokenId,
    appId: appId,
    token: tokenToSave,
    status: 1,
  });
  return {
    token: token,
    appId: appId,
  };
}


