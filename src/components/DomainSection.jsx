import React, { useRef, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import domain from '../assets/domain-icon.svg'
import eSmsCn from "../assets/eSmsCn.png";
const DomainSection = () => {
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
        <div >

            <animated.div style={fadeInSpring}>
                <section className="dark:bg-gray-900s img-testimonial ">
                    <div className=" h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.35)] bg-fixed">

                        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-28 lg:px-6 parent-domain">
                            <div className="mx-auto max-w-screen-md sm:text-center">
                                <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-white sm:text-4xl dark:text-white">It All Starts With A Great Domain Name...
                                </h2>
                                <p className="mx-auto mb-4 max-w-2xl font-light text-white md:mb-8 sm:text-xl dark:text-gray-400">Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.</p>
                                <form action="https://billing.netcols.com/cart.php?a=add&domain=register" method="post">
                                    <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                                        <div className="relative w-full">
                                            <label htmlFor="email" className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Domain Name</label>
                                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                                <img width='24px' src={domain} />
                                            </div>
                                            <input className="block p-3 pl-10 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Find And Purchase A Domain Name" type="text" id="text" required />
                                        </div>
                                        <div className='domain-btn-div'>
                                            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white btn-domain font-semibold transition duration-300 ease-in-out py-3 w-full" 
                                            >Get Now</button>
                                        </div>
                                    </div>
                                    <div className="mx-auto max-w-screen-sm text-base text-right font-semibold text-white newsletter-form-footer dark:text-white">.COM only $9.45.NET only $11.25</div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </animated.div >
        </div >
    )
}

export default DomainSection