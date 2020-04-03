import React from "react"



const ProductPage = ({data}) => {

    return (
    <h4>{data.allStrapiProducts.nodes[0].title}</h4>
    )
}
export const query = graphql`
  query($slug: String!) {
    
        allStrapiProducts(filter: {slug: {eq: $slug}}) {
          nodes {
            title
          }
        }
      
      
  }
`


export default ProductPage