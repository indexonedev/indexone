import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";

export default function Header() {
  return (
    <nav className="">
      <div className="max-w-screen-xl flex flex-wrap justify-between mx-auto p-4">
        <a className="flex items-center space-x-1 rtl:space-x-reverse">
          <span className="bg-red self-center text-3xl font-semibold font-black text-center sm:text-left text-transparent bg-clip-text bg-gradient-to-r from-[#4d7c0f] to-[#0c4a6e]">
            opentail
          </span>
        </a>
        <div className="flex justtify-center gap-2">
          <Button variant="secondary" size="sm">Sign In</Button>
          <Button variant="outline" size="sm"><PlusIcon/>Sign up</Button>
        </div>
      </div>
    </nav>
  );
}

