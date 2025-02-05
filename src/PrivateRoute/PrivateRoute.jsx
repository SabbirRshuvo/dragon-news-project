/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (user) {
    return children;
  }
  if (loading) {
    return <span className="loading loading-spinner loading-xl"></span>;
  }
  return <Navigate state={location.pathname} to="/auth/login" />;
};

export default PrivateRoute;
