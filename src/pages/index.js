import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ProductCards from "../components/productCards"
import About from "../components/about"

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />
      <section className="m-10">
       <ProductCards />
      </section>

      <section className="m-10">
<About />
      </section>
    </Layout>
  );
}
export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        description
      }
    }

    
  }
`
export default IndexPage;
