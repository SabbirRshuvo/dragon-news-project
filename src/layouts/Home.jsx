import { Outlet } from "react-router";
import LeftNavbar from "../components/AsideLayout/LeftNavbar";
import RightNavbar from "../components/AsideLayout/RightNavbar";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
const Home = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <section className="w-10/12 mx-auto">
        <LatestNews />
      </section>
      <nav className="w-10/12 mx-auto py-4">
        <Navbar />
      </nav>
      <main className="w-10/12 mx-auto grid md:grid-cols-12 gap-4 pt-5">
        <aside className="col-span-3">
          <LeftNavbar />
        </aside>
        <main className="col-span-6">
          <Outlet />
        </main>
        <aside className="col-span-3">
          <RightNavbar />
        </aside>
      </main>
    </div>
  );
};

export default Home;
