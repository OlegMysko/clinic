import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "@/app/store/hook";

export const ProtectedRoute = ({children}) => {
  const auth = useAppSelector(
    state => state.auth
  );

  if (!auth.isInitialized) {
    return ('helelo')
  }

  if (!auth.isAuth) {
    return <Navigate to="/login" replace />;
  }

  return children;
}