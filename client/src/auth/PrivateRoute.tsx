import React, { ReactNode } from "react";
import { Navigate } from 'react-router-dom';
import { useAuth } from "./AuthContext";

interface PrivateRouteProps {
  children: ReactNode;
}

export default function PrivateRoute({ children }: PrivateRouteProps) {
  const { currentUser } = useAuth();
  return currentUser ? children : <Navigate to="/login" replace />;
}
