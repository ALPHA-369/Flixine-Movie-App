import "./App.css";
import Search from "./components/search";
import { useState, useEffect } from "react";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {}, []);
  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="Hero banner" />
          <h1>
            Explore our vast collection of awesome{" "}
            <span className="text-gradient">movies</span> & {""}
            <span className="text-gradient">TV shows</span>!
          </h1>
        </header>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
    </main>
  );
};

export default App;
