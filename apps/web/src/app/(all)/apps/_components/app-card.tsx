"use client";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle } from "@/components/ui/card";

export default function AppCard() {
  return (<Card className="bg-zinc-900 border-none">
    <CardHeader>
      <CardTitle className="text-zinc-200">AppCard</CardTitle>
      <CardDescription className="text-zinc-400 text-xs">AppCard</CardDescription>
      <CardDescription className="text-zinc-400 text-xs">AppCard</CardDescription>
      <CardDescription className="text-zinc-400 text-xs">AppCard</CardDescription>
      <CardDescription className="text-zinc-400 text-xs">AppCard</CardDescription>
      <CardDescription className="text-zinc-400 text-xs">AppCard</CardDescription>
    </CardHeader>
  </Card>);
}
