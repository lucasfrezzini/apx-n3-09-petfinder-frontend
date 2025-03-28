import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/public/Home";
import Login from "./pages/private/Login";
import Register from "./pages/private/Register";
import EditProfile from "./pages/private/EditProfile";
import NotifyPet from "./pages/private/NotifyPet";
import CreatePetReport from "./pages/private/CreatePetReport";

function App() {
  return (
    <div className="bg-gray-dark grid items-center justify-items-center min-h-svh">
      <Navbar />
      {/* <Home></Home> */}
      {/* <Login></Login> */}
      {/* <Register></Register> */}
      {/* <NotifyPet></NotifyPet> */}
      {/* <EditProfile></EditProfile> */}
      <CreatePetReport></CreatePetReport>
      <Footer />
    </div>
  );
}

export default App;
