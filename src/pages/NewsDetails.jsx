import Header from '../components/Header';
import RightNavbar from '../components/layout-component/RightNavbar';
import { Link, useLoaderData } from 'react-router';
import Loading from '../components/Loading';

const NewsDetails = () => {
    const data = useLoaderData();

    if (!data) {
        return <Loading />;
    }

    const news = data?.data[0];

    return (
        <div className="bg-gray-50 min-h-screen">
            <Header />
            <main className="w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
                <section className="lg:col-span-9 bg-white rounded-xl shadow p-6">
                    <div className="mb-6">
                        <img
                            src={news?.image_url}
                            alt="news"
                            className="w-full h-auto rounded-xl"
                        />
                    </div>
                    <h1 className="text-4xl font-bold text-gray-800 leading-snug mb-4">
                        {news?.title}
                    </h1>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        {news?.details}
                    </p>

                    <Link
                        to={`/category/${news.category_id}`}
                        className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
                    >
                        ← Back to Category
                    </Link>
                </section>

                <aside className="lg:col-span-3">
                    <RightNavbar />
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;
