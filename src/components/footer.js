import React from "react"
import {graphql, StaticQuery} from "gatsby"
import Img from "gatsby-image"

const Footer = () => {


    return(

<div class="container w-full p-10 " style={{
        position: "relative"
    }}>
    <div class="sm:flex m-8" style={{
            flexWrap: "wrap-reverse"

    }}>
  <div class="sm:w-1/4 h-auto">
      <ul class="list-reset leading-normal">
          <li class="py-2">About Us</li>
          <li class="py-2">Our Products</li>
          <li class="py-2">Contact</li>
         
      </ul>
  </div>
  <div class="sm:w-1/4 h-auto sm:mt-0 mt-8">
      <ul class="list-reset leading-normal">
      <li class=" py-2">Social Media</li>
          <li class="py-2">Facebook</li>
          <li class="py-2">Instagram</li>
      </ul>


  </div>
  <div class="sm:w-1/4 h-auto sm:mt-0 mt-8">
          
      <ul class="list-reset leading-normal">
          <li class="py-2">Adress: Km 10 route de rabat, 
Kenitra</li>
<li class="py-2">Tel: +212633954998</li>
      </ul>




  </div>
    <div class="sm:w-1/4 sm:mt-0 mt-8 h-auto " >




    <StaticQuery
  query={graphql`
  query {
    footerImage: file(relativePath: { eq: "footer.png" }) {
      childImageSharp {
        fixed(height: 800 , width:500,  quality: 100) {          
          ...GatsbyImageSharpFixed
        }
      }
    }
 
  }
`}
  render={data => {
    return(


    <Img fixed={data.footerImage.childImageSharp.fixed} alt="" style={{
        position: "absolute",
        bottom: "0",
        right: "-196px",
        marginBottom: "-1rem"

    }} />

  
    )}}

    />

    
    </div>

</div>
</div>

    )
}

export default Footer