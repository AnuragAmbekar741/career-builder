import { ReactNode } from "@tanstack/react-router";
import React from "react";

const AuthLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="w-screen h-screen p-5 flex items-center justify-between">
      <div className="flex w-1/2 justify-center items-center"></div>
      <div className="flex w-1/2 justify-center items-center">{children}</div>
    </div>
  );
};

export default AuthLayout;
