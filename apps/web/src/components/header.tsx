import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <nav className="">
      <div className="max-w-screen-xl flex flex-wrap justify-between mx-auto p-4">
        <a className="flex items-center space-x-1 rtl:space-x-reverse">
          <span className="bg-red self-center text-3xl font-semibold font-black text-center sm:text-left text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-zinc-500 to-red-900">
            indexone
          </span>
        </a>
        <div className="flex justtify-center gap-2">
          <Button size="sm">Sign In</Button>
          <Button variant="outline" size="sm">Sign up</Button>
        </div>
      </div>
    </nav>
  );
}

