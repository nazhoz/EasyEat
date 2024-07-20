import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import React from "react";
import { FaRegUser } from "react-icons/fa";

const Login = () => {
  return (
    <div>
      <SignedOut>
        <SignInButton mode="modal" className="custom-signin-button">
          <FaRegUser size={23} />
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
};

export default Login;
