import { useEffect, useState } from "react";
import { NavLink } from "react-router";

const LeftNavbar = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.data.news_category));
  }, []);
  //   {"status":true,"data":{"news_category":[{"category_id":"01","category_name":"Breaking News"},{"category_id":"02","category_name":"Regular News"},{"category_id":"03","category_name":"International News"},{"category_id":"04","category_name":"Sports"},{"category_id":"05","category_name":"Entertainment"},{"category_id":"06","category_name":"Culture"},{"category_id":"07","category_name":"Arts"},{"category_id":"08","category_name":"All News"}]}}
  return (
    <div>
      <h2 className="text-lg font-semibold ">
        All Category ({categories.length})
      </h2>
      <div className="flex flex-col gap-2 mt-4">
        {categories.map((category) => (
          <NavLink
            to={`/category/${category.category_id}`}
            className="btn"
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
