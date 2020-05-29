import React, { useContext } from "react";
import Layout from "../components/layout";
import Cart from "../components/cart";
import Navigation from "../components/navigation";
const CartPage = ({ data }) => (
  <Layout>
    <Navigation links={data.dataJson.mainMenu} />

    <Cart />
  </Layout>
);

export default CartPage;

export const query = graphql`
  query {
    dataJson {
      mainMenu {
        name
        path
      }
    }
  }
`;
