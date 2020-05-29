import React, { useContext } from "react";

import StoreContext from "../context/StoreContext";
import LineItem from "./lineItem";

const Cart = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext);

  const handleCheckout = () => {
    window.open(
      `https://api.whatsapp.com/send?phone=+212633954998&text=${checkout.lineItems.map(
        (el, index) =>
          `${index === 0 ? "" : "%0A"}   ${el.quantity} - ${
            el.title
          } ${el.variant.selectedOptions
            .filter((option) => option.name !== "Title")
            .map((option) => `${option.name}: ${option.value} `)} 
            `
      )}`
    );
  };

  const line_items = checkout.lineItems.map((line_item) => {
    return <LineItem key={line_item.id.toString()} line_item={line_item} />;
  });

  return (
    <section class="text-gray-700 body-font overflow-hidden">
      <div class="container px-5 py-24 mx-auto">
        <div class="-my-8">{line_items}</div>

        <button
          onClick={handleCheckout}
          className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
        >
          Checkout
        </button>
      </div>
    </section>
  );
};

export default Cart;
