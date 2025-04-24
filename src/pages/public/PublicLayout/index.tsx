import { Outlet, useLocation } from "react-router";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";

export default function PublicLayout() {
  let location = useLocation();

  return (
    <>
      <Navbar />
      <div className="bg-white grid items-center justify-items-center min-h-svh">
        {<Outlet />}
        {location.pathname !== "/register" &&
          location.pathname !== "/login" && <Footer />}
      </div>
    </>
  );
}
