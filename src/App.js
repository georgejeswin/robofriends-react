import { useEffect, useState } from "react";
import "./App.css";
import CardContainer from "./components/CardContainer";
import axios from "axios";
import Scroll from "./components/Scroll";

function App() {
  const [search, setSearch] = useState("");
  const [robs, setRobs] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((data) => setRobs(data.data));
  }, []);
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const fiteredRobots = robs.filter((rob) => {
    return rob.name.toLowerCase().includes(search.toLowerCase());
  });
  return (
    <div className="app">
      <h1 className="title">ROBOFRIENDS</h1>
      <input
        type="text"
        className="input"
        placeholder="Search Robots"
        onChange={(e) => handleSearch(e)}
        value={search}
      />
      {robs.length ? (
        <Scroll>
          <CardContainer robs={fiteredRobots} />
        </Scroll>
      ) : (
        <h1 className="title">Loading..</h1>
      )}
    </div>
  );
}

export default App;
