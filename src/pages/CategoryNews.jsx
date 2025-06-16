import { useLoaderData } from 'react-router';
import NewsCard from '../components/NewsCard';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

const CategoryNews = () => {
    const { data: news, error } = useLoaderData();

    useEffect(() => {
        if (error) {
            toast.error("Failed to load news. Please try again later.");
        } else if (news && news.length === 0) {
            toast.info("No news articles available in this category.");
        }
    }, [error, news]);

    if (error) {
        return <p className="text-center text-red-600 mt-10">Unable to load news.</p>;
    }

    return (
        <div>
            <h2 className="font-semibold mb-3">Dragon News Home</h2>
            <div>
                {news.map(singleNews => (
                    <NewsCard key={singleNews._id} news={singleNews} />
                ))}
            </div>
        </div>
    );
};

export default CategoryNews;
