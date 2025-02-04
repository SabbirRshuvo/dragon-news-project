import { useLoaderData } from "react-router";
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {
  const { data: news } = useLoaderData();
  console.log(news);
  return (
    <div>
      <h1 className="text-lg font-semibold">Dragon News Home</h1>
      <div className="mt-4">
        {news.map((singleNews) => (
          <NewsCard key={singleNews._id} news={singleNews} />
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
