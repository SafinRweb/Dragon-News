import { useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { sendPasswordResetEmail, getAuth } from "firebase/auth";
import app from "../firebase/Firebase.config";

const auth = getAuth(app);

const Login = () => {
    const { userLogin, setUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const emailRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get("email");
        const password = form.get("password");

        if (!email || !password) {
            toast.warn("Please fill in both email and password.");
            return;
        }

        userLogin(email, password)
            .then(({ user }) => {
                if (!user.emailVerified) {
                    toast.warn("Please verify your email before logging in.");
                    return;
                }

                setUser(user);
                e.target.reset();
                toast.success(`Welcome back, ${user.displayName || "User"}!`, {
                    icon: "📰"
                });
                navigate("/");
            })

            .catch((error) => {
                let msg = "Login failed.";
                if (error.code === "auth/user-not-found") msg = "No user found.";
                if (error.code === "auth/wrong-password") msg = "Wrong password.";
                toast.error(msg);
            });
    };

    const handleForgotPassword = () => {
        const email = emailRef.current?.value;
        if (!email) {
            toast.warn("Please enter your email first.");
            return;
        }

        sendPasswordResetEmail(auth, email)
            .then(() => {
                document.getElementById("reset-password-modal").showModal();
            })
            .catch((error) => {
                let msg = "Could not send reset email.";
                if (error.code === "auth/user-not-found") msg = "No user with this email.";
                toast.error(msg);
            });
    };

    return (
        <>
            <div onSubmit={handleSubmit} className="w-full max-w-xl mx-auto bg-white p-10 rounded-2xl shadow-lg border">
                <h2 className="text-3xl font-bold text-center text-gray-800">Login to Your Account</h2>
                <form className="space-y-5 mt-6">
                    <div>
                        <label className="block text-sm mb-1 text-gray-600">Email</label>
                        <input
                            name="email"
                            type="email"
                            ref={emailRef}
                            placeholder="Enter your email"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm mb-1 text-gray-600">Password</label>
                        <input
                            name="password"
                            type="password"
                            placeholder="Enter your password"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    <div className="text-right">
                        <button
                            type="button"
                            onClick={handleForgotPassword}
                            className="text-sm text-blue-600 hover:underline"
                        >
                            Forgot password?
                        </button>
                    </div>
                    <button type="submit" className="btn btn-neutral w-full mt-2">Login</button>
                </form>
                <p className="text-center text-sm mt-6 text-gray-600">
                    Don’t have an account?
                    <Link to="/auth/register" className="text-red-500 ml-1 hover:underline">Register</Link>
                </p>
            </div>

            <dialog id="reset-password-modal" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Check Your Email</h3>
                    <p className="py-4">We’ve sent a password reset link to your email address.</p>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    );
};

export default Login;
