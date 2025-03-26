import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/public/Home";
import Login from "./pages/private/Login";
import Register from "./pages/private/Register";
import EditProfile from "./pages/private/EditProfile";

function App() {
  return (
    <>
      <Navbar />
      {/* <Home></Home> */}
      {/* <Login></Login> */}
      {/* <Register></Register> */}
      {/* <Footer /> */}
      <EditProfile></EditProfile>
      <Footer />
    </>
  );
}

export default App;
