import React from "react";

const ItemListContainer = (props) => {
  return (
    <div>
      <h1>{props.titulo}</h1>
      {props.render}
    </div>
  );
};

export default ItemListContainer;
