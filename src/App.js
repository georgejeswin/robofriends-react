import { useEffect, useState } from "react";
import "./App.css";
import CardContainer from "./components/CardContainer";
import { robots } from "./api/robots";

function App() {
  const [search, setSearch] = useState();
  const [robs, setRobs] = useState([]);
  useEffect(() => {
    setRobs(robots);
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
      <CardContainer robs={fiteredRobots} />
    </div>
  );
}

export default App;
