import React from "react"
import Layout from "../components/layout"
import Navigation from "../components/navigation"
import {Link, StaticQuery} from "gatsby"
import Img from "gatsby-image"
const Collection = ()=> {

    return (
        <Layout>
                  <Navigation />

<section className="m-10">
                  <div className="product__container">

<div className="left__sidebar lg:w-1/4">


<h5>Filter By</h5>
</div>
                 
<div className="right__sidebar">
    <div className="sidebar__header">

    <p>Sort By:</p>
    <p>Showing Results</p>
    </div>
   
      
      
    
  

   
<StaticQuery
  query={graphql`
  query 
    {
      allStrapiProducts {
        edges {
          node {
            price
            slug
            title
            featuredImage{
              childImageSharp {
                fixed(height: 300 , width:300,  quality: 100) {          
                  ...GatsbyImageSharpFixed
                }
              }
            }
            
            strapiId
          }
        }
      }
    }
    
  
`}
  render={({allStrapiProducts}) => {
    return(

      <div className="product__cards product__page mt-10">
      
      {
        allStrapiProducts.edges
        .map(({node})=> 
  

  <div className="max-w-sm rounded overflow-hidden ">
  <div className="px-6 py-4">
<Link to={`/product/${node.slug}`}>
<Img fixed={node.featuredImage.childImageSharp.fixed} alt="" />
    <div className="text-xl mb-2 pt-3">{node.title}</div>
    <div className="text-sm mb-2 pt-2">{node.price} MAD</div>
    </Link>

</div>

</div> 


  )}
      
    



</div>


    )
  }}
  />
    
</div>
           
               

</div>
</section>
        </Layout>
    )
}

export default Collection