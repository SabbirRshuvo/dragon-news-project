import Marquee from "react-fast-marquee";
import { Link } from "react-router";

const LatestNews = () => {
  return (
    <div className="flex gap-2 items-center bg-gray-200 p-2">
      <p className="bg-[rgb(180,48,48)] text-base-100 px-3 py-1">Latest</p>
      <Marquee pauseOnHover={true}>
        <Link to="/news">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur,
          neque.
        </Link>
        <Link to="/news">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur,
          neque.
        </Link>
        <Link to="/news">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur,
          neque.
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;
