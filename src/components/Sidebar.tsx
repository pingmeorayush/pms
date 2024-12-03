import Link from "next/link";
import React from "react";
import Image from "next/image";
import DootedSeparator from "./dotted-separator";
import Navigation from "./Navigation";

const Sidebar = () => {
  return (
    <aside className="h-full bg-neutral-100 p-4 w-full">
      <Link href="/">
        <Image src="/logo.svg" alt="logo" width={164} height={48} />
      </Link>
      <DootedSeparator className="my-4" />
      <Navigation />
    </aside>
  );
};

export default Sidebar;
