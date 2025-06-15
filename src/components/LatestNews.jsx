import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";


const LatestNews = () => {
    return (
        <div className="flex gap-2 items-center bg-base-300 p-2 my-2">
            <p className="bg-[#D72050] text-base-100 px-3 py-1">
                Latest
            </p>
            <Marquee 
            speed={90}
            pauseOnHover={true} className="space-x-10">
                <Link to="/news">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, velit?
                </Link>
                <Link to="/news">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, velit?
                </Link>
                <Link to="/news">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, velit?
                </Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;