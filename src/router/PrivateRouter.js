import React from "react";
import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Dashboard from "../app/layouts/dashboard";

export default function PrivateRouter() {
  const isloggedIn = localStorage.getItem("ACCESS_TOKEN");

  return (
    <>
      {isloggedIn ? (
        <Dashboard>
          <Outlet />
        </Dashboard>
      ) : (
        <Navigate to="/home_page" />
      )}
    </>
  );
}
