import React, { useEffect, useState } from "react";

const ItemCount = ({ stock, initial }) => {
  const [contador, setContador] = useState(1);
  useEffect(() => {
    return () => {
      second;
    };
  }, []);

  return (
    <>
      <h1>{contador}</h1>
      <button onClick={() => setContador(contador + 1)}>Sumar</button>;
      <button onClick={() => setContador(contador - 1)}>Restar</button>;
    </>
  );
};

export default ItemCount;
