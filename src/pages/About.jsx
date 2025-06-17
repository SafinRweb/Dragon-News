import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const About = () => {
    return (
        <>
            <header className="py-1 font-display">
                <div className="w-[95%] md:w-11/12 mx-auto">
                    <Header />
                </div>
            </header>
            <Navbar />
            <div className="max-w-4xl mx-auto px-4 py-10 font-display">
                <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
                    About Dragon News
                </h1>

                <p className="md:text-lg text-center text-gray-700 leading-relaxed mb-4">
                    Dragon News is your trusted source for the latest updates, breaking headlines,
                    and in-depth coverage from around the world. Whether it's politics, technology,
                    culture, or sports — we bring you accurate and timely news with a user-friendly
                    experience.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-4 text-center">
                    Our mission is to keep readers informed, empowered, and connected through reliable journalism.
                    We prioritize truth, transparency, and the voices that matter.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center">
                    Thank you for choosing Dragon News. Stay informed. Stay ahead.
                </p>

                <div className="text-center mt-8">
                    <Link
                        to="/"
                        className="btn btn-primary rounded-md text-white px-6 py-2"
                    >
                        ← Back to Home
                    </Link>
                </div>
            </div>
        </>
    );
};

export default About;
