import React from "react"

const Footer = () => {


    return(

<div className="container w-full p-10 " style={{
        position: "relative"
    }}>
    <div className="sm:flex m-8" style={{
            flexWrap: "wrap-reverse"

    }}>
  <div className="sm:w-1/4 h-auto">
      <ul className="list-reset leading-normal">
          <li className="py-2">About Us</li>
          <li className="py-2">Our Products</li>
          <li className="py-2">Contact</li>
         
      </ul>
  </div>
  <div className="sm:w-1/4 h-auto sm:mt-0 mt-8">
      <ul className="list-reset leading-normal">
      <li className=" py-2">Social Media</li>
          <li className="py-2">Facebook</li>
          <li className="py-2">Instagram</li>
      </ul>


  </div>
  <div className="sm:w-1/4 h-auto sm:mt-0 mt-8">
          
      <ul className="list-reset leading-normal">
          <li className="py-2">Adress: Km 10 route de rabat, 
Kenitra</li>
<li className="py-2">Tel: +212633954998</li>
      </ul>




  </div>{/*
    <div className="sm:w-1/4 sm:mt-0 mt-8 h-auto " >




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
        right: "0",
        marginBottom: "-1rem"

    }} />

  
    )}}

    />

    
    </div>
*/}
</div>
</div>

    )
}

export default Footer