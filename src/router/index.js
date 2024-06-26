import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";
import Home from "../app/modules/user/Home/Home";

export default function MainRoute() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PublicRouter />}>
          <Route path="/" element={<Home/>}></Route>
        </Route>
        <Route path="/" element={<PrivateRouter />}>
        </Route>
      </Routes>
    </>
  );
}
