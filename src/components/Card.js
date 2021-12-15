import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div className="card">
      <img
        src="https://robohash.org/1?size=200x200"
        width={200}
        height={200}
        alt=""
      />
      <h1 className="name">Leanne Graham</h1>
      <h4 className="email">Sincere@april.biz</h4>
    </div>
  );
};

export default Card;
