import Link from "next/link";
import React from "react";
import Image from "next/image";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 ">
      <div className="container">
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          <Image
            src={"/uabc.png"}
            width={70}
            height={50}
            alt="logo"
            className="mt-[-10px]"
          />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
