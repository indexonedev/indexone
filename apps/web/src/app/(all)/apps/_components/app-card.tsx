"use client";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle } from "@/components/ui/card";
import { appsTable } from "@indexone/database";

type App = typeof appsTable.$inferSelect;

export default function AppCard({app}: {app: App}) {
  return (<Card className="bg-zinc-900 border-none">
    <CardHeader>
      <CardTitle className="text-zinc-200">{app.name}</CardTitle>
      <CardDescription className="text-zinc-400 text-xs">{app.description}</CardDescription>
    </CardHeader>
  </Card>);
}
