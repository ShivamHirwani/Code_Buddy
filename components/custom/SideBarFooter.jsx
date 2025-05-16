// "use client";
// import { HelpCircle, LogOut, Settings, Wallet } from "lucide-react";
// import React from "react";
// import { Button } from "../ui/button";
// import { useRouter } from "next/navigation";

// function SideBarFooter() {
//   const router = useRouter();
//   const options = [
//     // {
//     //   name: "Settings",
//     //   icon: Settings,
//     // },
//     // {
//     //   name: "Help Center",
//     //   icon: HelpCircle,
//     // },
//     // {
//     //   name: "My Subscription",
//     //   icon: Wallet,
//     //   path: "/pricing",
//     // },
//     {
//       name: "Sign Out",
//       icon: LogOut,
//     },
//   ];
//   const onOptionClock = (option) => {
//     console.log(option);
//     router.push(option.path);
//   };

//   return (
//     <div className="p-2 mb-10">
//       {options.map((option, index) => (
//         <Button
//           onClick={() => onOptionClock(option)}
//           key={index}
//           variant="ghost"
//           className="w-full flex justify-start my-3"
//         >
//           <option.icon />
//           {option.name}
//         </Button>
//       ))}
//     </div>
//   );
// }

// export default SideBarFooter;

// /v2
"use client";
import { LogOut } from "lucide-react";
import React, { useContext } from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { UserDetailContext } from "@/context/UserDetailContext";

function SideBarFooter() {
  const router = useRouter();
  const { setUserDetail } = useContext(UserDetailContext);

  const options = [
    {
      name: "Sign Out",
      icon: LogOut,
      action: "signout",
    },
  ];

  const onOptionClick = (option) => {
    if (option.action === "signout") {
      // Clear user data
      setUserDetail(null);
      if (typeof window !== "undefined") {
        localStorage.removeItem("user");
      }
      // Redirect to homepage or sign-in
      router.push("/");
    } else if (option.path) {
      router.push(option.path);
    }
  };

  return (
    <div className="p-2 mb-10">
      {options.map((option, index) => (
        <Button
          onClick={() => onOptionClick(option)}
          key={index}
          variant="ghost"
          className="w-full flex justify-start my-3"
        >
          <option.icon className="mr-2" />
          {option.name}
        </Button>
      ))}
    </div>
  );
}

export default SideBarFooter;
