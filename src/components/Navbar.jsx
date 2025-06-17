import { useContext, useEffect, useState } from "react";
import userIcon from "../assets/user.png";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [categoryPaths, setCategoryPaths] = useState([]);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => {
        if (data?.data?.news_category) {
          const paths = data.data.news_category.map(
            (cat) => `/category/${cat.category_id}`
          );
          setCategoryPaths(paths);
        }
      })
      .catch((error) => {
        console.error("Failed to fetch categories:", error);
        setCategoryPaths([]);
      });
  }, []);

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

  const isUserLoggedInAndVerified = user && user.emailVerified;

  const normalizePath = (path) => path.replace(/\/$/, "");

  const linkClass = (to) => {
    const currentPath = normalizePath(location.pathname);

    if (to === "/") {
      const isCategoryPage = categoryPaths.some(
        (catPath) => normalizePath(catPath) === currentPath
      );
      const homeActive = currentPath === "" || isCategoryPage;
      return homeActive
        ? "text-primary underline underline-offset-4 font-bold"
        : "text-gray-700 hover:text-primary transition";
    }

    return currentPath === to
      ? "text-primary underline underline-offset-4 font-bold"
      : "text-gray-700 hover:text-primary transition";
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center px-6">
      <div className="text-center md:text-left font-semibold text-lg text-gray-700">
        {isUserLoggedInAndVerified
          ? user.displayName
            ? `Hello, ${user.displayName}`
            : `Hello, ${user.email.split("@")[0]}`
          : ""}
      </div>

      <div className="flex justify-center flex-wrap gap-6 text-base font-medium">
        <NavLink to="/" className={() => linkClass("/")}>
          Home
        </NavLink>
        <NavLink to="/career" className={() => linkClass("/career")}>
          Career
        </NavLink>
        <NavLink to="/about" className={() => linkClass("/about")}>
          About
        </NavLink>
      </div>

      <div className="flex justify-center md:justify-end">
        <div className="flex items-center gap-3">
          <img
            src={
              isUserLoggedInAndVerified && user.photoURL
                ? user.photoURL
                : userIcon
            }
            alt="User"
            className="w-10 h-10 rounded-full object-cover border"
          />
          {isUserLoggedInAndVerified ? (
            <button
              onClick={handleLogout}
              className="btn btn-neutral btn-sm rounded-md"
            >
              LogOut
            </button>
          ) : (
            <Link to="/auth/login" className="btn btn-neutral btn-sm rounded-md">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
