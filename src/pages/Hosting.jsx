import React, { useRef, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import BreadCrumbs3 from '../components/bcrumbsSection/BreadCrumbs3'
import hosting1 from '../static/Images/hosting1.jpg'
import ThreeColTestimonials from '../components/FancyTestimonialsSlider'
import { Link } from 'react-router-dom'
import Features2 from '../components/Features2'
import TableComparison from '../components/TableComparison'
import FAQ from '../components/FAQ'
import hosting from '../static/Images/hosting-anim.gif'
import hostright from "../assets/host-right-img.png";

const Hosting = () => {
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
        <>
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


            {/* <div className="container-fluid parent-hosting">
                <div className="row">
                    <div className="container child-hosting">
                        <div className="title title-sm host-head">
                            <div>web hosting&ensp;</div>
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
                        <p className='my-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime corporis qui, inventore dicta fuga quae sit libero molestias, obcaecati, velit minus? Dolorem ratione modi quia asperiores. Minima ducimus suscipit deleniti.</p>
                        <button className='btn btn-primary text-uppercase font-bold'>Get Start</button>
                    </div>
                </div>
            </div> */}
            <div className="container-fluid hosting-banner">

                <div className="container banner-child">
                    <div className="row xl:ml-20 md:ml-10 lg:ml-16">
                        <div className="col-lg-6 hosting-left flex flex-col justify-center">
                            <div className="lg:mt-10 lg:pr-20 hosting-left-child">
                            <h1 className='title'>All type of Hosting</h1>
                            <p className='banner-p text-gray-300'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, dolores sed? Quas eos laborum saepe dicta illo est odit tenetur totam voluptate necessitatibus, aperiam repellat assumenda, aliquam ex enim nesciunt.</p>
                            <div className="banner-btn">
                            <button className='btn btn-primary trye my-4'>Get Start</button>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-6 hosting-right flex flex-col justify-center">
                            <img className='left-text' src={hostright} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <BreadCrumbs3 />
            <animated.div style={fadeInSpring}>

                <div className="2xl:container 2xl:mx-auto md:px-10 lg:px-10 xl:px-44 hosting-small-fold py-5 px-4 background-img">
                    <div className="flex flex-col lg:flex-row justify-between gap-4">
                        <div className="w-full flex flex-col justify-center hosting-tag  xl:ml-20 md:ml-10 lg:ml-16">
                            <h1 className="text-3xl lg:text-4x2 font-bold leading-9 text-gray-800 pb-4">Hosting</h1>
                            <p className="font-normal text-base leading-6 text-gray-600 ">Web Hosting along with domain name is the necessary element to make website live and accessible over the internet. It is a process that allows an organization to post the developed website on dynamic environment that is called internet and the place where web pages are stored known as server</p>
                        </div>
                        <div className="w-full lg:w-8/12 ">
                            <img className="w-72 h-72 m-auto" src={hosting} alt="A group of People" />
                        </div>
                    </div>
                </div>
            </animated.div>

            {/* <Features2 /> */}

            <TableComparison />
            <ThreeColTestimonials />
            <FAQ />
        </>
    )
}

export default Hosting