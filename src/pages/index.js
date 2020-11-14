import React from "react";
import get from "lodash.get";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ProductCards from "../components/productCards";
import About from "../components/about";
import CTA from "../components/cta";
import Header from "../components/header";
import { useLocalJsonForm } from "gatsby-tinacms-json";
import { graphql } from "gatsby";
import { Steps } from "../components/steps";
import { Gallery } from "../components/gallery";
function IndexPage(props) {
  const [data] = useLocalJsonForm(props.data.dataJson, FormOptions);

  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />
      <Header
        hero={data.heroImage}
        mainTitle={data.mainTitle}
        description={data.description}
        secondaryCta={data.cta.secondaryCta}
        secondaryCtaHandle={data.cta.secondaryCta_handle}
        primaryCtaHandle={data.cta.mainCta_handle}
        primaryCta={data.cta.mainCta}
        links={data.mainMenu}
      />
      <section className="m-10">
        <ProductCards />
      </section>

      <section className="m-10">
        <About
          image={data.about.image}
          description={data.about.description}
          secondaryCta={data.cta.secondaryCta}
          secondaryCtaHandle={data.cta.secondaryCta_handle}
          primaryCtaHandle={data.cta.mainCta_handle}
          primaryCta={data.cta.mainCta}
        />
      </section>

      <section className="m-10">
        <CTA
          secondaryCta={data.cta.secondaryCta}
          secondaryCtaHandle={data.cta.secondaryCta_handle}
          primaryCtaHandle={data.cta.mainCta_handle}
          primaryCta={data.cta.mainCta}
          headline={data.cta.headline}
          text={data.cta.text}
        />
      </section>
    </Layout>
  );
}

const FormOptions = {
  label: "Home Page",

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
    {
      name: "rawJson.heroImage",
      label: "Hero Image",
      description: "Choose your supporting copy for the hero",
      component: "image",

      previewSrc: (formValues) => {
        const path = formValues.jsonNode.heroImage;
        const gatsbyImageNode = get(formValues, path);

        if (gatsbyImageNode)
          return formValues.jsonNode.heroImage.childImageSharp.fluid.src;
      },
      uploadDir: () => {
        return "src/images/";
      },

      parse: (filename) => `../images/${filename}`,
    },
    {
      label: "Main Menu",
      name: "rawJson.mainMenu",
      component: "group-list",
      description: "Menu List",
      defaultItem: () => ({
        name: "New Menu",
        id: Math.random().toString(36).substr(2, 9),
      }),
      itemProps: (item) => ({
        key: item.id,
        label: item.name,
      }),
      fields: [
        {
          label: "Name",
          name: "name",
          component: "text",
        },
        {
          label: "Link",
          name: "path",
          component: "text",
        },
      ],
    },
    {
      label: "CTAs",
      name: "rawJson.cta",
      description: "Call To Action Links",
      component: "group",
      fields: [
        {
          label: "Primary CTA",
          name: "mainCta",
          component: "text",
        },
        {
          label: "Primary CTA Link",
          name: "mainCta_handle",
          component: "text",
        },
        {
          label: "Secondary CTA",
          name: "secondaryCta",
          component: "text",
        },
        {
          label: "Secondary CTA Link",
          name: "secondaryCta_handle",
          component: "text",
        },
      ],
    },
    {
      label: "About Us Description",
      name: "rawJson.about",
      description: "About Us",
      component: "group",
      fields: [
        {
          name: "image",
          label: "About Us  Image",
          description: "Choose your supporting copy for the About Us section",
          component: "image",

          previewSrc: (formValues) => {
            const path = formValues.jsonNode.about.image;
            const gatsbyImageNode = get(formValues, path);
            if (gatsbyImageNode)
              return formValues.jsonNode.about.image.childImageSharp.fluid.src;
          },
          uploadDir: () => {
            return "src/images/";
          },

          parse: (filename) => `../images/${filename}`,
        },
        {
          label: "About Us Paragraph",
          name: "description",
          description: "Choose your supporting copy for the hero",
          component: "textarea",
        },
      ],
    },
    {
      label: "CTA Healine",
      name: "rawJson.cta.headline",
      component: "text",
    },
    {
      label: "CTA Text",
      name: "rawJson.cta.text",
      component: "text",
    },
    {
      label: "Gallery",
      name: "rawJson.gallery",
      component: "group-list",
      description: "Gallery List",
      defaultItem: () => ({
        name: "New Menu",
        id: Math.random().toString(36).substr(2, 9),
      }),
      itemProps: (item) => ({
        key: item.id,
        label: item.name,
      }),
      fields: [
        {
          name: "image",
          label: "Gallery  Image",
          description: "Choose your supporting copy for the About Us section",
          component: "image",

          previewSrc: (formValues) => {
            const path = formValues.jsonNode.gallery.image;
            const gatsbyImageNode = get(formValues, path);
            if (gatsbyImageNode)
              return formValues.jsonNode.gallery.image.childImageSharp.fluid
                .src;
          },
          uploadDir: () => {
            return "src/images/";
          },

          parse: (filename) => `../images/${filename}`,
        },
      ],
    },
  ],
};

export const query = graphql`
  {
    dataJson {
      cta {
        mainCta
        mainCta_handle
        secondaryCta
        secondaryCta_handle
        text
        headline
      }
      mainTitle

      description
      fileRelativePath
      rawJson
      mainMenu {
        name
        path
      }
      heroImage {
        childImageSharp {
          fluid {
            src
          }
          fixed(
            width: 700
            height: 520
            quality: 100
            cropFocus: CENTER
            fit: COVER
          ) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      about {
        description
        image {
          childImageSharp {
            fluid {
              src
            }
            fixed(height: 700, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
