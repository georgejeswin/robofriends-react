import React, { useEffect, useState } from "react";
import { robots } from "../api/robots";
import Card from "./Card";
import "./CardContainer.css";

const CardContainer = () => {
  const [robs, setRobs] = useState([]);
  useEffect(() => {
    setRobs(robots);
  }, []);
  return (
    <div className="cardContainer">
      {robs.map((rob) => {
        return (
          <Card
            image={`https://robohash.org/${rob.name}`}
            name={rob.name}
            key={rob.id}
            email={rob.email}
          />
        );
      })}
    </div>
  );
};

export default CardContainer;
