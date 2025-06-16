import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
    const {userLogin, setUser}= useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Get form Data
        const form = new FormData(e.target);
        const email = form.get("email");
        const password = form.get("password");

        userLogin(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                e.target.reset();
                navigate("/");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }
    return (
        <div onSubmit={handleSubmit} className="w-full max-w-xl mx-auto bg-white p-10 rounded-2xl shadow-lg border border-gray-200">
            <h2 className="text-3xl font-bold text-center text-gray-800">
                Login to Your Account
            </h2>

            {/* Divider with extra spacing */}
            <div className="w-28 h-[2px] bg-neutral mx-auto mt-6 mb-8 rounded"></div>

            <form className="space-y-5">
                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                        Email
                    </label>
                    <input
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        className="input input-bordered w-full"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                        Password
                    </label>
                    <input
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        className="input input-bordered w-full"
                    />
                </div>

                <div className="text-right">
                    <a className="link link-hover text-sm text-blue-600 hover:underline">
                        Forgot password?
                    </a>
                </div>

                <button type="submit" className="btn btn-neutral w-full mt-2">
                    Login
                </button>
            </form>

            <p className="text-center text-sm mt-8 text-gray-600">
                Don’t have an account?
                <Link to="/auth/register" className="text-red-500 ml-1 hover:underline">
                    Register
                </Link>
            </p>
        </div>
    );
};

export default Login;
