import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { sendEmailVerification } from "firebase/auth";

const Register = () => {
    const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    // Controlled input states
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Validation error states
    const [passwordError, setPasswordError] = useState("");
    const [nameError, setNameError] = useState("");

    const handlePasswordChange = (e) => {
        const val = e.target.value;
        setPassword(val);

        const passRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])/;

        if (val.length < 6) {
            setPasswordError("Password must be at least 6 characters.");
        } else if (!passRegex.test(val)) {
            setPasswordError("Password must include 1 uppercase letter and 1 special symbol.");
        } else {
            setPasswordError("");
        }
    };

    const handleNameChange = (e) => {
        const val = e.target.value;
        setName(val);

        if (/\s/.test(val)) {
            setNameError("Name must be a single word (no spaces).");
        } else {
            setNameError("");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !email || !password) {
            toast.warn("Please fill in all fields.");
            return;
        }
        if (nameError) {
            toast.warn("Please fix the name field.");
            return;
        }
        if (passwordError) {
            toast.warn("Please fix the password field.");
            return;
        }

        try {
            const user = await createNewUser(email, password);
            await updateUserProfile({ displayName: name });

            // Send verification email once here only
            await sendEmailVerification(user);

            setUser({ ...user, displayName: name });
            toast.success(`Registered successfully! Verification email sent to ${email}`, { icon: "✉️" });
            navigate("/auth/login");
        } catch (error) {
            console.error("Registration error:", error);
            let msg = "Registration failed.";
            if (error.code === "auth/email-already-in-use") msg = "Email is already in use.";
            else if (error.code === "auth/invalid-email") msg = "Invalid email format.";
            else if (error.code === "auth/weak-password") msg = "Password is too weak.";
            else if (error.message) msg = error.message;
            toast.error(msg);
        }
    };

    return (
        <div className="w-full max-w-xl mx-auto bg-white p-10 rounded-2xl shadow-lg border">
            <h2 className="text-3xl font-bold text-center text-gray-800">Create Your Account</h2>
            <div className="w-28 h-[2px] bg-neutral mx-auto mt-6 mb-8 rounded"></div>
            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">Name</label>
                    <input
                        name="name"
                        type="text"
                        placeholder="Enter a single name"
                        className={`input input-bordered w-full ${nameError ? "border-red-500" : ""}`}
                        value={name}
                        onChange={handleNameChange}
                        required
                    />
                    {nameError && <p className="text-red-600 text-sm mt-1">{nameError}</p>}
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
                    <input
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        className="input input-bordered w-full"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">Password</label>
                    <input
                        name="password"
                        type="password"
                        placeholder="Create a password"
                        className={`input input-bordered w-full ${passwordError ? "border-red-500" : ""}`}
                        value={password}
                        onChange={handlePasswordChange}
                        required
                    />
                    {passwordError && <p className="text-red-600 text-sm mt-1">{passwordError}</p>}
                </div>
                <button
                    type="submit"
                    className="btn btn-neutral w-full mt-2"
                    disabled={!!passwordError || !!nameError}
                >
                    Register
                </button>
            </form>
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
