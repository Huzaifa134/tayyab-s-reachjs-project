import React, { useState, useRef, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import businessHosting from '../static/Images/businessHosting.png'
import BreadCrumbs6 from '../components/bcrumbsSection/BreadCrumbs6'
import { Link } from 'react-router-dom'
import Features2 from '../components/Features2'
import hosting from '../static/Images/webhosting-shared.png'
import busiimg from '../assets/busi-img.png'


const BusinessHosting = () => {
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

            <div className="container-fluid hosting-banner">

                <div className="container banner-child">
                    <div className="row xl:ml-20 md:ml-10 lg:ml-16">
                        <div className="col-lg-7 hosting-left flex flex-col justify-center">
                            <div className="lg:mt-10 hosting-left-child">
                                <h1 className='title-new c-panel-haed'>Control Panel Hosting</h1>
                                <p className='banner-p text-gray-300 lg:pr-40'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, dolores sed? Quas eos laborum saepe dicta illo est odit tenetur totam voluptate necessitatibus, aperiam repellat assumenda, aliquam ex enim nesciunt.</p>
                                {/* <div className="banner-btn">
                                    <button className='btn btn-primary trye my-4'>Get Start</button>
                                </div> */}
                            </div>
                        </div>
                        <div className="col-lg-5 hosting-right flex flex-col justify-center">
                            <img className='left-text mx-auto' width="450" src={busiimg} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <BreadCrumbs6 />
            <animated.div style={fadeInSpring}>

                <div className="2xl:container 2xl:mx-auto background-img md:px-10 lg:px-10 xl:px-44 hosting-small-fold px-4 
" >{/* md:px-20 lg:px-24 xl:px-56 py-9 px-4  */}
                    <div className="flex flex-col lg:flex-row justify-between gap-5 xl:ml-20 md:ml-10 lg:ml-16 my-20" >
                        <div className="w-full lg:w-7/12 flex flex-col justify-center">
                            <h1 className="text-3xl lg:text-4x2 font-bold leading-9 text-gray-600 pb-4 ">Control Panel Intro</h1>
                            <p className="font-normal text-base leading-6 text-gray-600 ">"Empower your web presence effortlessly with our intuitive control panel, your gateway to seamless website management Take the reins of your online journey with our advanced control panel, simplifying website administration and maximizing efficiency."</p>
                        </div>
                        <div className="shared-right-img-parent w-full lg:w-8/12 ">
                            <img className="shared-right-img" width="500" src={hosting} alt="A group of People" />
                        </div>
                    </div>
                </div>

            </animated.div>

            {/* <Features2 /> */}
            <div className="container-fluid mx-auto my-8 xl:px-72 table-small bg-white-img">
                <h1 className="text-3xl py-10 text-uppercase sm:text-3xl text-center title-font lg:mb-4 tracking-widest lg:text-4x2 font-bold leading-9 text-gray-700 ">Control Panel Hosting Plans Comparison</h1>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-transparent border-2 border-gray-400 rounded-md overflow-hidden table-parent">
                        <thead>

                            <tr className="bg-gray-100 ">
                                <th className="lg:py-4 px-10 m-6 text-2xl font-bold mb-6 text-center text-gray-600">Features <br /> Comparison Chart
                                    {/* <br></br><span className="text-2xl font-bold mb-6 text-center">Comparison Chart</span><br></br><br></br> */}
                                </th>
                                <th className="lg:py-4 px-10 m-6 text-2xl font-bold mb-6 text-center text-gray-600">Basic Plan

                                    <br></br><span className="text-2xl font-bold mb-6 text-center">Price</span><span className='px-2 font-medium'>39$</span><br></br>

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

            {/* some content about c panel */}

            <section class="text-gray-600 body-font bg-white-img">
                <div class="container  py-10 mx-auto">
                    <div class="text-center mb-20">
                        <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-700 mb-4">Some Features about C Panel</h1>
                        <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p>
                    </div>
                    <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                        <div class="p-2 sm:w-1/2 w-full">
                            <div class="bg-gray-100 rounded flex p-4 h-full ">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span class="title-font font-medium"> <span className='font-bold'>Brief Overview of Web Hosting Control Panels </span> <br />
                                    <p className='pt-3'>Before delving into the specifics, let’s grasp the essence of web hosting control panels. These platforms, often web-based, act as intermediaries between users and servers, offering a visual interface to execute commands and configure settings. Think of them as the cockpit of your hosting journey, from where you can navigate the complexities of server management.</p>
                                </span>
                            </div>
                        </div>
                        <div class="p-2 sm:w-1/2 w-full">
                            <div class="bg-gray-100 rounded flex p-4 h-full ">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span class="title-font font-medium"> <span className='font-bold'>Importance of Choosing the Right Control Pane</span> <br />
                                    <p className='pt-3'>Choosing the right control panel is comparable to selecting the perfect tool for a job, with a profound impact on the ease of task execution, overall performance, and security of your digital domain. The choice influences the hosting landscape, creating a ripple effect that extends beyond task execution to shape the holistic success of your online presence. .</p>
                                </span>
                            </div>
                        </div>
                        <div class="p-2 sm:w-1/2 w-full">
                            <div class="bg-gray-100 rounded flex p-4 h-full ">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span class="title-font font-medium"> <span className='font-bold'>Hosting Requirements </span> <br />
                                    <p className='pt-3'>In the intricate web of hosting control panels, finding the perfect match requires a thoughtful consideration of various factors. Let’s have a look at the key considerations that should shape your decision-making process. </p>
                                </span>
                            </div>
                        </div>
                        <div class="p-2 sm:w-1/2 w-full">
                            <div class="bg-gray-100 rounded flex p-4 h-full ">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span class="title-font font-medium"> <span className='font-bold'>cPanel Features and Capabilities</span> <br />
                                    <p className='pt-3'>Before selecting a control panel, take stock of your hosting needs. Are you running a single website or managing a portfolio of diverse projects? Assess factors such as the number of domains, databases, and email accounts you anticipate needing. Understanding your hosting requirements lays the groundwork for choosing a control panel that aligns with your operational scope..</p>
                                </span>
                            </div>
                        </div>
                        <div class="p-2 sm:w-1/2 w-full">
                            <div class="bg-gray-100 rounded flex p-4 h-full ">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span class="title-font font-medium"> <span className='font-bold'>Plesk Features and Capabilities</span> <br />
                                    <p className='pt-3'>Before delving into the specifics, let’s grasp the essence of web hosting control panels. These platforms, often web-based, act as intermediaries between users and servers, offering a visual interface to execute commands and configure settings. Think of them as the cockpit of your hosting journey, from where you can navigate the complexities of server management.</p>
                                </span>
                            </div>
                        </div>
                        <div class="p-2 sm:w-1/2 w-full">
                            <div class="bg-gray-100 rounded flex p-4 h-full ">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span class="title-font font-medium"> <span className='font-bold'>DirectAdmin Features and Capabilities</span> <br />
                                    <p className='pt-3'>Before delving into the specifics, let’s grasp the essence of web hosting control panels. These platforms, often web-based, act as intermediaries between users and servers, offering a visual interface to execute commands and configure settings. Think of them as the cockpit of your hosting journey, from where you can navigate the complexities of server management.</p>
                                </span>
                            </div>
                        </div>
                    </div>
                    <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                </div>
            </section>

        </div>
    )
}

export default BusinessHosting