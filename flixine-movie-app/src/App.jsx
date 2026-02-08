import "./App.css";

const App = () => {
  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="Hero banner" />
          <h1>
            Explore our Galore of <span className="text-gradient">movies</span>{" "}
            and <span className="text-gradient">TV shows</span> you'll love!
          </h1>
        </header>
        <p>search</p>
      </div>
    </main>
  );
};

export default App;
