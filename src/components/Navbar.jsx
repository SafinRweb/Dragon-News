import { useContext } from "react";
import userIcon from "../assets/user.png";
import { Link, NavLink } from 'react-router-dom'; // make sure this is correct
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);


    return (
        <div className="grid grid-cols-3 items-center py-2 w-full">
            {/* Left - intentionally empty for precise positioning */}
            <div>{user && user.email}</div>

            <div className="flex justify-center space-x-5 text-lg font-medium">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/career">Career</NavLink>
                <NavLink to="/about">About</NavLink>
            </div>

            <div className="flex justify-end pr-4">
                <div className="flex items-center gap-2">
                    <img src={userIcon} alt="User" className="w-10 h-10 rounded-full" />
                    {
                        user && user?.email ?
                            <Link
                                onClick={logOut}
                                className="btn btn-neutral rounded-none">
                                LogOut
                            </Link>
                            :
                            <Link
                                to="/auth/login"
                                className="btn btn-neutral rounded-none">
                                Login
                            </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;
