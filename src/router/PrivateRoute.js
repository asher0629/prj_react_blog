import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getToken } from "../utils/tokenUtils";

export const PrivateRoute = () => {
  return getToken() ? <Outlet /> : <Navigate to="/" />;
};

export const PublicRoute = () => {
  return getToken() ? <Navigate to="/" /> : <Outlet />;
};
