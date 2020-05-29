import React, { useState, useContext, useEffect, useCallback } from "react";
import find from "lodash/find";
import isEqual from "lodash/isEqual";
import PropTypes from "prop-types";

import StoreContext from "../context/StoreContext";

const ProductForm = ({ product }) => {
  const {
    options,
    variants,
    variants: [initialVariant],
    priceRange: { minVariantPrice },
  } = product;
  const [variant, setVariant] = useState({ ...initialVariant });
  const [quantity, setQuantity] = useState(1);
  const {
    addVariantToCart,
    store: { client, adding },
  } = useContext(StoreContext);

  const productVariant =
    client.product.helpers.variantForOptions(product, variant) || variant;
  const [available, setAvailable] = useState(productVariant.availableForSale);

  const checkAvailability = useCallback(
    (productId) => {
      client.product.fetch(productId).then(() => {
        // this checks the currently selected variant for availability
        const result = variants.filter(
          (variant) => variant.shopifyId === productVariant.shopifyId
        );
        setAvailable(result[0].availableForSale);
      });
    },
    [client.product, productVariant.shopifyId, variants]
  );

  useEffect(() => {
    checkAvailability(product.shopifyId);
  }, [productVariant, checkAvailability, product.shopifyId]);

  const handleQuantityChange = ({ target }) => {
    setQuantity(target.value);
  };

  const handleOptionChange = (optionIndex, { target }) => {
    const { value } = target;
    const currentOptions = [...variant.selectedOptions];

    currentOptions[optionIndex] = {
      ...currentOptions[optionIndex],
      value,
    };

    const selectedVariant = find(variants, ({ selectedOptions }) =>
      isEqual(currentOptions, selectedOptions)
    );

    setVariant({ ...selectedVariant });
  };

  const handleAddToCart = () => {
    addVariantToCart(productVariant.shopifyId, quantity);
  };

  /* 
  Using this in conjunction with a select input for variants 
  can cause a bug where the buy button is disabled, this 
  happens when only one variant is available and it's not the
  first one in the dropdown list. I didn't feel like putting 
  in time to fix this since its an edge case and most people
  wouldn't want to use dropdown styled selector anyways - 
  at least if the have a sense for good design lol.
  */
  const checkDisabled = (name, value) => {
    const match = find(variants, {
      selectedOptions: [
        {
          name: name,
          value: value,
        },
      ],
    });
    if (match === undefined) return true;
    if (match.availableForSale === true) return false;
    return true;
  };

  const price = Intl.NumberFormat(undefined, {
    currency: minVariantPrice.currencyCode,
    minimumFractionDigits: 2,
    style: "currency",
  }).format(variant.price);

  return (
    <>
      <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
        {options
          .filter(({ name }) => name !== "Title")
          .map(({ id, name, values }, index) => (
            <React.Fragment key={id}>
              <div className="flex  items-center" key={id}>
                <span className="mr-3">{name}</span>
                <div className="relative">
                  <select
                    className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-indigo-500 text-base pl-3 pr-10"
                    onChange={(event) => handleOptionChange(index, event)}
                  >
                    {values.map((value) => (
                      <option
                        value={value}
                        key={`${name}-${value}`}
                        disabled={checkDisabled(name, value)}
                      >
                        {value}
                      </option>
                    ))}
                  </select>
                  <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </React.Fragment>
          ))}
      </div>
      <div className="flex">
        <span className="title-font font-medium text-2xl text-gray-900">
          {price}
        </span>
        <button
          type="submit"
          disabled={!available || adding}
          onClick={handleAddToCart}
          className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
        >
          Add To Cart
        </button>
        <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
          <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
          </svg>
        </button>
      </div>
    </>
  );
};

ProductForm.propTypes = {
  product: PropTypes.shape({
    descriptionHtml: PropTypes.string,
    handle: PropTypes.string,
    id: PropTypes.string,
    shopifyId: PropTypes.string,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        originalSrc: PropTypes.string,
      })
    ),
    options: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        values: PropTypes.arrayOf(PropTypes.string),
      })
    ),
    productType: PropTypes.string,
    title: PropTypes.string,
    variants: PropTypes.arrayOf(
      PropTypes.shape({
        availableForSale: PropTypes.bool,
        id: PropTypes.string,
        price: PropTypes.string,
        title: PropTypes.string,
        shopifyId: PropTypes.string,
        selectedOptions: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.string,
            value: PropTypes.string,
          })
        ),
      })
    ),
  }),
  addVariantToCart: PropTypes.func,
};

export default ProductForm;
