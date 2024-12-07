import { getCurrent } from "@/features/auth/actions";
import { redirect } from "next/navigation";
import React from "react";

const WorkspacePage = async () => {
  const user = await getCurrent();

  if (!user) redirect("/sign-in");
  return <div>WorkspacePage</div>;
};

export default WorkspacePage;
