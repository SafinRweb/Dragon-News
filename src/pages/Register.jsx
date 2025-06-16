import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
    const { createNewUser } = useContext(AuthContext);
    const [error, setError] = useState(""); // Password error
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        const form = new FormData(e.target);
        const name = form.get("name");
        const photo = form.get("photo");
        const email = form.get("email");
        const password = form.get("password");

        console.log(name, email, photo, password);

        // Password validation
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
        if (!passwordRegex.test(password)) {
            setError(
                "Password must be at least 6 characters and include uppercase, lowercase, and a number."
            );
            return;
        }

        createNewUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                e.target.reset();
                navigate("/");
            })
            .catch((error) => {
                console.log(error.code, error.message);
            });
    };

    return (
        <div
            onSubmit={handleSubmit}
            className="w-full max-w-xl mx-auto bg-white p-10 rounded-2xl shadow-lg border border-gray-200"
        >
            <h2 className="text-3xl font-bold text-center text-gray-800">
                Create an Account
            </h2>

            <div className="w-28 h-[3px] bg-neutral mx-auto mt-6 mb-8 rounded"></div>

            <form className="space-y-5">
                {/* Full Name */}
                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                        Full Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your full name"
                        className="input input-bordered w-full"
                        required
                    />
                </div>

                {/* Photo URL */}
                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                        Photo URL
                    </label>
                    <input
                        type="text"
                        name="photo"
                        placeholder="https://example.com/photo.jpg"
                        className="input input-bordered w-full"
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Your email"
                        className="input input-bordered w-full"
                        required
                    />
                </div>

                {/* Password */}
                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Create a password"
                        className={`input input-bordered w-full ${error ? "border-red-500" : ""
                            }`}
                        required
                    />
                    {error && (
                        <p className="text-red-500 text-sm mt-1">{error}</p>
                    )}
                </div>

                {/* Terms & Conditions */}
                <div className="form-control">
                    <label className="label cursor-pointer flex items-center gap-2">
                        <input type="checkbox" className="checkbox checkbox-sm" />
                        <span className="label-text text-sm text-gray-600">
                            I accept the
                            <a href="#" className="text-blue-600 ml-1 hover:underline">
                                Terms & Conditions
                            </a>
                        </span>
                    </label>
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-neutral w-full mt-2">
                    Register
                </button>
            </form>

            {/* Already have account */}
            <p className="text-center text-sm mt-8 text-gray-600">
                Already have an account?
                <Link
                    to="/auth/login"
                    className="text-blue-600 ml-1 hover:underline"
                >
                    Login
                </Link>
            </p>
        </div>
    );
};

export default Register;
