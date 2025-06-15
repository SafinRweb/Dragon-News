import userIcon from "../assets/user.png"
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className="">   </div>
            <div className="nav space-x-5">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/career">Career</NavLink>
                <NavLink to="/about">About</NavLink>
            </div>
            <div className='login items-center'>
                <div className="flex gap-2">
                    <img src={userIcon} alt="" />
                    <button className="btn btn-netural rounded-none">Login</button>
                </div>
            </div>

        </div>
    );
};

export default Navbar;