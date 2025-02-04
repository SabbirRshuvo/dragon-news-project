/* eslint-disable react/prop-types */
import { FaRegBookmark, FaRegEye, FaShareAlt } from "react-icons/fa";

const NewsCard = ({ news }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 border border-dashed mt-4">
      {/* Header: Author & Actions */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            src={news.author.img}
            alt={news.author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h3 className="font-bold text-gray-800">{news.author.name}</h3>
            <p className="text-sm text-gray-500">
              {news.author.published_date}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-gray-500">
          <FaRegBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>

      {/* Title */}
      <h2 className="text-lg font-bold mt-3 leading-tight text-gray-900">
        {news.title}
      </h2>

      {/* Image */}
      <img
        src={news.image_url}
        alt={news.title}
        className="w-full h-56 object-cover rounded-lg mt-3"
      />

      {/* Description */}
      <p className="text-gray-600 text-sm mt-3">
        {news.details.slice(0, 180)}...
      </p>

      {/* Read More */}
      <p className="text-orange-500 font-semibold mt-2 cursor-pointer">
        Read More
      </p>

      {/* Footer: Rating & Views */}
      <div className="flex justify-between items-center mt-4 border-t pt-3">
        {/* Rating */}
        <div className="flex items-center gap-1 text-yellow-500">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <span key={i}>⭐</span>
            ))}
          <span className="text-gray-800 font-semibold">
            {news.rating.number}
          </span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-2 text-gray-500">
          <FaRegEye />
          <span>{news.total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
