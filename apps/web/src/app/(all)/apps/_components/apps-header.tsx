"use client";
import Link from "next/link";
import { PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// import { createService } from "../actions";
import { useState } from "react";

export default function AppsHeader() {
  const [pname, setPname] = useState<string>("");
  const [modalOpen, setModalOpen] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  const handleCreateService = async (pname: string) => {
    console.log("handle create service")
    // const project = await createService(pname);
    // setToken(project.ptoken);
  };
  
  const handleModelContent = () => {
    if (token) {
      setToken(null);
      return setModalOpen(false);
    }
    return modalOpen == true ? setModalOpen(false) : setModalOpen(true);
  };


  return (
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <Link
        href={"/apps"}
        className="flex items-center space-x-3 rtl:space-x-reverse"
      >
        <span className="self-center text-xl font-medium whitespace-nowrap dark:text-zinc-200 mr-4">
          Apps
        </span>
      </Link>
      <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <Dialog open={modalOpen} onOpenChange={handleModelContent}>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm" className="text-zinc-800"><PlusIcon color="black"/>Create</Button>
          </DialogTrigger>
          {token ? (
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>Your Application token</DialogTitle>
                <DialogDescription>
                  This will be shown only once. copy it and save it somewhere
                  safe.
                </DialogDescription>
              </DialogHeader>
              <div className="grid py-4 items-center">
                <Label aria-required htmlFor="name" className="">
                  {token}
                </Label>
              </div>
            </DialogContent>
          ) : (
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="text-zinc-200">Create an app</DialogTitle>
                <DialogDescription>
                  Create an app with a name and an optional description
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label aria-required htmlFor="name" className="text-right text-zinc-200">
                    Name
                  </Label>
                  <Input
                    id="name"
                    value={pname}
                    onChange={(pn) => setPname(pn.target.value)}
                    className="col-span-3 border border-zinc-600 text-zinc-300"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="description" className="text-right text-zinc-200">
                    Description
                  </Label>
                  <Input id="desc" className="col-span-3 border border-zinc-600 text-zinc-300" />
                </div>
              </div>
              <DialogFooter>
                <Button
                  type="submit"
                  variant="outline"
                  onClick={(e) => {
                    e.preventDefault();
                    handleCreateService(pname);
                  }}
                >
                  Create
                </Button>
              </DialogFooter>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </div>
  );
}