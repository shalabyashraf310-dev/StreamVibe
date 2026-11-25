import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ShowRow from "./components/ShowRow";
import shows from "./data/shows";
import Footer from "./components/footer";

function App() {
  const trendingShows = shows.filter((show) => {
    return show.rating >= 8.5;
  });

  const comedyShows = shows.filter((show) => {
    return show.genre === "Comedy";
  });

  const actionShows = shows.filter((show) => {
    return show.genre === "Action";
  });

  return (
    <>
      <Navbar />

      <Hero
        title="SpiderMAn"
        description="Brand New Day."
        video="../public/Spider-Man- Brand New Day (2026) 4K - THE FULL HULK FIGHT!!! (3-9) - Movieclips.mp4"
      />

      <ShowRow title="Trending Now" shows={trendingShows} />

      <ShowRow title="Comedy" shows={comedyShows} />

      <ShowRow title="Action" shows={actionShows} />
      <Footer />
    </>
  );
}

export default App;
