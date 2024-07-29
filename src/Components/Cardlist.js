import React from "react";
import Card from "./Card";
import { robots } from "./robots";

const Cardlist = ({ robots }) => {
  return (
    <>
      {robots.map((robot) => (
        <Card
          key={robot.id}
          id={robot.id}
          name={robot.name}
          email={robot.email}
        />
      ))}
    </>
  );
};

export default Cardlist;
