// Updated MainLayout.jsx with responsive design
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftNavbar from "../components/layout-component/LeftNavbar";
import RightNavbar from "../components/layout-component/RightNavbar";
import { useNavigation } from "react-router-dom";
import Loading from "../components/Loading";

const MainLayout = () => {
    const navigation = useNavigation();
    const isLoading = navigation.state === "loading";
    if (isLoading) {
        return <Loading />;
    }

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
            <main className="w-11/12 mx-auto pt-5 grid gap-5 grid-cols-1 md:grid-cols-4 lg:grid-cols-12">
                <aside className="md:col-span-1 lg:col-span-3 order-2 md:order-1">
                    <LeftNavbar />
                </aside>
                <section className="md:col-span-2 lg:col-span-6 order-1 md:order-2">
                    <Outlet />
                </section>
                <aside className="md:col-span-1 lg:col-span-3 order-3">
                    <RightNavbar />
                </aside>
            </main>
        </div>
    );
};

export default MainLayout;
