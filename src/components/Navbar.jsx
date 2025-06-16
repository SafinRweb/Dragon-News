import { useContext } from "react";
import userIcon from "../assets/user.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logOut()
            .then(() => {
                toast.success("Logged out successfully.");
                navigate("/auth/login");
            })
            .catch(() => {
                toast.error("Logout failed. Please try again.");
            });
    };

    const isUserLoggedInAndVerified = user && user.emailVerified;

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center py-2 w-full text-center md:text-left">
            <div className="font-semibold text-lg text-gray-700">
                {isUserLoggedInAndVerified
                    ? user.displayName
                        ? `Hello, ${user.displayName}`
                        : `Hello, ${user.email.split("@")[0]}`
                    : ""}
            </div>

            <div className="flex justify-center flex-wrap gap-4 text-lg font-medium">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/career">Career</NavLink>
                <NavLink to="/about">About</NavLink>
            </div>

            <div className="flex justify-center md:justify-end">
                <div className="flex items-center gap-2">
                    <img
                        src={isUserLoggedInAndVerified && user.photoURL ? user.photoURL : userIcon}
                        alt="User"
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    {isUserLoggedInAndVerified ? (
                        <button onClick={handleLogout} className="btn btn-neutral btn-sm rounded-none">
                            LogOut
                        </button>
                    ) : (
                        <Link to="/auth/login" className="btn btn-neutral btn-sm rounded-none">
                            Login
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;