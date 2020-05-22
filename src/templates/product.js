import React, { useEffect, useState, useRef } from "react";

import Layout from "../components/layout";
import Navigation from "../components/navigation";
import Img from "gatsby-image";
import BackgroundImage from "gatsby-background-image";

const ProductPage = ({ data }) => {
  const quanityRef = useRef(0);
  const [quanity, setQuanity] = useState(0);

  console.log(data);
  useEffect(() => {
    document.title = `Pep Khaoula - ${data.shopifyProduct.title}`;
  }, []);
  return (
    <Layout>
      <Navigation />
      <section className="mx-24">
        <div className="product__container-individual">
          <div className="individual__left">
            <div className="left__images-list">
              <ul>
                {data.shopifyProduct.images.map((el, index) => (
                  <li key={index}>
                    <BackgroundImage
                      className={"product___bg-image-wrapper my-6"}
                      fluid={el.localFile.childImageSharp.fluid}
                      backgroundColor={`#040e18`}
                    >
                      <div className="product___bg-image"></div>
                    </BackgroundImage>
                  </li>
                ))}
              </ul>
            </div>
            <div className="left__featured-image p-6">
              <Img
                fluid={
                  data.shopifyProduct.images[0].localFile.childImageSharp.fluid
                }
                alt=""
              />
            </div>
          </div>

          <div className="individual__right p-6">
            <h4>{data.shopifyProduct.title}</h4>
            <div className="product__description my-8">
              <h4 className="text-sm leading-5 font-medium text-gray-700">
                Description
              </h4>
              <p className="my-5">{data.shopifyProduct.description}</p>
            </div>

            <div className="product__quantity">
              <label
                hmtlfor="price"
                className="text-md leading-5 font-medium text-gray-700"
              >
                Quanity
              </label>
              <div
                className="ml-5 relative rounded-md shadow-sm"
                style={{
                  display: "inline-block",
                }}
              >
                <div className="absolute inset-y-0 left-0  ml-5 flex items-center ">
                  <button
                    className="text-gray-500 sm:text-sm sm:leading-5"
                    onClick={() => setQuanity(parseInt(quanity) + 1)}
                  >
                    +
                  </button>
                </div>
                <input
                  id="price"
                  className="form-input sm:text-sm sm:leading-5"
                  placeholder="0"
                  value={quanity}
                  ref={quanityRef}
                  onChange={(e) => setQuanity(e.target.value)}
                />
                <div className="absolute inset-y-0 right-0 flex items-center mr-5">
                  <button
                    className="text-gray-500 sm:text-sm sm:leading-5"
                    onClick={() => setQuanity(parseInt(quanity) - 1)}
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export const query = graphql`
  query($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      id
      handle
      title
      priceRange {
        minVariantPrice {
          amount
        }
        maxVariantPrice {
          amount
        }
      }
      description

      images {
        localFile {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;

export default ProductPage;
