import { useEffect, useState } from "react";
import { NavLink } from "react-router";

const LeftNavbar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("https://openapi.programming-hero.com/api/news/categories")
            .then((res) => res.json())
            .then((data) => setCategories(data.data.news_category));
    }, []);

    return (
        <div className="mb-6 md:mb-0">
            <h2 className="font-semibold mb-3 text-lg md:text-xl">
                All Category ({categories.length})
            </h2>
            <div className="flex md:flex-col flex-wrap gap-2">
                {categories.map((category) => (
                    <NavLink
                        to={`/category/${category.category_id}`}
                        className="btn bg-base-200 w-full md:w-auto text-center"
                        key={category.category_id}
                    >
                        {category.category_name}
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default LeftNavbar;
