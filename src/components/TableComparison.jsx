import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';

const TableComparison = () => {
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };
    const initialFeaturesCount = 5;
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef();

    const props = useSpring({
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0px)' : 'translateY(450px)', // Adjust the offset as needed
    });

    const handleScroll = () => {
        const scrollY = window.scrollY || window.pageYOffset;
        const elementTop = elementRef.current.getBoundingClientRect().top;
        const isVisible = scrollY > elementTop;
        setIsVisible(isVisible);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <animated.div ref={elementRef} style={props}>
        <div className="bg-white-img">

            <div className="2xl:container 2xl:mx-auto py-5 px-4">
                <h1 className="text-3xl font-bold mb-6 text-center text-uppercase">Hosting Plans Comparison</h1>
                <div className="child-table overflow-x-auto">
                    <table className="min-w-full bg-transparent border-2 border-gray-400 rounded-md overflow-hidden">
                        <thead>

                            <tr className="bg-gray-100 ">
                                <th className="py-8 px-10 m-6 text-2xl font-bold mb-6 text-center  text-gray-600 ">Features
                                    <br></br><span className="text-2xl font-bold mb-6 text-center">Comparison Chart</span><br></br><br></br>
                                </th>
                                <th className="py-8 px-10 m-6 text-2xl font-bold mb-6 text-center text-gray-600 ">Basic Plan

                                    <br></br><span className="text-2xl font-bold mb-6 text-center">Price</span><br></br><span className='m-2 p-4 font-medium'>39$</span><br></br>

                                </th>
                                <th className="py-8 px-10 m-6 text-2xl font-bold mb-6 text-center text-gray-600 ">Business Hosting
                                    <br></br><span className="text-2xl font-bold mb-6 text-center">Price</span><br></br><span className='m-2 p-4 font-medium'>49$</span><br></br>
                                </th>
                                <th className="py-8 px-10 m-6 text-2xl font-bold mb-6 text-center text-gray-600 ">Unlimited Hosting
                                    <br></br><span className="text-2xl font-bold mb-6 text-center">Price</span><br></br><span className='m-2 p-4 font-medium'>59$</span><br></br>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="hover:bg-gray-50  bg-white">
                                <td className="py-4 px-6 border-b text-left font-semibold bg-blue-600 text-white">SSD Cached Storage</td>
                                <td className="py-4 px-6 border-b text-center ">30 GB</td>
                                <td className="py-4 px-6 border-b text-center">120 GB</td>
                                <td className="py-4 px-6 border-b text-center">Unlimited</td>
                            </tr>
                            <tr className="hover:bg-gray-50 bg-white">
                                <td className="py-4 px-6 border-b text-left font-semibold bg-blue-600 text-white">Monthly Bandwidth</td>
                                <td className="py-4 px-6 border-b text-center">500 GB</td>
                                <td className="py-4 px-6 border-b text-center">1TB</td>
                                <td className="py-4 px-6 border-b text-center">Unlimited</td>
                            </tr>
                            <tr className="hover:bg-gray-50 bg-white">
                                <td className="py-4 px-6 border-b text-left font-semibold bg-blue-600 text-white">Hosted (Add-on) Domains</td>
                                <td className="py-4 px-6 border-b text-center">5</td>
                                <td className="py-4 px-6 border-b text-center">20</td>
                                <td className="py-4 px-6 border-b text-center">Unlimited</td>
                            </tr>
                            <tr className="hover:bg-gray-50 bg-white">
                                <td className="py-4 px-6 border-b text-left font-semibold bg-blue-600 text-white">Free Daily Backup</td>
                                <td className="py-4 px-6 border-b text-center"><i className="far fa-check-circle" /></td>
                                <td className="py-4 px-6 border-b text-center"><i className="far fa-check-circle" /></td>
                                <td className="py-4 px-6 border-b text-center"><i className="far fa-check-circle" /></td>
                            </tr>
                            <tr className="hover:bg-gray-50 bg-white">
                                <td className="py-4 px-6 border-b text-left font-semibold bg-blue-600 text-white">100% Risk Free Trial</td>
                                <td className="py-4 px-6 border-b text-center"><i className="far fa-check-circle" /></td>
                                <td className="py-4 px-6 border-b text-center"><i className="far fa-check-circle" /></td>
                                <td className="py-4 px-6 border-b text-center"><i className="far fa-check-circle" /></td>
                            </tr>
                            <tr className="hover:bg-gray-50 bg-white">
                                <td className="py-4 px-6 border-b text-left font-semibold bg-blue-600 text-white">Free Sectigo SSLa</td>
                                <td className="py-4 px-6 border-b text-center"><i className="far fa-check-circle" /></td>
                                <td className="py-4 px-6 border-b text-center"><i className="far fa-check-circle" /></td>
                                <td className="py-4 px-6 border-b text-center"><i className="far fa-check-circle" /></td>
                            </tr>
                            <tr className="hover:bg-gray-50 bg-white">
                                <td className="py-4 px-6 border-b text-left font-semibold bg-blue-600 text-white">Free Website Builder</td>
                                <td className="py-4 px-6 border-b text-center"><i className="far fa-check-circle" /></td>
                                <td className="py-4 px-6 border-b text-center"><i className="far fa-check-circle" /></td>
                                <td className="py-4 px-6 border-b text-center"><i className="far fa-check-circle" /></td>
                            </tr>
                            <tr className="hover:bg-gray-50 bg-white">
                                <td className="py-4 px-6 border-b text-left font-semibold bg-blue-600 text-white">Free Setup & Transfer</td>
                                <td className="py-4 px-6 border-b text-center"><i className="far fa-check-circle" /></td>
                                <td className="py-4 px-6 border-b text-center"><i className="far fa-check-circle" /></td>
                                <td className="py-4 px-6 border-b text-center"><i className="far fa-check-circle" /></td>
                            </tr>
                            <tr className="hover:bg-gray-50 bg-white">
                                <td className="py-4 px-6 border-b text-left font-semibold bg-blue-600 text-white">cPanel Control Panel</td>
                                <td className="py-4 px-6 border-b text-center"><i className="far fa-check-circle" /></td>
                                <td className="py-4 px-6 border-b text-center"><i className="far fa-check-circle" /></td>
                                <td className="py-4 px-6 border-b text-center"><i className="far fa-check-circle" /></td>
                            </tr>
                            {showMore && (
                                <>
                                    <tr className="hover:bg-gray-50 bg-white">
                                        <td className="py-4 px-6 border-b text-left font-semibold bg-blue-600 text-white">Softaculous Auto Installer</td>
                                        <td className="py-4 px-6 border-b text-center"><i className="far fa-check-circle" /></td>
                                        <td className="py-4 px-6 border-b text-center"><i className="far fa-check-circle" /></td>
                                        <td className="py-4 px-6 border-b text-center"><i className="far fa-check-circle" /></td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 bg-white">
                                        <td className="py-4 px-6 border-b text-left font-semibold bg-blue-600 text-white">Robust Apache Server</td>
                                        <td className="py-4 px-6 border-b text-center"><i className="far fa-check-circle" /></td>
                                        <td className="py-4 px-6 border-b text-center"><i className="far fa-check-circle" /></td>
                                        <td className="py-4 px-6 border-b text-center"><i className="far fa-check-circle" /></td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 bg-white">
                                        <td className="py-4 px-6 border-b text-left font-semibold bg-blue-600 text-white">Site Builder</td>
                                        <td className="py-4 px-6 border-b text-center"><i className="far fa-check-circle" /></td>
                                        <td className="py-4 px-6 border-b text-center"><i className="far fa-check-circle" /></td>
                                        <td className="py-4 px-6 border-b text-center"><i className="far fa-check-circle" /></td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 bg-white">
                                        <td className="py-4 px-6 border-b text-left font-semibold bg-blue-600 text-white">Firewall & DDoS Protection</td>
                                        <td className="py-4 px-6 border-b text-center"><i className="far fa-check-circle" /></td>
                                        <td className="py-4 px-6 border-b text-center"><i className="far fa-check-circle" /></td>
                                        <td className="py-4 px-6 border-b text-center"><i className="far fa-check-circle" /></td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 bg-white">
                                        <td className="py-4 px-6 border-b text-left font-semibold bg-blue-600 text-white">Email Accounts</td>
                                        <td className="py-4 px-6 border-b text-center">20</td>
                                        <td className="py-4 px-6 border-b text-center">75</td>
                                        <td className="py-4 px-6 border-b text-center">Unlimited</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 bg-white">
                                        <td className="py-4 px-6 border-b text-left font-semibold bg-blue-600 text-white">Sub Domains</td>
                                        <td className="py-4 px-6 border-b text-center">Unlimited</td>
                                        <td className="py-4 px-6 border-b text-center">Unlimited</td>
                                        <td className="py-4 px-6 border-b text-center">Unlimited</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 bg-white">
                                        <td className="py-4 px-6 border-b text-left font-semibold bg-blue-600 text-white">MySQL Databases</td>
                                        <td className="py-4 px-6 border-b text-center">10</td>
                                        <td className="py-4 px-6 border-b text-center">50</td>
                                        <td className="py-4 px-6 border-b text-center">Unlimited</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 bg-white">
                                        <td className="py-4 px-6 border-b text-left font-semibold bg-blue-600 text-white">MultiPHP Ready (5.6/7.3)</td>
                                        <td className="py-4 px-6 border-b text-center"><i className="far fa-check-circle" /></td>
                                        <td className="py-4 px-6 border-b text-center"><i className="far fa-check-circle" /></td>
                                        <td className="py-4 px-6 border-b text-center"><i className="far fa-check-circle" /></td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 bg-white">
                                        <td className="py-4 px-6 border-b text-left font-semibold bg-blue-600 text-white">IonCube, Mbstring, SOAP</td>
                                        <td className="py-4 px-6 border-b text-center"><i className="far fa-check-circle" /></td>
                                        <td className="py-4 px-6 border-b text-center"><i className="far fa-check-circle" /></td>
                                        <td className="py-4 px-6 border-b text-center"><i className="far fa-check-circle" /></td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 bg-white">
                                        <td className="py-4 px-6 border-b text-left font-semibold bg-blue-600 text-white">Zend, cURL, Graphics Library</td>
                                        <td className="py-4 px-6 border-b text-center"><i className="far fa-check-circle" /></td>
                                        <td className="py-4 px-6 border-b text-center"><i className="far fa-check-circle" /></td>
                                        <td className="py-4 px-6 border-b text-center"><i className="far fa-check-circle" /></td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 bg-white">
                                        <td className="py-4 px-6 border-b text-left font-semibold bg-blue-600 text-white">Email i/o Spam Filter</td>
                                        <td className="py-4 px-6 border-b text-center"><i className="far fa-check-circle" /></td>
                                        <td className="py-4 px-6 border-b text-center"><i className="far fa-check-circle" /></td>
                                        <td className="py-4 px-6 border-b text-center"><i className="far fa-check-circle" /></td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 bg-white">
                                        <td className="py-4 px-6 border-b text-left font-semibold bg-blue-600 text-white">Attracta SEO Tools</td>
                                        <td className="py-4 px-6 border-b text-center"><i className="far fa-check-circle" /></td>
                                        <td className="py-4 px-6 border-b text-center"><i className="far fa-check-circle" /></td>
                                        <td className="py-4 px-6 border-b text-center"><i className="far fa-check-circle" /></td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 bg-white">
                                        <td className="py-4 px-6 border-b text-left font-semibold bg-blue-600 text-white">Cloudflare CDN Feature</td>
                                        <td className="py-4 px-6 border-b text-center"><i className="far fa-check-circle" /></td>
                                        <td className="py-4 px-6 border-b text-center"><i className="far fa-check-circle" /></td>
                                        <td className="py-4 px-6 border-b text-center"><i className="far fa-check-circle" /></td>
                                    </tr>

                                </>
                            )}
                            <tr className="  bg-gray-100 ">
                                <td className=" py-4 px-6 border-b text-left bg-gray-100  font-semibold  text-black"></td>
                                <td className="hover:bg-gray-200 py-4 px-6 border-b text-center"><button className="border-2 mx-auto flex border-solid border-blue-600 hover:border-blue-500 bg-blue-600 hover:bg-blue-500 text-white rounded py-2 px-4 mt-6 mb-2 transition-colors duration-300">Default</button>
                                </td>
                                <td className="hover:bg-gray-200 py-4 px-6 border-b text-center"><button className="border-2 mx-auto flex border-solid border-blue-600 hover:border-blue-500 bg-blue-600 hover:bg-blue-500 text-white rounded py-2 px-4 mt-6 mb-2 transition-colors duration-300">Default</button>
                                </td>
                                <td className="hover:bg-gray-200 py-4 px-6 border-b text-center"><button className="border-2 mx-auto flex border-solid border-blue-600 hover:border-blue-500 bg-blue-600 hover:bg-blue-500 text-white rounded py-2 px-4 mt-6 mb-2 transition-colors duration-300">Default</button>
                                </td>
                            </tr>
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
            </div>
        </animated.div >

    )
}

export default TableComparison