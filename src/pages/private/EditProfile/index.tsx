import UpdateProfile from "../UpdateProfile";
import UpdatePassword from "../UpdatePassword";

export default function EditProfile() {
  return (
    <main className="container mx-auto pt-24 grid lg:grid-cols-2">
      <UpdateProfile></UpdateProfile>
      <UpdatePassword></UpdatePassword>
    </main>
  );
}
