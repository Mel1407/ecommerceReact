import React from "react";
import Cart from "./gardening.png";

function CartWidget() {
  return (
    <div>
      <button type="button" class="btn btn-light">
        <div>
          <img src={Cart} alt="" height="20" /> Carrito
        </div>
      </button>
    </div>
  );
}

export default CartWidget;
