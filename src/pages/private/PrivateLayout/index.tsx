import { Navigate, Outlet, useLocation } from "react-router";
import Navbar from "../../../components/Navbar";
import { isAuthenticated } from "../../../utils/auth";

export default function PrivateLayout() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <div className="bg-gray-light grid items-center justify-items-center min-h-svh">
        {isAuthenticated() ? (
          <Outlet />
        ) : (
          <Navigate to="/login" replace state={{ from: location }} />
        )}
      </div>
    </>
  );
}
