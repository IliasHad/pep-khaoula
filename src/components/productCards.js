import React from "react";
import {graphql, StaticQuery} from "gatsby"
import Img from "gatsby-image"
const ProductCards = () => {
 
  return (
    <>

<div className="flex flex-no-wrap  flex-1  mx-auto  py-8 w-full justify-center">

<div className="w-full rounded">
<div className="font-bold text-center text-2xl">Our Products</div>

</div>
</div>

    <StaticQuery
  query={graphql`
  query {
    oneImage: file(relativePath: { eq: "product-1.jpg" }) {
      childImageSharp {
        fixed(height: 300 , width:300,  quality: 100) {          
          ...GatsbyImageSharpFixed
        }
      }
    }
    twoImage: file(relativePath: { eq: "product-2.jpg" }) {
      childImageSharp {
        fixed(height: 300 , width:300, quality: 100) {          
          ...GatsbyImageSharpFixed
        }
      }
    }
    threeImage: file(relativePath: { eq: "product-3.jpg" }) {
      childImageSharp {
        fixed(height: 300 , width:300,  quality: 100) {          
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`}
  render={data => {
    return(

      <div className="flex flex-no-wrap  flex-1  mx-auto   w-full justify-center">

      <div className="max-w-sm rounded overflow-hidden ">
      <div className="px-6 py-4">

    <Img fixed={data.oneImage.childImageSharp.fixed} alt="" />
    <div className="text-xl mb-2 pt-3">Phoenix Robilinet</div>
    <div className="text-sm mb-2 pt-2">200,00 MAD</div>

 
    </div>

</div> 


<div className="max-w-sm rounded overflow-hidden ">
      <div className="px-6 py-4">

    <Img fixed={data.twoImage.childImageSharp.fixed} alt="" />
    <div className="text-xl mb-2 pt-3">Avocado</div>
    <div className="text-sm mb-2 pt-2">35,00 MAD</div>
    </div>

</div> 

<div className="max-w-sm rounded overflow-hidden ">
      <div className="px-6 py-4">

    <Img fixed={data.threeImage.childImageSharp.fixed} alt="" />
    <div className="text-xl mb-2 pt-3">Catcus</div>
    <div className="text-sm mb-2 pt-2">250,00 MAD</div>
    </div>

</div> 

</div>


    )
  }}
  />
        <div className="flex flex-no-wrap  flex-1  mx-auto  py-3 w-full justify-center">

    <div className="max-w-sm rounded">
<a href="#" className="flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                   View All Products
                  </a>

</div>  
     </div>
</>
  )
  }

export default ProductCards

