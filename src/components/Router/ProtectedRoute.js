import React from "react";
import { Outlet, Navigate } from "react-router";


const useAuth = () => {

  const isAuthenticated = localStorage.getItem("user");
  var role;
  
  if (!isAuthenticated) {
     role = false;
  }
  else {
     role = true;
  }
  var user = { loggin: role ? true : false }
  return user && user.loggin;
}

export function ProtectedRoute() {
  const isAuth = useAuth();

  return (
    isAuth ? <Outlet /> : <Navigate to='/login' />
  );
}

export default ProtectedRoute;