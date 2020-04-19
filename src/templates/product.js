import React from "react"

import Layout from "../components/layout"
import Navigation from "../components/navigation"
import Img from "gatsby-image"

const ProductPage = ({data}) => {

  
    return (
      <Layout>
      <Navigation />

    <h4>{data.allStrapiProducts.nodes[0].title}</h4>
    <Img fixed={data.allStrapiProducts.nodes[0].featuredImage.childImageSharp.fixed} alt="" />

    </Layout>
    )
}
export const query = graphql`
  query($slug: String!) {
    
        allStrapiProducts(filter: {slug: {eq: $slug}}) {
          nodes {
            title
            featuredImage{
              childImageSharp {
                fixed(height: 300 , width:300,  quality: 100) {          
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      
      
  }
`


export default ProductPage