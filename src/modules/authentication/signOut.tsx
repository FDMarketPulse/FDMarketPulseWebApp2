import React from "react";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import { useRootSelector } from "@/infra/hooks";
import { UserAction, UserSel } from "@/infra/features/user";

const SignOutButton: React.FC = () => {
  const dispatch = useDispatch();
  const userAuth = useRootSelector(UserSel.userAuthState);

  const signOut = () => {
    dispatch(UserAction.firebaseSignOut.request());
  };

  if (!userAuth.user) {
    return null; // Don't show the sign out button if the user is not authenticated
  }

  return (
    <Button onClick={signOut} type={"primary"}>
      Sign Out
    </Button>
  );
};

export default SignOutButton;
