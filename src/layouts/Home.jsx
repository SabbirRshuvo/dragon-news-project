import Header from "../components/Header";
import LatestNews from "../components/LatestNews";

const Home = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <section className="w-10/12 mx-auto">
        <LatestNews />
      </section>
      <nav></nav>
      <main></main>
    </div>
  );
};

export default Home;
