import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import dogIllustration from "../images/dog-illustration.svg";

function AboutPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="About"
      />

      <section className="flex flex-col items-center md:flex-row ">
        <div className="relative z-10 px-4 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <blockquote className="pl-4 font-serif leading-loose text-justify border-l-4 border-gray-900">
            The point is... to live one&apos;s life in the full complexity of
            what one is, which is something much darker, more contradictory,
            more of a maelstrom of impulses and passions, of cruelty, ecstacy,
            and madness, than is apparent to the civilized being who glides on
            the surface and fits smoothly into the world.
          </blockquote>

          <cite className="block mt-4 text-xs font-bold text-right uppercase">
            – Thomas Nagel
          </cite>
        </div>

        <figure className="lg:absolute px-4 lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img alt="A dog relaxing" src={dogIllustration} />
        </figure>
      </section>
    </Layout>
  );
}

export default AboutPage;
