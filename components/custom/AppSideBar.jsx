import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { Button } from "../ui/button";
import { MessageCircleCodeIcon } from "lucide-react";
import WorkspaceHistory from "./WorkspaceHistory";
import SideBarFooter from "./SideBarFooter";
import { useRouter } from "next/navigation";

function AppSideBar() {
  const router = useRouter();
  return (
    <Sidebar>
      <SidebarHeader className="p-5">
        <Image src={"/logo.png"} alt="logo" width={30} height={30} />
        <Button
          className="mt-5 cursor-pointer"
          onClick={() => router.push("/")}
        >
          <MessageCircleCodeIcon /> Start New Chat
        </Button>
      </SidebarHeader>
      <SidebarContent className="">
        <SidebarGroup>
          <WorkspaceHistory />
        </SidebarGroup>
        {/* <SidebarGroup /> */}
      </SidebarContent>
      <SidebarFooter>
        <SideBarFooter></SideBarFooter>
      </SidebarFooter>
    </Sidebar>
  );
}

export default AppSideBar;
