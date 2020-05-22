import React, { useState, useEffect, useRef } from "react";
import Layout from "../components/layout";
import Navigation from "../components/navigation";
import { Link, StaticQuery } from "gatsby";
import Img from "gatsby-image";
import { ProductCard } from "../components/productCard";
const Collection = ({ data }) => {
  const minPriceRef = useRef(0);
  const maxPriceRef = useRef(0);
  const sortByRef = useRef("");
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("all");
  const [sortBy, setSortBy] = useState("");

  const sortedProductByCategory = (products) =>
    category === "all"
      ? products
      : products.filter((node) => node.category === category);

  useEffect(() => {
    let productsData = addCategoryToProducts(data.allShopifyCollection.nodes);

    console.log(productsData);

    setCategories(productsData.map((el) => el.category));
    setProducts(productsData);
  }, []);

  useEffect(() => {
    setProducts([]);
    let productsData = addCategoryToProducts(data.allShopifyCollection.nodes);

    const filtered = sortedProductByCategory(productsData);

    setProducts(filtered);

    document.title = `Pep Khaoula - ${category} `;
  }, [category]);

  useEffect(() => {
    console.log(sortBy);
    setProducts([]);

    let productsData = addCategoryToProducts(data.allShopifyCollection.nodes);

    const filtered =
      sortBy === "High Price First"
        ? sortByHighest(productsData)
        : sortBy === "Low Price First"
        ? sortByLowest(productsData)
        : sortByAlphabetical(productsData);

    setProducts(filtered);
  }, [sortBy]);
  const addCategoryToProducts = (products) => {
    let productsData = [];
    products.forEach((el) => {
      el.products.forEach((product) =>
        productsData.push({ ...product, category: el.title })
      );
    });

    return productsData;
  };
  const filterProductsByPrice = () => {
    setProducts([]);
    let productsData = addCategoryToProducts(data.allShopifyCollection.nodes);
    let minPrice = minPriceRef.current.value;
    let maxPrice = maxPriceRef.current.value;
    let filteredCategory =
      category === "all"
        ? productsData
        : productsData.filter((node) => node.category === category);

    let filtered = filteredCategory.filter(
      (node) =>
        node.priceRange.minVariantPrice.amount >= parseInt(minPrice) &&
        node.priceRange.maxVariantPrice.amount <= parseInt(maxPrice)
    );

    setProducts(filtered);
  };

  const sortByLowest = (products) =>
    products.sort(function(a, b) {
      return (
        a.priceRange.minVariantPrice.amount -
        b.priceRange.minVariantPrice.amount
      );
    });
  const sortByHighest = (products) =>
    products.sort(function(a, b) {
      return (
        b.priceRange.minVariantPrice.amount -
        a.priceRange.minVariantPrice.amount
      );
    });
  const sortByAlphabetical = (products) =>
    products.sort((a, b) => a.title.localeCompare(b.title));

  return (
    <Layout>
      <Navigation />

      <section className="mx-24">
        <div className="product__container">
          <div className="left__sidebar">
            <div className="sidebar__part">
              <h2 className="sidebar__title">Categories</h2>

              <ul className="sidebar__list">
                <li
                  key={0}
                  onClick={(e) => {
                    setCategory("all");
                  }}
                  className={
                    category === "all"
                      ? "active sidebar__list-item"
                      : "sidebar__list-item"
                  }
                >
                  All
                </li>

                {categories.map((el, key) => (
                  <li
                    key={key + 1}
                    className={
                      el === category
                        ? "active sidebar__list-item"
                        : "sidebar__list-item"
                    }
                    onClick={(e) => {
                      setCategory(e.target.innerText);
                    }}
                  >
                    {el}
                  </li>
                ))}
              </ul>
            </div>

            <div className="sidebar__filter">
              <h2 className="sidebar__title">Filter By</h2>

              <div>
                <label
                  hmtlfor="price"
                  className="block text-sm leading-5 font-medium text-gray-700"
                >
                  Price (MAD)
                </label>
                <div
                  className="mt-5 relative rounded-md shadow-sm "
                  style={{
                    display: "inline-block",
                    width: "40%",
                  }}
                >
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm sm:leading-5">
                      $
                    </span>
                  </div>
                  <input
                    id="price"
                    className="form-input pl-8 block w-full sm:text-sm sm:leading-5"
                    placeholder="Min"
                    type="number"
                    ref={minPriceRef}
                  />
                </div>
                <div
                  className="mt-5 relative rounded-md shadow-sm"
                  style={{
                    display: "inline-block",
                    width: "40%",
                    marginLeft: "5%",
                  }}
                >
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm sm:leading-5">
                      $
                    </span>
                  </div>
                  <input
                    id="price"
                    type="number"
                    className="form-input block w-full pl-8 sm:text-sm sm:leading-5"
                    placeholder="Max"
                    ref={maxPriceRef}
                  />
                </div>
                <button
                  className="border block border-transparent text-base leading-6 rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline focus:border-indigo-300 transition duration-150 ease-in-out py-2 text-sm px-4 mt-3"
                  onClick={() => filterProductsByPrice()}
                >
                  Filter
                </button>
              </div>
            </div>
          </div>
          <div className="right__sidebar">
            <div className="sidebar__header">
              <div className="sidebar__sort-by">
                <p className="sort-by__title ">Sort By:</p>
                <select
                  className="sort-by__select form-select h-full py-0 pl-2 pr-7 ml-5 text-light-500 sm:text-sm sm:leading-5"
                  aria-label="Currency"
                  ref={sortByRef}
                  onChange={() => setSortBy(sortByRef.current.value)}
                >
                  <option>Alphabetical</option>
                  <option>High Price First</option>
                  <option>Low Price First</option>
                </select>
              </div>

              <p className="sidebar__results-lenght text-gray-600">
                Showing {products.length} of products
              </p>
            </div>

            <div className="product__cards product__page mt-10">
              {products &&
                products.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    featuredImage={product.images[0]}
                    handle={product.handle}
                    title={product.title}
                    price={product.priceRange}
                  />
                ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Collection;

export const query = graphql`
  query {
    allShopifyCollection {
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
`;
