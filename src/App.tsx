import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/public/Home";
import Login from "./pages/private/Login";
import Register from "./pages/private/Register";
import EditProfile from "./pages/private/EditProfile";
import NotifyPet from "./pages/private/NotifyPet";
import CreatePetReport from "./pages/private/CreatePetReport";
import PetsState from "./pages/private/PetsState";
import LostPets from "./pages/public/LostPets";
import LostPetsMap from "./pages/public/LostPetsMap";

function App() {
  return (
    <div className="bg-gray-dark grid items-center justify-items-center min-h-svh">
      <Navbar />
      {/* <Home></Home> */}
      {/* <Login></Login> */}
      {/* <Register></Register> */}
      {/* <NotifyPet></NotifyPet> */}
      {/* <EditProfile></EditProfile> */}
      {/* <CreatePetReport></CreatePetReport> */}
      <PetsState></PetsState>
      {/* <LostPets></LostPets> */}
      {/* <LostPetsMap></LostPetsMap> */}
      <Footer />
    </div>
  );
}

export default App;
