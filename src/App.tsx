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
import ReportList from "./pages/private/ReportList";
import ReportDetails from "./pages/private/ReportDetails";
import EditPetReport from "./pages/private/EditPetReport";
import Page404 from "./pages/public/404";
import { useEffect } from "react";
import { useSetAtom } from "jotai";
import { userCoordsAtom } from "./context";

function App() {
  const setCoords = useSetAtom(userCoordsAtom);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setCoords(pos.coords);
    });
  }, []);
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
          <Route path="*" element={<Page404 />} />
        </Route>
        <Route element={<PrivateLayout />}>
          <Route path="/notify-pet/:id" element={<NotifyPet />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/pets-state" element={<PetsState />} />
          <Route path="/pets-reports" element={<ReportList />} />
          <Route path="/report-detail/:idPet" element={<ReportDetails />} />
          <Route path="/create-pet-report" element={<CreatePetReport />} />
          <Route path="/edit-pet/:id" element={<EditPetReport />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
