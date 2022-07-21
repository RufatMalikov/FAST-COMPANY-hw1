import React from "react";
import api from "../api";

const Qualitie = ({ item }) => {
  return (
    <span key={item._id} className={"badge m-1 bg-" + item.color}>
      {item.name}
    </span>
  );
};

export default Qualitie;
