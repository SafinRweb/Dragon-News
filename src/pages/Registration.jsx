import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="w-full max-w-xl mx-auto bg-white p-10 rounded-2xl shadow-lg border border-gray-200">
            <h2 className="text-3xl font-bold text-center text-gray-800">
                Create an Account
            </h2>

            {/* Divider */}
            <div className="w-28 h-[3px] bg-neutral mx-auto mt-6 mb-8 rounded"></div>

            <form className="space-y-5">
                {/* Full Name */}
                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                        Full Name
                    </label>
                    <input
                        type="text"
                        placeholder="Your full name"
                        className="input input-bordered w-full"
                    />
                </div>

                {/* Photo URL */}
                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                        Photo URL
                    </label>
                    <input
                        type="text"
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
                        placeholder="Your email"
                        className="input input-bordered w-full"
                    />
                </div>

                {/* Password */}
                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                        Password
                    </label>
                    <input
                        type="password"
                        placeholder="Create a password"
                        className="input input-bordered w-full"
                    />
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
                <Link to="/auth/login" className="text-blue-600 ml-1 hover:underline">
                    Login
                </Link>
            </p>
        </div>
    );
};

export default Register;
