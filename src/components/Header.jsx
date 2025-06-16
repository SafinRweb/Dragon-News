import moment from "moment";
import logo from "../assets/logo.png"

const Header = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-2 py-2 mt-4 text-center">
            <div className="logo">
                <img className="w-64 sm:w-80 md:w-[500px]" src={logo} alt="Logo" />
            </div>
            <h2 className="text-gray-400 text-sm sm:text-base">Journalism Without Fear or Favour</h2>
            <p className="text-xs sm:text-sm">{moment().format("dddd, MMMM Do YYYY, h:mm a")}</p>
        </div>
    );
};

export default Header;