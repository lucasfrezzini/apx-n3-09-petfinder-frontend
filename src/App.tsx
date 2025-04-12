import { BrowserRouter, Routes, Route } from "react-router";
import PublicLayout from "./pages/public/PublicLayout";
import PrivateLayout from "./pages/private/PrivateLayout";

import Home from "./pages/public/Home";
import Login from "./pages/private/Login";
import Register from "./pages/private/Register";
import EditProfile from "./pages/private/EditProfile";
import NotifyPet from "./pages/private/NotifyPet";
import CreatePetReport from "./pages/private/CreatePetReport";
import PetsState from "./pages/private/PetsState";
import LostPets from "./pages/public/LostPets";
import LostPetsMap from "./pages/public/LostPetsMap";
import { Toaster } from "sonner";

function App() {
  return (
    <BrowserRouter>
      <Toaster expand={true} richColors position="bottom-right" />
      <Routes>
        <Route element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="/lost-pets" element={<LostPets />} />
          <Route path="/lost-pets-map" element={<LostPetsMap />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route element={<PrivateLayout />}>
          <Route path="/notify-pet" element={<NotifyPet />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/pets-state" element={<PetsState />} />
          <Route path="/create-pet-report" element={<CreatePetReport />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
