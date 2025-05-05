import { Navigate, Outlet } from "react-router";

function GuestGuard() {
  const isAuthenticated = false;

  return !isAuthenticated ? <Outlet /> : <Navigate to="/dashboard" />;
}

export default GuestGuard;
