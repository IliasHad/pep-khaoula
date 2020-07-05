import React from "react";
import { graphql, StaticQuery, Link } from "gatsby";
import Img from "gatsby-image";
import { data } from "autoprefixer";
export const Gallery = ({ data }) => (
  <section class="text-gray-700 body-font">
    <div class="container px-5 py-24 mx-auto flex flex-wrap">
      <div class="flex w-full mb-20 flex-wrap">
        <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
          Gallery {console.log(data)}
        </h1>
        <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
          Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
          gentrify, subway tile poke farm-to-table. Franzen you probably haven't
          heard of them man bun deep jianbing selfies heirloom.
        </p>
      </div>

      <StaticQuery
        query={graphql`
          query {
            file1: file(
              relativePath: { eq: "mohd-aram-B9YDU3LWU7E-unsplash.jpg" }
            ) {
              childImageSharp {
                fixed(height: 503, width: 303, quality: 100) {
                  ...GatsbyImageSharpFixed
                }
              }
            }

            file2: file(
              relativePath: { eq: "cassidy-phillips-EOJRrenjc4c-unsplash.jpg" }
            ) {
              childImageSharp {
                fixed(height: 503, width: 303, quality: 100) {
                  ...GatsbyImageSharpFixed
                }
              }
            }

            file3: file(
              relativePath: { eq: "mostafa-meraji-CqDiMYMsPMU-unsplash.jpg" }
            ) {
              childImageSharp {
                fixed(height: 503, width: 303, quality: 100) {
                  ...GatsbyImageSharpFixed
                }
              }
            }

            file4: file(
              relativePath: { eq: "tim-bennett-An0uaO4IhcQ-unsplash.jpg" }
            ) {
              childImageSharp {
                fixed(height: 503, width: 303, quality: 100) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            file5: file(
              relativePath: { eq: "aziz-acharki-AiO4xyDRv-8-unsplash.jpg" }
            ) {
              childImageSharp {
                fixed(height: 602, width: 361, quality: 100) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            file6: file(
              relativePath: { eq: "allie-TsiKEFJCz_Q-unsplash.jpg" }
            ) {
              childImageSharp {
                fixed(height: 600, width: 360, quality: 100) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        `}
        render={(data) => {
          return (
            <div class="flex flex-wrap md:-m-2 -m-1">
              <div class="flex flex-wrap w-1/2">
                <div class="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    class="w-full object-cover h-full object-center block"
                    src="https://dummyimage.com/500x300"
                  />
                </div>
                <div class="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    class="w-full object-cover h-full object-center block"
                    src="https://dummyimage.com/501x301"
                  />
                </div>
                <div class="md:p-2 p-1 w-full">
                  <Img
                    className="w-full h-full object-cover object-center block"
                    fixed={data.file6.childImageSharp.fixed}
                  />
                </div>
              </div>
              <div class="flex flex-wrap w-1/2">
                <div class="md:p-2 p-1 w-full">
                  <Img
                    className="w-full h-full object-cover object-center block"
                    fixed={data.file5.childImageSharp.fixed}
                  />
                </div>
                <div class="md:p-2 p-1 w-1/2">
                  <Img
                    className="w-full h-full object-cover object-center block"
                    fixed={data.file1.childImageSharp.fixed}
                  />
                </div>
                <div class="md:p-2 p-1 w-1/2">
                  <Img
                    className="w-full h-full object-cover object-center block"
                    fixed={data.file1.childImageSharp.fixed}
                  />
                </div>
              </div>
            </div>
          );
        }}
      />
    </div>
  </section>
);
