import React from "react";

import Img from "gatsby-image";
import { Link } from "gatsby";
export const ProductCard = ({
  handle,
  featuredImage,
  title,
  minVariantPrice,
  variant,
  id,
}) => {
  const price = Intl.NumberFormat(undefined, {
    currency: minVariantPrice.currencyCode,
    minimumFractionDigits: 2,
    style: "currency",
  }).format(variant.price);

  return (
    <div
      className="max-w-full rounded 
  "
      key={id}
    >
      <div className="px-6 py-4">
        <Link to={`/product/${handle}`}>
          <Img fixed={featuredImage.localFile.childImageSharp.fixed} alt="" />
          <div className="text-xl mb-2 pt-3">{title}</div>
          <div className="text-sm mb-2 pt-2">{price}</div>
        </Link>
      </div>
    </div>
  );
};
