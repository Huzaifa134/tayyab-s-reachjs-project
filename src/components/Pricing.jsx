import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';

const Pricing = () => {
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
        <div className='background-imgss'>
            <div className='h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.35)] bg-fixed' >
                <ScrollToView offset={200}>
                    <section className="dark:bg-gray-900 pricing-padding-less" style={{padding:"3rem 0px"}}>
                        <div className="py-4 px-6 mx-auto max-w-screen-xl lg:py-20  mb-4">
                            <div className="price-home mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white dark:text-white">Designed for business teams like yours</h2>
                                <p className="mb-5 font-light text-gray-300 sm:text-xl dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
                            </div>
                            <div className="xvz" >
                                {/* Pricing Card */}
                                <div className="cards flex flex-col text-center text-gray-900 bg-white rounded-lg shadow dark:border-gray-600  dark:bg-gray-800 dark:text-white">
                                    <h3 className="mb-2 text-2xl font-semibold">Stater</h3>
                                    <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Best option for Personal use</p>
                                    <div className="flex justify-center items-baseline my-8">
                                        <span className="mr-2 text-5xl font-extrabold">$29</span>
                                        <span className="text-gray-500 dark:text-gray-400">/month</span>
                                    </div>
                                    {/* List */}
                                    <ul role="list" className="mb-14 space-y-4 text-left">
                                        <li className="flex items-center space-x-3">
                                            {/* Icon */}
                                            <svg className="flex-shrink-0 w-5 h-5 text-black dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                                            <span>Individual configuration</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            {/* Icon */}
                                            <svg className="flex-shrink-0 w-5 h-5 text-black dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                                            <span>No setup, or hidden fees</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            {/* Icon */}
                                            <svg className="flex-shrink-0 w-5 h-5 text-black dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                                            <span>Team size: <span className="font-semibold">1 developer</span></span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            {/* Icon */}
                                            <svg className="flex-shrink-0 w-5 h-5 text-black dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                                            <span>Premium support: <span className="font-semibold">6 months</span></span>
                                        </li>


                                    </ul>
                                    <a href="#" className="get-start-btn text-white bg-black font-medium rounded-lg text-sm px-5 py-2.5 text-center">Get started</a>
                                    
                                </div>
                                {/* Pricing Card */}
                                <div className="cards flex flex-col text-center text-gray-900 bg-white rounded-lg shadow dark:border-gray-600  dark:bg-gray-800 dark:text-white">
                                    <h3 className="mb-2 text-2xl font-semibold">Company</h3>
                                    <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Best option for Bigger Project</p>
                                    <div className="flex justify-center items-baseline my-8">
                                        <span className="mr-2 text-5xl font-extrabold">$99</span>
                                        <span className="text-gray-500 dark:text-gray-400">/month</span>
                                    </div>
                                    {/* List */}
                                    <ul role="list" className="mb-14 space-y-4 text-left">
                                        <li className="flex items-center space-x-3">
                                            {/* Icon */}
                                            <svg className="flex-shrink-0 w-5 h-5 text-black dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                                            <span>Individual configuration</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            {/* Icon */}
                                            <svg className="flex-shrink-0 w-5 h-5 text-black dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                                            <span>No setup, or hidden fees</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            {/* Icon */}
                                            <svg className="flex-shrink-0 w-5 h-5 text-black dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                                            <span>Team size: <span className="font-semibold">1 developer</span></span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            {/* Icon */}
                                            <svg className="flex-shrink-0 w-5 h-5 text-black dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                                            <span>Premium support: <span className="font-semibold">6 months</span></span>
                                        </li>


                                    </ul>
                                    <a href="#" className="get-start-btn text-white bg-black font-medium rounded-lg text-sm px-5 py-2.5 text-center">Get started</a>
                                    
                                </div>
                                {/* Pricing Card */}
                                <div className="cards flex flex-col text-center text-gray-900 bg-white rounded-lg shadow dark:border-gray-600  dark:bg-gray-800 dark:text-white">
                                    <h3 className="mb-2 text-2xl font-semibold">EnterPrise</h3>
                                    <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Best option for Corporate Project</p>
                                    <div className="flex justify-center items-baseline my-8">
                                        <span className="mr-2 text-5xl font-extrabold">$499</span>
                                        <span className="text-gray-500 dark:text-gray-400">/month</span>
                                    </div>
                                    {/* List */}
                                    <ul role="list" className="mb-14 space-y-4 text-left">
                                        <li className="flex items-center space-x-3">
                                            {/* Icon */}
                                            <svg className="flex-shrink-0 w-5 h-5 text-black dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                                            <span>Individual configuration</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            {/* Icon */}
                                            <svg className="flex-shrink-0 w-5 h-5 text-black dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                                            <span>No setup, or hidden fees</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            {/* Icon */}
                                            <svg className="flex-shrink-0 w-5 h-5 text-black dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                                            <span>Team size: <span className="font-semibold">1 developer</span></span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            {/* Icon */}
                                            <svg className="flex-shrink-0 w-5 h-5 text-black dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                                            <span>Premium support: <span className="font-semibold">6 months</span></span>
                                        </li>


                                    </ul>
                                    <a href="#" className="get-start-btn text-white bg-black font-medium rounded-lg text-sm px-5 py-2.5 text-center">Get started</a>
                                    
                                </div>

                                
                            </div>
                        </div>
                    </section>

                </ScrollToView>
            </div>
        </div >
    )
}

export default Pricing