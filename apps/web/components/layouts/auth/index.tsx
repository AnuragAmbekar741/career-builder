import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const AuthLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="h-screen w-screen flex">
      <div className="w-1/2 flex"></div>
      <div className="w-1/2 flex h-full items-center justify-center border">
        <div className="w-full flex h-full items-center justify-center">
          <div className="w-2/5 flex flex-col gap-8">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
