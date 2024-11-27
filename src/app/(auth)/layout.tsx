"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}
const layout = ({ children }: AuthLayoutProps) => {
  const pathname = usePathname();
  const isSigninPage = pathname === "/sign-in";
  return (
    <main className="bg-neutral-100 min-h-screen">
      <div className="max-w-screen-2xl p-4 mx-auto">
        <nav className="flex justify-between  items-center">
          <Image src="./logo.svg" alt="logo" width={156} height={50} />
          <div className="flex items-center gap-2">
            <Button asChild variant="secondary">
              <Link href={isSigninPage ? "/sign-up" : "/sign-in"}>
                {isSigninPage ? "Sign Up" : "Login"}
              </Link>
            </Button>
          </div>
        </nav>
        <div className="flex flex-col items-center justify-center pt-4 md:pt-14">
          {children}
        </div>
      </div>
    </main>
  );
};

export default layout;
