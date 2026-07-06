import type { ReactNode } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "@/app/store/hook";

export const ProtectedRoute = () => {
  const auth = useAppSelector(
    state => state.auth
  );

  if (!auth.isInitialized) {
    return ('helelo')
  }

  if (!auth.isAuth) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet/>
}