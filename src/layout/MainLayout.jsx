import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftNavbar from "../components/layout-component/LeftNavbar";
import RightNavbar from "../components/layout-component/RightNavbar";

const MainLayout = () => {
    return (
        <div className="font-display">
            <header>
                <Header />
                <section className="w-11/12 mx-auto">
                    <LatestNews />
                </section>
            </header>
            <nav className="w-11/12 mx-auto">
                <Navbar />
            </nav>
            <main className="w-11/12 mx-auto gap-5 pt-5 grid md:grid-cols-12">
                <aside className="left col-span-3">
                    <LeftNavbar />
                </aside>
                <section className="col-span-6">
                    <Outlet />
                </section>
                <aside className="right col-span-3">
                    <RightNavbar />
                </aside>
            </main>
        </div>
    );
};

export default MainLayout;
