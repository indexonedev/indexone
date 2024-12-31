"use server"

import { db } from "@indexone/database";
import { appsTable, InsertApp } from "@indexone/database";
import { tokensTable } from "@indexone/database";

type createNewAppType = {
  name: string;
  description?: string;
};

type Token = typeof tokensTable.$inferInsert;
export async function createNewApp(app: createNewAppType): Promise<{token: string, appId: string}> {
  const token = "tail-" + crypto.randomUUID();
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
    token: token,
    status: 1,
  });
  return {
    token: token,
    appId: appId,
  };
}


