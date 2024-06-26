import React from "react";
import { Outlet } from "react-router-dom";
import DashboarView from "../app/layouts/dashboard/DashboarView";

export default function PublicRouter() {

  return (
    <>
      <DashboarView>
        <Outlet />
      </DashboarView>
    </>
  );
}
