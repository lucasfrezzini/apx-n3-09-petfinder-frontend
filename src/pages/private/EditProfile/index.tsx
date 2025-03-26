import Login from "../Login";
import Register from "../Register";

export default function EditProfile() {
  return (
    <main className="container mx-auto pt-24 grid lg:grid-cols-2">
      <Register></Register>
      <Login></Login>
    </main>
  );
}
