import React from "react";
import SignUpCard from "@/features/auth/components/sign-up-card";
import { getCurrent } from "@/features/auth/actions";
import { redirect } from "next/navigation";
const SignInPage = async () => {
  const user = await getCurrent();

  if (user) redirect("/");

  return <SignUpCard></SignUpCard>;
};

export default SignInPage;
