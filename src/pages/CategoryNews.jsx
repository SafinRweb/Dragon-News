import { useLoaderData } from 'react-router';
import NewsCard from '../components/NewsCard';

const CategoryNews = () => {
    const {data: news} = useLoaderData();
    console.log(news);

    return (
        <div>
            <h2 className="font-semibold mb-3">Dragon News Home</h2>
            <div>
                {
                    news.map(singleNews=> 
                        <NewsCard key={singleNews._id} news={singleNews}/>
                    )
                }
            </div>
        </div>
    );
};

export default CategoryNews;