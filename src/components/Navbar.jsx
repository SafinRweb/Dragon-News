import userIcon from "../assets/user.png";
import { Link, NavLink } from 'react-router-dom'; // make sure this is correct

const Navbar = () => {
    return (
        <div className="grid grid-cols-3 items-center py-2 w-full">
            {/* Left - intentionally empty for precise positioning */}
            <div></div>

            <div className="flex justify-center space-x-5 text-lg font-medium">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/career">Career</NavLink>
                <NavLink to="/about">About</NavLink>
            </div>

            <div className="flex justify-end pr-4">
                <div className="flex items-center gap-2">
                    <img src={userIcon} alt="User" className="w-10 h-10 rounded-full" />
                    <Link
                        to="/auth/login"
                        className="btn btn-neutral rounded-none">
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
