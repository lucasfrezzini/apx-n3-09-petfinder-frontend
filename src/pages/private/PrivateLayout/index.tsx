import { Navigate, Outlet } from "react-router";
import Navbar from "../../../components/Navbar";
import { isAuthenticated } from "../../../utils/auth";

export default function PrivateLayout() {
  return (
    <>
      <Navbar />
      <div className="bg-gray-light grid items-center justify-items-center min-h-svh">
        {isAuthenticated() ? <Outlet /> : <Navigate to="/login" />}
      </div>
    </>
  );
}
