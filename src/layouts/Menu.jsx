import MenuDesktop from "@/components/MenuDesktop";
import React from "react";
import { Outlet } from "react-router-dom";

function Menu() {
  return (
    <>
      <MenuDesktop />
      <div className="h-full min-h-0 flex-grow">
        <Outlet />
      </div>
    </>
  );
}

export default Menu;
