import React, { useEffect, useState } from "react";
import "./Card.css";

const Card = ({ name, email, image }) => {
  return (
    <div className="card">
      <img src={image} width={200} height={200} alt="" />
      <h1 className="name">{name}</h1>
      <h4 className="email">{email}</h4>
    </div>
  );
};

export default Card;
