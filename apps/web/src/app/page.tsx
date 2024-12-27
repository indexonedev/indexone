import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-screen flex-col lg:px-32 py-4">
      <Header />
      <section className="container w-full">
        <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
          <div className="text-center space-y-8">
            <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold">
              <span className="text-transparent px-2 bg-gradient-to-r from-[#4d7c0f] to-[#0c4a6e] bg-clip-text">
                Dive Deep into your APIs
              </span>
            </div>
            <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
              {`understand how your APIs being consumed by your customers and fix problems before your customers notice`}
            </p>
            <div className="space-y-4 md:space-y-0 md:space-x-4">
              <Button className="w-5/6 md:w-1/4 font-bold group/arrow">
                Get Started
                <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
              </Button>

              <Button
                asChild
                variant="secondary"
                className="w-5/6 md:w-1/4 font-bold"
              >
                <Link
                  href="https://github.com/indexonedev/indexone"
                  target="_blank"
                >
                  Github respository
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}