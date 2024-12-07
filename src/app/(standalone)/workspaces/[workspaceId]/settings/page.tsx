import { getCurrent } from "@/features/auth/actions";
import { getWorkspace } from "@/features/workspaces/actions";
import UpdateWorkspaceForm from "@/features/workspaces/components/update-workspace-form";
import { redirect } from "next/navigation";
import React from "react";

interface WorkspaceSettingsPageProps {
  params: {
    workspaceId: string;
  };
}
const WorkspaceSettingsPage = async ({
  params,
}: WorkspaceSettingsPageProps) => {
  const user = await getCurrent();
  if (!user) redirect("/sign-in");

  const workspaceId = await params.workspaceId;
  const initialValues = await getWorkspace({ workspaceId: workspaceId });

  if (!initialValues) redirect(`/workspaces/${workspaceId}`);

  return (
    <div className="w-full lg:max-w-xl">
      <UpdateWorkspaceForm initialValues={initialValues} />
    </div>
  );
};

export default WorkspaceSettingsPage;
