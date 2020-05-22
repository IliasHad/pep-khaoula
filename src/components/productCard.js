import React from "react";

import Img from "gatsby-image";
import { Link } from "gatsby";
export const ProductCard = ({ handle, featuredImage, title, price, id }) => (
  <div className="max-w-sm rounded overflow-hidden " key={id}>
    <div className="px-6 py-4">
      <Link to={`/product/${handle}`}>
        <Img fixed={featuredImage.localFile.childImageSharp.fixed} alt="" />
        <div className="text-xl mb-2 pt-3">{title}</div>
        <div className="text-sm mb-2 pt-2">
          {price.minVariantPrice.amount} - {price.maxVariantPrice.amount}{" "}
          {price.maxVariantPrice.currencyCode}
        </div>
      </Link>
    </div>
  </div>
);
