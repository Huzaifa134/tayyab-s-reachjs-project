import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import rightlayer from "../assets/right-layer.jpg";
// import invisiblerigh from "../assets/invisible-right.png";
import rotateimg  from "../assets/rotateimg.png";

const FAQ = () => {

    const faqData = [
        {
            question: "What do you mean by 'Figma assets'?",
            answer: "You will have access to download the full Figma project including all of the pages, the components, responsive pages, and also the icons, illustrations, and images included in the screens."
        },
        {
            question: "What does 'lifetime access' exactly mean?",
            answer: "Once you have purchased either the design, code, or both packages, you will have access to all of the future updates based on the roadmap, free of charge."
        },
        {
            question: "What do you mean by 'Figma assets'?",
            answer: "You will have access to download the full Figma project including all of the pages, the components, responsive pages, and also the icons, illustrations, and images included in the screens."
        },
        {
            question: "What does 'lifetime access' exactly mean?",
            answer: "Once you have purchased either the design, code, or both packages, you will have access to all of the future updates based on the roadmap, free of charge."
        },
        {
            question: "What do you mean by 'Figma assets'?",
            answer: "You will have access to download the full Figma project including all of the pages, the components, responsive pages, and also the icons, illustrations, and images included in the screens."
        },
        {
            question: "What does 'lifetime access' exactly mean?",
            answer: "Once you have purchased either the design, code, or both packages, you will have access to all of the future updates based on the roadmap, free of charge."
        },
        // Add more FAQ items as needed
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    const springProps = useSpring({
        height: openIndex !== null ? 'auto' : 0,
        opacity: openIndex !== null ? 1 : 0,
    });
    return (
        <div>
            <section className="faq-div py-5">
                {/* <div className="rotate-img">
                    <img src={rotateimg} />
                </div> */}
                <div className=" py-2 px-4 mx-auto max-w-screen-xl sm:py-8 lg:px-44">
                    {/* <h2 className="faq-heading mb-4 text-3xl tracking-tight font-extrabold text-center ">Frequently Asked Questions</h2> */}
                    <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-700 text-center faq-heading">Frequently Asked Questions</h1> 
                    
                    <div className="grid pt-4 text-left border-gray-200 md:gap-6 dark:border-gray-700 md:grid-cols-2 ">
                        {faqData.map((faq, index) => (
                            <div key={index} className="mb-4 border-b">
                                <h3
                                    className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white cursor-pointer"
                                    onClick={() => toggleAccordion(index)}
                                >
                                    <svg
                                        className={`flex-shrink-0 mr-2 w-5 h-5 ${openIndex === index ? 'text-primary-600' : 'text-gray-500'} dark:text-gray-400`}
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                                    </svg>
                                    {faq.question}
                                </h3>
                                <animated.div style={springProps}>

                                    {openIndex === index && <p className="text-gray-500 border-b dark:text-gray-400">{faq.answer}</p>}
                                </animated.div>

                            </div>
                        ))}
                    </div>
                </div>
                {/* <div className='right-layer'>
                    <img src={rightlayer} alt="" />
                </div> */}
            </section>
        </div>
    );
};

export default FAQ;
