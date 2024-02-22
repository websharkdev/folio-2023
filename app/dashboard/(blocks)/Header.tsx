import { UserButton } from "@clerk/nextjs";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="w-full h-20 flex justify-between items-center px-5">
      <UserButton />
    </div>
  );
};

export default Header;
