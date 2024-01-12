import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ThreeColTestimonials from '../components/FancyTestimonialsSlider.jsx'
import FAQ from '../components/FAQ.jsx'
import Domain from '../components/DomainSection.jsx'
import { useAuth } from "../context/auth"
import { Link } from 'react-router-dom'

import pleskimg from "../assets/plesk-img.png";
import allproducts from "../assets/all-products.avif";



const GetProducts = () => {
    const [products, setProducts] = useState([])
    const [auth, setAuth] = useAuth()

    useEffect(() => {
        let isMounted = true;

        const getProduct = async () => {
            try {
                const res = await axios.post('https://comweb-backend.onrender.com/getProducts');

                if (isMounted) {
                    setProducts(res.data.products.product);
                }
            } catch (error) {
                console.log(error);
            }
        };

        getProduct();

        // Cleanup function to set isMounted to false when the component is unmounted
        return () => {
            isMounted = false;
        };
    }, []);
    return (

        <div >

            {/* <div className="container-fluid hosting-banner">

                <div className="container banner-child">
                    <div className="row">
                        <div className="col-lg-6 hosting-left" style={{ height: "70vh" }}>
                            <div className='left-text'>

                                <div className="title title-sm host-head-2">
                                    <div>Amazing Our Products&ensp;</div>
                                </div>

                                <p className='banner-p'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, dolores sed? Quas eos laborum saepe dicta illo est odit tenetur totam voluptate necessitatibus, aperiam repellat assumenda, aliquam ex enim nesciunt.</p>
                                <button className='btn btn-primary text-uppercase font-bold my-4 banner-btn'>Get Start</button>

                            </div>
                        </div>
                        <div className="col-lg-6 hosting-right">
                            <img className='left-text' src={pleskimg} alt="" />

                        </div>
                    </div>
                </div>
            </div> */}


<div className="container-fluid hosting-banner">

<div className="container banner-child">
    <div className="row xl:ml-20 md:ml-10 lg:ml-16">
        <div className="col-lg-6 hosting-left flex flex-col justify-center">
            <div className="lg:mt-10 lg:pr-20 hosting-left-child">
                <h1 className='title'>Our Producks</h1>
                <p className='banner-p text-gray-300'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, dolores sed? Quas eos laborum saepe dicta illo est odit tenetur totam voluptate necessitatibus, aperiam repellat assumenda, aliquam ex enim nesciunt.</p>
                <div className="banner-btn">
                    <button className='btn btn-primary trye my-4'>Get Start</button>
                </div>
            </div>
        </div>
        <div className="col-lg-6 hosting-right flex flex-col justify-center">
            <img className='left-text mx-auto' width="420" src={pleskimg} alt="" />
        </div>
    </div>
</div>
</div>


            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto flex flex-wrap">
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
                                    <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 1</h2>
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
                                    <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 2</h2>
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
                                    <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 3</h2>
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
                                    <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 4</h2>
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
                                    <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">FINISH</h2>
                                    <p class="leading-relaxed">Pitchfork ugh tattooed scenester echo park gastropub whatever cold-pressed retro.</p>
                                </div>
                            </div>
                        </div>
                        <img class="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12" src={allproducts} alt="step" />
                    </div>
                </div>
            </section>

            <Domain />

            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full mb-20">
                        <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">ROOF PARTY POLAROID</h2>
                        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">All type of business's Website</h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
                    </div>
                    <div class="flex flex-wrap">
                        <div class="hover-cards xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                            <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Shoppiong Mall</h2>
                            <p class="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                            <a class="text-indigo-500 inline-flex items-center">Learn More
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                        <div class="hover-cards xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                            <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Hospital/Pharamcy</h2>
                            <p class="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                            <a class="text-indigo-500 inline-flex items-center">Learn More
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                        <div class="hover-cards xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                            <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Super Mart</h2>
                            <p class="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                            <a class="text-indigo-500 inline-flex items-center">Learn More
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                        <div class="hover-cards xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                            <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Personal business</h2>
                            <p class="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                            <a class="text-indigo-500 inline-flex items-center">Learn More
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                </div>
            </section>

            {/* <div className="mx-auto py-4 px-0 table-products overflow-x-auto max-w-full xl:px-72">
                <table className="min-w-full table-auto">
                    <thead>
                        <tr>
                            <th className="bg-gray-200 border text-left px-4 py-2 sm:px-8 sm:py-4">PID</th>
                            <th className="bg-gray-200 border text-left px-4 py-2 sm:px-8 sm:py-4">GID</th>
                            <th className="bg-gray-200 border text-left px-4 py-2 sm:px-8 sm:py-4">Type</th>
                            <th className="bg-gray-200 border text-left px-4 py-2 sm:px-8 sm:py-4">Name</th>
                            <th className="bg-gray-200 border text-left px-4 py-2 sm:px-8 sm:py-4">Slug</th>
                            <th className="bg-gray-200 border text-left px-4 py-2 sm:px-8 sm:py-4">Description</th>
                            <th className="bg-gray-200 border text-left px-4 py-2 sm:px-8 sm:py-4">Module</th>
                            <th className="bg-gray-200 border text-left px-4 py-2 sm:px-8 sm:py-4">Pay Type</th>
                            <th className="bg-gray-200 border text-left px-4 py-2 sm:px-8 sm:py-4">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.pid}>
                                <td className="border px-4 py-2 sm:px-8 sm:py-4">{product.pid}</td>
                                <td className="border px-4 py-2 sm:px-8 sm:py-4">{product.gid}</td>
                                <td className="border px-4 py-2 sm:px-8 sm:py-4">{product.type}</td>
                                <td className="border px-4 py-2 sm:px-8 sm:py-4">{product.name}</td>
                                <td className="border px-4 py-2 sm:px-8 sm:py-4">{product.slug}</td>
                                <td className="border px-4 py-2 sm:px-8 sm:py-4">{product.description}</td>
                                <td className="border px-4 py-2 sm:px-8 sm:py-4">{product.module}</td>
                                <td className="border px-4 py-2 sm:px-8 sm:py-4">{product.paytype}</td>
                                <td className="border px-4 py-2 sm:px-8 sm:py-4">
                                    {`$${product.pricing.USD.monthly}/mo $${product.pricing.USD.annually}/yr`}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div> */}


            <ThreeColTestimonials />
            <FAQ />
        </div>
    )
}

export default GetProducts