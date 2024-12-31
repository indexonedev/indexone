import AppCard from "./_components/app-card";
import AppsHeader from "./_components/apps-header";
import { db } from "@indexone/database";
import { appsTable } from "@indexone/database";

export default async function AppsPage() {
  const apps = await db.select().from(appsTable);
  return(
    <div className="text-zinc-400 py-4 w-full">
      <AppsHeader />
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {apps.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>
      </div>
  );
}