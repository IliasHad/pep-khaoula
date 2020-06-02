import React, { useContext } from "react";
import { Link } from "gatsby";
import StoreContext from "../context/StoreContext";
import LineItem from "./lineItem";
import yourSVG from "../images/empty-cart.svg";

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
      <div class="container px-5 md:py-12 py-8 mx-auto">
        {checkout.lineItems.length > 0 ? (
          <>
            <div class="flex flex-col text-center w-full mb-12">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Your Cart
              </h1>
              <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
                gentrify.
              </p>
            </div>

            <div class="-my-8">{line_items}</div>

            <div class="md:flex-grow my-12">
              <div className="my-6">
                <h2 class=" inline-block text-2xl font-medium text-gray-900 title-font mb-2">
                  Total H.T :{" "}
                </h2>
                <p class="inline  ml-4  leading-relaxed">
                  {checkout.subtotalPrice} MAD
                </p>
              </div>

              <div className="my-6">
                <h2 class=" inline-block text-2xl font-medium text-gray-900 title-font mb-2">
                  TVA :{" "}
                </h2>
                <p class="inline  ml-4 leading-relaxed">
                  {checkout.totalTax} MAD
                </p>
              </div>

              <div className="my-6">
                <h2 class=" inline-block text-2xl font-medium text-gray-900 title-font mb-2">
                  Total T.T.C :{" "}
                </h2>
                <p class="inline   ml-4 leading-relaxed">
                  {checkout.totalPrice} MAD
                </p>
              </div>
            </div>
            <div className="flex justify-between mt-12">
              <Link
                to="/product"
                className="text-indigo-500 inline-flex items-center "
              >
                Parcourir Autres Produits
              </Link>
              <a
                onClick={handleCheckout}
                className="inline-block ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
              >
              
                Confirmer Via Whatsapp
              </a>
            </div>
          </>
        ) : (
          <>
            <div class="flex flex-col text-center w-full mb-12">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Empty Cart
              </h1>
              <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
                gentrify.
              </p>
            </div>
            <div class="lg:w-1/2 md:w-2/3 mx-auto">
              <div class="flex flex-wrap -m-2 justify-center">
                <img width="450px" src={yourSVG} />
                <div class="p-12 w-full text-center">
                  <Link
                    to="/product"
                    className=" inline-block mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Cart;
