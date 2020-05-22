import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ProductCards from "../components/productCards";
import About from "../components/about";
import CTA from "../components/cta";
import Header from "../components/header";
import { useLocalJsonForm } from "gatsby-tinacms-json";

function IndexPage(props) {
  console.log(props.data.dataJson);
  const [data] = useLocalJsonForm(props.data.dataJson, FormOptions);

  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />
      <Header
        hero={props.data.hero}
        mainTitle={data.mainTitle}
        description={data.description}
        secondaryCta={data.secondaryCta}
        primaryCta={data.primaryCta}
      />
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

const FormOptions = {
  fields: [
    {
      label: "Hero Copy",
      name: "rawJson.mainTitle",
      description: "Hero copy for the main block",
      component: "text",
    },
    {
      label: "Supporting Copy",
      name: "rawJson.description",
      description: "Choose your supporting copy for the hero",
      component: "textarea",
    },
  ],
};

export const query = graphql`
  {
    hero: file(relativePath: { eq: "hero.jpg" }) {
      childImageSharp {
        fixed(
          width: 750
          height: 600
          quality: 100
          cropFocus: CENTER
          fit: COVER
        ) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    dataJson {
      mainTitle
      primaryCta
      secondaryCta
      description
      fileRelativePath
      rawJson
    }
  }
`;

export default IndexPage;
