import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ProductCards from "../components/productCards"
import About from "../components/about"
import CTA from "../components/cta"
import Header from "../components/header"
function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />
      <Header />
      <section className="m-10">
       <ProductCards />
      </section>

      <section className="m-10">
<About />
      </section>
      <section className="m-10">
<CTA />
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
