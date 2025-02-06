import { Link, useLoaderData } from "react-router";
import Header from "../components/Header";
import RightNavbar from "../components/AsideLayout/RightNavbar";

const NewsDetails = () => {
  const { data } = useLoaderData();
  const news = data[0];

  return (
    <div className="w-10/12 mx-auto">
      <header>
        <Header />
      </header>
      <main className="mt-6 grid grid-cols-12 gap-4">
        <section className="col-span-9">
          <h2 className="text-xl font-semibold ">Dragon News</h2>
          <div className="card bg-base-100 mt-4 shadow-sm">
            <figure className="p-4">
              <img src={news.image_url} className="rounded-xl w-full" />
            </figure>
            <div className="card-body ">
              <p>{news.details}</p>
              <div className="card-actions">
                <Link
                  to={`/category/${news.category_id}`}
                  className="btn btn-info"
                >
                  All news in this category
                </Link>
              </div>
            </div>
          </div>
        </section>
        <aside className="col-span-3">
          <RightNavbar />
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
