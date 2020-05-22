import React from "react";
import { graphql, StaticQuery, Link } from "gatsby";
import Img from "gatsby-image";
const ProductCards = () => {
  return (
    <>
      <div className="flex flex-no-wrap  flex-1  mx-auto  py-8 w-full justify-center">
        <div className="w-full rounded">
          <div className="font-bold text-center text-2xl">Our Products</div>
        </div>
      </div>

      <StaticQuery
        query={graphql`
          query MyQuery {
            allShopifyCollection(filter: { title: { eq: "Home page" } }) {
              nodes {
                products {
                  id
                  handle
                  title
                  images {
                    localFile {
                      childImageSharp {
                        fixed(height: 300, width: 300, quality: 100) {
                          ...GatsbyImageSharpFixed
                        }
                      }
                    }
                  }
                  productType
                  shopifyId
                  tags
                  options {
                    name
                  }
                  priceRange {
                    maxVariantPrice {
                      amount
                      currencyCode
                    }
                    minVariantPrice {
                      amount
                      currencyCode
                    }
                  }
                }
                title
              }
            }
          }
        `}
        render={({ allShopifyCollection }) => {
          return (
            <div className="product__cards-home">
              {allShopifyCollection.nodes[0].products.map((node) => (
                <div
                  className="max-w-sm rounded overflow-hidden "
                  key={node.id}
                >
                  <div className="px-6 py-4">
                    <Link to={`/product/${node.handle}`}>
                      {console.log(
                        node.images[0].localFile.childImageSharp.fixed
                      )}
                      <Img
                        fixed={node.images[0].localFile.childImageSharp.fixed}
                        alt=""
                      />
                      <div className="text-xl mb-2 pt-3">{node.title}</div>
                      <div className="text-sm mb-2 pt-2">
                        {" "}
                        {node.priceRange.minVariantPrice.amount} -{" "}
                        {node.priceRange.maxVariantPrice.amount}{" "}
                        {node.priceRange.maxVariantPrice.currencyCode}
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          );
        }}
      />
      <div className="flex flex-no-wrap  flex-1  mx-auto  py-3 w-full justify-center">
        <div className="max-w-sm rounded">
          <Link
            to="/product"
            className="flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
          >
            View All Products
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductCards;
