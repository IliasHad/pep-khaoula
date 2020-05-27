import React, { useContext } from "react";
import { Link } from "gatsby";

import StoreContext from "../context/StoreContext";

const LineItem = (props) => {
  const { item } = props;
  const {
    removeLineItem,
    store: { client, checkout },
  } = useContext(StoreContext);

  const variantImage = item.variant.image ? (
    <img
      src={item.variant.image.src}
      alt={`${item.title} product shot`}
      height="60px"
    />
  ) : null;

  const selectedOptions = item.variant.selectedOptions
    ? item.variant.selectedOptions.map(
        (option) => `${option.name}: ${option.value} `
      )
    : null;

  const handleRemove = () => {
    removeLineItem(client, checkout.id, item.id);
  };

  return (
    <div>
      {console.log(item)}
      <Link to={`/product/${item.variant.product.handle}/`}>
        {variantImage}
      </Link>
      <p>
        {item.title}
        {`  `}
        {item.variant.title === !"Default Title" ? item.variant.title : ""}
      </p>
      {selectedOptions}
      {item.quantity}
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default LineItem;
