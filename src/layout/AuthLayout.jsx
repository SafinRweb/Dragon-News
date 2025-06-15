import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="font-display min-h-screen bg-[#f3f3f3] flex flex-col">
      <header className="py-3 w-11/12 mx-auto">
        <Navbar />
      </header>
      <main className="w-11/12 mx-auto flex-grow flex justify-center items-center">
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;