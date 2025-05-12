import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Lookup from "@/data/Lookup";
import Colors from "@/data/Colors";
import Link from "next/link";

function Header() {
  return (
    <div className="p-4 flex justify-between items-center">
      <Link href={"/"}>
        <Image src={"/logo.png"} alt="logo" width={40} height={40} />
      </Link>

      <div className="flex gap-5">
        <Button variant="ghost">Sign In</Button>
        <Button
          className="text-white"
          style={{
            backgroundColor: Colors.BLUE,
          }}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
}

export default Header;
