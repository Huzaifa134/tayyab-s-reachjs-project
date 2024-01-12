import React, { useState, useRef, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import unlimitedhosting from '../static/Images/unlimitedhosting.jpg'
import BreadCrumbs5 from '../components/bcrumbsSection/BreadCrumbs5'
import { Link } from 'react-router-dom'
import Features2 from '../components/Features2'
// import hosting from '../static/Images/webhosting-unlimited.png'

import webDevProcessImg from "../assets/webDevProcessImg.jpg";
import curvenew2 from "../assets/curve-new2.png";

import shopifywhite from "../assets/shopify-white.png";
import woowhite from "../assets/woo-white.png";
import magentowhite from "../assets/magento-white.png";
import phpwhite from "../assets/php-white.png";
import angularwhite from "../assets/angular-white.png";
// import signup from "../assets/sign-up.png";
import signup from "../assets/sign-up1.png";
import createpro from "../assets/contact-us-icon1.png";
// import createpro from "../assets/create-pro.png";
// import getit from "../assets/get-it.png";
import contactusicon2 from "../assets/contact-us-icon2.png";
import fb from "../assets/f&b.jpg";
import Layer1 from "../assets/Layer1.png";
import Layer2 from "../assets/Layer2.png";
import Layer3 from "../assets/Layer3.png";
import Layer4 from "../assets/Layer4.png";
import Layer5 from "../assets/Layer5.png";
import Layer6 from "../assets/Layer6.png";
import Layer7 from "../assets/Layer7.png";
import Layer8 from "../assets/Layer8.png";

import webbg1 from "../assets/web-bg1.png";


const UnlimitedHosting = () => {
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };
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
            {/* <div className="container-fluid hosting-banner">

                <div className="container banner-child">
                    <div className="row">
                        <div className="col-lg-6 hosting-left" style={{ height: "70vh" }}>
                            <div className='left-text'>

                                <div className="title title-sm host-head-2">
                                    <div>web Development</div>
                                 
                                </div>

                                <p className='banner-p'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, dolores sed? Quas eos laborum saepe dicta illo est odit tenetur totam voluptate necessitatibus, aperiam repellat assumenda, aliquam ex enim nesciunt.</p>
                                <button className='btn btn-primary text-uppercase font-bold my-4 banner-btn'>Get Start</button>

                            </div>
                        </div>
                        <div className="col-lg-6 hosting-right">
                            <img className='left-text' width="420" src={webhosting} alt="" />
                        </div>
                    </div>
                </div>
            </div> */}


            <div className="container-fluid hosting-banner">

                <div className="container banner-child">
                    <div className="row xl:ml-20 md:ml-10 lg:ml-16">
                        <div className="col-lg-6 hosting-left flex flex-col justify-center">
                            <div className="lg:mt-10 hosting-left-child">{/* lg:pr-20 */}
                            <h1 className='title-new'>Web Development</h1>
                                <p className='banner-p text-gray-300'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, dolores sed? Quas eos laborum saepe dicta illo est odit tenetur totam voluptate necessitatibus, aperiam repellat assumenda, aliquam ex enim nesciunt.</p>
                                <div className="banner-btn">
                                    <button className=' bg-indigo-500 trye rounded font-bold get-start-btn my-4'>Read More</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 hosting-right flex flex-col justify-center">
                            <img className='left-text mx-auto' width="420" src={webbg1} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <BreadCrumbs5 />
            <animated.div style={fadeInSpring}>

                <section class="text-gray-600 body-font lg:pt-20">
                    <div className="web-dev text-center">
                        <h1 className=" text-uppercase">FEATURES & BENEFITS</h1>
                    </div>
                    <div class="container px-5 mx-auto flex flex-wrap fb-container">
                        <div class="flex flex-wrap w-full">
                            <div class="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
                                <div class="flex relative pb-12">
                                    <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                                        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                    </div>
                                    <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                        </svg>
                                    </div>
                                    <div class="flex-grow pl-4">
                                        <h2 class="font-bold title-font text-md text-gray-900 mb-1 tracking-wider">STEP 1</h2>
                                        <p class="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                                    </div>
                                </div>
                                <div class="flex relative pb-12">
                                    <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                                        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                    </div>
                                    <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                        </svg>
                                    </div>
                                    <div class="flex-grow pl-4">
                                        <h2 class="font-bold title-font text-md text-gray-900 mb-1 tracking-wider">STEP 2</h2>
                                        <p class="leading-relaxed">Vice migas literally kitsch +1 pok pok. Truffaut hot chicken slow-carb health goth, vape typewriter.</p>
                                    </div>
                                </div>
                                <div class="flex relative pb-12">
                                    <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                                        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                    </div>
                                    <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                            <circle cx="12" cy="5" r="3"></circle>
                                            <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                                        </svg>
                                    </div>
                                    <div class="flex-grow pl-4">
                                        <h2 class="font-bold title-font text-md text-gray-900 mb-1 tracking-wider">STEP 3</h2>
                                        <p class="leading-relaxed">Coloring book nar whal glossier master cleanse umami. Salvia +1 master cleanse blog taiyaki.</p>
                                    </div>
                                </div>
                                <div class="flex relative pb-12">
                                    <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                                        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                    </div>
                                    <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle>
                                        </svg>
                                    </div>
                                    <div class="flex-grow pl-4">
                                        <h2 class="font-bold title-font text-md text-gray-900 mb-1 tracking-wider">STEP 4</h2>
                                        <p class="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                                    </div>
                                </div>
                                <div class="flex relative">
                                    <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                            <path d="M22 4L12 14.01l-3-3"></path>
                                        </svg>
                                    </div>
                                    <div class="flex-grow pl-4">
                                        <h2 class="font-bold title-font text-md text-gray-900 mb-1 tracking-wider">FINISH</h2>
                                        <p class="leading-relaxed">Pitchfork ugh tattooed scenester echo park gastropub whatever cold-pressed retro.</p>
                                    </div>
                                </div>
                            </div>
                            <img class="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12 lg:p-20 fb-img" src={fb} alt="step" />
                        </div>
                    </div>
                </section>


                {/* <!-- ................. Web-Development section.............. --> */}

                <section>
                    <div className="bg-white-img">

                        <div className="left-round">
                            <img src={curvenew2} alt="" className="img-fluid" />
                        </div>

                        <div className="container lg:py-20">
                            <div className="row-className row">
                                <div className="web-dev  text-center z--100">
                                    <h1 className=" text-uppercase">Web Development</h1>
                                </div>

                                <div className=" lg:py-10 mx-auto d-flex justify-center flex-wrap gap-4 z-10" data-aos="flip-down">

                                    <img src={Layer2} width="200" className="img-fluid" />
                                    {/* <img src={Layer7} className='arrow-img img-fluid' alt="" /> */}

                                    <img src={Layer3} width="200" className="img-fluid" />
                                    {/* <img src={Layer8}  className='arrow-img' alt="" /> */}

                                    <img src={Layer4} width="200" className="img-fluid" />
                                    {/* <img src={Layer7}  className='arrow-img' alt="" /> */}

                                    <img src={Layer5} width="200" className="img-fluid" />
                                    {/* <img src={Layer8}  className='arrow-img' alt="" /> */}

                                    <img src={Layer6} width="200" className="img-fluid" />

                                    <img src={Layer1} width="200" className="img-fluid" />

                                </div>
                                <div className="text-center">
                                    <input type="button" value="Get Started" className='get-start-btn rounded font-bold ' />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- ................. Ecommerce section.............. --> */}

                <section>
                    <div class="ecommerce-main container-fluid">
                        <div class="container">
                            <div class="row">

                                <div class="col-lg-7 col-md-12 ecommerce-right">
                                    {/* <span class="invisible-service">services</span> */}
                                    <h1>Ecommerce</h1>
                                    <p class="fs-5">
                                        A thoughtfully-designed Ecommerce website is like an online showroom! Beside an impetus performance, your site will be optimized fit-to-screen for every device.
                                    </p>

                                    <div class="lang-logo d-flex pt-5">
                                        <img src={woowhite} alt="" data-aos="flip-left"
                                            data-aos-easing="ease-out-cubic"
                                            data-aos-duration="1300" />
                                        <img src={angularwhite} alt="" data-aos="flip-left"
                                            data-aos-easing="ease-out-cubic"
                                            data-aos-duration="1300" />
                                        <img src={shopifywhite} alt="" data-aos="flip-left"
                                            data-aos-easing="ease-out-cubic"
                                            data-aos-duration="1300" />
                                        <img src={phpwhite} alt="" data-aos="flip-left"
                                            data-aos-easing="ease-out-cubic"
                                            data-aos-duration="1300" />
                                        <img src={magentowhite} alt="" data-aos="flip-left"
                                            data-aos-easing="ease-out-cubic"
                                            data-aos-duration="1300" />
                                    </div>
                                    <div class="ecommerce-button">
                                        <span> <input type="button" className='' value="Get Started" /></span>
                                    </div>
                                </div>
                                <div class="col-lg-5 col-md-5 ecommerce-left">
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- ....................3 steps proccess.................. --> */}


                <section class="text-gray-600 body-font background-img">
                    <div class="container lg:px-5 mx-auto">
                        <div className="web-dev text-center">
                            <h1 className=" text-uppercase">3 Step to process</h1>
                        </div>
                        <div class="flex justify-center flex-wrap ">
                            <div class=" p-4 lg:w-1/1">
                                <div class=" bg-gray-100 bg-opacity-75 px-8 pt-10 pb-20 rounded-lg overflow-hidden text-center relative">
                                    {/* <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2> */}

                                    <img className='mx-auto step-img my-3' width='100' src={createpro} alt="" />
                                    <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">SIGN UP</h1>
                                    <p class="leading-relaxed mb-3">register your free account on OIP clint portal.</p>
                                    <a class="text-indigo-500 inline-flex items-center">Learn More
                                        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>

                                </div>
                            </div>
                            <div class="p-4 lg:w-1/1">
                                <div class=" bg-gray-100 bg-opacity-75 px-8 pt-10 pb-20 rounded-lg overflow-hidden text-center relative">
                                    <img className='mx-auto step-img my-3' width='100' src={contactusicon2} alt="" />
                                    <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">CONTACT US</h1>
                                    <p class="leading-relaxed mb-3">provide brief and basic information of the project.</p>
                                    <a class="text-indigo-500 inline-flex items-center">Learn More
                                        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>

                                </div>
                            </div>
                            <div class="p-4 lg:w-1/1">
                                <div class=" bg-gray-100 bg-opacity-75 px-8 pt-10 pb-20 rounded-lg overflow-hidden text-center relative">
                                    <img className='mx-auto step-img my-3' width='100' src={signup} alt="" />
                                    <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">GET IT DONE</h1>
                                    <p class="leading-relaxed mb-3">we will deliver your work in shortest period of time.</p>
                                    <a class="text-indigo-500 inline-flex items-center">Learn More
                                        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>

                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <input type="button" value="Get Started" className='get-start-btn rounded font-bold' />
                        </div>
                    </div>
                </section>


                {/* <!-- ..........................our areas of experienced section.............. --> */}

                <section class="container-fluid" id="area-section">
                    <div class="parent-areas">
                        <center> <h1>our areas <br /> <div className='expertise'> of expertise </div></h1> </center>
                        <div class="container mt-5">
                            <div class="row row-boxx">
                                <div class="col-lg-3 col-md-4  py-3 py-md-0 boxx">

                                    <div class="area-cards">
                                        <h5 class="area-cards-title">DESIGNING & <br /> DEVELOPMENT</h5>
                                        <ul>
                                            <li>Logo Design</li>
                                            <li>Marketing Design</li>
                                            <li>Video Animation</li>
                                            <li>Web development</li>
                                            <li>App development</li>
                                            <li>Real-time Vistualization</li>
                                        </ul>

                                    </div>

                                </div>

                                <div class="col-lg-3 col-md-4 py-3 py-md-0 boxx">

                                    <div class="area-cards">
                                        <h5 class="area-cards-title">DIGITAL <br /> MARKETING</h5>
                                        <ul>
                                            <li>Logo Design</li>
                                            <li>Marketing Design</li>
                                            <li>Video Animation</li>
                                            <li>Web development</li>
                                            <li>App development</li>
                                            <li>Real-time Vistualization</li>
                                        </ul>

                                    </div>

                                </div>

                                <div class="col-lg-3 col-md-4 py-3 py-md-0 boxx">


                                    <div class="area-cards">
                                        <h5 class="area-cards-title">FEATURES & <br /> BENEFITS</h5>
                                        <ul>
                                            <li>Logo Design</li>
                                            <li>Marketing Design</li>
                                            <li>Video Animation</li>
                                            <li>Web development</li>
                                            <li>App development</li>
                                            <li>Real-time Vistualization</li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="text-center py-10">
                            <input type="button" value="Explore All" className='explore-all-btn rounded font-bold' />
                        </div>
                    </div>
                </section>

                {/* -------------------------------All type of business's Website------------------- */}

                <section class="text-gray-600 body-font py-24 bg-white-img">
                    <div class="container px-5 mx-auto">
                        <div class="flex flex-col text-center w-full mb-20">
                            <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">FEATURES & SERVICES</h2>
                            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-700">All type of business's Website</h1>
                            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
                        </div>
                        <div class="flex flex-wrap">
                            <div class="hover-cards xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                                <h2 class="text-lg sm:text-xl text-gray-700 font-medium title-font mb-2">Shoppiong Mall</h2>
                                <p class="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                                <a class="text-indigo-500 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                            <div class="hover-cards xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                                <h2 class="text-lg sm:text-xl text-gray-700 font-medium title-font mb-2">Hospital/Pharamcy</h2>
                                <p class="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                                <a class="text-indigo-500 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                            <div class="hover-cards xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                                <h2 class="text-lg sm:text-xl text-gray-700 font-medium title-font mb-2">Super Mart</h2>
                                <p class="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                                <a class="text-indigo-500 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                            <div class="hover-cards xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                                <h2 class="text-lg sm:text-xl text-gray-700 font-medium title-font mb-2">Personal business</h2>
                                <p class="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                                <a class="text-indigo-500 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none rounded text-lg">Read More</button>
                    </div>
                </section>



            </animated.div>
            {/* <Features2 /> */}

        </div>
    )
}

export default UnlimitedHosting