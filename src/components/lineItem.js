import React, { useContext, useStaticQuery } from "react";
import { graphql } from "gatsby";
import StoreContext from "../context/StoreContext";
import Img from "gatsby-image";
const LineItem = (props) => {
  const { line_item } = props;
  const {
    removeLineItem,
    store: { client, checkout },
  } = useContext(StoreContext);

  const variantImage = line_item.variant.image ? (
    <img
      src={line_item.variant.image.src}
      alt={`${line_item.title} product shot`}
      width="100px"
      height="100px"
    />
  ) : null;

  const selectedOptions = line_item.variant.selectedOptions
    ? line_item.variant.selectedOptions.map(
        (option) => `${option.name}: ${option.value} `
      )
    : null;

  const handleRemove = () => {
    removeLineItem(client, checkout.id, line_item.id);
  };

  return (
    <div class="py-8 flex justify-between flex-wrap md:flex-no-wrap">
      <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
        {variantImage}
      </div>
      <div class="md:flex-grow">
        <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
          {line_item.title}
        </h2>
        <p class="leading-relaxed">{selectedOptions}</p>
      </div>

      <p className="mx-10">{line_item.quantity} U</p>
      <p className="mx-10">
        {line_item.variant.price * line_item.quantity} MAD
      </p>

      <button class="text-indigo-500 inline-flex ml-12" onClick={handleRemove}>
        Remove
        <svg
          class="w-4 h-4 ml-2"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M5 12h14"></path>
          <path d="M12 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  );
};

export default LineItem;
