import "./App.css";
import { useEffect, useState } from "react";
import StarshipSearch from "./StarshipSearch";
import StarshipList from "./StarshipList";
import { index, search } from "../services/starshipService";

const App = () => {
  const[starships, setStarships] = useState([]);
  const[dataLoaded, setDataLoaded] = useState(false);

  const searchStarships = async (name) => {
    const data = name ? await search(name) : await index();
    setStarships(data.results);
    setDataLoaded(true);
  };

  // useEffect lets us run a function just once, when
  // the component is first mounted:
  useEffect(() => {
    searchStarships();
  }, []);



  return (
    <main>
     <h1>Star Wars API</h1>
     <StarshipSearch onSubmit={searchStarships} />
     {!dataLoaded ? <h3>Loading...</h3> : <StarshipList starships={starships} />}
    </main>
    
  );
}

export default App
