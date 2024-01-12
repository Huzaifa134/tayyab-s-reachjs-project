import React, { useState } from 'react';
import BreadCrumbs from '../components/bcrumbsSection/BreadCrumbs'
// import servicesphoto from '../static/Images/servicesphoto.jpg'
import { Link } from 'react-router-dom'
import FAQ from '../components/FAQ'
import ThreeColTestimonials from '../components/FancyTestimonialsSlider'
import { useSpring, animated } from 'react-spring';
// import service from "../assets/service-right-img.png";
import service2 from "../assets/service-right-img2.png";
import ecommerceimg2 from "../assets/e-commerce-img2.jpg";
import needs from "../assets/needs.png";
import wordpressimg from "../assets/wordpress-img.webp";
import personalbusiimg from "../assets/personal-busi-img.avif";


const Services = () => {
    const ScrollToView = ({ children, offset = 0 }) => {
        const [isVisible, setIsVisible] = useState(false);

        const props = useSpring({
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0px)' : `translateY(${offset}px)`,
        });

        const handleScroll = () => {
            setIsVisible(true);
        };

        // Attach scroll event listener
        React.useEffect(() => {
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }, []);

        return <animated.div style={props}>{children}</animated.div>;
    };
    return (
        <div>
            <div className="fixed bottom-6 right-6 z-50">
                <Link to={'/contact-us'} data-modal-target="defaultModal" data-modal-toggle="defaultModal" className="bg-blue-500 btn-contact text-white font-medium rounded-md px-4 py-2 flex items-center justify-center hover:bg-blue-600 transition duration-300 ease-in-out shadow-lg">
                    <span className="text-lg mr-2">🗨️</span>
                    Contact
                </Link>
            </div>

            <div className="container-fluid hosting-banner">

                <div className="container banner-child">
                    <div className="row xl:ml-20 md:ml-10 lg:ml-16">
                        <div className="col-lg-6 hosting-left flex flex-col justify-center">
                            <div className="lg:mt-10 lg:pr-20 hosting-left-child">
                            <h1 className='title-new'>Our Services</h1>
                                <p className='banner-p text-gray-300'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, dolores sed? Quas eos laborum saepe dicta illo est odit tenetur totam voluptate necessitatibus, aperiam repellat assumenda, aliquam ex enim nesciunt.</p>
                                {/* <div className="banner-btn">
                                    <button className='btn btn-primary trye my-4'>Get Start</button>
                                </div> */}
                            </div>
                        </div>
                        <div className="col-lg-6 hosting-right flex flex-col justify-center">
                            <img className='left-text mx-auto' width="460" src={service2} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <BreadCrumbs />
            <ScrollToView offset={100}>


        
                {/* Hosting services */}
            <div className="bg-white-img">
                <section class="text-gray-600 body-font">
                    <div class="container px-5 py-24 mx-auto">
                        <div class="flex flex-col text-center w-full mb-20 ser-ser">
                            <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">Professional Services</h2>
                            <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-600">All Type of business Domain & Hosting Services</h1>
                        </div>
                        <div class="flex flex-wrap -m-4">
                            <div class="p-4 md:w-1/3">
                                <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                                    <div class="flex items-center mb-3">
                                        <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                            </svg>
                                        </div>
                                        <h2 class="text-gray-900 text-lg title-font font-medium">Shared Hosting Services</h2>
                                    </div>
                                    <div class="flex-grow">
                                        <p class="leading-relaxed text-base">"Effortless hosting solutions for multiple websites on a single server – Shared Hosting made simple."
                                            "Cost-effective web hosting for diverse online needs – Explore the benefits of Shared Hosting today!"</p>
                                        <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="p-4 md:w-1/3">
                                <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                                    <div class="flex items-center mb-3">
                                        <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                                <circle cx="12" cy="7" r="4"></circle>
                                            </svg>
                                        </div>
                                        <h2 class="text-gray-900 text-lg title-font font-medium">C'Panel Hosting Services</h2>
                                    </div>
                                    <div class="flex-grow">
                                        <p class="leading-relaxed text-base">"Effortless website management made simple with cPanel hosting's intuitive control interface."
                                            "Seamlessly control your website's essentials with cPanel hosting's user-friendly tools and features."</p>
                                        <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="p-4 md:w-1/3">
                                <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                                    <div class="flex items-center mb-3">
                                        <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                <circle cx="6" cy="6" r="3"></circle>
                                                <circle cx="6" cy="18" r="3"></circle>
                                                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                                            </svg>
                                        </div>
                                        <h2 class="text-gray-900 text-lg title-font font-medium">Plesk Hosting Services</h2>
                                    </div>
                                    <div class="flex-grow">
                                        <p class="leading-relaxed text-base">"Effortless website management with Plesk hosting's intuitive control panel."
                                            "Streamline your hosting experience: Plesk hosting for simplified website administration."</p>
                                        <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- ................. Web Development Services section.............. --> */}

                <section class="text-gray-600 body-font">
                    <div class="container px-5 py-10 mx-auto">
                        <div class="flex flex-col">
                            <div class="h-1 bg-gray-200 rounded overflow-hidden">
                                <div class="w-24 h-full bg-indigo-500"></div>
                            </div>
                            <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12 web-dev-ser-head">
                                <h1 class="sm:w-2/5 text-gray-600 font-bold title-font text-4xl mb-2 sm:mb-0">Web Development Services</h1>
                                <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">"Elevate your online presence with expertly crafted professional web development services
                                    Unlock your website's full potential with tailored solutions from seasoned web development professionals."</p>
                            </div>
                        </div>
                        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                            <div class="hover:bg-gray-100 p-4 md:w-1/3 sm:mb-0 mb-6">
                                <div class="rounded-lg h-64 overflow-hidden">
                                    <img alt="content" class="object-cover object-center h-full w-full img-fluid" src={ecommerceimg2} />
                                </div>
                                <h2 class="text-xl font-medium title-font text-gray-900 mt-5">E-Commerce Websites</h2>
                                <p class="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
                                <a class="text-indigo-500 inline-flex items-center mt-3">Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                            <div class="hover:bg-gray-100 p-4 md:w-1/3 sm:mb-0 mb-6">
                                <div class="rounded-lg h-64 overflow-hidden">
                                    <img alt="content" class="object-cover object-center h-full w-full" src={wordpressimg} />
                                </div>
                                <h2 class="text-xl font-medium title-font text-gray-900 mt-5">WordPress Websites</h2>
                                <p class="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
                                <a class="text-indigo-500 inline-flex items-center mt-3">Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                            <div class="hover:bg-gray-100 p-4 md:w-1/3 sm:mb-0 mb-6">
                                <div class="rounded-lg h-64 overflow-hidden">
                                    <img alt="content" class="object-cover object-center h-full w-full" src={personalbusiimg} />
                                </div>
                                <h2 class="text-xl font-medium title-font text-gray-900 mt-5">Business Websites</h2>
                                <p class="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
                                <a class="text-indigo-500 inline-flex items-center mt-3">Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                </div>


                <section class="text-gray-600 body-font background-img">
                    <div class="container mx-auto flex flex-wrap">
                        <div class="lg:w-1/2 mb-10 lg:mb-0 rounded-lg overflow-hidden">
                            <img alt="feature" class="object-cover object-center h-full" width="800" src={needs} />
                        </div>
                        <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left">

                            <section class="text-gray-600 body-font">
                                <div className="why-ur-busi-head text-center">
                                <h2 class="text-4xl font-bold mb-8">Why Your Business Needs a Website</h2>
                                <p class="text-lg mb-8">"In today's digital age, establishing a robust and captivating online presence is indispensable for businesses of all sizes. A compelling online footprint not only amplifies visibility but also enhances engagement, fostering connections with a broader audience and driving sustained growth in a competitive landscape."</p>
                                </div>
                                <div class="flex flex-wrap">
                                    <div class="flex relative  py-20 pb-20 sm:items-center md:w-2/1 ">
                                        <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                                            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                        </div>
                                        <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">1</div>
                                        <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                                            <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
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
                                            <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
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

            </ScrollToView>
            <ThreeColTestimonials />
            {/* <div className="mx-auto p-lg-5 bg-white min-h-sceen">
                <div className="flex flex-col items-center service-head-last">
                    <h2 className="font-bold text-5xl mt-3 text-gray-600">
                        Services
                    </h2>
                </div>
                <div className="container relative flex flex-col justify-between h-full max-w-10xl  mx-auto mt-2 px-lg-5 px-md-5">
                
                    <p className="mb-10 text-lg text-gray-500 text-center">Here is a few of the awesome Services we provide.</p>
                    <div className="w-full px-lg-5 px-md-5">
                        <div className="flex flex-col w-full mb-10 sm:flex-row">
                            <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                                <div className="relative h-full ml-0 mr-0 sm:mr-10">
                                    <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg" />
                                    <div className="child-card-service relative h-full p-lg-5 p-md-4 p-sm-2 bg-white border-2 border-indigo-500 rounded-lg">
                                        <div className="flex items-center -mt-1">
                                            <h3 className="my-2 ml-3 text-lg font-bold text-gray-600">DAPP Development</h3>
                                        </div>
                                        <p className="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">------------</p>
                                        <p className="mb-2 text-gray-600">A decentralized application (dapp) is an application built on a
                                            decentralized network that combines a smart contract and a frontend user interface.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full sm:w-1/2">
                                <div className="relative h-full ml-0 md:mr-10">
                                    <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-500 rounded-lg" />
                                    <div className="child-card-service relative h-full p-lg-5 p-md-4 p-sm-2 bg-white border-2 border-purple-500 rounded-lg">
                                        <div className="flex items-center -mt-1">
                                            <h3 className="my-2 ml-3 text-lg font-bold text-gray-600">Web 3.0 Development</h3>
                                        </div>
                                        <p className="mt-3 mb-1 text-xs font-medium text-purple-500 uppercase">------------</p>
                                        <p className="mb-2 text-gray-600">Web 3.0 is the third generation of Internet services that will
                                            focus on understanding and analyzing data to provide a semantic web.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col w-full mb-5 sm:flex-row">
                            <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                                <div className="relative h-full ml-0 mr-0 sm:mr-10">
                                    <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg" />
                                    <div className="child-card-service relative h-full p-lg-5 p-md-4 bg-white border-2 border-blue-400 rounded-lg">
                                        <div className="flex items-center -mt-1">
                                            <h3 className="my-2 ml-3 text-lg font-bold text-gray-600">Project Audit</h3>
                                        </div>
                                        <p className="mt-3 mb-1 text-xs font-medium text-blue-400 uppercase">------------</p>
                                        <p className="mb-2 text-gray-600">A Project Audit is a formal review of a project, which is intended
                                            to assess the extent up to which project management standards are being upheld.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                                <div className="relative h-full ml-0 mr-0 sm:mr-10">
                                    <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg" />
                                    <div className="child-card-service relative h-full p-lg-5 p-md-4 p-sm-2 bg-white border-2 border-yellow-400 rounded-lg">
                                        <div className="flex items-center -mt-1">
                                            <h3 className="my-2 ml-3 text-lg font-bold text-gray-600">Hacking / RE</h3>
                                        </div>
                                        <p className="mt-3 mb-1 text-xs font-medium text-yellow-400 uppercase">------------</p>
                                        <p className="mb-2 text-gray-600">A security hacker is someone who explores methods for breaching
                                            defenses and exploiting weaknesses in a computer system or network.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full sm:w-1/2">
                                <div className="relative h-full ml-0 md:mr-10">
                                    <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-500 rounded-lg" />
                                    <div className="child-card-service relative h-full p-lg-5 p-md-4 p-sm-2 bg-white border-2 border-green-500 rounded-lg">
                                        <div className="flex items-center -mt-1">
                                            <h3 className="my-2 ml-3 text-lg font-bold text-gray-600">Bot/Script Development</h3>
                                        </div>
                                        <p className="mt-3 mb-1 text-xs font-medium text-green-500 uppercase">------------</p>
                                        <p className="mb-2 text-gray-600">Bot development frameworks were created as advanced software tools
                                            that eliminate a large amount of manual work and accelerate the development process.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div> */}
            <FAQ />
        </div >
    )
}

export default Services