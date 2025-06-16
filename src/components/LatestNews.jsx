import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
    const [breakingNews, setBreakingNews] = useState([]);

    useEffect(() => {
        fetch("https://openapi.programming-hero.com/api/news/category/01")
            .then((res) => res.json())
            .then((data) => {
                if (data.status === true && data.data) {
                    setBreakingNews(data.data);
                } else {
                    setBreakingNews([]);
                }
            })
            .catch(() => setBreakingNews([]));
    }, []);

    return (
        <div className="flex gap-2 items-center bg-base-300 p-2 my-2">
            <p className="bg-[#D72050] text-base-100 px-3 py-1">Latest</p>
            <Marquee pauseOnHover={true} className="flex items-center space-x-4">
                {breakingNews.length > 0 ? (
                    breakingNews.map((newsItem, index) => (
                        <div key={newsItem._id} className="flex items-center whitespace-nowrap">
                            <Link to={`/news/${newsItem._id}`} className="text-primary hover:underline">
                                {newsItem.title}
                            </Link>
                            {index !== breakingNews.length - 1 && (
                                <span className="mx-4 text-gray-400 select-none">|</span>
                            )}
                        </div>
                    ))
                ) : (
                    <span>No breaking news available</span>
                )}
            </Marquee>
        </div>
    );
};

export default LatestNews;
