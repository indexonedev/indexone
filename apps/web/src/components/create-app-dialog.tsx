"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { createNewApp } from "@/actions/apps";
import { useRouter } from "next/navigation";

export default function CreateAppDialog() {
  const [modalOpen, setModalOpen] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [pname, setPname] = useState<string>("");
  const router = useRouter();
  const handleModelContent = () => {
    if (token) {
      setToken(null);
      setPname("");
      setModalOpen(false);
      router.refresh();
      return;
    }
    return modalOpen == true ? setModalOpen(false) : setModalOpen(true);
  };

  const handleCreateApp = async (pname: string, description?: string) => {
    console.log("handle create service")
    const app = await createNewApp({
      name: pname,
      description: description || "",
    });
    setToken(app.token);
  };

  return (
    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <Dialog open={modalOpen} onOpenChange={handleModelContent}>
        <DialogTrigger asChild>
          <Button size="sm" className="text-zinc-900 border-none"><PlusIcon color="black" className="-mr-1"/>Create</Button>
        </DialogTrigger>
        {token ? (
          <DialogContent className="sm:max-w-[500px] rounded-none">
            <DialogHeader>
              <DialogTitle className="text-zinc-200">Your Application token</DialogTitle>
              <DialogDescription className="text-zinc-400">
                This will be shown only once. copy and save it somewhere
                safe.
              </DialogDescription>
            </DialogHeader>
            <div className="grid py-4 items-center">
              <Label aria-required htmlFor="name" className="text-zinc-200">
                {token}
              </Label>
            </div>
          </DialogContent>
        ) : (
          <DialogContent className="sm:max-w-[500px]">
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
                  required={true}
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
                className="text-zinc-900 font-semibold"
                onClick={(e) => {
                  e.preventDefault();
                  handleCreateApp(pname);
                }}
              >
                Create
              </Button>
            </DialogFooter>
          </DialogContent>
        )}
      </Dialog>
    </div>
  )
}
