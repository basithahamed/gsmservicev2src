import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useFn } from "../context/AuthContext";

function RequireAuth({ children }) {
  const auth = useFn();
  console.log("user:", auth.CurrentUser);
  const location = useLocation(); // Get the current route location

  // Check if the current route is the login page
  const isLoginPage = location.pathname === '/login';

  if (!localStorage.getItem("email")) {
      if(!isLoginPage)
      {
        return <Navigate to="/login" />;
      }

  } else if (localStorage.getItem("email") && isLoginPage) {
    return children;

  }

  return children;
}

export default RequireAuth;
