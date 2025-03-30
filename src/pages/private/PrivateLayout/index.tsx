import { Outlet } from "react-router";
import Navbar from "../../../components/Navbar";

export default function PrivateLayout() {
  return (
    <>
      <Navbar />
      <div className="bg-gray-light grid items-center justify-items-center min-h-svh">
        {<Outlet />}
      </div>
    </>
  );
}
