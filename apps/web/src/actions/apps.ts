"user server"

import { db } from "@indexone/database";
import { appsTable, InsertApp } from "@indexone/database";
import { tokensTable } from "@indexone/database";

type createNewAppType = {
  name: string;
  description?: string;
};


export async function createNewApp(app: createNewAppType): Promise<App> {
  const token = "tail-" + crypto.randomUUID();
  const appId = crypto.randomUUID().substring(0, 8);
  const tokenId = crypto.randomUUID().substring(0, 8);
}


