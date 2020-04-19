import { graphql,StaticQuery, Link } from "gatsby";
import React from "react";
import Img from "gatsby-image"
function About() {

  return (


<div className="container mx-auto ">
<div className="flex flex-no-wrap  flex-1  mx-auto  py-10 w-full justify-center">

<div className="w-full rounded">
<div className="font-bold text-center text-2xl">About Us</div>

</div>
</div>
<div className="flex flex-1  mx-auto  py-8 w-full about__section justify-center">


<div>
<StaticQuery
  query={graphql`
  {
    about: file(relativePath: {eq: "about.jpg"}) {
      childImageSharp {
        fixed(width: 600, quality: 100, cropFocus: CENTER,  fit: COVER) {
          ...GatsbyImageSharpFixed
        
        }
      }
    }}`}
    render={data => {

      return (

        <Img fixed={data.about.childImageSharp.fixed} alt="" 	/>

      )
    }}

    />

</div>

<div className="md:px-10">
<div className="font-bold text-lg">About Us</div>

<p className="my-5 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-lg lg:mx-0">
            We’re plant nursery for more than 20 years and we accumalet a lot of experience and skills

</p>
<div className="flex flex-no-wrap  flex-1  mx-auto  py-5 w-full ">

<div className="max-w-sm rounded">
  <Link to="/products" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10" >
  View Products
  </Link>


                

  </div>
  <div className="max-w-sm rounded mx-3">

<Link to="/contact" className="w-full  flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
Contact Us
</Link>
 
                
  </div>
</div>
</div>
</div>

</div>


  )
}

export default About

