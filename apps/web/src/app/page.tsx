import Header from "@/components/header";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex h-screen flex-col lg:px-32 py-4">
      <Header />
      <Button variant="destructive">Sign Up</Button>
      <div className="flex flex-col items-center justify-center mb-10">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex flex-col mb-10">
          
          <h1 className="text-3xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-zinc-500 to-red-900">
            <span>find your dream job </span>
            <br />
            <span>at IndexOne</span>
          </h1>
        </div>
      </div>
    </main>
  );
}
