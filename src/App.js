import React from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import SearchBar from "./Components/SearchBar/SearchBar";
import BookData from "./Data.json";

function App() {
  return (
    <div className="App">
      <Banner></Banner>
      <SearchBar placeholder="Find Restaurant..." data={BookData} />
    </div>
  );
}

export default App;
