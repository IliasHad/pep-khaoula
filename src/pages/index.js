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

      <section className="text-center">
       <ProductCards />
      </section>

      <section>
<About />
      </section>
    </Layout>
  );
}

export default IndexPage;
