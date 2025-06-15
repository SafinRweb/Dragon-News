import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { format } from "date-fns";


const NewsCard = ({ news }) => {
    const {
        title,
        author,
        image_url,
        details,
        total_view,
        rating,
        _id,
    } = news;

    return (
        <div className="card bg-base-100 shadow-md mb-6 border border-base-100 overflow-hidden">

            {/* Author Info & Actions */}
            <div className="flex items-center justify-between px-4 py-3 bg-base-300">
                {/* Author */}
                <div className="flex items-center gap-3">
                    <img
                        src={author?.img}
                        alt={author?.name}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                        <p className="font-semibold">{author?.name}</p>
                        <p className="text-xs text-gray-500">
                            {author?.published_date
                                ? format(new Date(author.published_date), "MMMM d, yyyy 'at' h:mm a")
                                : "Unknown Date"}
                        </p>

                    </div>
                </div>

                {/* Icons */}
                <div className="flex items-center gap-3 text-gray-500 text-lg">
                    <button className="hover:text-primary">
                        <FaRegBookmark />
                    </button>
                    <button className="hover:text-primary">
                        <FaShareAlt />
                    </button>
                </div>
            </div>

            {/* Title */}
            <div className="px-4 pt-4">
                <h2 className="font-bold text-lg">{title}</h2>
            </div>

            {/* News Image */}
            <figure className="px-4 py-2">
                <img
                    src={image_url}
                    alt="News"
                    className="w-full h-auto rounded-md object-cover"
                />
            </figure>

            {/* News Details */}
            <div className="px-4 pb-4 text-sm text-gray-700">
                {details.length > 250 ? (
                    <p>
                        {details.slice(0, 250)}...{" "}
                        <Link to={`/news/${_id}`} className="text-primary font-semibold">
                            Read More
                        </Link>
                    </p>
                ) : (
                    <p>{details}</p>
                )}
            </div>

            {/* Footer: Rating & Views */}
            <div className="flex justify-between items-center px-4 py-3 border-t border-gray-200 text-sm">
                {/* Rating */}
                <div className="flex items-center gap-2 text-orange-400">
                    {[...Array(Math.floor(rating?.number || 0))].map((_, i) => (
                        <FaStar key={i} />
                    ))}
                    <span className="text-gray-700 ml-1">{rating?.number}</span>
                </div>

                {/* Views */}
                <div className="flex items-center gap-2 text-gray-600">
                    <FaEye /> {total_view}
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
