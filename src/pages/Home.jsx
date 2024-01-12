import React from 'react'
// import Feature from '../components/Feature.jsx'
import ThreeColTestimonials from '../components/FancyTestimonialsSlider.jsx'
import FAQ from '../components/FAQ.jsx'
import { Link } from 'react-router-dom'
import Features2 from '../components/Features2.jsx'
import Domain from '../components/DomainSection.jsx'
import { useAuth } from "../context/auth.jsx"
import Pricing from '../components/Pricing.jsx'
import pngwing  from "../assets/pngwing.png";
import pngwing2  from "../assets/pngwing2.png";
import pngwing3  from "../assets/pngwing3.png";
import pngwingbg  from "../assets/pngwing-right-bg.png";
import homenew3 from "../assets/home.new3.png";
import needweb from "../assets/need-web.png";
// import needs from "../assets/needs.png";
import needs1 from "../assets/needs1.jpeg";
import needs2 from "../assets/needs2.jpg";
import needs from "../assets/needs.png";



function Home() {
  const [auth, setAuth] = useAuth()

  return (
    <>
    
      <div className="parent-banner col-12 container-fluid">
        <div className="row">
          <div className="text-center col-lg-6 left-content">

            <span className='lets'>Let's Build Together</span>
            <div className="home-heading mt-4 d-flex justify-center">
              <div style={{color:"#021a49"}} >
                <h1>Together we Cteate</h1>
                </div> 
            </div>
            <p >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, vitae modi quam aperiam laboriosam ab accusantium non necessitatibus possimus placeat deleniti odit. Beatae similique nostrum architecto quis pariatur repellat maxime?</p>

            <button type="button" className="read-more btn mt-4">Real More</button>

          </div>

          <div className="text-center col-lg-6 right-content">

            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="d-block w-100" src={pngwing}/>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src={pngwing2} />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src={pngwing3} />
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
              </a>
       
          </div>
        </div>
      </div>

      </div>
      <div className="fixed bottom-6 right-6 z-50">
        <Link to={'/contact-us'} className="bg-blue-500 btn-contact text-white font-medium rounded-md px-4 py-2 flex items-center justify-center hover:bg-blue-600 transition duration-300 ease-in-out shadow-lg">
          <span className="text-lg mr-2">🗨️</span>
          Contact
        </Link>
      </div>

      <Domain />

          {/* -------------------Why Your Business Needs a Website----------------------- */}
     
      <section class="text-gray-600 body-font bg-white-img py-20">
                    <div class="container px-5 mx-auto flex flex-wrap">
                        <div class="lg:w-1/2 mb-10 lg:mb-0 rounded-lg overflow-hidden">
                            <img alt="feature" class="object-cover object-center h-full" width="800" src={needs} />
                        </div>
                        <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left">

                            <section class="price-card-child text-gray-600 body-font">
                                <h2 class="why-busi text-4xl font-bold mb-8">Why Your Business Needs a Website</h2>
                                <p class="text-lg mb-8">"In today's digital age, establishing a robust and captivating online presence is indispensable for businesses of all sizes. A compelling online footprint not only amplifies visibility but also enhances engagement, fostering connections with a broader audience and driving sustained growth in a competitive landscape."</p>
                                <div class="flex flex-wrap">
                                    <div class="flex relative  py-20 pb-20 sm:items-center md:w-2/1 ">
                                        <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                                            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                        </div>
                                        <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">1</div>
                                        <div class="flex-grow  md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                                            <div class="round-icon flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
                                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                                </svg>
                                                {/* <i class="fas fa-solid fa-globe"></i> */}
                                            </div>
                                            <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                                <h2 class="font-bold mb-1 text-xl">Global Reach</h2>
                                                <p class="leading-relaxed">With a website, your business can reach a global audience, expanding your market beyond local boundaries.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex relative pb-20 sm:items-center md:w-2/1">
                                        <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                                            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                        </div>
                                        <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">2</div>
                                        <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                                            <div class="round-icon flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
                                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                                </svg>
                                            </div>
                                            <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                                <h2 class="font-bold mb-1 text-xl">T24/7 Availability</h2>
                                                <p class="leading-relaxed">Your website allows customers to access information about your products/services anytime, anywhere.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </section>


                        </div>
                    </div>
                </section>

      {/* <Features2 /> */}
      <Pricing />
      <FAQ />
      {/* <ThreeColTestimonials /> */}
    </>
  )
}

export default Home