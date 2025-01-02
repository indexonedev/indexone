"use server"

import { db } from "@indexone/database";
import { appsTable, InsertApp } from "@indexone/database";
import { tokensTable } from "@indexone/database";
import { generateToken } from "@indexone/id-generator";

type createNewAppType = {
  name: string;
  description?: string;
};

type App = typeof appsTable.$inferSelect;
type Token = typeof tokensTable.$inferInsert;
type SelectToken = typeof tokensTable.$inferSelect;

export async function getAllApps(): Promise<App[]> {
  const apps = await db.select().from(appsTable);
  return apps;
}

export async function createNewApp(app: createNewAppType): Promise<{token: string, appId: string}> {
  const token = "sk-" + generateToken();
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


