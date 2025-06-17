import CareerCards from "../components/CareerCards";
import Navbar from "../components/Navbar";
import Header from "../components/Header";


const Career = () => {
    return (
        <div className="w-11/12 mx-auto font-display mb-3">
            <header className="py-1">
                <div className="w-[95%] md:w-11/12 mx-auto">
                    <Header />
                </div>
            </header>
            <Navbar />
            <div className="space-y-6 py-6 px-4 sm:px-6 lg:px-0">
                <div className="lg:hidden border w-11/12 mx-auto"></div>
                <h1 className="text-3xl font-bold text-center text-neutral">Join Our Team</h1>
                <p className="text-center text-gray-600 max-w-2xl mx-auto">
                    We’re always looking for passionate individuals to help shape the future of journalism.
                </p>
                <CareerCards />
            </div>
        </div>
    );
};

export default Career;
