import { useContext } from "react";
import userIcon from "../assets/user.png";
import { Link, NavLink, useNavigate } from 'react-router-dom';
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

    // Only show greeting and logout if user exists AND email is verified
    const isUserLoggedInAndVerified = user && user.emailVerified;

    return (
        <div className="grid grid-cols-3 items-center py-2 w-full">
            {/* Greeting on left side */}
            <div className="pl-4 font-semibold text-lg text-gray-700">
                {isUserLoggedInAndVerified
                  ? (user.displayName
                      ? `Hello, ${user.displayName}`
                      : `Hello, ${user.email.split('@')[0]}`)
                  : ''}
            </div>

            <div className="flex justify-center space-x-5 text-lg font-medium">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/career">Career</NavLink>
                <NavLink to="/about">About</NavLink>
            </div>

            <div className="flex justify-end pr-4">
                <div className="flex items-center gap-2">
                    <img src={userIcon} alt="User" className="w-10 h-10 rounded-full" />
                    {
                        isUserLoggedInAndVerified ? (
                            <button
                                onClick={handleLogout}
                                className="btn btn-neutral rounded-none"
                            >
                                LogOut
                            </button>
                        ) : (
                            <Link
                                to="/auth/login"
                                className="btn btn-neutral rounded-none"
                            >
                                Login
                            </Link>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;