import { Outlet } from "react-router";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";

export default function PublicLayout() {
  return (
    <>
      <Navbar />
      <div className="bg-white grid items-center justify-items-center min-h-svh">
        {<Outlet />}
        <Footer />
      </div>
    </>
  );
}
