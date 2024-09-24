import React from "react";
import { Navigate } from "react-router-dom";

type ProtecterRouteProps = {
  isAdmin: boolean;
  children: React.ReactNode;
};

const ProtecterRoute: React.FC<ProtecterRouteProps> = ({
  isAdmin,
  children,
}) => {
  return isAdmin ? children : <Navigate to="/login" />;
};

export default ProtecterRoute;
