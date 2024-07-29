import React from "react";
import tachyons from "tachyons";

const Card = ({ id, name, email }) => {
  return (
    <div className="bg-light-blue tc dib br3 pa3 ma2 grow bw2 shadow-5 ">
      <img src={`https://robohash.org/${id}/?size=200x200`} alt="card" />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
