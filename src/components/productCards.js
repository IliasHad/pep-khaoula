import React from "react";
import {graphql} from "gatsby"
import Img from "gatsby-image"
function ProductCards() {
   const {data}= graphql`
  query {
    fileName: file(relativePath: { eq: "images/product-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
  return (
    <>
    <div className="font-bold text-xl mb-2 px-8">The Coldest Sunset</div>

<div className="flex flex-no-wrap  flex-1  mx-auto  py-8 w-full justify-center">

<div className="max-w-sm rounded overflow-hidden ">
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
    <Img fluid={data.fileName.childImageSharp.fluid} alt="" />
  </div>

</div>
<div className="max-w-sm rounded overflow-hidden ">
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
   
  </div>

</div>
<div className="max-w-sm rounded overflow-hidden ">
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
   
  </div>

</div>
</div>
</>
  )
  }

  export default ProductCards