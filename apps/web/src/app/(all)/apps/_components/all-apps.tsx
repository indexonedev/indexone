"use client";
import AppCard from "./app-card";
import { getAllApps } from "@/actions/apps";
export default async function AllApps() {
  const apps = await getAllApps();
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {apps.map((app) => (
        <AppCard key={app.id} app={app} />
      ))}
    </div>
  );
}
