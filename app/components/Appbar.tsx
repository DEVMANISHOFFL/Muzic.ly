"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Music } from 'lucide-react';

export function Appbar() {
  const session = useSession();

  return (
    <div>
      {session.data?.user ? (
        <Button
          variant="outline"
          className="m-2 p-4 text-white font-semibold text-sm rounded-lg bg-gradient-to-br from-purple-600 via-purple-500 to-purple-400 hover:bg-gradient-to-br hover:from-purple-700 hover:via-purple-600 hover:to-purple-500 hover:text-white border-none transition-all duration-300 ease-in-out"
          onClick={() => signOut()}
        >
          Sign Out
        </Button>
      ) : (
        <Button
          variant="outline"
          className="m-2 p-4 text-white font-semibold text-sm rounded-md bg-gradient-to-br from-purple-600 via-purple-500 to-purple-400 hover:bg-gradient-to-br hover:from-purple-700 hover:via-purple-600 hover:to-purple-500 hover:text-white border-none transition-all duration-300 ease-in-out"
          onClick={() => signIn()}
        >
          Sign In
        </Button>
      )}
    </div>
  );
}
