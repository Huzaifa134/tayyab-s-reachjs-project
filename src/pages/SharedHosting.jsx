import React, { useState, useRef, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import hostingphoto from '../static/Images/hostingphoto.png'
import BreadCrumbs4 from '../components/bcrumbsSection/BreadCrumbs4'
import { Link } from 'react-router-dom'
import Features2 from '../components/Features2'
import hosting from '../static/Images/webhosting.png'
import sharedimg from "../assets/shared.png";
import shared1 from "../assets/shared1.png";

const SharedHosting = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  const initialFeaturesCount = 5;
  const pricingRef = useRef(null);

  const fadeInSpring = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(100px)' },
  });

  useEffect(() => {
    const handleScroll = () => {
      if (pricingRef.current) {
        const pricingTop = pricingRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (pricingTop < windowHeight * 0.75) {
          fadeInSpring.opacity.start(1);
          fadeInSpring.transform.start('translateY(0)');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [fadeInSpring]);

  return (
    <div>
      <div className="fixed bottom-6 right-6 z-50">
        <Link to={'/contact-us'} data-modal-target="defaultModal" data-modal-toggle="defaultModal" className="bg-blue-500 btn-contact text-white font-medium rounded-md px-4 py-2 flex items-center justify-center hover:bg-blue-600 transition duration-300 ease-in-out shadow-lg">
          <span className="text-lg mr-2">🗨️</span>
          Contact
        </Link>
      </div>
      {/* <section className="container-fluid">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="relative overflow-hidden bg-cover bg-no-repeat background-imgs" style={{ backgroundPosition: '50%', height: 570 }}>
                            <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.40)] bg-fixed">
                                <div className="flex h-full items-center justify-center">
                                    <div className="px-6 text-center text-white md:px-12">
                                        <div className="container-h1 p-10">
                                            <div className="title title-sm">
                                                <div>Together we&ensp;</div>
                                                <div className="word can">
                                                    <span>B</span>
                                                    <span>U</span>
                                                    <span>I</span>
                                                    <span>L</span>
                                                    <span>D</span>
                                                </div>
                                                <div className="word will">
                                                    <span>C</span>
                                                    <span>R</span>
                                                    <span>E</span>
                                                    <span>A</span>
                                                    <span>T</span>
                                                    <span>E</span>
                                                </div>
                                                <div className="word thrive">
                                                    <span>T</span>
                                                    <span>H</span>
                                                    <span>R</span>
                                                    <span>I</span>
                                                    <span>V</span>
                                                    <span>E</span>
                                                </div>
                                            </div>


                                            <Link to={'/signup'} type="button" className="btn-hero-started mt-6 btn-hero rounded border-2 border-neutral-50 px-[46px] p-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200" data-te-ripple-init data-te-ripple-color="light">
                                                Get started
                                            </Link>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}


      {/* <div className="container-fluid hosting-banner">

<div className="container banner-child">
    <div className="row">
        <div className="col-lg-6 hosting-left" style={{ height: "70vh" }}>
            <div className='left-text shared-host-parent'>

                <div className="title title-sm host-head-2 shared-fs">
                    <div>Shared Hosting&ensp;</div>
                    <div className="word can">
                        <span>B</span>
                        <span>U</span>
                        <span>I</span>
                        <span>L</span>
                        <span>D</span>
                    </div>
                    <div className="word will">
                        <span>C</span>
                        <span>R</span>
                        <span>E</span>
                        <span>A</span>
                        <span>T</span>
                        <span>E</span>
                    </div>
                    <div className="word thrive">
                        <span>T</span>
                        <span>H</span>
                        <span>R</span>
                        <span>I</span>
                        <span>V</span>
                        <span>E</span>
                    </div>
                </div>

                <p className='banner-p'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, dolores sed? Quas eos laborum saepe dicta illo est odit tenetur totam voluptate necessitatibus, aperiam repellat assumenda, aliquam ex enim nesciunt.</p>
                <button className='btn btn-primary text-uppercase font-bold my-4 banner-btn'>Get Start</button>

            </div>
        </div>
        <div className="col-lg-6 hosting-right">
            <img className='left-text' width="450" src={sharedimg} alt="" />
        </div>
    </div>
</div>
</div> */}


      <div className="container-fluid hosting-banner">

        <div className="container banner-child">
          <div className="row xl:ml-20 md:ml-10 lg:ml-16">
            <div className="col-lg-6 hosting-left flex flex-col justify-center">
              <div className="lg:mt-10 lg:pr-20 hosting-left-child">
                <h1 className='title-new'>Shared Hosting</h1>
                <p className='banner-p text-gray-300'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, dolores sed? Quas eos laborum saepe dicta illo est odit tenetur totam voluptate necessitatibus, aperiam repellat assumenda, aliquam ex enim nesciunt.</p>
                <div className="banner-btn">
                  <button className='bg-indigo-500 trye rounded font-bold get-start-btn my-4'>Get Start</button>
                </div>
              </div>
            </div>
            <div className="col-lg-6 hosting-right flex flex-col justify-center">
              <img className='left-text mx-auto' width="300" src={shared1} alt="" />
            </div>
          </div>
        </div>
      </div>


      <BreadCrumbs4 />
      <animated.div style={fadeInSpring}>
        <div className="2xl:container 2xl:mx-auto background-img md:px-10 lg:px-10 xl:px-44 hosting-small-fold px-4 
" >{/* md:px-20 lg:px-24 xl:px-56 py-9 px-4  */}
          <div className="flex flex-col lg:flex-row justify-between gap-5 xl:ml-20 md:ml-10 lg:ml-16 my-20" >
            <div className="w-full lg:w-7/12 flex flex-col justify-center">
              <h1 className="text-3xl lg:text-4x2 font-bold leading-9 text-gray-700 pb-4 ">Shared Hosting</h1>
              <p className="font-normal text-base leading-6 text-gray-600 ">Explore limitless possibilities with D-Tech's Shared Hosting. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore repellat ipsam ad officiis adipisci sit quis dicta perspiciatis vel.</p>
            </div>
            <div className="shared-right-img-parent w-full lg:w-8/12 ">
              <img className="shared-right-img" width="400" src={hosting} alt="A group of People" />
            </div>
          </div>
        </div>

        {/* --------------PRICING CARDS----------- */}

        <section class="body-font overflow-hidden parent-price-shared">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-20 price-cap-heading">
              <h1 class="sm:text-4xl text-3xl font-medium title-font mb-4 text-white tracking-widest">Pricing</h1>
              <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-100 tracking-widest">"Affordable Shared Hosting Plans: Power your website without breaking the bank.Budget-Friendly Shared Hosting: Enjoy reliable services at competitive prices."</p>
            </div>
            <div class="flex flex-wrap -m-4">
              <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
                <div class="price-card-shared bg-white h-full p-6 rounded-lg  flex flex-col relative overflow-hidden">
                  <h2 class="text-sm tracking-widest title-font mb-1 font-medium">START</h2>
                  <h1 class="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">Free</h1>
                  <p class="flex items-center text-gray-900 mb-2">
                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-700 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>Vexillologist pitchfork
                  </p>
                  <p class="flex items-center text-gray-900 mb-2">
                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-700 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>Tumeric plaid portland
                  </p>
                  <p class="flex items-center text-gray-900 mb-6">
                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-700 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>Mixtape chillwave tumeric
                  </p>
                  <button class="flex items-center mt-auto text-white bg-gray-700 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Button
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                  <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
                </div>
              </div>
              <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
                <div class="price-card-shared bg-white h-full p-6 rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden">
                  <span class="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
                  <h2 class="text-sm tracking-widest title-font mb-1 font-medium">PRO</h2>
                  <h1 class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                    <span className='price-tag'>$38</span>
                    <span class="text-lg ml-1 font-normal text-gray-500">/mo</span>
                  </h1>
                  <p class="flex items-center text-gray-900 mb-2">
                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-700 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>Vexillologist pitchfork
                  </p>
                  <p class="flex items-center text-gray-900 mb-2">
                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-700 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>Tumeric plaid portland
                  </p>
                  <p class="flex items-center text-gray-900 mb-2">
                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-700 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>Hexagon neutra unicorn
                  </p>
                  <p class="flex items-center text-gray-900 mb-6">
                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-700 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>Mixtape chillwave tumeric
                  </p>
                  <button class="flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded">Button
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                  <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
                </div>
              </div>
              <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
                <div class="price-card-shared bg-white h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                  <h2 class="text-sm tracking-widest title-font mb-1 font-medium">BUSINESS</h2>
                  <h1 class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                    <span className='price-tag'>$56</span>
                    <span class="text-lg ml-1 font-normal text-gray-500">/mo</span>
                  </h1>
                  <p class="flex items-center text-gray-900 mb-2">
                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-700 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>Vexillologist pitchfork
                  </p>
                  <p class="flex items-center text-gray-900 mb-2">
                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-700 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>Tumeric plaid portland
                  </p>
                  <p class="flex items-center text-gray-900 mb-2">
                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-700 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>Hexagon neutra unicorn
                  </p>
                  <p class="flex items-center text-gray-900 mb-2">
                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-700 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>Vexillologist pitchfork
                  </p>
                  <p class="flex items-center text-gray-900 mb-6">
                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-700 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>Mixtape chillwave tumeric
                  </p>
                  <button class="flex items-center mt-auto text-white bg-gray-700 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Button
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                  <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
                </div>
              </div>
              <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
                <div class="price-card-shared bg-white h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                  <h2 class="text-sm tracking-widest title-font mb-1 font-medium">SPECIAL</h2>
                  <h1 class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                    <span className='price-tag'>$72</span>
                    <span class="text-lg ml-1 font-normal text-gray-500">/mo</span>
                  </h1>
                  <p class="flex items-center text-gray-900 mb-2">
                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-700 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>Vexillologist pitchfork
                  </p>
                  <p class="flex items-center text-gray-900 mb-2">
                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-700 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>Tumeric plaid portland
                  </p>
                  <p class="flex items-center text-gray-900 mb-2">
                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-700 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>Hexagon neutra unicorn
                  </p>
                  <p class="flex items-center text-gray-900 mb-2">
                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-700 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>Vexillologist pitchfork
                  </p>
                  <p class="flex items-center text-gray-900 mb-6">
                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-700 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>Mixtape chillwave tumeric
                  </p>
                  <button class="flex items-center mt-auto text-white bg-gray-700 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Button
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                  <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* -------------pricing cards details table--------------- */}

        <div className="container-fluid mx-auto my-8 xl:px-72 table-small bg-white-img">
          <h1 className="text-3xl py-10 text-uppercase sm:text-3xl text-center title-font lg:mb-4 tracking-widest  text-indigo-500">Shared Hosting Pricing Tablte & Details</h1>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-transparent border-2 border-gray-400 rounded-md overflow-hidden table-parent">
              <thead>

                <tr className="bg-gray-100 ">
                  <th className="lg:py-4 px-10 m-6 text-2xl font-normal mb-6 text-center text-gray-600">Stellar <br /> $1.98/mo <br />                                    {/* <br></br><span className="text-2xl font-bold mb-6 text-center">Comparison Chart</span><br></br><br></br> */}
                  </th>
                  <th className="lg:py-4 px-10 m-6 text-2xl font-normal mb-6 text-center text-gray-600">Stellar Plus <br /> $1.98/mo <br />

                    {/* <br></br><span className="text-2xl font-bold mb-6 text-center">Price</span><span className='px-2 font-medium'>39$</span><br></br> */}

                  </th>

                </tr>
              </thead>
              <tbody className='tbodyy'>
                <tr className="hover:bg-gray-50  bg-white">
                  <td className="py-4 px-6 border-b text-center font-semibold bg-blue-600 text-white">SSD Cached Storage</td>
                  <td className="py-4 px-6 border-b text-center ">30 GB</td>

                </tr>
                <tr className="hover:bg-gray-50 bg-white">
                  <td className="py-4 px-6 border-b text-center font-semibold bg-blue-600 text-white">Monthly Bandwidth</td>
                  <td className="py-4 px-6 border-b text-center">500 GB</td>

                </tr>
                <tr className="hover:bg-gray-50 bg-white">
                  <td className="py-4 px-6 border-b text-center font-semibold bg-blue-600 text-white">Hosted (Add-on) Domains</td>
                  <td className="py-4 px-6 border-b text-center">5</td>

                </tr>
                <tr className="hover:bg-gray-50 bg-white">
                  <td className="py-4 px-6 border-b text-center font-semibold bg-blue-600 text-white">Free Daily Backup</td>
                  <td className="py-4 px-6 border-b text-center"><i className="far fa-check-circle" /></td>

                </tr>
                <tr className="hover:bg-gray-50 bg-white">
                  <td className="py-4 px-6 border-b text-center font-semibold bg-blue-600 text-white">100% Risk Free Trial</td>
                  <td className="py-4 px-6 border-b text-center"><i className="far fa-check-circle" /></td>

                </tr>
                <tr className="hover:bg-gray-50 bg-white">
                  <td className="py-4 px-6 border-b text-center font-semibold bg-blue-600 text-white">Free Sectigo SSLa</td>
                  <td className="py-4 px-6 border-b text-center"><i className="far fa-check-circle" /></td>

                </tr>
                <tr className="hover:bg-gray-50 bg-white">
                  <td className="py-4 px-6 border-b text-center font-semibold bg-blue-600 text-white">Free Website Builder</td>
                  <td className="py-4 px-6 border-b text-center"><i className="far fa-check-circle" /></td>

                </tr>
                <tr className="hover:bg-gray-50 bg-white">
                  <td className="py-4 px-6 border-b text-center font-semibold bg-blue-600 text-white">Free Setup & Transfer</td>
                  <td className="py-4 px-6 border-b text-center"><i className="far fa-check-circle" /></td>

                </tr>
                <tr className="hover:bg-gray-50 bg-white">
                  <td className="py-4 px-6 border-b text-center font-semibold bg-blue-600 text-white">cPanel Control Panel</td>
                  <td className="py-4 px-6 border-b text-center"><i className="far fa-check-circle" /></td>

                </tr>
                {showMore && (
                  <>
                    <tr className="hover:bg-gray-50 bg-white">
                      <td className="py-4 px-6 border-b text-center font-semibold bg-blue-600 text-white">Softaculous Auto Installer</td>
                      <td className="py-4 px-6 border-b text-center"><i className="far fa-check-circle" /></td>

                    </tr>
                    <tr className="hover:bg-gray-50 bg-white">
                      <td className="py-4 px-6 border-b text-center font-semibold bg-blue-600 text-white">Robust Apache Server</td>
                      <td className="py-4 px-6 border-b text-center"><i className="far fa-check-circle" /></td>

                    </tr>
                    <tr className="hover:bg-gray-50 bg-white">
                      <td className="py-4 px-6 border-b text-center font-semibold bg-blue-600 text-white">Site Builder</td>
                      <td className="py-4 px-6 border-b text-center"><i className="far fa-check-circle" /></td>

                    </tr>
                    <tr className="hover:bg-gray-50 bg-white">
                      <td className="py-4 px-6 border-b text-center font-semibold bg-blue-600 text-white">Firewall & DDoS Protection</td>
                      <td className="py-4 px-6 border-b text-center"><i className="far fa-check-circle" /></td>

                    </tr>
                    <tr className="hover:bg-gray-50 bg-white">
                      <td className="py-4 px-6 border-b text-center font-semibold bg-blue-600 text-white">Email Accounts</td>
                      <td className="py-4 px-6 border-b text-center">20</td>

                    </tr>
                    <tr className="hover:bg-gray-50 bg-white">
                      <td className="py-4 px-6 border-b text-center font-semibold bg-blue-600 text-white">Sub Domains</td>
                      <td className="py-4 px-6 border-b text-center">Unlimited</td>

                    </tr>
                    <tr className="hover:bg-gray-50 bg-white">
                      <td className="py-4 px-6 border-b text-center font-semibold bg-blue-600 text-white">MySQL Databases</td>
                      <td className="py-4 px-6 border-b text-center">10</td>

                    </tr>
                    <tr className="hover:bg-gray-50 bg-white">
                      <td className="py-4 px-6 border-b text-center font-semibold bg-blue-600 text-white">MultiPHP Ready (5.6/7.3)</td>
                      <td className="py-4 px-6 border-b text-center"><i className="far fa-check-circle" /></td>

                    </tr>
                    <tr className="hover:bg-gray-50 bg-white">
                      <td className="py-4 px-6 border-b text-center font-semibold bg-blue-600 text-white">IonCube, Mbstring, SOAP</td>
                      <td className="py-4 px-6 border-b text-center"><i className="far fa-check-circle" /></td>

                    </tr>
                    <tr className="hover:bg-gray-50 bg-white">
                      <td className="py-4 px-6 border-b text-center font-semibold bg-blue-600 text-white">Zend, cURL, Graphics Library</td>
                      <td className="py-4 px-6 border-b text-center"><i className="far fa-check-circle" /></td>

                    </tr>
                    <tr className="hover:bg-gray-50 bg-white">
                      <td className="py-4 px-6 border-b text-center font-semibold bg-blue-600 text-white">Email i/o Spam Filter</td>
                      <td className="py-4 px-6 border-b text-center"><i className="far fa-check-circle" /></td>

                    </tr>
                    <tr className="hover:bg-gray-50 bg-white">
                      <td className="py-4 px-6 border-b text-center font-semibold bg-blue-600 text-white">Attracta SEO Tools</td>
                      <td className="py-4 px-6 border-b text-center"><i className="far fa-check-circle" /></td>

                    </tr>
                    <tr className="hover:bg-gray-50 bg-white">
                      <td className="py-4 px-6 border-b text-center font-semibold bg-blue-600 text-white">Cloudflare CDN Feature</td>
                      <td className="py-4 px-6 border-b text-center"><i className="far fa-check-circle" /></td>

                    </tr>

                  </>
                )}
                {/* <tr className="  bg-gray-100 ">
                                <td className=" px-6 border-b text-center bg-gray-100  font-semibold text-black"><button className='btn btn-primary  my-3'>Get Started</button></td>
                                <td className="hover:bg-gray-200  px-6 border-b text-center"><button className="border-2 mx-auto flex border-solid border-blue-600 hover:border-blue-500 bg-blue-600 hover:bg-blue-500 text-white rounded px-4 my-3  transition-colors duration-300 btn btn-primary">Default</button>
                                </td>

                            </tr> */}
              </tbody>
            </table>

          </div>
          <button
            onClick={toggleShowMore}
            className="border-2 mx-auto flex border-solid border-blue-600 hover:border-blue-500 bg-blue-600 hover:bg-blue-500 text-white rounded py-2 px-4 mt-6 mb-2 transition-colors duration-300"
          >
            {showMore ? 'Show Less' : 'Show More'}
          </button>
        </div>

        {/* features and benefits of shared hosting */}
        <div className="bg-white-img">
          <section class="text-gray-600 body-font py-10">
            <div class="container mx-auto">
              <div class="text-center mb-10">
                <h1 class="sm:text-3xl text-2xl font-medium text-center title-font mb-4 text-indigo-500  tracking-widest">Features of Shared Hosting</h1>
                <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">"Empower your online presence effortlessly. Explore boundless possibilities with our Shared Hosting features."</p>
              </div>
              <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                <div class="p-2 sm:w-1/2 w-full">
                  <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span class="title-font font-medium"> <strong>Unlimited Bandwidth:</strong> Highlight the advantage of having no restrictions on data transfer.</span>
                  </div>
                </div>
                <div class="p-2 sm:w-1/2 w-full">
                  <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span class="title-font font-medium"><strong>Multiple Domains: </strong> Support for hosting multiple domains under one account.</span>
                  </div>
                </div>
                <div class="p-2 sm:w-1/2 w-full">
                  <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span class="title-font font-medium"><strong>Control Panel Access:</strong> Introduce the user-friendly control panel for managing websites.</span>
                  </div>
                </div>
                <div class="p-2 sm:w-1/2 w-full">
                  <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span class="title-font font-medium"><strong>One-Click Installs:</strong> Emphasize easy installation of popular applications like WordPress, Joomla, etc.</span>
                  </div>
                </div>
                <div class="p-2 sm:w-1/2 w-full">
                  <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span class="title-font font-medium"><strong>Security Features:</strong> SSL certificates, DDoS protection, firewalls, and regular backups.</span>
                  </div>
                </div>
                <div class="p-2 sm:w-1/2 w-full">
                  <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span class="title-font font-medium"><strong>24/7 Support: </strong>Round-the-clock customer support available for any issues or queries.</span>
                  </div>
                </div>
              </div>

            </div>
          </section>

          <section class="text-gray-600 body-font py-10">
            <div class="container mx-auto">
              <div class="text-center mb-10">
                <h1 class="sm:text-3xl text-2xl font-medium text-center title-font mb-4 text-indigo-500  tracking-widest">Benefits of Shared Hosting</h1>
                <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">"Empowering growth, saving costs - your online journey with Shared Hosting seamless scalability, robust security, and 24/7 expert support Shared hosting's double advantage."</p>
              </div>
              <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                <div class="p-2 sm:w-1/2 w-full">
                  <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span class="title-font font-medium"><strong>Cost-Effectiveness:</strong> Explain how shared hosting is budget-friendly for small to medium websites.</span>
                  </div>
                </div>
                <div class="p-2 sm:w-1/2 w-full">
                  <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span class="title-font font-medium"><strong>Ease of Use:</strong> Stress the simplicity and convenience of managing websites without technical expertise.</span>
                  </div>
                </div>
                <div class="p-2 sm:w-1/2 w-full">
                  <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span class="title-font font-medium"><strong>Community Support:</strong> Highlight the extensive community for shared hosting users.</span>
                  </div>
                </div>
                <div class="p-2 sm:w-1/2 w-full">
                  <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span class="title-font font-medium"><strong>Reliability: </strong> Discuss the reliability and stability offered by reputable hosting providers</span>
                  </div>
                </div>
                <div class="p-2 sm:w-1/2 w-full">
                  <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span class="title-font font-medium"><strong>Tech Support:</strong> Assurance of technical support and guidance whenever required.</span>
                  </div>
                </div>
                <div class="p-2 sm:w-1/2 w-full">
                  <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span class="title-font font-medium"><strong>Faster Loading Times:</strong> With optimized servers and resources shared among users, pages load quickly.</span>
                  </div>
                </div>
              </div>

            </div>
          </section>
        </div>

        {/* <Features2 /> */}
      </animated.div>


    </div >

  )
}

export default SharedHosting