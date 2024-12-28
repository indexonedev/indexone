"use client";
import Link from "next/link";
import CreateAppDialog from "@/components/create-app-dialog";

export default function AppsHeader() {
  return (
    <div className="w-full flex items-center justify-between p-4 pb-4 border-b border-white/10">
      <Link
        href={"/apps"}
        className="flex items-center space-x-3 rtl:space-x-reverse"
      >
        <span className="self-center text-xl font-medium whitespace-nowrap dark:text-zinc-200 mr-4">
          Apps
        </span>
      </Link>
      <CreateAppDialog />
    </div>
  );
}