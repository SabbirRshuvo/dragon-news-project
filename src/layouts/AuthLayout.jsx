import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const AuthLayout = () => {
  return (
    <div className="bg-[#F3F3F3] ">
      <header className="py-4 w-10/12 mx-auto">
        <Navbar />
      </header>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
