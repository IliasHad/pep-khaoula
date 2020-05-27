import React from "react";
import Layout from "../components/layout";
import Navigation from "../components/navigation";
import { Link, StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
const CollectionPage = ({ data }) => {
  return (
    <Layout>
      <Navigation links={data.dataJson.mainMenu} />

      <section class="text-gray-700    body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Browse All Our Products Collections
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them man bun deep jianbing selfies heirloom.
            </p>
          </div>
          <div class="flex flex-wrap -m-4">
            {data.allShopifyCollection.nodes.map((collection) => (
              <div class="lg:w-1/4 sm:w-1/2 p-4">
                <div class="flex relative">
                  <Link
                    to={`/product?collection=${collection.title}`}
                    className="w-full"
                  >
                    <Img
                      style={{ position: "absolute" }}
                      className="absolute inset-0 w-full h-full object-cover object-center"
                      fixed={
                        collection.products[0].images[0].localFile
                          .childImageSharp.fixed
                      }
                      alt=""
                    />
                    <div
                      style={{
                        backgroundColor: "#0009",
                        width: "300px",
                        height: "200px",
                      }}
                      class="text-center px-8 py-10 h-full relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100"
                    >
                      <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                        Category
                      </h2>
                      <h1 class="title-font text-lg font-medium text-white mb-3">
                        {collection.title}
                      </h1>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CollectionPage;

export const query = graphql`
  query {
    dataJson {
      mainMenu {
        name
        path
      }
    }
    allShopifyCollection {
      nodes {
        title
        description
        handle
        id
        products {
          images {
            localFile {
              childImageSharp {
                fixed(width: 300, height: 200, quality: 100) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
        shopifyId
      }
    }
  }
`;
