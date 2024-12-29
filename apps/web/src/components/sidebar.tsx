import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-52 shrink-0 md:block h-screen sticky top-0 overflow-hidden">
      <div className="w-full h-full border-r border-white/10">
        {/* logo */}
        <div className="flex pt-8 md:px-6 items-center justify-center cursor-pointer hover:pr-5 pb-4 border-b border-white/10">
            <h1 className="font-bold text-2xl text-transparent bg-gradient-to-r from-[#4d7c0f] to-[#0c4a6e] bg-clip-text">opentail</h1>
          </div>
        {/* menu section */}
        <div className="flex flex-col h-full justify-between">
          {/* top */}
          <div className="pt-8 text-zinc-500 font-medium space-y-2 md:px-2 text-sm">
            <Link
              href={"/apps"}
              className={`flex hover:px-8 duration-200 rounded-md w-full py-2 px-6 items-center gap-2`}
            >
              Apps
            </Link>
            <Link
              href={"/logs"}
              className={`flex hover:px-8 duration-200 px-6 py-2 items-center gap-2`}
            >
              Logs
            </Link>
          </div>
          {/* TODO: Component to signout bottom */}
          <div className="flex pb-20 justify-between px-4 md:px-6 items-center cursor-pointer hover:pr-5 duration-200">
            <div className="flex items-center gap-2">
              <div className="">
                <p className="text-sm font-semibold text-gray-800">
                  Steve Jobs
                </p>
                <p className="text-xs font-medium text-gray-500">
                  steve@apple.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}