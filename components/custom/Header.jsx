// import Image from "next/image";
// import React from "react";
// import { Button } from "../ui/button";
// import Lookup from "@/data/Lookup";
// import Colors from "@/data/Colors";
// import Link from "next/link";

// function Header() {
//   return (
//     <div className="p-4 flex justify-between items-center">
//       <Link href={"/"}>
//         <Image src={"/logo.png"} alt="logo" width={40} height={40} />
//       </Link>

//       <div className="flex gap-5 ">
//         <Button variant="ghost">Sign In</Button>
//         <Button
//           className="text-white"
//           style={{
//             backgroundColor: Colors.BLUE,
//           }}
//         >
//           Get Started
//         </Button>
//       </div>
//     </div>
//   );
// }

// export default Header;

// v2
"use client";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { Button } from "../ui/button";
import Colors from "@/data/Colors";
import Link from "next/link";
import { UserDetailContext } from "@/context/UserDetailContext";
import SignInDialog from "./SignInDialog"; // Make sure path is correct

function Header() {
  const { userDetail, setUserDetail } = useContext(UserDetailContext);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUserDetail(JSON.parse(user));
    }
  }, [setUserDetail]);

  return (
    <div className="p-4 flex justify-between items-center">
      <Link href={"/"}>
        <Image src={"/logo.png"} alt="logo" width={40} height={40} />
      </Link>

      {userDetail ? (
        <div className="flex items-center gap-3">
          <Image
            src={userDetail.picture}
            alt="User Profile"
            width={36}
            height={36}
            className="rounded-full"
          />
        </div>
      ) : (
        <div className="flex gap-5">
          <Button variant="ghost" onClick={() => setOpenDialog(true)}>
            Sign In
          </Button>
          <Button
            className="text-white"
            style={{ backgroundColor: Colors.BLUE }}
            onClick={() => setOpenDialog(true)}
          >
            Get Started
          </Button>
        </div>
      )}

      <SignInDialog openDialog={openDialog} closeDialog={setOpenDialog} />
    </div>
  );
}

export default Header;
