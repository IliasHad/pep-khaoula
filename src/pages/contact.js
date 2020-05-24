import React from "react";
import SEO from "../components/seo";
import Layout from "../components/layout";
import Navigation from "../components/navigation";

function ContactPage({ data }) {
  return (
    <>
      <Layout>
        <SEO
          keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
          title="Home"
        />
        <Navigation links={data.dataJson.mainMenu} />
        <section className="text-gray-700 body-font relative p-4">
          <div className="flex flex-col text-center w-full ">
            <h1 className="sm:text-3xl text-2xl  font-medium title-font mb-4 text-gray-900">
              Contact Us
            </h1>
            <p className="lg:w-2/3 mx-auto text-gray-500 leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify.
            </p>
          </div>
          <div className="container px-5 py-12 mx-auto flex sm:flex-no-wrap flex-wrap">
            <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                title="map"
                marginHeight="0"
                marginWidth="0"
                scrolling="no"
                className="absolute inset-0 iframe___maps transition duration-500 ease-in-out"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3299.349408216006!2d-6.669870749384203!3d34.21409571653563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda75c74f4f3534f%3A0xc1cf87c929f6bbdb!2zUGVwaW5pw6lyZSBLaGFvdWxhINmF2LPYqtmG2KjYqyDYrtmI2YTYqQ!5e0!3m2!1sen!2sma!4v1590282953837!5m2!1sen!2sma"
                style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
              ></iframe>
              <div className="bg-white relative flex flex-wrap py-6">
                <div className="lg:w-1/2 px-6">
                  <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm">
                    ADDRESS
                  </h2>
                  <p className="leading-relaxed">
                    10 Km Route De Rabat - Kénitra
                  </p>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm">
                    EMAIL
                  </h2>
                  <a className="text-indigo-500 leading-relaxed">
                    pepkhaoula@gmail.com
                  </a>
                  <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mt-4">
                    PHONE
                  </h2>
                  <p className="leading-relaxed">+212615626671</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
              <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                Contact Us
              </h2>
              <p className="leading-relaxed mb-5 text-gray-600">
                Post-ironic portland shabby chic echo park, banjo fashion axe
              </p>
              <input
                className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"
                placeholder="Name"
                type="text"
              />
              <input
                className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"
                placeholder="Email"
                type="email"
              />
              <textarea
                className="bg-white rounded border border-gray-400 focus:outline-none h-32 focus:border-indigo-500 text-base px-4 py-2 mb-4 resize-none"
                placeholder="Message"
              ></textarea>
              <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Send Message
              </button>
              <p className="text-xs text-gray-500 mt-3">
                Reply within 24 hours
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export const query = graphql`
  query {
    dataJson {
      mainMenu {
        name
        path
      }
    }
  }
`;

export default ContactPage;
